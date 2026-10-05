import * as THREE from "./assets/three.module.js";
import { buildShop, CATALOG } from "./gallery.js";
import { optimize } from "./optimize.js";
import {
  instanceRepeatedItems,
  instanceOwner,
  showItem,
  prepareInspectionClone,
} from "./instances.js";
import { createShopEnvironment, lightShop } from "./lighting.js";
import { ZONES, positionAllowed } from "./navigation.js";
import { TRIP_ART, sourceUrl } from "./trip-art.js";
import { TEXTURE_SOURCES } from "./texture-sources.js";
import { SETTINGS } from "./settings.js";
import { createBookReader } from "./book-reader.js";

const $ = (id) => document.getElementById(id);
const canvas = $("world");
const dialogs = [...document.querySelectorAll("dialog")];
const veil = $("travel-veil"),
  readerDialog = $("book-reader");
// The platform feed pauses works that are off screen.
let hostActive = true;
addEventListener("message", (event) => {
  if (event.source !== parent || event.data?.type !== "platform:visibility")
    return;
  hostActive = Boolean(event.data.active);
  syncRunning();
});
if (parent !== window) parent.postMessage({ type: "platform:hello" }, "*");
const keys = new Set(),
  pointer = new THREE.Vector2(0, 0),
  ray = new THREE.Raycaster();
let world,
  camera,
  renderer,
  inspectRenderer,
  inspectScene,
  inspectCamera,
  held = null,
  heldClone = null,
  hovered = null,
  outline,
  previousTime = 0,
  lastPick = 0;
let yaw = -0.167,
  pitch = 0.073,
  drag = null,
  moved = false,
  joystick = { x: 0, y: 0 },
  touchMoveId = null,
  transition = null,
  inspecting = false,
  lookPointers = new Map(),
  pinchDistance = 0,
  zoom = 1;
const inspectOrbit = { yaw: 0.36, pitch: 0.16 };
let objects = [],
  colliders = [],
  objectById = new Map(),
  lastFocused = null;
let toastTimer;
let environmentTarget, shopSun;
let mobiles = [],
  personalObjects = [];
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
let pickSignature = "";
// The loop only runs while the shop is on screen; `clock` advances with it so
// the hanging paper resumes where it stopped instead of skipping ahead.
let started = false,
  frame = 0,
  clock = 0,
  renderedView = "",
  inspectDirty = false,
  inspectCompiling = false;
