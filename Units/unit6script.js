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
        question: "Which leader is most closely associated with the rise of fascism in Italy prior to World War II?",
        choiceA: " Ho Chi Minh ",
        choiceB: "  Winston Churchill ",
        choiceC: " Mao Zedong",
        choiceD: "  Benito Mussolini.",
        correct: "d"   
    },
    {
        question: "The Nuremberg Trials are considered an important event in the 20th century because they",
        choiceA: "  brought an end to genocide ",
        choiceB: "   condemned the use of nuclear weapons",
        choiceC: " ruled on provisions for the postwar occupation of Germany",
        choiceD: "  established principles of responsibility for human rights violations",
        correct: "d"   
    },
    {
        question: "The rise of fascism in Germany between World War I and World War II is often associated with the",
        choiceA: "promotion of ethnic diversity ",
        choiceB: " establishment of a strong parliamentary system",
        choiceC: " appeal of the doctrine of nonviolence",
        choiceD: " impact of the global economic depression",
        correct: "d"   
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

