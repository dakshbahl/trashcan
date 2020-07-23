
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   ellipse1 = new Ball(100, 350, 35)
   rect1 = new Box(650, 600, 20, 100)
   rect2 = new Box(475, 600, 20, 100)
   rect3 = new Box(400, 675, 800, 20)
   rect4 = new Box(562, 650, 195, 20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  rect4.display();
  ellipse1.display();
  
 
  drawSprites();
 
}



	





