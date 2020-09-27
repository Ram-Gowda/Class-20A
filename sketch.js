
var movingRect, fixedRect;




function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(300,100,50,50);
  movingRect.shapeColor = "blue";
}

function draw() {

  background("grey"); 
   
movingRect.y = World.mouseY;
movingRect.x = World.mouseX;

if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 
  && fixedRect.x - movingRect.x <  movingRect.width/2 + fixedRect.width/2 &&
  movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
  fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2 ) {
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}else {
  movingRect.shapeColor = "blue";
  fixedRect.shapeColor = "blue";
}
  drawSprites();
}

