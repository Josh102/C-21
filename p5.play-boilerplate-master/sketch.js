var fixedRect, movingRect;
var r1, r2, r3, r4

function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200,200,50,50);
  movingRect=createSprite(100,100,50,80);
  movingRect.shapeColor="red";
  fixedRect.shapeColor="red";

 r1 = createSprite(100,100,50,50);
 r2 = createSprite(200,100,50,50);
 r3 = createSprite(300,100,50,50);
 r4 = createSprite(400,100,50,50);

 r1.shapeColor="red"
 r2.shapeColor="red"
 r3.shapeColor="red"
 r4.shapeColor="red"
}

function draw() {
  background(0);  
  movingRect.x=mouseX;
  movingRect.y=mouseY;
  
  if(isTouching(movingRect,r3)){
    movingRect.width=10
    r3.shapeColor="cyan";
  }else{
    movingRect.width=50
    r3.shapeColor="red";
  }
  
  drawSprites();
}
