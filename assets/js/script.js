document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("game-box").classList.toggle("hide");
    let buttons = document.getElementsByClassName("btn");
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("button-type") === "start") {
                runGame();
            } else if (this.getAttribute("button-type") === "reset") {
                // hideQuestion();
                hideCheckbox();
            }
        })
    }
    displayAnswer();
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
    let buttons = document.getElementsByClassName("selection-btn");
    let numbers = [];
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("button-number") === "1") {
                numbers.push(1);
            } else if (this.getAttribute("button-number") === "2") {
                numbers.push(2);
            } else if (this.getAttribute("button-number") === "3") {
                numbers.push(3);
            } else if (this.getAttribute("button-number") === "4") {
                numbers.push(4);
            }
            let answer = [];
            for (number of numbers) {
                if (number === 1) {
                    answer.push(`
            <img src="assets/images/burgerMeat.png">
            `);
                } else if (number === 2) {
                    answer.push(`
            <img src="assets/images/salad.png">
            `);
                } else if (number === 3) {
                    answer.push(`
            <img src="assets/images/baconEggs.png">
            `);
                } else if (number === 4) {
                    answer.push(`
            <img src="assets/images/cheese.png">
            `);
                }
            }
            let answer1 = document.getElementById("answer-1");
            let answer2 = document.getElementById("answer-2");
            let answer3 = document.getElementById("answer-3");
            let answer4 = document.getElementById("answer-4");
            if (numbers.length === 1) {
                answer1.innerHTML = `${answer[0]}`;
                answer1.style.border = "5px solid white";
                answer2.style.border = "5px solid green";
                answer3.style.borderTop = "5px solid white";
            } else if (numbers.length === 2) {
                answer2.innerHTML = `${answer[1]}`;
                answer2.style.border = "5px solid white";
                answer2.style.borderTop = "5px solid darkgray";
                answer3.style.border = "5px solid green";
                answer4.style.borderTop = "5px solid white";
            } else if (numbers.length === 3) {
                answer3.innerHTML = `${answer[2]}`;
                answer3.style.border = "5px solid white";
                answer3.style.borderTop = "5px solid darkgray";
                answer4.style.border = "5px solid green";
            } else if (numbers.length === 4) {
                answer4.innerHTML = `${answer[3]}`;
                answer4.style.border = "5px solid white";
                answer4.style.borderTop = "5px solid darkgray";
                answer1.style.border = "5px solid green";
                answer4.style.borderTop = "5px solid darkgray";
                answer2.style.borderTop = "5px solid white"
                numbers = [];
            }
        })
    }
}

function checkAnswer() {

}

function hideCheckbox() {
    document.getElementById("outer-checkbox").classList.toggle("hide");
}

/* Hide correct check mark showing incorrect cross mark */

    // document.getElementById("checkbox-1").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-2").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-3").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-4").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");

/**
 * displaySelection hides the message box and makes the selection box visible.
 */

function displaySelection() {
    document.getElementById("message-box").classList.toggle("hide");
    document.getElementById("selection").classList.toggle("hide");
}

/**
 * hideSelection hides the selection box and makes the message box visible.
 */

function hideSelection() {
    document.getElementById("selection").classList.toggle("hide");
    document.getElementById("message-box").classList.toggle("hide");
}

/**
 * messageBoxStart changes the innerHTML text with relevant text for before the game has started.
 */

function messageBoxStart() {
    document.getElementById("message-box-text").innerHTML = "Placeholder Message: Before Start";
}

/**
 * messageBoxDuring changes the innerHTML text with relevant text during the timer is active.
 */

function messageBoxDuring() {
    document.getElementById("message-box-text").innerHTML = "Placeholder Message: During";
}

/**
 * messageBoxEnd changes the innerHTML text with relevant text for after the submit button is pressed.
 */

function messageBoxEnd() {
    document.getElementById("message-box-text").innerHTML = "Placeholder Message: After Submit";
}

function startTimer() {

}

function resetGame() {

}

function incrementCorrect() {

}

function incrementIncorrect() {

}