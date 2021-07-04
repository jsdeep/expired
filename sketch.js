var img1,img2,boat,sea;

function preload(){
img1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
img2=loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
 
  sea=createSprite(250,200,10,10);
  sea.addImage(img2);

boat=createSprite(200,200,20,20);
boat.addAnimation("jumping",img1);
boat.scale=0.3;
  
}

function draw() {
  background("blue");
 drawSprites();
 

//if (sea.x <0){
  //sea.x= sea.width/2
//}
}