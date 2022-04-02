// Array of Questions for the quiz
let questionsArr = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "Home Terminal Markup Language", "Home Text Makeup Language", "Hyper Terminal Makeup Language"],
        answer: "Hyper Text Markup Language",
    },
    {
        question: "What does CSS stand for?",
        options: ["Communicating Style Sheets", "Cascading Style Sheets", "Controlling Style Sheets", "Concentrated Style Sheets"],
        answer: "Cascading Style Sheets",
    },
    {
        question: "Where should an external <script> tag be placed in the HTML?",
        options: ["Head", "Footer", "Body", "Div"],
        answer: "Body",
    },
    {
        question: "Which of these is NOT a programming language?",
        options: ["Javascript", "HTML", "CSS", "Anaconda"],
        answer: "Anaconda",
    },
    {
        question: "What is the name for a loop that never ends?",
        options: ["Infinite", "For", "While", "Recursive"],
        answer: "Infinite",
    },
    {
        question: "What is the process of finding errors and fixing them within a program?",
        options: ["Compiling", "Executing", "Debugging", "Scanning"],
        answer: "Debugging",
    }
];

// Selectors
let startBtn = document.getElementById('startBtn');
let intro = document.getElementById('intro');
let quiz = document.getElementById('quiz');
let question = document.getElementById('question');
let timerEl = document.getElementById('timer');
let options = document.getElementById('options');
let userScore = document.getElementById('userscore');
let highScores = document.getElementById('highscores');
let scoreReveal = document.getElementById('revealscore');
let userInitials = document.getElementById('scored');
let submitBtn = document.getElementById('submit');
let scores = document.getElementById('scores');
let viewScores = document.getElementById('viewscores');
let score = 0;
// Slight delay in timer starting, changed to 59 seconds to adjust for delay
let time = 59;
let count = 0;
let currentQuestion = 0;

// Event Listeners
startBtn.addEventListener("click", startQuiz);
submitBtn.addEventListener("click", saveUserInitials);
viewScores.addEventListener("click", showScores);

// Functions //
// Starts Quiz 
function startQuiz() {
    startTimer();
    intro.remove();
    quiz.style.display = "block";
    generateQuestion();
};

// Generates Questions
function generateQuestion() {
    if (count > 5 || time < 1) {
        endQuiz();
    } else {
        currentQuestion = questionsArr[count];
        question.textContent = currentQuestion.question;
        for (let j = 0; j < currentQuestion.options.length; j++) {
            let button = document.createElement('button');
            button.addEventListener('click', checkAnswer);
            button.innerHTML = currentQuestion.options[j];
            button.setAttribute('class', 'option');
            options.append(button);
        };
    };
};

// Checking answer
function checkAnswer(event) {
    selectedButtonValue = event.target.innerHTML;
    if (selectedButtonValue == currentQuestion.answer) {
        let buttons = document.querySelectorAll('.option');
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].remove();
        }
        score++;
        count++;
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

// Ends quiz/brings up user initial entry board
function endQuiz() {
    quiz.remove();
    timerEl.remove();
    scoreReveal.style.display = "block";
    userScore.textContent = score;
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

// Saves user initials to local storage
function saveUserInitials() {
    localStorage.setItem("high scores", JSON.stringify(userInitials.value + " - " + userScore.textContent));
    scoreReveal.remove();
    highScores.style.display = "block";
    setHighScores();
};

// Sets user initials and score into High Score panel
function setHighScores() {
    let inputScores = localStorage.getItem("high scores");
    scores.textContent = inputScores;
}

// Allows users to view High scores from landing page
function showScores() {
    intro.style.display = "none";
    let inputScores = localStorage.getItem("high scores");
    scores.textContent = inputScores;
    highScores.style.display = "block";
}