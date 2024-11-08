
function setup()
{
	createCanvas(1200, 800);
}

function draw()
{
	background(100, 155, 255);
    
	noStroke();
	fill(0,135,0);
	rect(0, 600, 1200, 200); 

    //cloud
	noStroke();
	fill(255);
    ellipse(250, 130, 100, 80);
    ellipse(200, 130, 100, 55);
    ellipse(300, 130, 100, 55);
    
	//mountain
	noStroke();
	fill(140);
    triangle(750,150,550,600,950,600);
	

    //tree
	noStroke();
	fill(100,70,50);
    rect(1050,400,50,200);
    fill(0, 128, 0);
    triangle(1065, 300, 975, 550, 1165, 550);
	

    //canyon
	noStroke();
	stroke(88, 35, 15);
    strokeWeight(23); 
    fill(80, 110, 30);
    line(180, 611, 190, 640);
	line(190,640,150,667);
	line(150,667,175,720);
	line(175,720,125,795);


    //collectable item(apple)
	noStroke();
	fill(180,0,0);
    ellipse(400,600,50,50);
    fill(0,200,0);
    triangle(400,580,390,570,410,570);
    fill(180,0,0);
    ellipse(465,600,50,50);
    fill(0,200,0);
    triangle(465,580,455,570,475,570);
    
	
}