// Long setup is split into short tasks so neighbouring apps stay responsive.
let sliceStart = performance.now();
// A plain task (not scheduler.yield, whose continuations outrank rendering)
// lets the browser paint between slices.
const yieldTask = () => new Promise((resolve) => setTimeout(resolve, 0));
async function breathe() {
  if (performance.now() - sliceStart < 12) return;
  await yieldTask();
  sliceStart = performance.now();
}
const toast = (message) => {
  $("toast").textContent = message;
  $("toast").classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => $("toast").classList.remove("visible"), 2500);
};
function isModal() {
  return dialogs.some((d) => d.open);
}
function setCamera() {
  camera.rotation.set(pitch, yaw, 0, "YXZ");
}
function clearKeys() {
  keys.clear();
  joystick = { x: 0, y: 0 };
  $("stick").style.transform = "";
  drag = null;
}
async function init() {
  try {
    await yieldTask();
    renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      powerPreference: "high-performance",
    });
    quality.max = quality.ratio = Math.min(
      devicePixelRatio,
      SETTINGS.maxPixelRatio,
    );
    renderer.setPixelRatio(quality.ratio);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.03;
    world = new THREE.Scene();
    world.background = new THREE.Color("#3b4438");
    world.fog = new THREE.Fog("#7d8271", 16, 30);
    camera = new THREE.PerspectiveCamera(
      62,
      innerWidth / innerHeight,
      0.04,
      40,
    );
    camera.position.set(-0.84, 1.67, 4.85);
    setCamera();
    await yieldTask();
    const sources = TEXTURE_SOURCES;
    const loader = new THREE.TextureLoader();
    const bitmaps = new THREE.ImageBitmapLoader().setOptions({
        imageOrientation: "flipY",
        premultiplyAlpha: "none",
      }),
      flips = bitmapsFlip();
    const textures = {};
    let loaded = 0;
    await Promise.all(
      sources.map(async ([key, path, gpuOnly]) => {
        if (gpuOnly && (await flips)) {
          // Pre-flipped bitmap: same orientation as a flipY image upload.
          textures[key] = new THREE.Texture(await bitmaps.loadAsync(path));
          textures[key].flipY = false;
          textures[key].needsUpdate = true;
        } else textures[key] = await loader.loadAsync(path);
        textures[key].colorSpace = THREE.SRGBColorSpace;
        if (key.startsWith("art-"))
          textures[key].userData.tripArtwork =
            TRIP_ART[Number(key.slice(4))].photo;
        if (key === "mobiles") textures[key].userData.tripOrnaments = true;
        textures[key].anisotropy = Math.min(
          8,
          renderer.capabilities.getMaxAnisotropy(),
        );
        $("load-bar").style.width = `${(++loaded / sources.length) * 75}%`;
      }),
    );
    await yieldTask();
    sliceStart = performance.now();
    const shop = await buildShop(textures, breathe);
    objects = shop.objects;
    colliders = shop.colliders;
    mobiles = shop.mobiles;
    personalObjects = shop.personal;
    objectById = new Map(objects.map((o) => [o.userData.id, o]));
    await optimize(shop.room, objects, breathe);
    const batching = await instanceRepeatedItems(shop.room, objects, breathe);
    world.add(shop.room);
    await yieldTask();
    environmentTarget = createShopEnvironment(renderer);
    world.environment = environmentTarget.texture;
    world.environmentIntensity = 0.39;
    shopSun = lightShop(world);
    outline = new THREE.Box3Helper(
      new THREE.Box3(),
      new THREE.Color("#fff3bc"),
    );
    outline.material.transparent = true;
    outline.material.opacity = 0.72;
    outline.visible = false;
    world.add(outline);
    setupInspector();
    setupCollection();
    resize();
    // Upload textures a few at a time, then compile shaders off the main
    // thread, so the first frame no longer blocks for seconds.
    await yieldTask();
    sliceStart = performance.now();
    const maps = new Set();
    world.traverse((o) => {
      const map = o.material?.map;
      if (!map) return;
      maps.add(map);
      if (o.material.alphaTest > 0) prepareAlphaMask(map);
    });
    for (const map of maps) {
      renderer.initTexture(map);
      await breathe();
    }
    const shadowShaders = warmShadowShaders();
    await Promise.all([renderer.compileAsync(world, camera), shadowShaders]);
    // Upload geometry a slice at a time behind the loading screen, so the
    // first full frame does not stall on thousands of buffer uploads.
    const meshes = [];
    world.traverse((o) => o.isMesh && o.visible && meshes.push(o));
    const slice = Math.ceil(meshes.length / 6);
    shopSun.shadow.autoUpdate = false;
    for (let i = 0; i < meshes.length; i += slice) {
      await yieldTask();
      meshes.forEach((m, j) => (m.visible = j >= i && j < i + slice));
      shopSun.shadow.needsUpdate = true;
      renderer.render(world, camera);
    }
    meshes.forEach((m) => (m.visible = true));
    await yieldTask();
    $("load-bar").style.width = "100%";
    // Pose the paper as the loop will, so resuming from this still frame is seamless.
    swayMobiles();
    shopSun.shadow.needsUpdate = true;
    renderer.render(world, camera);
    (await shadowShaders)();
    $("loading").classList.add("done");
    setTimeout(() => ($("loading").hidden = true), 700);
    document.body.dataset.ready = "true";
    if (parent !== window) parent.postMessage({ type: "platform:ready" }, "*");
    window.shopStatus = {
      objects: objects.length,
      types: Object.keys(CATALOG).length,
      sourceImages: sources.length,
      personalTypes: personalObjects.length,
      sculptedObjects: shop.crafted.length,
      hangingObjects: mobiles.length,
      tripRelatedObjects: shop.tripRelated.length,
      tripRelatedPercent: Math.round(
        (shop.tripRelated.length / objects.length) * 100,
      ),
      artworks: TRIP_ART.length,
      postcardWall: shop.postcardWall.length,
      uniqueWallArtworks: new Set(
        shop.postcardWall.map((o) => o.userData.definition.artIndex),
      ).size,
      ...batching,
    };
    started = true;
    syncRunning();
  } catch (err) {
    console.error("Shop initialization failed", err);
    $("load-status").textContent =
      "The shop could not open. Use a browser with WebGL 2 and reload.";
    const retry = document.createElement("button");
    retry.className = "primary-button";
    retry.style.width = "180px";
    retry.textContent = "Reload";
    retry.onclick = () => location.reload();
    $("loading").append(retry);
  }
}
// ImageBitmaps decode off the main thread. Use them only where the browser
// honours imageOrientation for fetched images (otherwise textures would flip).
async function bitmapsFlip() {
  try {
    const c = document.createElement("canvas");
    c.width = 1;
    c.height = 2;
    const ctx = c.getContext("2d", { willReadFrequently: true });
    ctx.fillStyle = "#f00";
    ctx.fillRect(0, 0, 1, 1);
    ctx.fillStyle = "#00f";
    ctx.fillRect(0, 1, 1, 1);
    const blob = await new Promise((resolve) => c.toBlob(resolve));
    const bitmap = await createImageBitmap(blob, { imageOrientation: "flipY" });
    ctx.clearRect(0, 0, 1, 2);
    ctx.drawImage(bitmap, 0, 0);
    bitmap.close();
    return ctx.getImageData(0, 0, 1, 1).data[2] > 128;
  } catch {
    return false;
  }
}
// The shadow pass compiles its depth shaders on first use, which compileAsync
// does not cover. Stand-ins compiled under the same conditions (render target,
// no fog, same lights) let it find them ready. Resolves to a cleanup function.
function warmShadowShaders() {
  const sides = {
    [THREE.FrontSide]: THREE.BackSide,
    [THREE.BackSide]: THREE.FrontSide,
    [THREE.DoubleSide]: THREE.DoubleSide,
  };
  const standIns = new THREE.Group(),
    seen = new Set();
  world.traverse((o) => {
    const m = o.material;
    if (!o.isMesh || !o.castShadow || Array.isArray(m)) return;
    if (!o.layers.test(camera.layers)) return;
    const side = m.shadowSide ?? sides[m.side],
      key = [o.isInstancedMesh, o.receiveShadow, side, m.map?.channel];
    if (seen.has(key + m.alphaTest)) return;
    seen.add(key + m.alphaTest);
    const depth = new THREE.MeshDepthMaterial({
      depthPacking: THREE.RGBADepthPacking,
      side,
      map: m.map,
      alphaTest: m.alphaTest,
    });
    const standIn = o.isInstancedMesh
      ? new THREE.InstancedMesh(o.geometry, depth, 1)
      : new THREE.Mesh(o.geometry, depth);
    standIn.receiveShadow = o.receiveShadow;
    standIns.add(standIn);
  });
  const target = new THREE.WebGLRenderTarget(1, 1),
    fog = world.fog;
  renderer.setRenderTarget(target);
  world.fog = null;
  const ready = renderer.compileAsync(standIns, camera, world);
  world.fog = fog;
  renderer.setRenderTarget(null);
  // Dispose only after the real shadow pass holds the programs.
  return ready.then(() => () => {
    target.dispose();
    standIns.traverse((o) => o.material?.dispose());
  });
}
// The close-up view gets its own WebGL context only once something is inspected.
function inspectorRenderer() {
  if (inspectRenderer) return inspectRenderer;
  inspectRenderer = new THREE.WebGLRenderer({
    canvas: $("object-view"),
    antialias: true,
    alpha: true,
  });
  inspectRenderer.setPixelRatio(quality.max);
  inspectRenderer.setClearColor(0x000000, 0);
  inspectRenderer.outputColorSpace = THREE.SRGBColorSpace;
  inspectRenderer.toneMapping = THREE.ACESFilmicToneMapping;
  inspectRenderer.toneMappingExposure = 1.12;
  inspectRenderer.setSize(innerWidth, innerHeight, false);
  return inspectRenderer;
}
function setupInspector() {
  inspectScene = new THREE.Scene();
  inspectScene.environment = environmentTarget.texture;
  inspectScene.environmentIntensity = 0.58;
  inspectCamera = new THREE.PerspectiveCamera(
    36,
    innerWidth / innerHeight,
    0.01,
    50,
  );
  inspectCamera.position.set(0, 0, 3.2);
  inspectScene.add(new THREE.HemisphereLight("#fff2db", "#997c5c", 2.15));
  const key = new THREE.DirectionalLight("#ffe2b6", 3);
  key.position.set(-2, 4, 5);
  inspectScene.add(key);
  const rim = new THREE.DirectionalLight("#ffe9c8", 1.8);
  rim.position.set(3, 2, -2);
  inspectScene.add(rim);
}
function resize() {
  if (!renderer) return;
  const w = innerWidth,
    h = innerHeight;
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  quality.skip = 20;
  renderedView = "";
  if (inspectCamera) {
    inspectRenderer?.setSize(w, h, false);
    inspectCamera.aspect = w / h;
    inspectCamera.updateProjectionMatrix();
    if (heldClone) positionInspection();
  }
  // Resizing clears the canvas; a paused shop still shows a complete frame.
  if (started) {
    inspectDirty = true;
    if (!frame) requestAnimationFrame(renderStill);
  }
}
addEventListener("resize", resize);
function renderStill() {
  if (frame || !started || readerDialog.open) return;
  if (inspecting) renderInspector();
  else renderer.render(world, camera);
}
function owner(o) {
  let p = o;
  while (p) {
    if (objectById.has(p.userData.id)) return p;
    p = p.parent;
  }
  return null;
}
// One half-resolution alpha mask per image, shared by every atlas clone. It is
// decoded off the main thread during loading, so the first hover never stalls.
const alphaMasks = new Map();
function readAlpha(source, width, height) {
  const c = document.createElement("canvas");
  c.width = width;
  c.height = height;
  const ctx = c.getContext("2d", { willReadFrequently: true });
  ctx.drawImage(source, 0, 0, width, height);
  return ctx.getImageData(0, 0, width, height);
}
function maskSize(map) {
  return [Math.ceil(map.image.width / 2), Math.ceil(map.image.height / 2)];
}
function prepareAlphaMask(map) {
  const id = map.source.uuid;
  if (alphaMasks.has(id)) return;
  const [width, height] = maskSize(map);
  alphaMasks.set(id, null);
  createImageBitmap(map.image, { resizeWidth: width, resizeHeight: height })
    .then((bitmap) => {
      if (!alphaMasks.get(id))
        alphaMasks.set(id, readAlpha(bitmap, width, height));
      bitmap.close();
    })
    .catch(() => {});
}
function alphaMask(map) {
  let mask = alphaMasks.get(map.source.uuid);
  if (!mask) {
    mask = readAlpha(map.image, ...maskSize(map));
    alphaMasks.set(map.source.uuid, mask);
  }
  return mask;
}
function pick(p = pointer) {
  if (!camera) return null;
  ray.setFromCamera(p, camera);
  const hits = ray.intersectObject(world, true);
  for (const hit of hits) {
    if (!hit.object.isMesh || hit.object === outline) continue;
    const material = hit.object.material;
    if (material.transparent && material.opacity < 0.5) continue;
    const o = instanceOwner(hit) || owner(hit.object);
    if (o && !o.visible) continue;
    if (hit.object.material.alphaTest > 0 && hit.uv) {
      const map = hit.object.material.map;
      if (map?.image) {
        const uv = hit.uv.clone();
        map.transformUv(uv);
        const data = alphaMask(map);
        const x = Math.min(
            data.width - 1,
            Math.max(0, Math.floor(uv.x * data.width)),
          ),
          y = Math.min(
            data.height - 1,
            Math.max(0, Math.floor(uv.y * data.height)),
          );
        if (data.data[(y * data.width + x) * 4 + 3] < 100) continue;
      }
    }
    if (o) return o;
    return null;
  }
  return null;
}
function updateHover() {
  const obj = pick();
  const changed = obj !== hovered;
  hovered = obj;
  if (obj) {
    outline.box.setFromObject(obj);
    outline.visible = true;
    if (changed) {
      $("target-name").textContent = obj.userData.definition.name;
      $("target-action").textContent = obj.userData.definition.reader
        ? "Open book · E"
        : "Pick up · E";
    }
    $("target").hidden = false;
    canvas.style.cursor = obj.userData.definition.reader ? "pointer" : "grab";
  } else {
    outline.visible = false;
    $("target").hidden = true;
    canvas.style.cursor = drag ? "grabbing" : "default";
  }
}
function positionInspection() {
  if (!heldClone) return;
  const mobile = innerWidth < 700;
  heldClone.position.x = mobile ? 0 : -0.46;
  heldClone.position.y = mobile ? 0.27 : 0;
  heldClone.scale.setScalar(zoom);
  inspectCamera.position.z = mobile ? 4.5 : 3.2;
}
function inspect(obj) {
  if (!obj || inspecting || !inspectScene) return;
  if (obj.userData.definition.reader) {
    openBookReader(obj);
    return;
  }
  if ($("collection").open) $("collection").close();
  held = obj;
  showItem(held, false);
  hovered = null;
  outline.visible = false;
  $("target").hidden = true;
  clearKeys();
  transition = null;
  const def = obj.userData.definition;
  const clone = prepareInspectionClone(obj.clone(true));
  clone.visible = true;
  clone.position.set(0, 0, 0);
  clone.rotation.set(0, 0, 0);
  clone.scale.setScalar(1);
  clone.updateMatrixWorld(true);
  const bounds = new THREE.Box3().setFromObject(clone);
  const center = bounds.getCenter(new THREE.Vector3()),
    size = bounds.getSize(new THREE.Vector3());
  clone.position.sub(center);
  const normalization = 1.25 / Math.max(size.x, size.y, size.z);
  const pivot = new THREE.Group();
  const normal = new THREE.Group();
  normal.scale.setScalar(normalization);
  normal.add(clone);
  pivot.add(normal);
  heldClone = pivot;
  inspectOrbit.yaw = 0.3;
  inspectOrbit.pitch = 0.12;
  zoom = 1;
  inspectScene.add(pivot);
  positionInspection();
  // Clear the previous object and compile new materials without blocking;
  // the souvenir appears as soon as its shaders are ready.
  const view = inspectorRenderer();
  view.clear();
  inspectCompiling = true;
  view.compileAsync(inspectScene, inspectCamera).then(() => {
    if (heldClone !== pivot) return;
    inspectCompiling = false;
    invalidateInspector();
  });
  $("object-title").textContent = def.name;
  $("object-category").textContent = def.category;
  $("object-description").textContent = def.description;
  $("object-zone").textContent = def.zone;
  $("object-material").textContent = def.material;
  $("inspect-bottom-view").textContent =
    def.sculpted && def.kind !== "mug" ? "View back" : "View bottom";
  const related = !!(def.tripRelated || def.personal),
    sourcePanel = document.querySelector(".source-preview");
  sourcePanel.hidden = !related;
  $("object-origin").textContent = def.sculpted
    ? "Photo memories → Sculpted objects"
    : def.personal
      ? "Travel artwork · " + String(def.number).padStart(2, "0")
      : related
        ? "Your photo → " + (TRIP_ART[def.artIndex]?.style || "Travel illustration")
        : "Shop collection";
  $("object-origin").classList.toggle("expanded", !related);
  $("object-detail-note").textContent = def.sculpted
    ? "Shapes, colors, and details drawn from photographs. Rotate to see every side."
    : related
      ? "Made from your travel photographs. Compare with the original below."
      : "Ceramics and little objects selected for the shop.";
  if (related && def.sourcePhoto) {
    $("object-source").style.backgroundImage =
      `url('${sourceUrl(def.sourcePhoto)}')`;
    $("object-source").style.backgroundSize = "contain";
    $("object-source").style.backgroundPosition = "center";
  }
  if (shopSun) shopSun.shadow.needsUpdate = true;
  lastFocused = document.activeElement.closest("#collection")
    ? $("collection-btn")
    : document.activeElement;
  inspecting = true;
  $("inspector").showModal();
  $("close-inspect").focus();
}
function setupCollection() {
  const grid = $("collection-grid");
  const collection = Object.entries(CATALOG)
    .filter(([, d]) => d.personal)
    .sort(
      (a, b) =>
        Number(!!b[1].reader) - Number(!!a[1].reader) ||
        Number(!!b[1].sculpted) - Number(!!a[1].sculpted),
    );
  $("collection-count").textContent = collection.length;
  for (const [type, def] of collection) {
    const button = document.createElement("button");
    button.className =
      "collection-card" +
      (def.sculpted ? " sculpted" : "") +
      (def.reader ? " readable-book" : "");
    const image = document.createElement("img");
    image.src = def.preview || def.prototype;
    image.alt = `${def.name} · ${def.category}`;
    image.loading = "lazy";
    const caption = document.createElement("span");
    const category = document.createElement("small");
    category.textContent = `${def.reader ? "Open book" : String(def.number).padStart(2, "0")} / ${def.category}`;
    const title = document.createElement("strong");
    title.textContent = def.name;
    caption.append(category, title);
    button.append(image, caption);
    button.onclick = () =>
      inspect(personalObjects.find((o) => o.userData.type === type));
    grid.append(button);
  }
  $("collection-btn").onclick = () => openModal("collection");
}
const bookReader = createBookReader({
  dialog: $("book-reader"),
  frame: $("book-frame"),
  loading: $("reader-loading"),
  closeButton: $("close-reader"),
  collection: $("collection"),
  collectionButton: $("collection-btn"),
  fallbackFocus: canvas,
  beforeOpen() {
    clearKeys();
    transition = null;
    setVeil(0);
    hovered = null;
    outline.visible = false;
    $("target").hidden = true;
    // The book has its own page-turning loop; the shop sleeps behind it.
    stopLoop();
  },
  afterClose() {
    clearKeys();
    pickSignature = "";
    syncRunning();
  },
});
function openBookReader(obj) {
  bookReader.open(obj.userData.definition.reader);
}
function closeInspection() {
  if (!inspecting) return;
  inspecting = false;
  if (held) showItem(held, true);
  if (shopSun) shopSun.shadow.needsUpdate = true;
  if (heldClone) inspectScene.remove(heldClone);
  held = null;
  heldClone = null;
  pickSignature = "";
  lookPointers.clear();
  $("inspector").close();
  clearKeys();
  (lastFocused || canvas).focus({ preventScroll: true });
  syncRunning();
}
function invalidateInspector() {
  inspectDirty = true;
  syncRunning();
}
$("close-inspect").onclick = closeInspection;
$("inspector").addEventListener("cancel", (e) => {
  e.preventDefault();
  closeInspection();
});
function changeZoom(delta) {
  zoom = THREE.MathUtils.clamp(zoom + delta, 0.55, 1.9);
  positionInspection();
  invalidateInspector();
}
$("inspect-bottom-view").onclick = () => {
  const d = held?.userData.definition;
  const back = d?.sculpted && d.kind !== "mug";
  inspectOrbit.pitch = back ? 0.08 : -Math.PI / 2;
  inspectOrbit.yaw = back ? Math.PI : 0;
  invalidateInspector();
};
$("zoom-in").onclick = () => changeZoom(0.15);
$("zoom-out").onclick = () => changeZoom(-0.15);
$("reset-object").onclick = () => {
  inspectOrbit.yaw = 0.3;
  inspectOrbit.pitch = 0.12;
  zoom = 1;
  positionInspection();
  invalidateInspector();
};
const inspectCanvas = $("object-view");
inspectCanvas.addEventListener("pointerdown", (e) => {
  inspectCanvas.setPointerCapture(e.pointerId);
  lookPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  pinchDistance = 0;
});
inspectCanvas.addEventListener("pointermove", (e) => {
  if (!lookPointers.has(e.pointerId)) return;
  const old = lookPointers.get(e.pointerId);
  lookPointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
  if (lookPointers.size === 2) {
    const [a, b] = [...lookPointers.values()];
    const d = Math.hypot(a.x - b.x, a.y - b.y);
    if (pinchDistance) changeZoom((d - pinchDistance) * 0.007);
    pinchDistance = d;
  } else {
    inspectOrbit.yaw += (e.clientX - old.x) * 0.009;
    inspectOrbit.pitch = THREE.MathUtils.clamp(
      inspectOrbit.pitch + (e.clientY - old.y) * 0.009,
      -Math.PI,
      Math.PI,
    );
    invalidateInspector();
  }
});
for (const event of ["pointerup", "pointercancel"])
  inspectCanvas.addEventListener(event, (e) => {
    lookPointers.delete(e.pointerId);
    pinchDistance = 0;
  });
