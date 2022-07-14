document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("btn");
    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("button-type") === "start") {
                runGame();
            }
        })
    }
})

function runGame() {
    generateQuestion();
}

function generateQuestion() {
    let number1 = Math.floor(Math.random() * 4) + 1;
    let number2 = Math.floor(Math.random() * 4) + 1;
    let number3 = Math.floor(Math.random() * 4) + 1;
    let number4 = Math.floor(Math.random() * 4) + 1;
    let numbers = [number1, number2, number3, number4];
    console.log(numbers);
}

function displayQuestion() {

}

function hideQuestion() {

}

function displayAnswer() {

}

function checkAnswer() {

}

function hideCheckbox() {

}

function displaySelection() {

}

function hideSelection() {

}

function startTimer() {

}

function resetGame() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}