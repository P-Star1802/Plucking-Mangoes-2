
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var tree_Object,stone_Object,ground_Object,launcher_Object;
var mango1, mango2, mango3, mango4, mango5 , mango6, mango7;
var stone;
var elastic;
var world, boy;


function preload()
{
  boy = loadImage("boy.png");
}

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  mango1 = new Mango(1100,100,30);
  mango2 = new Mango(1000,100,30);
  mango3 = new Mango(1000,200,30);
  mango4 = new Mango(1200,130,30);
  mango5 = new Mango(1100,200,30);
  mango6 = new Mango(1250,200,30);
  mango7 = new Mango(900,200,30);
  stone = new Stone(200,340,30);

  tree_Object = new tree(1050,580)
  ground_Object = new ground(width/2,600,width,20);
  elastic =  new Elastic(stone.body,{x:235,y:420});

  Engine.run(engine)
}


function draw() 
{
  background(255);

  image(boy,200,340,200,300);

  Engine.update(engine);

elastic.display();
tree_Object.display();
mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();
mango6.display();
mango7.display();
stone.display(); 
ground_Object.display();
detectCollision(stone,mango1);
detectCollision(stone,mango2);
detectCollision(stone,mango3);
detectCollision(stone,mango4);
detectCollision(stone,mango5);
detectCollision(stone,mango6);
detectCollision(stone,mango7);

fill(0);
textSize(20);
text("Press spacebar to get another stone to throw",50,50,400);
}

function mouseDragged()
{
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  elastic.fly();
}

function detectCollision(stone,mango){
 mangoBodyPosition = mango.body.position;
 stoneBody.position = stone.body.position;

 var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y);
 if(distance<=mango.r + stone.r){
        Matter.Body.setStatic(mango.body,false);
 }
}

function keyPressed(){
  if(keyCode===32){
    Matter.body.setPosition(stone.body,{x:235,y:420});
    elastic.attach(stone.body);
  }
}















