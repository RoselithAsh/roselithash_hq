const canvas = document.getElementById('scene');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Random utility
function random(min, max) {
  return Math.random() * (max - min) + min;
}

// CLOUDS
class Cloud {
  constructor() {
    this.x = random(-200, canvas.width);
    this.y = random(50, canvas.height / 2);
    this.size = random(50, 120);
    this.speed = random(0.2, 0.6);
  }
  draw() {
    ctx.fillStyle = 'rgba(255,255,255,0.8)';
    ctx.beginPath();
    ctx.ellipse(this.x, this.y, this.size, this.size * 0.6, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  update() {
    this.x += this.speed;
    if (this.x - this.size > canvas.width) this.x = -this.size;
    this.draw();
  }
}

// BIRDS
class Bird {
  constructor() {
    this.x = random(-100, canvas.width);
    this.y = random(50, canvas.height / 2);
    this.size = random(10, 20);
    this.speed = random(1, 2);
    this.wing = 0;
  }
  draw() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(this.x - this.size, this.y);
    ctx.lineTo(this.x, this.y - this.size / 2 * Math.sin(this.wing));
    ctx.lineTo(this.x + this.size, this.y);
    ctx.stroke();
  }
  update() {
    this.x += this.speed;
    this.wing += 0.1;
    if (this.x - this.size > canvas.width) {
      this.x = -this.size;
      this.y = random(50, canvas.height / 2);
    }
    this.draw();
  }
}

// Arrays
const clouds = [];
for (let i = 0; i < 6; i++) clouds.push(new Cloud());

const birds = [];
for (let i = 0; i < 4; i++) birds.push(new Bird());

// Animate
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // sky gradient
  const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
  skyGradient.addColorStop(0, '#a0d8f1');
  skyGradient.addColorStop(1, '#ffffff');
  ctx.fillStyle = skyGradient;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // gentle wind effect
  clouds.forEach(cloud => {
    cloud.y += Math.sin(Date.now() * 0.001 + cloud.x) * 0.05;
    cloud.update();
  });

  birds.forEach(bird => bird.update());

  requestAnimationFrame(animate);
}

animate();
