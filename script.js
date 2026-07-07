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
