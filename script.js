const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Draw a test sky
ctx.fillStyle = '#a0d8f1'; // soft sky blue
ctx.fillRect(0, 0, canvas.width, canvas.height);
