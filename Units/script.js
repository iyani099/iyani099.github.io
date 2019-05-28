const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")

const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 10;


let TIMER;




let questions = [
    {
        question: "________ Is the blending and mixing of of cultures. Adding one culture to another.",
        choiceA: "The Columbian Exchange",
        choiceB: "African Slave Trade",
        choiceC: "Melting Pot",
        choiceD: "Cultural Defusion",
        correct: "d"

    },
    {
        question: " _______ the ruling empire of Japan during the first global age (18th Century).",
        choiceA: "Japanese Edict",
        choiceB: "Qin Dynasty",
        choiceC: "Tokugawa Shogunate",
        choiceD: "Mughal Empire",
        correct: "c" 
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
    if(count > 0){
        timer.innerHTML = count
        count--;
    }
    else{
        count = 10;
    }
}


function startQuiz(){
    renderQuestion()
    renderCount()
    TIMER = setInterval(renderCount, 1000)
}

startQuiz()

