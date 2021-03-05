
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var treeObj, stoneObj,groundObject, launcherObject;
var mango1, mango2, mango3, mango4, mango5, mango6, maango7, mango8, mango9, mango10;
var world,boy,treeimg;

function preload(){
	boy=loadImage("images/boy.png");
	treeimg=loadImage("images/tree.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new Stone(228,425,25);
	mango1=new Mango(910,200,30);
	mango2=new Mango(975,220,30);
	mango3=new Mango(975,151,30);
	mango4=new Mango(1025,85,30);
	mango5=new Mango(1025,195,30);
	mango6=new Mango(1100,100,30);
	mango7=new Mango(1100,175,30);
	mango8=new Mango(1145,200,30);
	mango9=new Mango(1195,220,30);
	mango10=new Mango(1195,150,30);

	attach=new SlingShot(stoneObj.body,{x:235,y:420});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {

  background(230);
  
  fill("black");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);
  
  image(boy ,200,340,200,300);

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  drawSprites();
  
  stoneObj.display();
  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  groundObject.display();
}
function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	attach.fly();
}

function detectCollision(lstone,lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position
	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	if(distance<=lmango.r+lstone.r){
		Matter.Body.setStatic(lmango.body,false);
	}

}
 
function keyPressed(){
	if(keyCode===32){
		
		attach.attach(stoneObj.body)
	}
}