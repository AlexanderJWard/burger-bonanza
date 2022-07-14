document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByClassName("btn");
    for (button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("button-type") === "start") {
                runGame();
            } else if (this.getAttribute("button-type") === "reset") {
                hideQuestion();
            }
        })
    }
})

/**
 * RunGame will run all the required functions to start a fresh game instance. 
 * This function should be linked to the start button.
 */

function runGame() {
    displayQuestion();
}

/**
 * generateQuestion will use Math.random to generate a random number. This number will be multiplied by 4.
 * Math.floor is then used to round the number down to an integer. This number is then added by 1.
 * The number is then stored in a variable. This is repeated for a total of 4 variables labled number 1 to number 4.
 * All the number variables are then put into an array and assigned the variable numbers which is then returned.
 */

function generateQuestion() {
    let number1 = Math.floor(Math.random() * 4) + 1;
    let number2 = Math.floor(Math.random() * 4) + 1;
    let number3 = Math.floor(Math.random() * 4) + 1;
    let number4 = Math.floor(Math.random() * 4) + 1;
    let numbers = [number1, number2, number3, number4];
    return numbers;
}

/**
 * displayQuestion will call upon generateQuestion to create a numbers variable.
 * A blank array is created as a variable called question.
 * 
 * An if statement is run through each number of numbers which pushes a different image html
 * to the question variable. For example if number is 1 push burgerMeat.png to question variable.
 * 
 * Create 4 new variables for question1 to question 4 and change inner HTML of each question box
 * replacing it with the related question variable from the if statement.
 */

function displayQuestion() {
    let numbers = generateQuestion();
    let question = [];
    for (number of numbers) {
        if (number === 1) {
            question.push(`
            <img src="assets/images/burgerMeat.png">
            `);
        } else if (number === 2) {
            question.push(`
            <img src="assets/images/salad.png">
            `);
        } else if (number === 3) {
            question.push(`
            <img src="assets/images/baconEggs.png">
            `);
        } else {
            question.push(`
            <img src="assets/images/cheese.png">
            `);
        }
    }
    let question1 = document.getElementById("question-1");
    let question2 = document.getElementById("question-2");
    let question3 = document.getElementById("question-3");
    let question4 = document.getElementById("question-4");
    question1.innerHTML = `${question[0]}`;
    question2.innerHTML = `${question[1]}`;
    question3.innerHTML = `${question[2]}`;
    question4.innerHTML = `${question[3]}`;
}

/**
 * hideQuestion sets all inner HTML of each question box to the image of a question mark.
 */

function hideQuestion() {
    document.getElementById("question-1").innerHTML = '<img src="assets/images/question.png">';
    document.getElementById("question-2").innerHTML = '<img src="assets/images/question.png">';
    document.getElementById("question-3").innerHTML = '<img src="assets/images/question.png">';
    document.getElementById("question-4").innerHTML = '<img src="assets/images/question.png">';
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

function informationBoxStart() {

}

function informationBoxDuring() {
    
}

function informationBoxEnd() {
    
}

function startTimer() {

}

function resetGame() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}