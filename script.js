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