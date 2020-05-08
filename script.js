const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById
('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById
('answer-buttons')

 let  shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log('started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
   clearStatusClass(document.body  )
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
     
}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}
function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
const questions = [
    { question:'The combination of sound that is agreeable to the hear is called?',
    answers:[
       {text: 'music',correct:true },
       {text: 'sound',correct:false },
       {text:'noise',correct:false},
       {text:'jazz',correct:false}
       ]
    },
    { question:'poco-a-poco means?',
    answers:[
       {text: 'very good',correct:false},
       {text: 'nice',correct:false },
       {text:'little by little',correct:true},
       {text:'just fine',correct:false}
       ]
    },
    { question:'The following are musical string instrument except?',
    answers:[
       {text: 'violin',correct:false },
       {text: 'drum',correct:true},
       {text:'cello',correct:false},
       {text:'guitar',correct:false}
       ]
    },
    { question:' The trumpet is categorized under what type of instrument?',
    answers:[
       {text: 'percussion',correct:false },
       {text: 'wood wind',correct:false },
       {text:'string',correct:false},
       {text:'brass',correct:true}
       ]
    },
    { question:' The art of reading a sheet of music on a staff is called?',
    answers:[
       {text: 'sight seeing',correct:false },
       {text: 'sight reading',correct:true },
       {text:'sight playing',correct:false},
       {text:'sight libbing',correct:false}
       ]
    }
]















