let character = {
  xPos: 100,
  yPos: 600,
  speed: 5,
  canMove: true,
  Csize: 40,
  jumpSpeed: 0,
  isJumping: false
};

let gameObjects = {
  sceneryObjects: [
    function drawMountain() {
      noStroke();
      fill("#696969");
      triangle(550, 150, 350, 700, 750, 700);
    },
    function drawGround() {
      fill("#32CD32");
      rect(0, 700, 800, 100);
    },
    function drawCanyon() {
      fill("#8B4513");
      rect(210, 700, 100);
    }
  ]
};

function drawCharacter() {
  fill("purple");
  rect(character.xPos, character.yPos, character.Csize);
  fill("#FFA07A");
  ellipse(character.xPos + 20, character.yPos - 15, 33);
  rect(character.xPos + 5, character.yPos + 40, 10, 20);
  rect(character.xPos + 25, character.yPos + 40, 10, 20);
  rect(character.xPos - 20, character.yPos, 20, 10);
  rect(character.xPos + 40, character.yPos, 20, 10);
  fill(255);
  ellipse(character.xPos + 16, character.yPos - 20, 10);
  ellipse(character.xPos + 26, character.yPos - 20, 10);
  fill(0);
  ellipse(character.xPos + 16, character.yPos - 20, 5);
  ellipse(character.xPos + 26, character.yPos - 20, 5);
}

function draw() {
  background("#87CEEB");
  
  gameObjects.sceneryObjects.forEach(obj => obj());
  
  Move();
  
  drawCharacter();
}

function Move() {
  
  if (keyIsDown(65) && character.xPos > 0) { 
    character.xPos -= character.speed;
  }

  if (keyIsDown(68) && character.xPos < width - character.Csize) { 
    character.xPos += character.speed;
  }
  
 
  if (keyIsDown(32) && !character.isJumping) { 
    character.jumpSpeed = -10; 
    character.isJumping = true; 
  }

 
  if (character.isJumping) {
    character.yPos += character.jumpSpeed; 
    character.jumpSpeed += 0.5; 

   
    if (character.yPos >= 600) { 
      character.yPos = 600;
      character.isJumping = false; 
      character.jumpSpeed = 0;
    }
    
   
    if (character.yPos < 0) {
      character.yPos = height; 
    }
}
}

function setup() {
 createCanvas(800, 800);
}
