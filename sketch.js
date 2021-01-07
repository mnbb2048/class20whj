var tri,tri2;
function setup() {
  createCanvas(400,400);
  tri=createSprite(200,200,50,50);
  tri2=createSprite(300,200,50,50);
  tri.shapeColor="purple"
  tri2.shapeColor="purple"
}

function draw() {
  background(0); 
  tri.x=mouseX
  tri.y=mouseY
  if(tri.x-tri2.x<tri.width/2+tri2.width/2 && tri2.x-tri.x<tri2.width/2+tri.width/2
    &&tri.y-tri2.y<tri.height/2+tri2.height/2 && tri2.y-tri.y<tri2.height/2+tri.height/2){
    tri.shapeColor="red"
    tri2.shapeColor="red"
  }
  else{
    tri.shapeColor="purple"
    tri2.shapeColor="purple"  
  }
  drawSprites();
}