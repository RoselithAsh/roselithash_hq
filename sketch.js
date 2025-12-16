let colors = []; // Array to store watercolor shades

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(255); // Start with white canvas

    // Generate a palette of random watercolor-like colors
    for (let i = 0; i < 5; i++) {
        colors.push(color(random(100, 255), random(100, 255), random(150, 255), 30));
    }
}

function draw() {
    // If mouse is pressed, draw strokes following the mouse
    if (mouseIsPressed) {
        for (let i = 0; i < 5; i++) { // multiple layers for watercolor effect
            let col = random(colors);
            noStroke();
            fill(col);
            let size = random(20, 60);
            ellipse(mouseX + random(-10, 10), mouseY + random(-10, 10), size, size);
        }
    }
}

// Optional: handle window resize
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
