class Quiz {
  constructor(){
    this.title2 = createElement('h1')
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
  }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    question.hide();
    background(bg2Img);
    this.title2.html("Result of the Quiz");
    this.title2.position(400, 10);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(150, 120);
    this.option1.html("1: Everyone " );
    this.option1.position(150, 150);
    this.option2.html("2: Envelope" );
    this.option2.position(150, 180);
    this.option3.html("3: Estimate " );
    this.option3.position(150, 210);
    this.option4.html("4: Example" );
    this.option4.position(150, 240);

    Contestant.getContestantInfo();

    if(allContestants !== undefined){
      var display_Answers = 370;
      fill("white");
      strokeWeight(2);
      stroke("black");
      textSize(20);
      text("NOTE: Contestants who answered correctly are highlighted in GREEN", 180, 330);
    }

    for(var plr in allContestants){
      var correctAns = "2";

      if(correctAns===allContestants[plr].answer){
        strokeWeight(3);
        stroke("green")
        fill("lime")
      }
      else{
        strokeWeight(4);
        stroke("maroon");
        fill("red")

      }
      display_Answers+=30;
      textSize(20);
      text(allContestants[plr].name + " :\t\t\t" + "option" + "\t\t" + allContestants[plr].answer, 400,display_Answers)
    }

    
  }

}
