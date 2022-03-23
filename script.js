// Selectors
let main = document.querySelector("#main");

// Event Listeners
startBtn.addEventListener("click", startQuiz);

function startQuiz () {
    let question = document.getElementById("main");
    question.remove();
};