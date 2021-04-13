var bg ;
var bgImg;
var ball,ballImg;
var player1,player1Img;
var player2,player2Img;

function preload(){
  bgImg = loadImage("football bg.jpg");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(bgImg);  
  drawSprites();
}