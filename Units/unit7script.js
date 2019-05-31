const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")
const scoreText = document.getElementById("score")
const answerContainer = document.getElementById("answerContainer")

const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 75;


let TIMER;

let score = 0;



let questions = [
    {
        question: "What was the main goal of the Truman Doctrine",
        choiceA: "Elimination of communism",
        choiceB: "Implementation of the Domino Theory.",
        choiceC: "Containment of communism",
        choiceD: "Reconstruction of Western Europe after World War",
        correct: "c"

    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "" 
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""   
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""   
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: "c"   
    },
    {
        question: "",
        choiceA: "",
        choiceB: "",
        choiceC: "",
        choiceD: "",
        correct: ""   
    } 
]
const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex]

    question.innerHTML = q.question ;
    questionNumber.innerHTML = "Question: " + (runningQuestionIndex+1)
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;


}

function renderCount(){
    if(count >= 0 && runningQuestionIndex < (lastQuestionIndex + 1)){
        timer.innerHTML = "Time:" + count
        count--;
        
    }
    else{
        count = 75;
        runningQuestionIndex ++;
        renderQuestion() 
    }
    
}


function startQuiz(){
    renderQuestion()
    renderCount()
    TIMER = setInterval(renderCount, 1000)
    scoreText.innerHTML = "Score: " + score
}

function checkAnswer(answer){
    count = 75;
    if(answer == questions[runningQuestionIndex].correct ){
        score ++;
        scoreText.innerHTML = "Score: " + score;
    }
    else{
        score += 0;
    }
    if(runningQuestionIndex < lastQuestionIndex){
        runningQuestionIndex ++;
        renderQuestion()
    }
}

function endQuiz(){
    if(runningQuestionIndex >= lastQuestionIndex){
        answerContainer.style.display = "none"
    }
}
endQuiz()
startQuiz()

