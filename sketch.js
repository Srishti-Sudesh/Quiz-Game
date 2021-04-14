var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;

function preload(){
  bg1Img = loadImage("bg.jpg");
  bg2Img = loadImage("bg2.jpg");

}

function setup(){
  canvas = createCanvas(1000,500);
  database = firebase.database();
  quiz = new Quiz();
  //question = new Question();
  //contestant = new Contestant();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(bg1Img);
  drawSprites();

  if(contestantCount === 2){
    quiz.update(1);

  }
  if(gameState === 1){
    clear();
    quiz.play();

  }
}
