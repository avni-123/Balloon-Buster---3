var ground, groundimage;

var pinkballoon, pinkballoonimage;

var blueballoon, blueballoonimage;

var redballoon, redballoonimage;

var greenballoon, greenballoonimage;

var bow, bowimage;

var arrow, arrowimage;

function preload() {

  groundimage = loadImage("background0.png");

  pinkballoonimage = loadImage("pink_balloon0.png");

  blueballoonimage = loadImage("blue_balloon0.png");

  redballoonimage = loadImage("red_balloon0.png");

  greenballoonimage = loadImage("green_balloon0.png");

  bowimage = loadImage("bow0.png");

  arrowimage = loadImage("arrow0.png");

}

function setup() {
  createCanvas(600, 600);
  background("lightgreen");

  //add code here
  ground = createSprite(300, 300);
  ground.addImage("groundimage", groundimage);
  ground.velocityX = -9;
  ground.scale = 3;

  bow = createSprite(550, 300);
  bow.addImage("bowimage", bowimage);
  bow.scale = 1.5;

}

function draw() {
  pinkBalloon();

  redBalloon();

  blueBalloon();

  greenBalloon();

  //set background
  background(0);

  //console.time(frameCount);

  //create endless ground
  if (ground.x < 0) {
    ground.x = 550;
  }

  bow.y = World.mouseY;

  //release arrow when space key is pressed
  if (keyDown("space")) {
    var arrow = createArrow();
    arrow.addImage(arrowimage);
    arrow.y = bow.y;
  }

  if (keyDown("space")) {
    arrow.addImage(arrowimage);
    arrow.y = bow.y;
  }

  drawSprites();
}

//creating arrows for the bow
function createArrow() {
  arrow = createSprite(360, 100, 5, 10);
  arrow.velocityX = -5;;
  arrow.scale = 0.5;
  return arrow;
}

//creating pinkballoon
function pinkBalloon() {
  if (frameCount % 300 === 0) {
    pinkballoon = createSprite(0, 10);
    pinkballoon.y = Math.round(random(5, 600));
    //console.log(pinkballoon.y);
    pinkballoon.addImage("pinkballoonimage", pinkballoonimage);
    pinkballoon.scale = 1.2;
    pinkballoon.velocityX = 4.5;
    pinkballoon.lifetime = 200;
  }
}

//creating redBalloon
function redBalloon() {
  if (frameCount % 400 === 0) {
    redballoon = createSprite(0, 100);
    redballoon.y = Math.round(random(80, 400));
    //console.log(redballoon.y);
    redballoon.addImage("redballoonimage", redballoonimage);
    redballoon.scale = 0.1;
    redballoon.velocityX = 3;
    redballoon.lifetime = 200;
  }
}

function blueBalloon() {
  if (frameCount % 500 === 0) {
    blueballoon = createSprite(0, 80);
    blueballoon.y = Math.round(random(10, 500));
    //console.log(blueballoon.y);
    blueballoon.addImage("blueballoonimage", blueballoonimage);
    blueballoon.scale = 0.1;
    blueballoon.velocityX = 2.5;
    blueballoon.lifetime = 200;
  }
}

function greenBalloon() {
  if (frameCount % 200 === 0) {
    greenballoon = createSprite(0, 100);
    greenballoon.y = Math.round(random(5, 600));
    //console.log(greenballoon.y);
    greenballoon.addImage("greenballoonimage", greenballoonimage);
    greenballoon.scale = 0.1;
    greenballoon.velocityX = 4;
    greenballoon.lifetime = 200;
  }
}