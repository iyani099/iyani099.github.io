const question = document.getElementById("question");
const questionNumber = document.getElementById("questionNumber");
const timer = document.getElementById("timer")
const scoreText = document.getElementById("score")
const answerContainer = document.getElementById("answerContainer")
const results = document.getElementById("results")
const backToUnit = document.getElementById("backToUnit")
const math = require("math.js")



const choiceA = document.getElementById("a");
const choiceB = document.getElementById("b");
const choiceC = document.getElementById("c");
const choiceD = document.getElementById("d");

let count = 75;


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
        choiceB: "ones from a higher power than the ruler himself.",
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
        question: "•Maize and potatoes were grown in Europe. •Millions of Africans suffered during the Middle Passage. •Smallpox had devastating effects on indigenous peoples. •Spanish language is used in much of Latin America. Which global interaction is illustrated by these statements? ",
        choiceA: " Silk Road trade",
        choiceB: "Crusades ",
        choiceC: " Columbian Exchange ",
        choiceD: "Scramble for Africa",
        correct: "c"   
    },
    {
        question: "The success of the triangular trade system depended on increasing",
        choiceA: "political independence of the Caribbean nations ",
        choiceB: " emphasis on free trade in European nations ",
        choiceC: " slave trade in the Western Hemisphere ",
        choiceD: " industrialization of the South American colonies",
        correct: "c"   
    },
    {
        question: "Which statement describes an impact of the Columbian exchange on the lives ofEuropeans?",
        choiceA: "The combination of new products and ideas promoted economic growth.",
        choiceB: " Native Americans immigrated to Europe and competed with Europeans for jobs.",
        choiceC: " Millions of Europeans were killed by new American diseases",
        choiceD: "Introduction of the Native American religions resulted in the decline of the Roman Catholic Church.",
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
        

const lastQuestionIndex = questions.length;
let runningQuestionIndex = math.floor((math.random()* questions.length));
let questionsAnswered = 0;

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
        count = 75;
        runningQuestionIndex = math.floor((math.random()* questions.length));
        questionsAnswered ++;
        if(runningQuestionIndex + 1 < lastQuestionIndex){
            renderQuestion()
        }
        else{
            questionsAnswered = lastQuestionIndex;
        }
         
    }
    if(questionsAnswered == lastQuestionIndex){
        count = 75;
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
    count = 75;
    if(answer == questions[runningQuestionIndex].correct ){
        score ++;
        scoreText.innerHTML = "Score: " + score;
    }
    else{
        score += 0;
    }
    if(questionsAnswered + 1 < lastQuestionIndex ){
        runningQuestionIndex = math.floor((math.random()* questions.length));;
        renderQuestion()
        console.log(runningQuestionIndex)
        console.log(lastQuestionIndex)
    }
    else{
        questionsAnswered = lastQuestionIndex
        console.log(runningQuestionIndex)
        console.log(lastQuestionIndex)
        endQuiz()
    }
}

function endQuiz(){
    if(questionsAnswered == lastQuestionIndex){
        answerContainer.style.display = "none"
        backToUnit.style.display = "block"
        results.innerHTML = "Final Score: " + score + "/" + questions.length;
        console.log("end quiz")
        question.style.display = "none"

        
    }
}

startQuiz()


