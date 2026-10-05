'use strict';
(() => {
  const $ = id => document.getElementById(id);
  const stage = $('stage'), slider = $('progress');
  const clamp = (x, a=0, b=1) => Math.max(a, Math.min(b,x));
  const mix = (a,b,t) => a+(b-a)*t;
  const smooth = t => { t=clamp(t); return t*t*(3-2*t); };
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let width=innerWidth,height=innerHeight,unit=1,mobile=false;
  let target=4,position=4,frame=0,lastTime=0,hovered=-1,drag=null,moved=false;
  let industry=[],process=[],architecture=null,ready=false,automatic=true;
  let category='Photo 11',selectedCenter=null,introClock=0,chapter='',bodyState='',sliderValue='';
  const caption=$('caption'),eyebrow=$('eyebrow'),description=$('description'),introCopy=$('intro-copy'),progressThumb=$('progress-thumb'),chapters=[...document.querySelectorAll('[data-chapter]')];
  // Frames only write the styles and attributes that changed.
  const css=(el,key,value)=>{const last=el._css||(el._css={});if(last[key]!==value){last[key]=value;el.style[key]=value;}};
  const attr=(el,key,value)=>{const last=el._attr||(el._attr={});if(last[key]!==value){last[key]=value;el.setAttribute(key,value);}};
  // Ring and arc cards never exceed 107/232 of a full card, so a 480 px thumbnail is as sharp unless the screen needs more pixels.
  const thumbFits=()=>300*107/232*unit*devicePixelRatio<=480;

  // The platform feed pauses works that are off screen.
  let hostActive=true;
  const running=()=>hostActive&&!document.hidden;
  let live=running();
  function syncRunning(){if(running()===live)return;live=!live;if(live){lastTime=0;requestTick();}}
  addEventListener('message',e=>{if(e.source!==parent||e.data?.type!=='platform:visibility')return;hostActive=Boolean(e.data.active);syncRunning();});
  document.addEventListener('visibilitychange',syncRunning);
  if(parent!==window)parent.postMessage({type:'platform:hello'},'*');

  const setTarget = (value,center=null) => { automatic=false;selectedCenter=center; target=clamp(value,0,7); requestTick(); };
  function resize(){width=innerWidth;height=innerHeight;mobile=width<600;unit=mobile?Math.min(width/570,height/650):Math.min(width/934,height/542);document.documentElement.style.setProperty('--unit',unit+'px');sharpen();requestTick();}
  // A larger screen swaps the thumbnails for full photos, decoded before they replace what is shown.
  function sharpen(){if(thumbFits())return;for(const item of industry){if(!item.thumbed)continue;item.thumbed=false;const full=new Image();full.src=item.src;full.decode().catch(()=>{}).then(()=>{item.el.firstChild.src=item.src;});}}
  function card(item,parent,index,small=false){const thumbed=small&&Boolean(item.thumb)&&thumbFits();const el=document.createElement('button');el.className='card';el.type='button';el.setAttribute('aria-label',item.name);el.innerHTML=`<img src="${thumbed?item.thumb:item.src}" alt="${item.alt || item.name}" width="928" height="1200" draggable="false" decoding="async">`;parent.append(el);el.addEventListener('click',()=>{if(moved)return;if(parent.id==='industry-cards'){setTarget(index===10?(position>3?2:4):1.5,index===10?null:index);}else{setTarget(5+(index+1)/process.length*2);}});el.addEventListener('pointerenter',()=>{hovered=parent.id==='process-cards'?index:-1;requestTick();});el.addEventListener('pointerleave',()=>{hovered=-1;requestTick();});return {...item,el,index,thumbed};}
  function transform(item,x,y,s,rz=0,rx=0,ry=0,opacity=1,z=0,aspect=1){css(item.el,'transform',`translate3d(${x.toFixed(3)}px,${y.toFixed(3)}px,0) rotateX(${rx.toFixed(3)}deg) rotateY(${ry.toFixed(3)}deg) rotateZ(${rz.toFixed(3)}deg) scale(${s.toFixed(5)},${(s*aspect).toFixed(5)})`);css(item.el,'opacity',opacity.toFixed(4));css(item.el,'zIndex',String(z));css(item.el,'pointerEvents',opacity>.5?'auto':'none');item.tab=opacity>.5&&Math.abs(x)<width*.55?0:-1;item.ariaHidden=String(opacity<.01);}
  // Focus order and the accessibility tree follow the cards once the motion settles.
  function settleAccessibility(){for(const item of [...industry,...process]){if(item.el.tabIndex!==item.tab)item.el.tabIndex=item.tab;attr(item.el,'aria-hidden',item.ariaHidden);}}
  function paint(){if(!ready)return;
    const p=position;let name=industry[10].name;
    const zoom=smooth(p), center=selectedCenter??mix(0,10,clamp(p-1));
    const radius=mix(187,720,zoom)*unit;
    const small=mix(39/232,107/232,zoom)*unit;
    const collapse=smooth(p-2),rotate=smooth(p-3),fan=smooth(p-4);
    const scroll=mix(0,process.length*57*unit,clamp((p-5)/2));
    industry.forEach((item,i)=>{
      let delta=i-center;if(delta>12)delta-=24;if(delta< -12)delta+=24;
      const angle=delta*Math.PI/12;
      const x=radius*Math.sin(angle)+12*unit*zoom,y=radius*(1-Math.cos(angle))-(1-zoom)*radius;
      if(i===10){
        const scalar=mix(small,142/232*unit,collapse);
        const big=mix(scalar,unit*mix(.935,1,fan),rotate);
        transform(item,mix(x,0,collapse)-scroll,mix(y,0,collapse),big,angle*180/Math.PI*(1-collapse),-30*rotate,-30*rotate,1,200,1+.0346*(1-rotate));
      }else transform(item,x,y,small,angle*180/Math.PI,0,0,1-collapse,100-Math.round(Math.abs(delta)),1.0346);
    });
    process.forEach((item,i)=>{
      const gap=mix(2.8,57,fan)*unit;
      const lift=hovered===i&&p>4.9?-9*unit:0;
      transform(item,(i+1)*gap-scroll,lift,unit*mix(.935,1,fan),-0,-30,-30,rotate,199-i);
    });
    if(p<2.2){name=industry[Math.round(center)].name;}
    if(p>5.1){const idx=clamp(Math.round(scroll/(57*unit))-1,0,process.length-1);name=process[idx].name;}
    if(category!==name){category=name;$('category').textContent=name;}
    const desc=smooth((p-4.4)*1.6);
    css(caption,'opacity',String(smooth(p*2)));
    css(caption,'transform',`translate(-50%,${-desc*31*unit}px)`);
    css(eyebrow,'opacity',String(1-desc));
    css(description,'opacity',String(desc));
    css(introCopy,'opacity',String(1-smooth(p*1.8)));
    css(introCopy,'pointerEvents',p<.15?'auto':'none');
    if(introCopy.inert!==(p>=.15))introCopy.inert=p>=.15;
    attr(caption,'aria-hidden',String(p<.1));
    attr(eyebrow,'aria-hidden',String(desc>.9));
    attr(description,'aria-hidden',String(desc<.1));
    css(progressThumb,'transform',`translateY(${Math.max(0,p-5)/2*(height-160*unit)}px)`);
    const value=String(Math.round(p/7*1000));if(sliderValue!==value){sliderValue=value;slider.value=value;}
    const current=p<.5?'intro':p<6.8?'vision':'intelligence';
    if(chapter!==current){chapter=current;chapters.forEach(el=>{if(el.dataset.chapter===current)el.setAttribute('aria-current','page');else el.removeAttribute('aria-current');});}
    const state=p<.5?'intro':p<2.6?'arc':p<3.5?'single':p<4.6?'stack':'spread';
    if(bodyState!==state){bodyState=state;document.body.dataset.state=state;}
    attr(stage,'aria-label',`${name}. Scroll, drag, or use arrow keys to browse.`);
  }
  // Off screen, a frame only redraws the current state. The intro clock advances only while the work runs.
  function tick(now){frame=0;if(!ready)return;
    if(!running()){paint();settleAccessibility();return;}
    if(automatic&&!reduced){introClock+=lastTime?Math.min(now-lastTime,100):0;const elapsed=introClock/1000;target=4+smooth((elapsed-.45)/1.3);if(elapsed>2.1)automatic=false;}
    const dt=Math.min((now-(lastTime||now-16.67))/16.67,4);lastTime=now;
    position=reduced?target:mix(position,target,1-Math.pow(.89,dt));
    if(Math.abs(position-target)<.00015)position=target;
    paint();if(automatic||Math.abs(position-target)>.0001)requestTick();else settleAccessibility();
  }
  function requestTick(){if(!frame)frame=requestAnimationFrame(tick);}
  addEventListener('resize',resize);
  addEventListener('wheel',e=>{e.preventDefault();const delta=Math.abs(e.deltaX)>Math.abs(e.deltaY)?e.deltaX:e.deltaY;const d=e.deltaMode===1?delta*16:delta;setTarget(target+clamp(d,-180,180)*.0025);},{passive:false});
  stage.addEventListener('pointerdown',e=>{if(e.button!==0)return;automatic=false;moved=false;drag={x:e.clientX,y:e.clientY,start:target};stage.classList.add('dragging');});
  addEventListener('pointermove',e=>{$('cursor').style.transform=`translate(${e.clientX-1.5}px,${e.clientY-1.5}px)`;if(!drag)return;const dx=e.clientX-drag.x,dy=e.clientY-drag.y;if(Math.abs(dx)+Math.abs(dy)>5)moved=true;if(moved){const delta=Math.abs(dx)>Math.abs(dy)?-dx:-dy;setTarget(drag.start+delta/(mobile?190:350));}});
  addEventListener('pointerup',()=>{drag=null;stage.classList.remove('dragging');setTimeout(()=>moved=false,0);});
  addEventListener('pointercancel',()=>{drag=null;stage.classList.remove('dragging');});
  document.addEventListener('mouseleave',()=>{$('cursor').style.transform='translate(-20px,-20px)';drag=null;});
  addEventListener('keydown',e=>{if(e.target===slider)return;const actions={ArrowDown:.18,ArrowRight:.18,ArrowUp:-.18,ArrowLeft:-.18,PageDown:.7,PageUp:-.7,' ':.7};if(e.key in actions){e.preventDefault();setTarget(target+actions[e.key]);}else if(e.key==='Home'){e.preventDefault();setTarget(0);}else if(e.key==='End'){e.preventDefault();setTarget(7);}else if(e.key==='Escape')setTarget(2);});
  document.querySelectorAll('[data-chapter]').forEach(el=>el.addEventListener('click',()=>setTarget({intro:0,vision:2,intelligence:7}[el.dataset.chapter])));
  $('explore').addEventListener('click',()=>setTarget(1));slider.addEventListener('input',e=>setTarget(+e.target.value/1000*7));
  fetch('assets/cards.json').then(r=>{if(!r.ok)throw Error('Asset manifest missing');return r.json();}).then(data=>{
    resize();
    industry=data.filter(x=>x.category==='moments').map((item,i)=>card(item,$('industry-cards'),i,i!==10));
    process=data.filter(x=>x.category==='daily').map((x,i)=>card(x,$('process-cards'),i));
    architecture=industry[10];ready=true;paint();settleAccessibility();requestTick();
    // Ready once the cards in the opening view have loaded and a frame with them is on screen.
    if(parent!==window)Promise.all([...process,architecture].map(({el})=>{const img=el.firstChild;return img.complete||new Promise(r=>{img.addEventListener('load',r,{once:true});img.addEventListener('error',r,{once:true});});}))
      .then(()=>requestAnimationFrame(()=>requestAnimationFrame(()=>parent.postMessage({type:'platform:ready'},'*'))));
  }).catch(error=>{console.error(error);$('error').hidden=false;});
})();