inspectCanvas.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    changeZoom(-e.deltaY * 0.001);
  },
  { passive: false },
);
function pointerPosition(e) {
  pointer.set(
    (e.clientX / innerWidth) * 2 - 1,
    (-e.clientY / innerHeight) * 2 + 1,
  );
}
canvas.addEventListener("pointerdown", (e) => {
  if (isModal()) return;
  canvas.focus({ preventScroll: true });
  canvas.setPointerCapture(e.pointerId);
  pointerPosition(e);
  drag = {
    x: e.clientX,
    y: e.clientY,
    startX: e.clientX,
    startY: e.clientY,
    id: e.pointerId,
  };
  moved = false;
  transition = null;
});
canvas.addEventListener("pointermove", (e) => {
  pointerPosition(e);
  if (!drag || e.pointerId !== drag.id) return;
  const dx = e.clientX - drag.x,
    dy = e.clientY - drag.y;
  if (Math.hypot(e.clientX - drag.startX, e.clientY - drag.startY) > 4)
    moved = true;
  if (moved) {
    yaw -= dx * 0.0032;
    pitch = THREE.MathUtils.clamp(pitch - dy * 0.0032, -1.35, 1.1);
    setCamera();
    $("target").hidden = true;
  }
  drag.x = e.clientX;
  drag.y = e.clientY;
});
canvas.addEventListener("pointerup", (e) => {
  if (!drag || drag.id !== e.pointerId) return;
  pointerPosition(e);
  if (!moved) {
    const obj = pick();
    if (obj) inspect(obj);
  }
  drag = null;
});
canvas.addEventListener("pointercancel", () => {
  drag = null;
});
canvas.addEventListener("contextmenu", (e) => e.preventDefault());
canvas.addEventListener("pointerleave", () => {
  if (!drag) pointer.set(0, 0);
});
const movementKeys = [
  "KeyW",
  "KeyA",
  "KeyS",
  "KeyD",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "KeyQ",
  "KeyR",
  "ShiftLeft",
  "ShiftRight",
];
addEventListener("keydown", (e) => {
  if (inspecting) {
    const actions = {
      ArrowLeft: () => (inspectOrbit.yaw -= 0.15),
      ArrowRight: () => (inspectOrbit.yaw += 0.15),
      ArrowUp: () => (inspectOrbit.pitch -= 0.15),
      ArrowDown: () => (inspectOrbit.pitch += 0.15),
      Equal: () => changeZoom(0.1),
      Minus: () => changeZoom(-0.1),
      Digit0: () => {
        $("reset-object").click();
      },
    };
    if (actions[e.code]) {
      e.preventDefault();
      actions[e.code]();
      invalidateInspector();
    }
    return;
  }
  if (isModal()) return;
  if (movementKeys.includes(e.code)) {
    e.preventDefault();
    keys.add(e.code);
    transition = null;
    pointer.set(0, 0);
  }
  if (e.code === "KeyE") {
    e.preventDefault();
    inspect(pick(new THREE.Vector2(0, 0)));
  }
  if (e.code === "KeyH") openModal("help");
});
addEventListener("keyup", (e) => keys.delete(e.code));
addEventListener("blur", clearKeys);
document.addEventListener("visibilitychange", () => {
  clearKeys();
  syncRunning();
});
function canStand(x, z) {
  return positionAllowed(x, z, colliders);
}

