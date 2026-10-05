function createVisualRenderer(canvas){
 const ctx=canvas.getContext('2d');let w=1,h=1;
function bg(a,b){const g=ctx.createLinearGradient(0,0,w,h);g.addColorStop(0,a);g.addColorStop(1,b);ctx.fillStyle=g;ctx.fillRect(0,0,w,h)}
function glow(x,y,r,c){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,c);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,2*r,2*r)}
function orbit(t){bg('#222c24','#0b1414');const x=w*.5,y=h*.5,s=Math.min(w*.7,h*.65);glow(x,y,s*.8,'#60745130');ctx.save();ctx.translate(x,y);ctx.rotate(-.4);for(let i=0;i<9;i++){const r=s*(.21+i*.034);ctx.save();ctx.scale(1,.56+Math.sin(t*.18+i*.3)*.035);ctx.beginPath();ctx.ellipse(0,0,r,r,0,0,Math.PI*2);ctx.strokeStyle=`rgba(197,216,157,${.28-i*.017})`;ctx.lineWidth=1;ctx.stroke();const a=t*(.08+i*.012)+i*1.1;const px=Math.cos(a)*r,py=Math.sin(a)*r;glow(px,py,18,'#d9e8b645');ctx.beginPath();ctx.arc(px,py,i%3===0?5:2.5,0,Math.PI*2);ctx.fillStyle='#dae7bb';ctx.fill();ctx.restore()}ctx.restore();glow(x,y,70,'#d1dca619');ctx.beginPath();ctx.arc(x,y,25,0,Math.PI*2);const g=ctx.createRadialGradient(x-8,y-8,1,x,y,30);g.addColorStop(0,'#e3ecc1');g.addColorStop(.4,'#adb991');g.addColorStop(1,'#465b48');ctx.fillStyle=g;ctx.fill()}
function waves(t){bg('#142d39','#17272c');glow(w*.67,h*.3,h*.4,'#6cc1b128');for(let i=0;i<34;i++){ctx.beginPath();const base=h*.30+i*h*.014;for(let x=-10;x<=w+20;x+=12){const y=base+Math.sin(x/w*5+t*.35+i*.15)*h*.04+Math.sin(x/w*9-t*.18+i*.11)*h*.025;x===-10?ctx.moveTo(x,y):ctx.lineTo(x,y)}ctx.strokeStyle=`rgba(${110+i*2},${175+i},${185-i},${.13+(i%4)*.03})`;ctx.lineWidth=1;ctx.stroke()}glow(w*.32,h*.41,Math.min(w,h)*.16,'#d1c7a22a')}
function bloom(t){bg('#362932','#152321');const x=w*.5,y=h*.5,s=Math.min(w*.30,h*.25);glow(x,y,s*2,'#b37c8a22');for(let layer=3;layer>=0;layer--){for(let i=0;i<12;i++){const a=i*Math.PI/6+t*.05+layer*.21;ctx.save();ctx.translate(x,y);ctx.rotate(a);const length=s*(.6+layer*.17)*(1+Math.sin(t*.5+i*.5)*.055);ctx.beginPath();ctx.ellipse(length*.58,0,length*.58,length*.20,0,0,Math.PI*2);const g=ctx.createLinearGradient(0,0,length,0);g.addColorStop(0,'#ddd6a429');g.addColorStop(.65,layer%2?'#c4a4b455':'#adbe9955');g.addColorStop(1,'#debbcb17');ctx.fillStyle=g;ctx.fill();ctx.strokeStyle='#edced525';ctx.lineWidth=.6;ctx.stroke();ctx.restore()}}glow(x,y,s*.2,'#e9d4a45a');ctx.beginPath();ctx.arc(x,y,7,0,Math.PI*2);ctx.fillStyle='#e6d2aa';ctx.fill()}
function prism(t){bg('#1c1930','#131d2b');const x=w*.5,y=h*.5,s=Math.min(w*.43,h*.4);glow(x,y,s,'#9766c224');ctx.save();ctx.translate(x,y);ctx.rotate(-.25+Math.sin(t*.1)*.08);for(let i=0;i<38;i++){const offset=(i-19)*s*.018;ctx.beginPath();ctx.moveTo(offset,-s*.52);ctx.lineTo(offset+s*.46,s*.36);ctx.lineTo(offset-s*.46,s*.36);ctx.closePath();ctx.strokeStyle=`hsla(${(i*5+220+t*3)%360},70%,72%,.28)`;ctx.lineWidth=1.2;ctx.stroke()}ctx.restore();for(let i=0;i<7;i++){ctx.save();ctx.translate(x,y);ctx.rotate(.10);const g=ctx.createLinearGradient(-s,0,s,0);g.addColorStop(0,'transparent');g.addColorStop(.48,`hsla(${i*30+185},70%,70%,.12)`);g.addColorStop(1,'transparent');ctx.fillStyle=g;ctx.fillRect(-s,-s*.05+i*6,2*s,3);ctx.restore()}}
const particles=Array.from({length:160},(_,i)=>({x:((Math.sin(i*128.9)*43758.5)%1+1)%1,y:((Math.sin(i*73.3)*27853.7)%1+1)%1,r:i%5===0?1.8:.7,s:i*.7}));
function stars(t){bg('#131d30','#0d151e');glow(w*.56,h*.35,h*.5,'#5b67992e');glow(w*.4,h*.47,h*.22,'#948a9330');for(const p of particles){const x=(p.x*w+Math.sin(t*.05+p.s)*10+w)%w,y=(p.y*h-t*(p.r*.5)+h*10)%h;ctx.globalAlpha=.35+.4*(Math.sin(t*.8+p.s)+1)/2;ctx.beginPath();ctx.arc(x,y,p.r,0,Math.PI*2);ctx.fillStyle='#e5e7d8';ctx.fill()}ctx.globalAlpha=1;const x=w*.5,y=h*.5,r=Math.min(w,h)*.13;ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.strokeStyle='#c4cbdd30';ctx.stroke();for(let i=0;i<6;i++){const a=i*Math.PI/3+t*.025;const px=x+Math.cos(a)*r,py=y+Math.sin(a)*r;glow(px,py,12,'#d6e0ef33');ctx.beginPath();ctx.arc(px,py,2,0,Math.PI*2);ctx.fillStyle='#e0e9ed';ctx.fill()}}
const renderers={orbit,waves,bloom,prism,stars};

 return {
  resize(width,height){
   w=width;h=height;const scale=Math.min(devicePixelRatio||1,2);
   canvas.width=Math.round(w*scale);canvas.height=Math.round(h*scale);
   ctx.setTransform(scale,0,0,scale,0,0);
  },
  draw(type,time,offset=0){
   ctx.save();ctx.beginPath();ctx.rect(offset,0,w,h);ctx.clip();ctx.translate(offset,0);
   renderers[type](time);ctx.restore();
  }
 };
}
