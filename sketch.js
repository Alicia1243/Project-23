const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //create Player Base and Computer Base Object
  Player = new player(x = PlayerBase.x, windowHeight/2 + 15, 3, 5);
  PlayerBase = new playerBase(windowWidth + 200, windowHeight/2, 5, 8);
 ComputerPlayer = new computerPlayer(x = ComputerBase.x, windowHeight/2 + 15, 3, 5);
 ComputerBase = new computerBase(windowWidth - 200, windowHeight/2, 5 ,8);

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
  display(computerBase);
  setImage(computerBase);
  
  display(playerBase);
  setImage(playerBase);

  display(player);
  setImage(player);

  display(computerPlayer);
  setImage(computerPlayer);

   //display Player and computerplayer



}
