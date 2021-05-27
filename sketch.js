const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function preload() {
    
}

function setup(){
var canvas = createCanvas(800,400);
engine = Engine.create();
world = engine.world;

ground = new Ground(600,400,1200,20)
circle = new Circle(150,200,30) 
launcher = new Launcher(circle.body,{x:150,y:150})
tile = new Tile(500,350,100,100)
tile1 = new Tile(600,350,100,100)
tile2 = new Tile(700,350,100,100)
tile3 = new Tile(500,250,100,100)
tile4 = new Tile(600,250,100,100)
tile5 = new Tile(700,250,100,100)
tile6 = new Tile(500,150,100,100)
tile7 = new Tile(600,150,100,100)
tile8 = new Tile(700,150,100,100)
}

function draw(){
background("grey")
Engine.update(engine)

circle.display();
ground.display();
launcher.display(); 
tile.display();
tile1.display();
tile2.display();
tile3.display();
tile4.display();
tile5.display();
tile6.display();
tile7.display();
tile8.display();
}

function mouseDragged() {
    Matter.Body.setPosition(circle.body,{x:mouseX,y:mouseY})
  }