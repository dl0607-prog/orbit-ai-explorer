// Perspective-projected entry buttons orbit the glass illustration.
export function createGlobe(host,modules,selectedId,onSelect){
 const layer=host.querySelector('.globe-hotspots'),colors=['#9387e9','#5689ef','#d68fb4','#58bbb3'];
 let yaw=-.5,pitch=.12,down=null,frame=0,alive=true;
 const seeds=modules.map((_,i)=>{const y=1-(i+.5)*2/modules.length,r=Math.sqrt(1-y*y),angle=i*Math.PI*(3-Math.sqrt(5));return{x:r*Math.cos(angle),y,z:r*Math.sin(angle)};});
 const buttons=modules.map((m,i)=>{const b=document.createElement('button');b.className='globe-hotspot';b.dataset.id=m.id;b.innerHTML='<i aria-hidden="true"></i>';b.append(document.createTextNode(m.short));b.style.setProperty('--topic',colors[i]);b.setAttribute('aria-pressed',String(m.id===selectedId));b.classList.toggle('chosen',m.id===selectedId);b.onclick=()=>onSelect(m.id);layer.append(b);return b;});
 function render(){frame=0;if(!alive)return;const {width,height}=host.getBoundingClientRect(),r=Math.min(width*.225,height*.29),cx=width*.5,cy=height*.5+18;host.style.setProperty('--globe-tilt',`${yaw*5}deg`);
 seeds.forEach((p,i)=>{const x=p.x*Math.cos(yaw)+p.z*Math.sin(yaw),z=p.z*Math.cos(yaw)-p.x*Math.sin(yaw),y=p.y*Math.cos(pitch)-z*Math.sin(pitch),depth=p.y*Math.sin(pitch)+z*Math.cos(pitch),scale=3/(3-depth);const b=buttons[i];b.style.left=`${cx+x*r*1.45*scale}px`;b.style.top=`${cy-y*r*1.45*scale}px`;b.style.zIndex=String(Math.round((depth+1)*20));b.style.setProperty('--depth',String(.87+depth*.08));b.classList.toggle('behind',depth<-.3);});
 }
 function schedule(){if(!frame)frame=requestAnimationFrame(render);}
 const observer=typeof ResizeObserver==='function'?new ResizeObserver(schedule):null;
 if(observer)observer.observe(host);else window.addEventListener('resize',schedule);
 function start(e){if(e.target.closest('button'))return;down={x:e.clientX,y:e.clientY};host.setPointerCapture(e.pointerId);host.classList.add('dragging');}
 function move(e){if(!down)return;yaw+=(e.clientX-down.x)*.006;pitch=Math.max(-1,Math.min(1,pitch+(e.clientY-down.y)*.005));down={x:e.clientX,y:e.clientY};schedule();}
 function end(){down=null;host.classList.remove('dragging');}
 host.addEventListener('pointerdown',start);host.addEventListener('pointermove',move);host.addEventListener('pointerup',end);host.addEventListener('pointercancel',end);
 const rotateButton=host.parentElement.querySelector('[data-rotate]');rotateButton.onclick=()=>{yaw+=.55;schedule();};
 schedule();return()=>{alive=false;if(observer)observer.disconnect();else window.removeEventListener('resize',schedule);cancelAnimationFrame(frame);host.removeEventListener('pointerdown',start);host.removeEventListener('pointermove',move);host.removeEventListener('pointerup',end);host.removeEventListener('pointercancel',end);};
}
