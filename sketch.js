var fixedRect1, fixedRect2, fixedRect3,fixedRect4;
var movingSquare;
function setup() {
  createCanvas(600,600);
  fixedRect1=createSprite(590, 80, 22, 50);
  fixedRect2=createSprite(590, 210, 22, 50);
  fixedRect3=createSprite(590, 340, 22, 50);
  fixedRect4=createSprite(590, 470, 22, 50);
  movingSquare=createSprite(200,250,30,30);
  movingSquare.shapeColor="red";
  fixedRect1.debug=true;
  fixedRect2.debug=true;
  fixedRect3.debug=true;
  fixedRect4.debug=true;
  movingSquare.debug=true;
}

function draw() {
  background("black");  
  movingSquare.x=World.mouseX;
  movingSquare.y=World.mouseY;

  if(movingSquare.x - fixedRect1.x < fixedRect1.width/2 + movingSquare.width/2 && fixedRect1.x - movingSquare.x < fixedRect1.width/2 + movingSquare.width/2 && movingSquare.y - fixedRect1.y < fixedRect1.height/2 + movingSquare.height/2 && fixedRect1.y - movingSquare.y < fixedRect1.height/2 + movingSquare.height/2){
    movingSquare.shapeColor="red";
    fixedRect1.shapeColor="blue";

    
  }
  else{
    movingSquare.shapeColor="red";
    fixedRect1.shapeColor="grey";
  }

  if(movingSquare.x - fixedRect2.x < fixedRect2.width/2 + movingSquare.width/2 && fixedRect2.x - movingSquare.x < fixedRect2.width/2 + movingSquare.width/2 && movingSquare.y - fixedRect2.y < fixedRect2.height/2 + movingSquare.height/2 && fixedRect2.y - movingSquare.y < fixedRect2.height/2 + movingSquare.height/2){
    movingSquare.shapeColor="red";
    fixedRect2.shapeColor="green";

    
  }
  else{
    movingSquare.shapeColor="red";
    fixedRect2.shapeColor="grey";
  }

  if(movingSquare.x - fixedRect3.x < fixedRect3.width/2 + movingSquare.width/2 && fixedRect3.x - movingSquare.x < fixedRect3.width/2 + movingSquare.width/2 && movingSquare.y - fixedRect3.y < fixedRect3.height/2 + movingSquare.height/2 && fixedRect3.y - movingSquare.y < fixedRect3.height/2 + movingSquare.height/2){
    movingSquare.shapeColor="red";
    fixedRect3.shapeColor="pink";

    
  }
  else{
    movingSquare.shapeColor="red";
    fixedRect3.shapeColor="grey";
  }

  if(movingSquare.x - fixedRect4.x < fixedRect4.width/2 + movingSquare.width/2 && fixedRect4.x - movingSquare.x < fixedRect4.width/2 + movingSquare.width/2 && movingSquare.y - fixedRect4.y < fixedRect4.height/2 + movingSquare.height/2 && fixedRect4.y - movingSquare.y < fixedRect2.height/2 + movingSquare.height/2){
    movingSquare.shapeColor="blue";
    fixedRect4.shapeColor="pink";

    
  }
  else{
    movingSquare.shapeColor="red";
    fixedRect4.shapeColor="grey";
  }



  drawSprites();
}
