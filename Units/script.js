const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")
const scoreText = document.getElementById("score")
const answerContainer = document.getElementById("answerContainer")

const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 15;


let TIMER;

let score = 0;



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
    },
    {
        question: "Under mercantilism, colonies…",
        choiceA: "had economic freedom",
        choiceB: "existed solely for the benefit of their governing country",
        choiceC: "colonies shared equally in the wealth of their governing countries",
        choiceD: "colonies could only import from their governing countries, but could export all over Europe",
        correct: "b"   
    },
    {
        question: "One similarity between the European concept of divine right and the Chinese concept of Mandate of Heaven is the idea that a leader's power",
        choiceA: "is an inherited right that cannot be taken away.",
        choiceB: "omes from a higher power than the ruler himself.",
        choiceC: "can be challenged by his subjects.",
        choiceD: "should be limited.",
        correct: "a"   
    },
    {
        question: "Who held the most power before the enlightenment era?",
        choiceA: "Nobility",
        choiceB: "The People",
        choiceC: "Clergy/ Church",
        choiceD: "All power was equally distributed",
        correct: "c"   
    },
    {
        question: "Which enlightenment thinker said that all humans have the right to “life liberty and property”",
        choiceA: "John Locke",
        choiceB: "Montesquieu",
        choiceC: "Mary Wollstonecraft",
        choiceD: "Voltaire",
        correct: "a"   
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
    if(count >= 0 && runningQuestionIndex < lastQuestionIndex){
        timer.innerHTML = "Time:" + count
        count--;
        
    }
    else{
        count = 10;
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
    count = 10;
    if(answer == questions[runningQuestionIndex].correct && score < ((lastQuestionIndex+1)-runningQuestionIndex)){
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

startQuiz()

