const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world;
var ground;
var ground_options;
var ball;
var ball_options;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  ground_options = {
    isStatic : true
  }

  ball_options = {
    restitution : 1.0
  }

  ground = Bodies.rectangle(400,350,200,20,ground_options);
  ball = Bodies.circle(400,180,20,ball_options);

  World.add(world,ground);
  World.add(world,ball); 
  
  console.log(ground);

}

function draw() {
  background("black");  

  Engine.update(engine);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,200,20);

  ellipseMode(CENTER);
  ellipse(ball.position.x,ball.position.y,20);

  drawSprites();
}

