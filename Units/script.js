const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const counter = document.getElementById("counter");

const questionTime = 10;
const guageWidth = 150;
const guageProgressUnit = guageWidth/questionTime;
let count = 0;
let TIMER;

const timeGuage = document.getElementById("timeGuage");

const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

const progress = document.getElementById("progress")

const scoreContainer = document.getElementById("scoreContainer")

const scoreDiv = document.getElementById("score")

let count = 0;

let questions = [
    {
        question: "Question 1",
        choiceA: "choice a",
        choiceB: "choice b",
        choiceC: "choice C",
        choiceD: "choice d",
        correct: "a"

    },
    {
        question: "Question 2",
        choiceA: "choice a",
        choiceB: "choice b",
        choiceC: "choice C",
        choiceD: "choice d",
        correct: "a" 
    }
]

const lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex]

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = "choice A"
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}
start.style.display = "none";
renderQuestion();
quiz.style.display = "block";
renderProgress();

function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex ++){
        progress.innerHTML += "<div class = 'prog' id = "+qIndex+ "></div>"; 
    }
}







