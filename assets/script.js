const startButton = document.getElementById("start-btn")
const infoPage = document.getElementById("quiz-title")
const introInfo = document.getElementById("intro-page")
const questionContainerElement = document.getElementById("question-container")


startButton.addEventListener("click", startQuiz)


// Start Quiz when start button is clicked.
function startQuiz(){
    infoPage.classList.add("hide")
    introInfo.classList.add("hide")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

// Setting next question.
function setNextQuestion(){

}

// What happens when we select an answer.
function selectAnswer(){

}

// Set of available questions.
let questions = [
    {
    question: "Which company developed JavaScript?",
    answers: [
        {text: "Netscape", correct: true},
        {text: "Windows", correct: false},
        {text: "Apple", correct: false},
        {text: "Google", correct: false},
    ]},

    {
    question: "What are the two basic groups of datatypes in JavaScript?",
    answers: [
        {text: "True & False", correct: false },
        {text: "let and const", correct: false },
        {text : "Semantic & Global", correct: false },
        {text: "Primitive & Reference", correct: true },
        
    ]},

    {
    question: "What operator is used to assign properties to objects?",
    answers: [
        {text: "==", correct: false},
        {text: "=", correct: true},
        {text: "===", correct: false},
        {text: "++", correct: false},
    ]},

    {
    question: "What is a type of Pop up box?",
    answers: [
        {text: "Prompt", correct: true},
        {text: "Form", correct: false},
        {text: "Card", correct: false},
        {text: "Container", correct: false},
    ]},

    {
    question: "What is NULL in JS?",
    answers: [
        {text: "A type of class", correct: false},
        {text: "used to render text in console", correct: false},
        {text: "A value used to represent no value or no object", correct: true},
        {text: "is a void property", correct: false},
    ]},
    
    {
        question: "What do you use to convert a string to an integer in JS?",
    answers: [
        {text: "the concat attribute", correct: false},
        {text: "parseInt()", correct: true},
        {text: "the html file", correct: false},
        {text: "the DOM", correct: false},
    ]},
    
    {
        question: "What do you use to add commets in JS?",
        answers: [
            {text: "git commit -m", correct: false},
        {text: "= 'String Comment'", correct: false},
        {text: "<!-- Comment Text -->", correct: false},
        {text: "// Comment Text", correct: true},
    ]},
]