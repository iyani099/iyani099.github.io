const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")
const scoreText = document.getElementById("score")
const answerContainer = document.getElementById("answerContainer")

const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 30;


let TIMER;

let score = 0;



let questions = [
    {
        question: "The breakdown of traditions, increased levels of pollution, and the expansion of slums are negative aspects of",
        choiceA: "Militarism",
        choiceB: "Collectivism",
        choiceC: "pogroms",
        choiceD: "Urbanization",
        correct: "d"

    },
    {
        question: "A major reason the Industrial Revolution began in England was that England possessed",
        choiceA: "A smooth coastline",
        choiceB: "Abundant coal and iron resources",
        choiceC: "Many waterfalls",
        choiceD: "Numerous mountain ranges",
        correct: "b" 
    },
    {
        question: "During the 1800s, reform legislation passed in Great Britain, France, and Germany led to",
        choiceA: "Formation of zaibatsu, greater equality for men, and establishment of a banking system",
        choiceB: "Legalizing trade unions, setting minimum wages, and limiting child labor",
        choiceC: "Government-owned factories, establishment of five-year plans, and limits placed on immigration",
        choiceD: "Bans on overseas trade, mandatory military service, and universal suffrage for women",
        correct: "b"   
    },
    {
        question: "In the late 1800s, one response of workers in England to unsafe working conditions was to",
        choiceA: "Take control of the government",
        choiceB: "Return to farming",
        choiceC: "Set minimum wages",
        choiceD: "Form labor unions",
        correct: "d"   
    },
    {
        question: "A long-term result of the Industrial Revolution in Europe was",
        choiceA: "An increase in the number of small farms ",
        choiceB: "A decline in international trade",
        choiceC: "A general rise in the standard of living",
        choiceD: "A strengthening of the economic power of the nobility",
        correct: "c"   
    },
    {
        question: "The main cause of the mass starvation in Ireland during the 19th century was the",
        choiceA: "British blockade of Irish ports",
        choiceB: "Failure of the potato crop",
        choiceC: "War between Protestants and Catholics in northern Ireland ",
        choiceD: "Environmental damage caused by coal mining",
        correct: "b"   
    },
    {
        question: "Which statement is most supported by the ideas of Karl Marx?",
        choiceA: "Private ownership of businesses helps workers.",
        choiceB: "Industrialization benefits the wealthy and exploits the poor.",
        choiceC: "Countries should benefit from the wealth of their colonies.",
        choiceD: "Industrial capitalism allows workers and employers to work together for a common purpose.",
        correct: "b"     
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
        count = 30;
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
    count = 30;
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

