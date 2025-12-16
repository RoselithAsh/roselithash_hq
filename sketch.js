let colors = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    noLoop(); // Draw once; we'll add subtle animation for glare later
    
    // Generate a palette of random watercolor-like colors
    for (let i = 0; i < 5; i++) {
        colors.push(color(random(100, 255), random(100, 255), random(100, 255), 50));
    }

    drawWatercolor();
}

function drawWatercolor() {
    background(255); // white canvas
    
    for (let i = 0; i < 100; i++) { // number of strokes
        let c = random(colors);
        noStroke();
        fill(c);
        // random ellipse strokes to mimic watercolor blobs
        ellipse(random(width), random(height), random(100, 300), random(50, 200));
    }
    
    drawGlare();
}

function drawGlare() {
    // subtle glare effect
    for (let i = 0; i < 50; i++) {
        let x = random(width);
        let y = random(height);
        fill(255, 255, 255, random(5, 20));
        ellipse(x, y, random(50, 150), random(20, 100));
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    drawWatercolor();
}
