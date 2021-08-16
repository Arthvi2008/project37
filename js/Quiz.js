class Quiz {
  constructor(){}

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
    background("yellow")
     textSize(30);
     text("Result of the Quiz", 345, 50);

     Contestant.getPlayerInfo();

     if(allContestants !== undefined){
       var display_position = 230;
       fill("blue")
       textSize(20);
     text("Note:", 130, 230);

       for(var plr in allContestants){
         var correctAnswer=(2)
         if (correctAnswer === allContestants[plr].answer){
           fill ("green")
         }
         else{
           fill ("red");
         }
 
         display_position+=20;
         textSize(15);
         text(allContestants[plr].name + ": " + allContestants[plr].answer, 250,display_position)
       }
     }




    //write code here to hide question elements

    //write code to change the background color here

    //write code to show a heading for showing the result of Quiz

    //call getContestantInfo( ) here


    //write condition to check if contestantInfor is not undefined

    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
