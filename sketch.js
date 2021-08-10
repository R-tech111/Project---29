const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var ground;
var stones = [];
var bridge;
var lWall,rWall;
var joinLink;




function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base (windowWidth / 2, windowHeight - 10, windowWidth, 20, true, "blue");
  for(var i = 0; i < 8 ;i++){
    var x = random(windowWidth /2 - 200, windowWidth /2 + 200)
    var y = random(0,150);
    var stone = new Stone(x,y,80,80);
    stones.push(stone);
  }

  bridge = new Bridge(20,{x:windowWidth /2 - 600, y:windowHeight/2 })
  lWall = new Base(300,windowHeight / 2 + 50,600,100,true,"yellow");
  rWall = new Base(windowWidth - 300,windowHeight /2 + 50,600,100,true,"yellow");
  joinPoint = new Base(windowHeight + 500, windowHeight /2 + 20 ,40,20,true,"yellow");
  joinLink - new Link(bridge,joinPoint);
  
}

function draw() {
  background(51);
  Engine.update(engine);

  for(var i = 0; i< 8; i++ ){
      stones[i].display();
  }

  ground.display();
  bridge.show();
  lWall.display();
  rWall.display();
  

  

}
