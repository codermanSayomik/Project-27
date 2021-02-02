
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,40,500,20)
	
	bobObject1 = new Bob(200,470,100)
	bobObject2 = new Bob(300,470,100)
	bobObject3 = new Bob(400,470,100)
	bobObject4 = new Bob(500,470,100)
	bobObject5 = new Bob(600,470,100)
	
	rope1= new Rope(bobObject1.body, roof.body, -100*2,0);
    rope2= new Rope(bobObject2.body, roof.body, -50*2,0);
    rope3= new Rope(bobObject3.body, roof.body, -0*2,0);
    rope4= new Rope(bobObject4.body, roof.body, 50*2,0);
    rope5= new Rope(bobObject5.body, roof.body, 100*2,0); 


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine)

  roof.display();
  
  bobObject1.display();
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() { 
	if (keyCode === UP_ARROW) 
	{ Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-100,y:-100}); } 
} 


