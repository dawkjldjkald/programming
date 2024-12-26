const delay = (ms) => new Promise((res) => setTimeout(res, ms));

let mainSong;
let coinSound;
let deathSound;

let count = 15;
let boolchek = true;

let character = {
  xPos: 100,
  yPos: 600,
  speed:5,
  canMove: true,
  Csize:40
}

let cloud = {
  speed: 4,
  y_pos: 100,
  x_pos: 0
}

let flag = {
    xP:114,
    yP:650
}
let enemy = {
    x:400,
    y:665,
    size:60,
    speed:3,
    canMove: true,
    count: 15
}

let coins = [
    { x: 100, y: 640, size: 25, collected: false },
    { x: 200, y: 620, size: 25, collected: false },
    { x: 300, y: 600, size: 25, collected: false },
    { x: 400, y: 580, size: 25, collected: false },
];

let score = 0;

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

async function music() {
  deathSound = loadSound("death.ogg");
  coinSound = loadSound("coin.ogg");
  mainSong = loadSound("mainsong1.mp3");
  await delay(1000);
  mainSong.play();
  mainSong.loop();
}

function drawCharacter()
{
  fill("purple")
  rect(character.xPos, character.yPos, character.Csize)
  fill("#FFA07A")
  ellipse(character.xPos+20, character.yPos - 15, 33)
  
  if((keyIsDown(65) || keyIsDown(68)) && character.yPos >= 600)
  {
    if(boolchek)
    {
      rect(character.xPos+5, character.yPos + 40, 10, 20)
      rect(character.xPos+25, character.yPos + 40, 10, 20)
    }
    
    else
    {
      rect(character.xPos+15, character.yPos + 40, 10, 20)
      rect(character.xPos+15, character.yPos + 40, 10, 20)
    }
  }
  
  else
  {
    rect(character.xPos+5, character.yPos + 40, 10, 20)
    rect(character.xPos+25, character.yPos + 40, 10, 20)
  }
  
  rect(character.xPos-20, character.yPos, 20, 10)
  rect(character.xPos+40, character.yPos, 20, 10)
  fill(255)
  ellipse(character.xPos+16, character.yPos-20, 10)
  ellipse(character.xPos+26, character.yPos-20, 10)
  fill(0)
  ellipse(character.xPos+16, character.yPos-20, 5)
  ellipse(character.xPos+26, character.yPos-20, 5)
}

function drawFlag()
{
    fill("black");
    rect(flag.xP,flag.yP,10,95);
    fill("red");
    triangle(150, 665, 120, 650, 120, 680)
}

function drawEnemy()
{
        fill("#8B0000");
        rect(enemy.x, enemy.y - enemy.size + 40, enemy.size, enemy.size);
        fill(255)
        rect(enemy.x+9, enemy.y-9,10,10)
        rect(enemy.x+33, enemy.y-9,10,10)
        
        if(enemy.canMove)
        {
          enemy.x += enemy.speed;
        
          if (enemy.x <= 280 || enemy.x + enemy.size >= 800)
          {
            enemy.speed *= -1;
          }
        }
        CheckCollision();
}

function drawCoins()
{
  coins.forEach((coin) => 
  {
    if (!coin.collected) 
    {
      fill("#FFD700");
      circle(coin.x, coin.y, coin.size);
    }
    
    else
    {
      fill("#FFD700");
      coin.x = int(random(50, 700))
      coin.y = int(random(500, 640))
      ellipse(coin.x, coin.y, coin.size, coin.size);
      coin.collected = false
    }
      CheckCoinCollision();
  });
}

function CheckCoinCollision()
{
    coins.forEach((coin) => {
        if (!coin.collected &&
          (
          abs(character.xPos + 20 - coin.x) <= coin.size &&
          abs(character.yPos + 20 - coin.y) <= coin.size
          )
        ){
            coin.collected = true;
            score += 1;
            coinSound.play();
            
        }
    });
}

function CheckCollision()
{
      if (character.xPos + 25 > enemy.x && character.xPos - 25 < enemy.x + enemy.size && character.yPos + 5 >= enemy.y - enemy.size && character.yPos <= enemy.y)
      {

        if (character.yPos + 5 < enemy.y - 10) 
        {
            enemy.canMove = false
          
            if(character.xPos >= 500)
            {
              enemy.x = 300
              score+=3
              deathSound.play();
            }
            
            else
            {
              enemy.x = 700
              score+=3
              deathSound.play();
            }
    }
        
        else 
        {
            character.xPos = 100;
            score-=5
            deathSound.play();
        }
      }
}
    
function setup()
{
 createCanvas(800, 800);
 music();
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
    drawEnemy()
    drawCoins()
    drawScore()
    drawFlag()
    
    if(boolchek) // Для анимации
    {
      count -= 1
    }

    if(count <= 0)
    {
      boolchek = false
    }

    if(!boolchek)
    {
      count += 1
    }

    if(count >= 15)
    {
      boolchek = true
    }
    
    
    
    if(!enemy.canMove)
    {
      enemy.count -= 1
    }
    
    if(enemy.count <= 0)
    {
      enemy.canMove = true
      enemy.count = 15
    }
  
    if(keyIsPressed && character.canMove)
    {
      Move()
    }
  
    if(!keyIsDown(32) && character.yPos <= 660 && character.canMove)
    {
      character.yPos += character.speed
    }
    
    if(character.xPos >= 220 && character.xPos <= 280 && character.yPos >= 660)
    {
      character.falling = true
      score=0
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


function drawScore()
{
    fill(0);
    textSize(24);
    text(`Your score: ${score}`, 20, 30)
}

function CanyonFall()
{
  character.yPos += 5
  character.canMove = false
  
  if(character.yPos > 840)
  {
    character.canMove = true
    character.xPos = 100
    character.yPos = 660
    character.falling = false
  }
}