function movePlayer(dt) {
  let side =
    (keys.has("KeyD") ? 1 : 0) - (keys.has("KeyA") ? 1 : 0) + joystick.x;
  let forward =
    (keys.has("KeyW") || keys.has("ArrowUp") ? 1 : 0) -
    (keys.has("KeyS") || keys.has("ArrowDown") ? 1 : 0) -
    joystick.y;
  if (keys.has("ArrowLeft")) yaw += dt * 1.25;
  if (keys.has("ArrowRight")) yaw -= dt * 1.25;
  if (keys.has("KeyQ")) pitch += dt * 0.8;
  if (keys.has("KeyR")) pitch -= dt * 0.8;
  pitch = THREE.MathUtils.clamp(pitch, -1.35, 1.1);
  const length = Math.hypot(side, forward);
  if (length > 1) {
    side /= length;
    forward /= length;
  }
  const speed =
    (keys.has("ShiftLeft") ? SETTINGS.sprintSpeed : SETTINGS.walkingSpeed) * dt;
  const dx = (Math.cos(yaw) * side - Math.sin(yaw) * forward) * speed,
    dz = (-Math.sin(yaw) * side - Math.cos(yaw) * forward) * speed;
  if (canStand(camera.position.x + dx, camera.position.z))
    camera.position.x += dx;
  if (canStand(camera.position.x, camera.position.z + dz))
    camera.position.z += dz;
  setCamera();
}
const zones = ZONES;
function gotoZone(name) {
  const z = zones[name];
  clearKeys();
  const dest = new THREE.Vector3(...z.pos),
    target = new THREE.Vector3(...z.target),
    delta = target.clone().sub(dest);
  const newYaw = Math.atan2(-delta.x, -delta.z),
    newPitch = Math.atan2(delta.y, Math.hypot(delta.x, delta.z));
  transition = {
    from: camera.position.clone(),
    to: dest,
    yawFrom: yaw,
    yawTo: yaw + Math.atan2(Math.sin(newYaw - yaw), Math.cos(newYaw - yaw)),
    pitchFrom: pitch,
    pitchTo: newPitch,
    start: clock,
  };
  document
    .querySelectorAll("[data-zone]")
    .forEach((b) => b.classList.toggle("active", b.dataset.zone === name));
  $("place-title").textContent = z.title;
  $("place-copy").textContent = z.copy;
  document.querySelector(`[data-zone="${name}"]`)?.scrollIntoView({
    block: "nearest",
    inline: "nearest",
    behavior: "smooth",
  });
  pointer.set(0, 0);
  canvas.focus({ preventScroll: true });
}
document.querySelectorAll("[data-zone]").forEach(
  (b) =>
    (b.onclick = () => {
      if (camera) gotoZone(b.dataset.zone);
    }),
);
function openModal(id) {
  clearKeys();
  $(id).showModal();
}
for (const d of dialogs) d.addEventListener("close", syncRunning);
$("help-btn").onclick = () => openModal("help");
$("reference-btn").onclick = () => openModal("reference");
document
  .querySelectorAll("[data-close]")
  .forEach((b) => (b.onclick = () => $(b.dataset.close).close()));
