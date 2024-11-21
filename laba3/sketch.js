let x = 400
let y = 200
let xspeed = 5
let yspeed = 2

let c = 50

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(150, 220, 170);
    ellipse(x, y, c*2, c*2);
    fill("green");
    triangle(x,y-50,x-20,y-65,x+20, y-65);
    fill("red");
    x+= xspeed;
    y+= yspeed;
    if (x > width - c || x < c) {
      xspeed = -xspeed;
    }
    if (y > height - c || y < c) {
      yspeed = -yspeed;
    }


}
    
