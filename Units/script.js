function populate(){
  if(quiz.isEnded()){
    //showScore();
  }
  else{
    //show Question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;
    
  }
}

var questions = [
  new Questions("question", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
]

var quiz = new quiz(questions);

populate();
