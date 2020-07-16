var ball;
var boxbase,boxleft,boxright,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 300);

	var options={restitution:0.8}


	engine = Engine.create();
	world = engine.world;


	ball=Bodies.circle(200,100,20,options);
	World.add(world,ball);
	
	
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)



	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	// World.add(world, ground);
	 
	boxbase=createSprite(600,250,200,20)
	boxbase.shapeColor="red"

	boxright=createSprite(700,225,20,70)
	boxright.shapeColor="red"

	boxleft=createSprite(500,225,20,70)
	boxleft.shapeColor="red"


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  ellipse(ball.position.x, ball.position.y,50,50)
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body)
	}
}

