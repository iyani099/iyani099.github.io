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
        question: "One reason	the	Fascist	governments	of	Benito Mussolini	and	Adolf	Hitler	came	to	power	in	Italy and Germany	was	that these nations",
        choiceA: "were	threatened	by	the	United	States",
        choiceB: "supported	civil	liberties	for	all",
        choiceC: "failed to	join the League	of	Nations",
        choiceD: " faced economic and	political difficulties",
        correct: "d"

    },
    {
        question: " Which	type of	political	system	did	V.	I.	Lenin, Adolf	Hitler,	and	Benito	Mussolini	establish in their	countries?",
        choiceA: "constitutional	monarchy",
        choiceB: "totalitarianism",
        choiceC: "representative democracy",
        choiceD: "theocracy",
        correct: "b" 
    },
    {
        question: "One similarity in the unification of Italy, the Zionist movement, and the breakup of the Ottoman Empire was that each was influenced by ",
        choiceA: " humanism ",
        choiceB: "polytheism",
        choiceC: "nationalism ",
        choiceD: " imperialism",
        correct: "c"   
    },
    {
        question: "The policy of appeasement helped cause World War II because this policy",
        choiceA: "reduced the armaments of major European powers",
        choiceB: " gave too much power to the United Nations",
        choiceC: " increased sea trade between England and the United States",
        choiceD: " allowed the aggressive actions of Germany to go unchecked.",
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

