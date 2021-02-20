
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
canvas = createCanvas(1350, 720);

  engine = Engine.create();
	world = engine.world;

//Create the Bodies Here.
roofObject = new Roof(width/1.85,height/4,width/1.9,30);

bobDiameter=40;

startBobPositionX=width/2;
startBobPositionY=height/4+500;
bobObject1 = new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
bobObject2 = new Bob(startBobPositionX-bobDiameter*4,startBobPositionY,bobDiameter);
bobObject3 = new Bob(startBobPositionX,startBobPositionY,bobDiameter);
bobObject4 = new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
bobObject5 = new Bob(startBobPositionX+bobDiameter*4,startBobPositionY,bobDiameter);
bobObject6 = new Bob(startBobPositionX+bobDiameter*6,startBobPositionY,bobDiameter);

Engine.update(engine);
  }


function draw() {
  rectMode(CENTER);
  background("red");

  roofObject.display()

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  bobObject6.display()
}



