const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")
const scoreText = document.getElementById("score")
const answerContainer = document.getElementById("answerContainer")
const results = document.getElementById("results")
const backToUnit = document.getElementById("backToUnit")


const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 30;


let TIMER;

let score = 0;







let questions = [
    {
        question: "The term militarism can best be defined as",
        choiceA: " loyalty to a nation or ethnic group",
        choiceB: "buildup of armaments in preparation for war",
        choiceC: "avoidance of military involvement in civil wars",
        choiceD: " control of territories for economic and political gain",
        correct: "b"

    },
    {
        question: " What was a major cause of World War I?",
        choiceA: "rebellions in colonial lands in Africa and Asia",
        choiceB: "expansion of communism into western Europe",
        choiceC: "militarism in the nations of Europe",
        choiceD: "inability of the League of Nations to keep the peace",
        correct: "c" 
    },
    {
        question: "The Treaty of Versailles angered many Germans after World War I because the treaty ",
        choiceA: " divided Germany into Communist and non-Communist zones ",
        choiceB: "made Germany restore its emperor ",
        choiceC: "required all German-speaking Europeans to return to Germany",
        choiceD: " forced Germany to pay large war reparations",
        correct: "d"   
    },
    {
        question: "The harsh terms included in the treaties ending World War I have been used to explain the",
        choiceA: "Armenian massacre in Turkey ",
        choiceB: "Fascist Revolution in Spain ",
        choiceC: "Bolshevik Revolution in Russia ",
        choiceD: "rise of Nazism in Germany",
        correct: "d"   
    },
    {
        question: "Japan’s invasion of China in 1937 and Germany’s attack on Poland in 1939 led directly to",
        choiceA: "the beginning of World War II in Asia and Europe",
        choiceB: " a meeting at Yalta between the United States and the Soviet Union",
        choiceC: " a conference at Munich for European leaders",
        choiceD: "All power was equally distributed",
        correct: "a"   
    },
    {
        question: "The Nuremberg Trials are considered an important event in the 20th century because they",
        choiceA: "brought an end to genocide",
        choiceB: " condemned the use of nuclear weapons",
        choiceC: ") ruled on provisions for the postwar occupation of Germany",
        choiceD: "established principles of responsibility for human rights violations",
        correct: "d"   
    } 
]

const lastQuestionIndex = questions.length;
let runningQuestionIndex = 0;

function renderQuestion(){
    let q = questions[runningQuestionIndex]

    question.innerHTML = q.question ;
    questionNumber.innerHTML = "Question: " + (runningQuestionIndex+1) + "/" + (lastQuestionIndex)
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
        if(runningQuestionIndex + 1 < lastQuestionIndex){
            renderQuestion()
        }
        else{
            runningQuestionIndex = lastQuestionIndex;
        }
         
    }
    if(runningQuestionIndex == lastQuestionIndex){
        count = 30;
        count -= 0;
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
    if(runningQuestionIndex + 1 < lastQuestionIndex ){
        runningQuestionIndex ++;
        renderQuestion()
        console.log(runningQuestionIndex)
        console.log(lastQuestionIndex)
    }
    else{
        runningQuestionIndex = lastQuestionIndex
        console.log(runningQuestionIndex)
        console.log(lastQuestionIndex)
        endQuiz()
    }
}

function endQuiz(){
    if(runningQuestionIndex == lastQuestionIndex){
        answerContainer.style.display = "none"
        backToUnit.style.display = "block"
        results.innerHTML = "Final Score: " + score + "/" + questions.length;
        console.log("end quiz")
        question.style.display = "none"

        
    }
}

startQuiz()


