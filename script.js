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
        answer: "Second choice",
    },
    {
        question: "This is the third question",
        options: ["First choice3", "Second choice3", "Third choice3", "Fourth choice3"],
        answer: "Third choice",
    },
    {
        question: "This is the fourth question",
        options: ["First choice4", "Second choice4", "Third choice4", "Fourth choice4"],
        answer: "Fourth choice",
    },
    {
        question: "This is the fifth question",
        options: ["First choice5", "Second choice5", "Third choice5", "Fourth choice5"],
        answer: "First choice",
    },
    {
        question: "This is the sixth question",
        options: ["First choice6", "Second choice6", "Third choice6", "Fourth choice6"],
        answer: "Second choice",
    }];

// Selectors
let startBtn = document.getElementById('startBtn');
let intro = document.getElementById('intro');
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let options = document.querySelector('.options')
let timerEl = document.getElementById('timer');
let score = 0;
let time = 60;

// Event Listeners
startBtn.addEventListener("click", startQuiz);

// Functions
function startQuiz() {
    intro.remove();
    startTimer();
};

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
}