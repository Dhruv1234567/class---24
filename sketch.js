const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground2,box1,box2,box3,box4,box5;
var pig1,pig2;
var BOMB;
var log1,log2,log3,log4;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
 // ball=Bodies.circle(200,100,15,{restitution:1});
 
  //World.add(world,ball);
  
 
  box1 = new box(700,320,70,70);
  box2 = new box(920,320,70,70);
  box3 = new box(700,240,70,70);
  box4 = new box(920,240,70,70);
  box5 = new box(810,160,70,70);
  pig1 = new pig(810,350);
  pig2 = new pig(810,220);
  BOMB=new bird(300,100);
  log1=new log(810,260,300,PI/2);
  log2=new log(810,180,300,PI/2);
  log3=new log(760,120,150,PI/7);
  log4=new log(870,120,150,-PI/7);
  ground2=new ground(600,390,1200,30);
  console.log(ground2.type);
}

function draw() {
  background("red");
  Engine.update(engine);
 //ellipseMode(RADIUS);
  //ellipse(ball.position.x,ball.position.y,15,15);
 ground2.display();
 box1.display(); 
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  pig1.display();
  pig2.display();
  BOMB.display();
  log1.display();
  log2.display();
  log3.display();
  log4.display();
}