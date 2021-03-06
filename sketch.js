const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object;
var ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: false,
        restituion :1
    }

   object= Bodies.rectangle(200,390,200,20,object_options);
    World.add(world,object);
   ground_options = {
       isStatic : true
   }
  
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(world,object);
   


    console.log(object);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(object.position.x,object.position.y,50,50);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,200,20);
}
