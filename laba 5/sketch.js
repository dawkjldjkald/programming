let character = {
  xPos: 100,
  yPos: 700,
  speed:5,
  canMove: true
}

let cloud = {
  speed: 4,
  y_pos: 100,
  x_pos: 0
}

let gameObjects = {
 sceneryObjects: [
      function drawCloud()
        {
          noStroke()
          fill(255)
          circle(cloud.x_pos, cloud.y_pos, 70)
          circle(cloud.x_pos - 40, cloud.y_pos + 5, 60)
          circle(cloud.x_pos + 40, cloud.y_pos + 2, 65)
        },
      
  function drawMountain() 
        {
            noStroke();
            fill ("#696969");
            triangle(550,150,350,700,750,700);
        },

        function drawGround()
        {
            fill ("#32CD32")
            rect(0, 700, 800, 100)
        },

  function drawCanyon() 
        {
            fill("#8B4513")
            rect(210, 700, 100)
        }
 ]
}

function drawCharacter()
{
  fill(0)
  rect(character.xPos, character.yPos, 40)
}

function setup()
{
 createCanvas(800, 800)
}

function draw()
{
 background("#87CEEB")
 gameObjects.sceneryObjects.forEach(obj => obj())
  
    cloud.x_pos += cloud.speed
    
    if(cloud.x_pos > 800)
    {
      cloud.x_pos = 0
    }
  
    drawCharacter()
    
  
    if(keyIsPressed && character.canMove)
    {
      Move()
    }
  
    if(!keyIsDown(32) && character.yPos <= 700 && character.canMove)
    {
      character.yPos += character.speed
    }
    
    if(character.xPos >= 220 && character.xPos <= 280 && character.yPos >= 700)
    {
      character.falling = true
    }
    
    if(character.falling)
    {
      CanyonFall()
    }
}

function Move()
{
  
  if (keyIsDown(65) && character.xPos > 0)
  {   
    character.xPos = character.xPos - 8
  }

  if (keyIsDown(68) && character.xPos < 800)
  {    
     character.xPos = character.xPos + 8
  }
  
  if(keyIsDown(32) && character.yPos > 700) 
  {
    speed = 13
    character.yPos = character.yPos - speed
  }
  
  if(character.yPos < 700) 
  {
    speed = speed - 0.5
    character.yPos = character.yPos - speed
  }
}

function CanyonFall()
{
  character.yPos += 5
  character.canMove = false
  
  if(character.yPos > 840)
  {
    character.canMove = true
    character.xPos = 100
    character.yPos = 700
    character.falling = false
  }
}