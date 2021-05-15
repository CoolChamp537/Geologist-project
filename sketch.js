const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var plane;
var rock;
var iron;
var bat;
var backgroundImg;

function preload(){
    backgroundImg = loadImage("Mine.jpg")
}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height+10,1200,20)
    hammer = new Hammer(10,100);
    rubber = new Rubber(900,450,25,25)
    rock = new Rock(1000,300)
    iron = new Iron(700,200)
    bat = new Bat(500,0)

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);

    hammer.display();
    rubber.display();
    rock.display();
    iron.display()
}