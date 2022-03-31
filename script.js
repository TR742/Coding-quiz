// Array of Questions for the quiz

let questionsArr = [
    {
        question: "This is the first question",
        options: ["First choice", "Second choice", "Third choice", "Fourth choice"],
        answer: "First choice",
    },
    {
        question: "This is the second question",
        options: ["First choice2", "Second choice2", "Third choice2", "Fourth choice2"],
        answer: "Second choice2",
    },
    {
        question: "This is the third question",
        options: ["First choice3", "Second choice3", "Third choice3", "Fourth choice3"],
        answer: "Third choice3",
    },
    {
        question: "This is the fourth question",
        options: ["First choice4", "Second choice4", "Third choice4", "Fourth choice4"],
        answer: "Fourth choice4",
    },
    {
        question: "This is the fifth question",
        options: ["First choice5", "Second choice5", "Third choice5", "Fourth choice5"],
        answer: "First choice5",
    },
    {
        question: "This is the sixth question",
        options: ["First choice6", "Second choice6", "Third choice6", "Fourth choice6"],
        answer: "Second choice6",
    }
];

// Selectors

let startBtn = document.getElementById('startBtn');
let intro = document.getElementById('intro');
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let timerEl = document.getElementById('timer');
let options = document.getElementById('options');
let score = 0;
let time = 60;
let count = 0
let currentQuestion = 0;

// Event Listeners

startBtn.addEventListener("click", startQuiz);

// Functions //

// Starts Quiz 
function startQuiz() {
    intro.remove();
    startTimer();
    generateQuestion();
};

// Generates Questions
function generateQuestion() {
    currentQuestion = questionsArr[count];
    question.textContent = currentQuestion.question;
    for (let j = 0; j < currentQuestion.options.length; j++) {
        let button = document.createElement('button');
        button.addEventListener('click', checkAnswer);
        button.innerHTML = currentQuestion.options[j];
        button.setAttribute('class', 'option');
        options.append(button);
    }
};

// Checking answer
function checkAnswer(event) {
    selectedButtonValue = event.target.innerHTML;
    if (selectedButtonValue == currentQuestion.answer) {
        let buttons = document.querySelectorAll('.option');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
        count++
        generateQuestion();
    } else {
        let buttons = document.querySelectorAll('.option');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
        time -= 10;
        count++;
        generateQuestion();
    };
};

// Starts timer
function startTimer() {
    let timeInterval = setInterval(function () {
        if (time > 1) {
            timerEl.textContent = time + " seconds remaining";
            time--; 
        } else {
            timerEl.textContent = " ";
            clearInterval(timeInterval);
        }
    }, 1000);
};