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
        question: "Which issue was a cause of the French Revolution?",
        choiceA: "ineffective rule of Napoleon Bonaparte ",
        choiceB: " nationalization of the Church ",
        choiceC: "outrage over the use of the guillotine by the Committee of Public Safety",
        choiceD: "demand of the Third Estate for more political power ",
        correct: "d"

    },
    {
        question: " Which geographic feature presented an obstacle to Simón Bolívar's forces?",
        choiceA: " Sahara Desert ",
        choiceB: "Andes Mountains ",
        choiceC: "Great Rift Valley ",
        choiceD: "Strait of Malacca",
        correct: "b" 
    },
    {
        question: "One major effect of Napoleon's rule of France was that it led to?",
        choiceA: "an increase in the power of the Roman Catholic Church ",
        choiceB: "massive emigration to the Americas ",
        choiceC: "trade agreements with Great Britain ",
        choiceD: "a restoration of political stability",
        correct: "d"   
    },
    {
        question: "The struggles for political independence in Latin America during the early 1800s were most directly influenced by the…",
        choiceA: "Berlin Conference ",
        choiceB: "doctrine of liberation theology ",
        choiceC: "writings of Count Camillo di Cavour.",
        choiceD: "American and French Revolutions .",
        correct: "d"   
    },
    {
        question: "The Enlightenment and the American Revolution were both major influences on 19th century uprisings in...",
        choiceA: " Latin America",
        choiceB: "the Middle East",
        choiceC: "Vietnam ",
        choiceD: "Japan",
        correct: "a"   
    },
    {
        question: "One political objective of both Otto von Bismarck and Giuseppe Garibaldi was to ",
        choiceA: "overthrow divine right monarchies ",
        choiceB: "unify their nations",
        choiceC: "establish communist systems ",
        choiceD: "form an alliance with Great Britain",
        correct: "b"   
    },
    {
        question: "Which individual is associated with the phrase blood and iron as related to the unification of Germany? ",
        choiceA: "Otto von Bismarck ",
        choiceB: "Giuseppe Garibaldi ",
        choiceC: "Kaiser Wilhelm II  ",
        choiceD: "Count Camillo di Cavour",
        correct: "a"   
    }, 
    {
        question: "“Not by democracy or liberal standards will our goal be achieved but by blood and iron. Then we will be successful, no nation is born without the traumatic experience of war.” — Otto von Bismarck: This statement was used to justify a policy of  ",
        choiceA: "ethnocentrism ",
        choiceB: "militarism ",
        choiceC: "Containment  ",
        choiceD: "appeasement",
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


