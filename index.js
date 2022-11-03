var readlineSync = require('readline-sync');

var score=0


function welcome(){

  var getUserName= readlineSync.question("what is your name")
  console.log("Welcome "+ getUserName + " to DO YOU KNOW me?");

}


var questions=[{
question : "what is favourite destination",
  answer: "ooty"
},
               {
                 question : "what is my favourite series?",
  answer: "silicon valley"
               },

                {
                 question : "which animal do I hate most?",
  answer: "dogs"
               },
               {
                 question : "who is my favourite actor?",
  answer: "Tom cruise"
               },
               {
                 question : "who is my role model?",
  answer: "Steve jobs"
               },
               {
                 question : "where is your hometown",
  answer: "tamilnadu"
               }
] 

function questionAnswer(question,answer){
var userAnswer=readlineSync.question(question)

if (userAnswer.toUpperCase() ===answer.toUpperCase()){
 console.log("right")
  score++
  
}
  else{
    console.log("answer wrong")
  }
  console.log("your score"+ score)
  

  
}

function parseQuestionAnswer(){
 for (var question of questions){
   
   questionAnswer(question.question,question.answer)
 }
  
}



function showScores(){

  console.log("your final score is " + score)



}

welcome()
parseQuestionAnswer()
showScores()