for (const d of dialogs)
  d.addEventListener("click", (e) => {
    if (e.target === d && d.id !== "inspector") {
      const r = d.getBoundingClientRect();
      if (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      )
        d.close();
    }
  });
$("fullscreen-btn").onclick = async () => {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    toast("Fullscreen is unavailable in this browser.");
  }
};
const joy = $("joystick");
function updateJoystick(e) {
  const r = joy.getBoundingClientRect(),
    x = (e.clientX - r.left - r.width / 2) / 34,
    y = (e.clientY - r.top - r.height / 2) / 34,
    mag = Math.max(1, Math.hypot(x, y));
  joystick = { x: x / mag, y: y / mag };
  $("stick").style.transform =
    `translate(${joystick.x * 27}px,${joystick.y * 27}px)`;
  transition = null;
  pointer.set(0, 0);
}
joy.addEventListener("pointerdown", (e) => {
  joy.setPointerCapture(e.pointerId);
  touchMoveId = e.pointerId;
  updateJoystick(e);
});
joy.addEventListener("pointermove", (e) => {
  if (e.pointerId === touchMoveId) updateJoystick(e);
});
for (const ev of ["pointerup", "pointercancel"])
  joy.addEventListener(ev, () => {
    touchMoveId = null;
    joystick = { x: 0, y: 0 };
    $("stick").style.transform = "";
  });
