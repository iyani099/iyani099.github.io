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
  new Questions("question1", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question2", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question3", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question4", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
  new Questions("question5", ["choice1", "choice2", "choice3", "choice4"], "correctAnswer")
]

var quiz = new quiz(questions);

populate();
