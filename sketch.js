const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,stand1;
var bird, slingShot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(500,270,250,15);
    stand2 = new Ground(1000,300,250,15)

    box1 = new Box(520,240,50,50);
    box2 = new Box(590,240,50,50);

    box3 = new Box(560,200,50,50);
    box4 = new Box(1090,240,50,50);

    box5 = new Box(1040,240,50,50);
    box6 = new Box(1065,160,50,50);

    bird = new Bird(100,100,40,40);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:100});
}

function draw(){
    background(0);
    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    stand1.display();
    stand2.display();

    box3.display();
    box4.display();

    box5.display();
    box6.display();

    bird.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}