var garden,rabbit;
var gardenImg,rabbitImg;
var orangeleaf, redleaf, greenleaf, apple;
var olImage, rlImage, glImage, appleImage;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  olImage = loadImage("orangeleaf.png");
  rlImage = loadImage("redImage.png");
  appleImage = loadImage("apple.png");
  
}

function setup(){
  
  createCanvas(400,400);
  

garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  var num = Math.round(random(1,3));
  if (frameCount % 80 === 0){
    if (num === 1){
      createApple();
    }
    else if (num === 2){
      createOrange();
    }
    else {
      createRed();
    }
  }


  drawSprites();
}

function createApple() {
  apple = createSprite(random(50,350),0);
  apple.addImage(appleImage);
  apple.velocityY = 4;
  apple.scale = 0.08;
  apple.lifetime = 100

}


function createRed() {
  redleaf = createSprite(random(50,350),0);
  redleaf.addImage(rlImage);
  redleaf.velocityY = 4;
  redleaf.scale = 0.08;
  redleaf.lifetime = 100
}

function createOrange(){
  orangeleaf = createSprite(random(50,350),0);
  orangeleaf.addImage(olImage);
  orangeleaf.velocityY = 4;
  orangeleaf.scale = 0.08;
  orangeleaf.lifetime = 100
}