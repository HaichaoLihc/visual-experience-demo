export const LAYER = 512;

// Every photograph is one square layer of a texture array, stretched to fit; the stream restores the
// aspect. assets/textures/ holds those layers ready-made (small WebPs) with each photograph's aspect and
// average colour, so the full photographs are only fetched when a story shows them large. A photograph
// without a ready-made layer (a new one, or one whose src changed) is still sized here from the original.
const prepared = fetch('./assets/textures/layers.json').then(r => (r.ok ? r.json() : {})).catch(() => ({}));

async function bitmap(src) {
  try {
    const response = await fetch(src);
    if (!response.ok) throw new Error(response.status);
    return await createImageBitmap(await response.blob());   // decoded off the main thread
  } catch {
    throw new Error(`Could not load photo: ${src}`);
  }
}

export async function loadTextures(gl, photos, onProgress) {
  const limit = gl.getParameter(gl.MAX_ARRAY_TEXTURE_LAYERS);
  if (photos.length > limit) throw new Error(`This device supports at most ${limit} photos; the catalog has ${photos.length}.`);
  const manifest = await prepared, ready = manifest.size === LAYER ? manifest.layers ?? {} : {};
  const arrTex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, arrTex);
  gl.texStorage3D(gl.TEXTURE_2D_ARRAY, 1 + Math.log2(LAYER), gl.RGBA8, LAYER, LAYER, photos.length);
  let scratch, ctx, tctx;
  const sizeHere = img => {
    if (!scratch) {
      scratch = document.createElement('canvas'); scratch.width = scratch.height = LAYER;
      ctx = scratch.getContext('2d');
      ctx.imageSmoothingQuality = 'high';
      const tiny = document.createElement('canvas'); tiny.width = tiny.height = 8;
      tctx = tiny.getContext('2d', { willReadFrequently: true });
    }
    ctx.clearRect(0, 0, LAYER, LAYER);
    ctx.drawImage(img, 0, 0, LAYER, LAYER); // stretched to the square layer
    tctx.drawImage(scratch, 0, 0, 8, 8);
    const px = tctx.getImageData(0, 0, 8, 8).data; let r = 0, g = 0, b = 0;
    for (let j = 0; j < px.length; j += 4) { r += px[j]; g += px[j + 1]; b += px[j + 2]; }
    return [r / 64 / 255, g / 64 / 255, b / 64 / 255];
  };
  let done = 0;
  const queue = photos.map((_, i) => i);
  const worker = async () => {
    while (queue.length) {
      const i = queue.shift(), p = photos[i], pre = ready[p.id];
      let source = pre?.photo === p.src ? await bitmap(`./assets/textures/${pre.src}`).catch(() => null) : null;
      if (source) {
        p.aspect = pre.aspect; p.avg = pre.avg;
        if (source.width !== LAYER || source.height !== LAYER) { sizeHere(source); source.close(); source = scratch; }
      } else {
        const img = await bitmap(p.src);
        p.aspect = img.width / img.height;
        p.avg = sizeHere(img); img.close();
        source = scratch;
      }
      gl.bindTexture(gl.TEXTURE_2D_ARRAY, arrTex);
      gl.texSubImage3D(gl.TEXTURE_2D_ARRAY, 0, 0, 0, i, LAYER, LAYER, 1, gl.RGBA, gl.UNSIGNED_BYTE, source);
      if (source !== scratch) source.close();
      onProgress(++done / photos.length);
    }
  };
  await Promise.all([worker(), worker(), worker(), worker(), worker(), worker()]);
  gl.bindTexture(gl.TEXTURE_2D_ARRAY, arrTex);
  gl.generateMipmap(gl.TEXTURE_2D_ARRAY);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D_ARRAY, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  return arrTex;
}
