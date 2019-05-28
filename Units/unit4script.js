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
        question: "One of the most important motives for the European “Scramble for Africa” in the late 1800s was that Africa provided a source of ",
        choiceA: "raw materials used in industry",
        choiceB: " free labor for the Americas ",
        choiceC: "technologically innovative practices",
        choiceD: "technologically innovative practices",
        correct: "a"

    },
    {
        question: "•France gained control over Algeria. •Great Britain gained control over North America. •Portugal gained control over Angola. What do these statements describe?",
        choiceA: "imperialism ",
        choiceB: "revolution ",
        choiceC: " alliances ",
        choiceD: "totalitarianism",
        correct: "a" 
    },
    {
        question: "During the 19th century, European nations established spheres of influence in China mainly to",
        choiceA: " introduce Islam to the Chinese people",
        choiceB: "profit from the ivory trade",
        choiceC: "gain commercial advantages in China",
        choiceD: "obtain human rights for Chinese citizens",
        correct: "c"   
    },
    {
        question: "A major goal of both the Sepoy Mutiny in India and the Boxer Rebellion in China was to ",
        choiceA: "rid their countries of foreigners.",
        choiceB: "expand their respective territories .",
        choiceC: "receive international military support .",
        choiceD: "restore an absolute monarch to the throne.",
        correct: "a"   
    },
    {
        question: "The result of the Opium War in China was similar to the result of Commodore Perry’s expedition to Japan in that both events",
        choiceA: "increased Western trade and influence in Asia",
        choiceB: "established European colonies in China and Japan",
        choiceC: " promoted democratic governments in Asia",
        choiceD: "increased the economic isolation of China and Japan",
        correct: "a"   
    },
    {
        question: "A major argument used to support the building of the Suez and Panama Canals was that these waterways would ",
        choiceA: "shorten trade routes ",
        choiceB: " strengthen command economies",
        choiceC: " increase competition for trade ",
        choiceD: "promote the local economy",
        correct: "a"   
    }, 
    {
        question: "What was one impact of industrialization on Japan during the Meiji Restoration? ",
        choiceA: "Japan became more isolated from world affairs. ",
        choiceB: " Demand for natural resources increased.",
        choiceC: " Japan became a colonial possession of China",
        choiceD: "Traditional practices of Bushido were reintroduced.",
        correct: "b"   
    },
    {
        question: "Between the late 1800s and the end of World War II, Japan implemented a policy of imperialism mainly because Japan",
        choiceA: "admired the economic power of China",
        choiceB: " lacked coal, iron, and other important resources",
        choiceC: " wanted to unify the governments of East Asia  ",
        choiceD: " feared the expansion of Nazi Germany in the Pacific",
        correct: "a"   
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


