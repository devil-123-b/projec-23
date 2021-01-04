var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var line;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	line1Sprite = createSprite(width/2, height-60, 150,15);
	line1Sprite.shapeColor = "red";

	line2Sprite = createSprite(320,610,15,100);
	line2Sprite.shapeColor = "red";

	line3Sprite = createSprite(480,610,15,100);
	line3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 line1 = Bodies.rectangle(width/2, 620,100,15 {isStatic:true});
	 World.add(world, line1);
	
	 line2 = Bodies.rectangle(320, 610, 15, 100, {isStatic:true});
	 World.add(world, line2);

	 line3 = Bodies.rectangle(480, 610, 15, 100, {isStatic:true});
	 World.add(world, line3);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
// look at the hints in the documentand understand how to make the package body fall only press of the down arrow key
  Matter.body.setStatic(packageBody,false)
 }
}



