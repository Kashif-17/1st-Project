var ball;


function setup() {
  createCanvas(400,400);
  ball = createSprite(150,30,70,20)
}

function draw() 
{
  background(30);
  if(keyDown("LEFT")){
    ball.x=ball.x-2;
  }
  if(keyDown("RIGHT")){
    ball.x=ball.x+2
  }
  if(keyDown("UP")){
    ball.y=ball.y-2
  }
  if(keyDown("DOWN")){
    ball.y=ball.y+2
  }
  drawSprites();

}









