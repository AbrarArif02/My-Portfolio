const cursor = document.getElementById('cursor'), cursorRing = document.getElementById('cursor-ring');

let mx = 0, my = 0, tx = 0, ty = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

function loop() {
    cursor.style.left = mx + 'px'; 
    cursor.style.top = my + 'px';

    tx += (mx - tx) * .12; 
    ty += (my - ty) * .12;

    cursorRing.style.left = tx + 'px'; 
    cursorRing.style.top = ty + 'px';

    requestAnimationFrame(loop);
}
loop();




const slides = [...document.querySelectorAll('.slide')];
const topBars = [...document.querySelectorAll('.topbar-btn')];
const dots    = [...document.querySelectorAll('.sdot')];

let current = 0;    
let isAnimating = false; 
const Duration = 800;     

function go(next) {

  if (isAnimating) return;
  if (next === current) return;
  if (next < 0 || next >= slides.length) return;

  isAnimating = true;

  const goingForward = next > current;

  
  const exitClass  = goingForward ? 'exit-l'  : 'exit-r';
  const enterClass = goingForward ? 'enter-l' : 'enter-r';

  const leaving  = slides[current];
  const arriving = slides[next];


  leaving.classList.add(exitClass);
  arriving.classList.add(enterClass);
  arriving.style.opacity = '1';
  arriving.style.pointerEvents = 'all';

 
  topBars.forEach((btn, i) => btn.classList.toggle('active', i === next));
  dots.forEach((dot, i) => dot.classList.toggle('active', i === next));


  const topbarTeal = document.getElementById('topbar-teal');
  if (topbarTeal) {
    topbarTeal.classList.toggle('hide', next !== 0);
  }

  setTimeout(() => {
    leaving.classList.remove('active', exitClass);
    leaving.style.opacity = '0';
    leaving.style.pointerEvents = 'none';

    arriving.classList.remove(enterClass);
    arriving.classList.add('active');

    current = next;
    isAnimating = false;

  }, Duration);
}



(function(){
  var section = document.querySelector('#s5 .s5-section');
  var scrollHost = document.querySelector('#s5 .s5-body');
  var vline = section.querySelector('.s5-vline');
  var vlinefill = section.querySelector('#vline-fill');
  var nodes = section.querySelectorAll('.node');
  var total = nodes.length;
  var ticking = false;

  function update(){
    ticking = false;
    var rect = vline.getBoundingClientRect();
    var hostRect = scrollHost.getBoundingClientRect();
    var viewH = hostRect.height;

    var progress = (viewH * 0.55 - (rect.top - hostRect.top)) / rect.height;
    progress = Math.max(0, Math.min(1, progress));

    vlinefill.style.height = (progress * 100) + '%';

    nodes.forEach(function(node, i){
      var threshold = (i + 0.1) / total;
      if(progress >= threshold){
        node.classList.add('lit');
      }
    });
  }

  function onScroll(){
    if(!ticking){
      requestAnimationFrame(update);
      ticking = true;
    }
  }

  scrollHost.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  update();
})();



function sendMsg() {
  const n = document.getElementById('fn').value;
  const e = document.getElementById('fe').value;
  const m = document.getElementById('fm').value;

  if (!n || !e || !m) { 
    alert('Please fill all fields.'); 
    return; 
  }

  document.getElementById('formWrap').innerHTML =
     `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px">
        <div style="font-family:'IBM Plex Mono',monospace;font-size:2rem;color:var(--Aqua);">✓</div>
        <div style="font-family:'IBM Plex Mono',monospace;font-size:0.75rem;letter-spacing:0.14em;text-transform:uppercase;color:var(--Black)">Message Received</div>
        <div style="font-family:'Lora',serif;font-style:italic;font-size:0.8rem;color:var(--Gray)">I'll reply within 24 hours.</div>
      </div>`;
}