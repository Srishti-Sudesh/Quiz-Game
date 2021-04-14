class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here");
    this.input2 = createInput("Enter Correct Option No.");
    this.button = createButton('Submit');
    this.question = createElement('h2');
    this.option1 = createElement('h3');
    this.option2 = createElement('h3');
    this.option3 = createElement('h3');
    this.option4 = createElement('h3');
    this.note = createElement('h4');
    this.wait = createElement('h2');
  }

  display(){
    this.title.html("My Quiz");
    this.title.position(440, 10);

    this.question.html("Question:- What starts and ends with the letter ‘E’, but has only one letter? " );
    this.question.position(160, 120);
    this.option1.html("1: Everyone " );
    this.option1.position(160, 160);
    this.option2.html("2: Envelope" );
    this.option2.position(160, 185);
    this.option3.html("3: Estimate " );
    this.option3.position(160, 210);
    this.option4.html("4: Example" );
    this.option4.position(160, 235);

    this.note.html("NOTE: This quiz requires 2 contestants")
    this.note.position(380, 400);

    this.input1.position(280, 330);
    this.input2.position(480, 330);
    this.button.position(440, 360);

    this.button.mousePressed(()=>{
      this.title.hide();
      this.input1.hide();
      this.question.hide();
      this.option4.hide();
      this.option3.hide();
      this.option2.hide();
      this.option1.hide();
      this.input2.hide();
      this.button.hide();
      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      this.wait.html("Waiting for 2nd contestant to answer..." );
      this.wait.position(340, 10);
    });
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
    this.question.hide();
    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();
    this.note.hide();
    this.wait.hide();

  }

}
