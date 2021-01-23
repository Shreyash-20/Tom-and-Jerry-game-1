
var garden,gardenImg;
var tom,tomImg1,tomImg2,tomImg3;
var jerry,jerryImg1,jerryImg2,jerryImg3;


function preload() {
    //load the images here
     gardenImg=loadImage("images/garden.png");
     tomImg1=loadAnimation("images/tomOne.png")
     tomImg2=loadAnimation("images/tomTwo.png","images/tomThree.png");
     tomImg3=loadAnimation("images/tomFour.png")
     jerryImg1=loadAnimation("images/jerryOne.png");
     jerryImg2=loadAnimation("images/jerryTwo.png","images/jerryThree.png");
     jerryImg3=loadAnimation("images/jerryFour.png")
     
     
     
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   tom=createSprite(870,600,10,10);
   tom.addAnimation("sleeping",tomImg1);
   tom.scale=0.2;
  


   jerry=createSprite(200,600,10,10);
   jerry.addAnimation("standing",jerryImg1);
   jerry.scale=0.2;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    
    if(tom.x-jerry.x<tom.width/2-jerry.width/2){
      tom.velocityX=0;
      tom.x=300;
      tom.addAnimation("tom die",tomImg3);
      tom.scale=0.2;
      tom.changeAnimation("tom die",tomImg3);
      jerry.addAnimation("jerry",jerryImg3);
      jerry.scale=0.15;
      jerry.changeAnimation("jerry",jerryImg3);



}

    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

    if(keyCode==LEFT_ARROW){ 
      tom.velocityX=-5; 
      tom.addAnimation("tomRunning",tomImg2);
      tom.changeAnimation("tomRunning");


      jerry.addAnimation("jerryTeasing",jerryImg2);
      jerry.frameDelay=25;
      jerry.changeAnimation("jerryTeasing",jerryImg3);
  
    }
  }