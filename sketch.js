
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var Paper, Ground, leftSide, bottomSide, rightSide;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Paper = new Paper(100,600,10);

	Ground = new Ground(400,600,800,20);
    
	leftSide = new Dustbin(550,620,800,20);
	bottom = new Dustbin(610,660,100,20);
	rightSide = new Dustbin(670,620,20,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();

  ground.display();

  leftSide.display();
  bottomSide.display();
  rightSide.display();
  

 
}



