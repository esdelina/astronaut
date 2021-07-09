var bg,sleep, brush, gym, eat, bath, move;
var astronaut;

function preload(){
  bg= loadImage("imgs/iss.png");
  sleep = loadImage("imgs/sleep.png");
  brush = loadImage("imgs/brush.png");
  gym = loadImage("imgs/gym1.png","imgs/gym2.png");
  eat = loadImage("imgs/eat1.png","imgs/eat2.png");
  bath = loadImage("imgs/bath1.png","imgs/bath2.png");
 move = loadImage("imgs/move1.png","imgs/move2.png");
}

function setup() {
  createCanvas(800,400);
  


  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping", sleep);
  astronaut.scale = 0.1;
}

function draw() {
  background(bg);  
 


  textSize(18);
  fill("white")
  text("Instructions:",20, 35);
  textSize(14);
  text("Up Arrow = Brushing",20, 55);
  text("Down Arrow = Gymming",20, 70);
  text("Left Arrow = Eating",20, 85);
  text("Right Arrow = Bathing",20, 100);
  text("m key = Moving",20, 115);
  
  edges=createEdgeSprites();
  astronaut.bounceOff(edges);

  if(keyDown("UP_ARROW"))
  {
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  
  if(keyDown("DOWN_ARROW"))
  {
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 350;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }
  
  if(keyDown("LEFT_ARROW"))
  {
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.x = 150;
    astronaut.y = 350;
    astronaut.velocityX = 0.5;
    astronaut.velocityY = 0.5;

  }
  
  if(keyDown("RIGHT_ARROW"))
  {
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 300;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;

  }

  if(keyDown("m"))
  {
    astronaut.addAnimation("moving", move);
    astronaut.changeAnimation("moving");
    astronaut.velocityX = 1;
    astronaut.velocityY = 1;

  }

  drawSprites();
}