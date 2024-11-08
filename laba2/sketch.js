let x = 120;
let y = 120;

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(255,255,255);
    
    let offsetX = 0;
    let offsetY = 0;

    if (keyIsDown(87)) {
        y -= 5;
        offsetY = -5;
    }

    if (keyIsDown(65)) {
        x -= 5;
        offsetX = -5;
    }

    if (keyIsDown(83)) {
        y += 5;
        offsetY = 5;
    }

    if (keyIsDown(68)) {
        x += 5;
        offsetX = 5;
    }
    
    drawChar(x,y,offsetX,offsetY);
}

function drawChar(x,y,offsetX,offsetY) {
    fill('brown');
    ellipse(x + 50, y + 50, 100, 100);
    ellipse(x + 310, y + 50, 100, 100);
    ellipse(x + 180, y + 180, 300, 300);
    ellipse(x + 180, y + 240, 170, 140);
    fill(0);
    ellipse(x + 110, y + 140, 20, 30);
    ellipse(x + 250, y + 140, 20, 30);
    ellipse(x + 180, y + 200, 50, 30);
    
}
