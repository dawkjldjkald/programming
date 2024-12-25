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
            circle(150, 750, 80)
        }
 ]
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
}