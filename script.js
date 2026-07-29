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



(function () {
  var overlay = document.getElementById('articleModalOverlay');
  var modalImg = document.getElementById('articleModalImg');
  var modalCategory = document.getElementById('articleModalCategory');
  var modalTitle = document.getElementById('articleModalTitle');
  var modalDate = document.getElementById('articleModalDate');
  var modalDesc = document.getElementById('articleModalDescription');

  function openModal(card) {
    modalImg.src = card.getAttribute('data-img');
    modalCategory.textContent = card.getAttribute('data-category');
    modalTitle.textContent = card.getAttribute('data-title');
    modalDate.textContent = card.getAttribute('data-date');
    modalDesc.textContent = card.getAttribute('data-full');
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.article-read').forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      openModal(link.closest('.article-card'));
    });
  });

  document.getElementById('articleModalClose').addEventListener('click', closeModal);
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeModal();
  });
})();



(function(){
  document.querySelectorAll('.s7-item').forEach(function(item){
    var more = item.querySelector('.s7-abstract-more');
    var moreInner = more.querySelector('p');

    item.addEventListener('click', function(e){
      if(e.target.closest('.s7-info')) return;
      e.stopPropagation(); 

      var isOpen = item.classList.contains('expanded');
      if(isOpen){
        more.style.maxHeight = '0px';
        item.classList.remove('expanded');
      } else {
        item.classList.add('expanded');
        more.style.maxHeight = moreInner.scrollHeight + 40 + 'px';
      }
    });
  });
})();



const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbz5HyhQPtTmygkHhr9bBM_l3z1l6WanX5P8WmyYpgt1bxEbYPfmNLmsbRcEQWJ3kERaRw/exec";

function sendMsg() {
  const n = document.getElementById('fn').value;
  const e = document.getElementById('fe').value;
  const m = document.getElementById('fm').value;

  if (!n || !e || !m) {
    alert('Please fill all fields.');
    return;
  }

  const formData = new FormData();
  formData.append('name', n);
  formData.append('email', e);
  formData.append('message', m);

  const wrap = document.getElementById('formWrap');
  const originalForm = wrap.innerHTML;

  wrap.innerHTML =
    `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px">
      <svg class="f-spinner-svg" viewBox="0 0 44 44">
        <circle class="f-spinner-track" cx="22" cy="22" r="18" fill="none" stroke-width="3"></circle>
        <circle class="f-spinner-arc" cx="22" cy="22" r="18" fill="none" stroke-width="3"></circle>
      </svg>
      <div style="font-family:'Syne',sans-serif;font-size:1.6rem;letter-spacing:0.15em;font-weight:600;color:var(--Black)">Sending Message</div>
      <div style="font-family:'Lora',serif;font-style:italic;font-size:1.1rem;letter-spacing:0.09em;font-weight:500;color:var(--Black)">This will just take a moment.</div>
    </div>`;

  fetch(SCRIPT_URL, {
    method: 'POST',
    body: formData
  })
    .then(() => {
      wrap.innerHTML =
        `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:100%;gap:16px">
          <div style="font-family:'Syne',sans-serif;font-size:4rem;color:var(--Aqua);">✓</div>
          <div style="font-family:'Syne',sans-serif;font-size:1.5rem;font-weight:600;letter-spacing:0.14em;color:var(--Black)">Message Received</div>
          <div style="font-family:'Lora',serif;font-style:italic;font-weight: 500;font-size:1.1rem;letter-spacing:0.12em;color:var(--Black)">I'll reply within 24 hours.</div>
        </div>`;
    })
    .catch(() => {
      wrap.innerHTML = originalForm;
      alert('Something went wrong sending your message. Please try again or email me directly.');
    });
}