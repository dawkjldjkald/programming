function setup()
{
	createCanvas(800, 800);
}

let character = {
  xPos: 100,
  yPos: 600,
  speed:5,
  canMove: true,
  Csize:40
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
  fill("purple")
  rect(character.xPos, character.yPos, character.Csize)
  fill("#FFA07A")
  ellipse(character.xPos+20, character.yPos - 15, 33)
  rect(character.xPos+5, character.yPos + 40, 10, 20)
  rect(character.xPos+25, character.yPos + 40, 10, 20)
  rect(character.xPos-20, character.yPos, 20, 10)
  rect(character.xPos+40, character.yPos, 20, 10)
  fill(255)
  ellipse(character.xPos+16, character.yPos-20, 10)
  ellipse(character.xPos+26, character.yPos-20, 10)
  fill(0)
  ellipse(character.xPos+16, character.yPos-20, 5)
  ellipse(character.xPos+26, character.yPos-20, 5)
  
  
}

function draw()
{
   background("#87CEEB")
   gameObjects.sceneryObjects.forEach(obj => obj())
    drawCharacter()
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
  
  if(keyIsDown(32) && character.yPos > 660) 
  {
    speed = 13
    character.yPos = character.yPos - speed
}
  
  if(character.yPos < 660) 
  {
    speed = speed - 0.5
    character.yPos = character.yPos - speed
  }
}
