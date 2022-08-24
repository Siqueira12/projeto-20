
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

	bola = Bodies.circle(400,30,30)
	World.add(world,bola)

caixa = Bodies.rectangle(200,30,20,30)
World.add(world,caixa)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(bola.position.x,bola.position.y,30,30);
  rect(caixa.position.x,caixa.position.y,20,30);
  drawSprites();
 
}