$("touch-pick").onclick = () => {
  const o = pick(new THREE.Vector2(0, 0));
  if (o) inspect(o);
  else toast("Aim the center dot at a souvenir.");
};
function canRun() {
  return started && hostActive && !document.hidden && !readerDialog.open;
}
function syncRunning() {
  if (!canRun()) stopLoop();
  else if (!frame) frame = requestAnimationFrame(animate);
}
function stopLoop() {
  cancelAnimationFrame(frame);
  frame = 0;
  previousTime = 0;
  renderedView = "";
  quality.skip = 20;
}
function renderInspector() {
  if (!heldClone || inspectCompiling) return;
  inspectDirty = false;
  heldClone.rotation.set(inspectOrbit.pitch, inspectOrbit.yaw, 0, "YXZ");
  inspectRenderer.render(inspectScene, inspectCamera);
}
// Adaptive resolution: lower the pixel ratio while frames are sustainedly slow
// (below ~46 fps) and step back up once they keep a 60 fps pace again.
const quality = {
  max: 1,
  ratio: 1,
  skip: 20,
  deltas: [],
  calm: 0,
  raised: false,
  flips: 0,
};
function sampleFrame(delta) {
  if (quality.skip > 0) return quality.skip--;
  const q = quality,
    d = q.deltas;
  d.push(delta);
  if (d.length < 45) return;
  const mean = d.reduce((a, b) => a + b, 0) / d.length;
  d.length = 0;
  const target = 1000 / 60,
    floor = Math.max(0.75, q.max * 0.6);
  let ratio = q.ratio;
  if (mean > target * 1.3 && ratio > floor) {
    ratio = Math.max(floor, ratio * 0.85);
    if (q.raised) q.flips++;
    q.raised = false;
    q.calm = 0;
  } else if (mean < target * 1.08 && ratio < q.max && q.flips < 3) {
    if (++q.calm >= 4) {
      ratio = Math.min(q.max, ratio / 0.85);
      q.raised = true;
      q.calm = 0;
    }
  } else q.calm = 0;
  if (ratio === q.ratio) return;
  q.ratio = ratio;
  renderer.setPixelRatio(ratio);
  resize();
}
function setVeil(opacity) {
  const value = String(opacity);
  if (veil.style.opacity !== value) veil.style.opacity = value;
}
function swayMobiles() {
  if (reducedMotion) return;
  const ms = clock * 1000;
  mobiles.forEach((o, i) => {
    o.rotation.y =
      (o.userData.restY || 0) + Math.sin(ms * 0.00045 + i * 1.39) * 0.075;
    o.rotation.z =
      (o.userData.restZ || 0) + Math.sin(ms * 0.00065 + i * 0.93) * 0.023;
  });
}
function animate(time) {
  frame = 0;
  const delta = previousTime ? time - previousTime : 0;
  const dt = Math.min(delta / 1000, 0.05);
  previousTime = time;
  if (inspecting) {
    // The close-up only changes with input, so it renders on demand.
    if (inspectDirty) renderInspector();
    previousTime = 0;
    return;
  }
  // Dialogs cover the shop; it resumes when they close.
  if (isModal()) return stopLoop();
  frame = requestAnimationFrame(animate);
  if (delta) sampleFrame(delta);
  clock += dt;
  if (transition) {
    const t = THREE.MathUtils.clamp(
      ((clock - transition.start) * 1000) / 440,
      0,
      1,
    );
    setVeil(Math.sin(t * Math.PI));
    if (t >= 0.5 && !transition.arrived) {
      camera.position.copy(transition.to);
      yaw = transition.yawTo;
      pitch = transition.pitchTo;
      setCamera();
      transition.arrived = true;
      pickSignature = "";
    }
    if (t === 1) {
      transition = null;
      setVeil(0);
    }
  } else {
    setVeil(0);
    movePlayer(dt);
  }
  if (time - lastPick > 100 && !drag) {
    const signature = [
      pointer.x,
      pointer.y,
      camera.position.x,
      camera.position.z,
      pitch,
      yaw,
    ]
      .map((n) => n.toFixed(4))
      .join();
    if (signature !== pickSignature) {
      updateHover();
      pickSignature = signature;
    }
    lastPick = time;
  }
  swayMobiles();
  // With reduced motion nothing sways, so an unchanged view needs no new frame.
  if (reducedMotion) {
    const view = [
      camera.position.x,
      camera.position.z,
      yaw,
      pitch,
      outline.visible && hovered?.userData.id,
      shopSun.shadow.needsUpdate,
    ].join();
    if (view === renderedView) return;
    renderedView = view;
  }
  renderer.render(world, camera);
}
// Release both GPU contexts when the page goes away (e.g. swiped out of the feed).
addEventListener("pagehide", (event) => {
  started = false;
  stopLoop();
  for (const r of [renderer, inspectRenderer]) {
    r?.dispose();
    r?.forceContextLoss();
  }
  renderer = inspectRenderer = null;
  if (event.persisted)
    addEventListener("pageshow", () => location.reload(), { once: true });
});
init();
