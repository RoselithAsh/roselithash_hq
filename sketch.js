let colors = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  colors = [
    color(255, 182, 193, 50), // pink
    color(173, 216, 230, 50), // light blue
    color(144, 238, 144, 50), // light green
    color(255, 255, 224, 50)  // light yellow
  ];
}

function draw() {
  // nothing in draw, painting happens on mouseDragged
}

function mouseDragged() {
  let c = random(colors);
  
  // Draw multiple semi-transparent ellipses for watercolor feel
  for (let i = 0; i < 5; i++) {
    let offsetX = random(-15, 15);
    let offsetY = random(-15, 15);
    fill(c);
    ellipse(mouseX + offsetX, mouseY + offsetY, random(20, 50), random(20, 50));
  }

  // Add subtle glare (white semi-transparent stroke)
  fill(255, 255, 255, 20);
  ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), random(10, 30), random(5, 15));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
