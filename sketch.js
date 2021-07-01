var bg, sleep, brush, gym, eat, drink, move, astronaut, bgSprite, edges;
var topWall,bottomWall,leftWall,rightWall;

function preload(){
bg = loadImage("iss.png");
sleep = loadImage("sleep.png");
brush = loadImage("brush.png");
gym = loadAnimation("gym11.png","gym12.png");
eat = loadAnimation("eat1.png","eat2.png");
drink = loadAnimation("drink1.png","drink2.png");
move = loadAnimation("move.png","move1.png");
bath = loadAnimation("bath1.png","bath2.png");
}
function setup() {
  createCanvas(800,400);
 bgSprite = createSprite(0,0,800,400);
 bgSprite.addImage("background",bg);
 bgSprite.scale = 0.5;
  astronaut = createSprite(300,230);
  astronaut.addImage("dhhdg",sleep);
  astronaut.scale = 0.1;

topWall = createSprite(0,0,900,5);
topWall.visible = false;
bottomWall = createSprite(0,400,900,5);
bottomWall.visible = false;
leftWall = createSprite(0,0,5,400);
leftWall.visible = false;
rightWall = createSprite(900,0,5,400);
rightWall.visible = false;
}

function draw() {
  background(255,255,255);  
  if(keyDown("up")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("m")){
   astronaut.velocityY = -1;
   astronaut.velocityX = 2;
  }
  if(keyDown("left")){
    astronaut.addAnimation("bath",bath);
    astronaut.changeAnimation("bath");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("right")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating");
  }
  if(keyDown("down")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming");
    astronaut.y = 200;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }
  if(keyDown("d")){
    astronaut.addAnimation("drinking",drink);
    astronaut.changeAnimation("drinking");
  }
  astronaut.bounceOff(topWall);
  astronaut.bounceOff(bottomWall);
  astronaut.bounceOff(leftWall);
  astronaut.bounceOff(rightWall);
  drawSprites();
}