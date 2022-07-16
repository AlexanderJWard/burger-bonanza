document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("difficulty").classList.toggle("flex");
    let buttons = document.getElementsByClassName("btn");
    for (button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("game-difficulty") === "easy") {
                document.getElementById("seconds").innerHTML = 10;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-easy");
                displayGame();
            } else if (this.getAttribute("game-difficulty") === "medium") {
                document.getElementById("seconds").innerHTML = 6;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-medium");
                displayGame();
            } else if (this.getAttribute("game-difficulty") === "hard") {
                document.getElementById("seconds").innerHTML = 3;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-hard");
                displayGame();
            } else if (this.getAttribute("game-difficulty") === "start-easy") {
                resetGame();
                displayQuestion();
                startTimerEasy();
            } else if (this.getAttribute("game-difficulty") === "start-medium") {
                resetGame();
                displayQuestion();
                startTimerMedium();
            } else if (this.getAttribute("game-difficulty") === "start-hard") {
                resetGame();
                displayQuestion();
                startTimerHard();
            } else if (this.getAttribute("button-type") === "reset") {
                resetGame();
                hideQuestion();
            }
        })
    }
    displayAnswer();
})

function displayGame() {
    document.getElementById("difficulty").classList.toggle("flex");
    document.getElementById("game-box").classList.toggle("flex");
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
    let buttons = document.getElementsByClassName("btn");
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
            } else if (this.getAttribute("game-difficulty") === "start-easy") {
                numbers = [];
            } else if (this.getAttribute("game-difficulty") === "start-medium") {
                numbers = [];
            } else if (this.getAttribute("game-difficulty") === "start-hard") {
                numbers = [];
            } else if (this.getAttribute("button-type") === "reset") {
                numbers = [];
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
    let question1 = document.getElementById("question-1")
}

/**
 * toggleCheckbox will toggle the display-hide class which sets display to none.
 */

function toggleCheckbox() {
    document.getElementById("outer-checkbox").classList.toggle("display-hide");
    document.getElementById("outer-checkbox").classList.toggle("flex");
}

/* Hide correct check mark showing incorrect cross mark */

    // document.getElementById("checkbox-1").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-2").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-3").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");
    // document.getElementById("checkbox-4").getElementsByClassName("fa-circle-check")[0].classList.toggle("fa-solid");

/**
 * toggleSelection toggles the class hide for both selection box and message box.
 * The class hide sets visibility to hidden.
 */

function toggleSelection() {
    document.getElementById("message-box").classList.toggle("hide");
    document.getElementById("selection").classList.toggle("hide");
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

let nowTime;

/**
 * startTimerEasy sets the time to 10 seconds, hides the start game button & shows the reset button.
 * The message box is updated with a during timer game message. setTimeout is used to tick every 1 second and
 * update the timer paragraph with the current time left.
 * 
 * Once at 0 the start button is made visible again and the reset button is hidden. The question is then hidden and
 * the selection menu is made visible. The submit button is also made visible. All elemements mentioned that are
 * made visibile are done using the class toggle for the hide class.
 */

 function startTimerEasy() {
    let time = 10;
    document.getElementById("seconds").innerHTML = time;
    document.getElementById("start-game").classList.toggle("hide");
    document.getElementById("reset-game").classList.toggle("hide");
    messageBoxDuring();
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            document.getElementById("start-game").classList.toggle("hide");
            document.getElementById("reset-game").classList.toggle("hide");
            toggleSelection();
            document.getElementById("submit").classList.toggle("hide");
            hideQuestion();
        }
    }
    nowTime = setTimeout(timer, 1000);
}

/**
 * startTimerMedium sets the time to 6 seconds, hides the start game button & shows the reset button.
 * The message box is updated with a during timer game message. setTimeout is used to tick every 1 second and
 * update the timer paragraph with the current time left.
 * 
 * Once at 0 the start button is made visible again and the reset button is hidden. The question is then hidden and
 * the selection menu is made visible. The submit button is also made visible. All elemements mentioned that are
 * made visibile are done using the class toggle for the hide class.
 */

function startTimerMedium() {
    let time = 6;
    document.getElementById("seconds").innerHTML = time;
    document.getElementById("start-game").classList.toggle("hide");
    document.getElementById("reset-game").classList.toggle("hide");
    messageBoxDuring();
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            document.getElementById("start-game").classList.toggle("hide");
            document.getElementById("reset-game").classList.toggle("hide");
            toggleSelection();
            document.getElementById("submit").classList.toggle("hide");
            hideQuestion();
        }
    }
    nowTime = setTimeout(timer, 1000);
}

function resetGame() {
    let answer1 = document.getElementById("answer-1");
    let answer2 = document.getElementById("answer-2");
    let answer3 = document.getElementById("answer-3");
    let answer4 = document.getElementById("answer-4");
    clearTimeout(nowTime);
    let type = document.getElementById("start-game").getAttribute("game-difficulty");
    if (type === "start-easy") {
        document.getElementById("seconds").innerHTML = 10;
    } else if (type === "start-medium") {
        document.getElementById("seconds").innerHTML = 6;
    } else if (type === "start-hard") {
        document.getElementById("seconds").innerHTML = 3;
    } 
    answer1.innerHTML = "";
    answer1.style.border = "5px solid green";
    answer2.innerHTML = "";
    answer2.style.border = "5px solid white";
    answer3.innerHTML = "";
    answer3.style.border = "5px solid white";
    answer3.style.borderTop = "5px solid darkgray";
    answer4.innerHTML = "";
    answer4.style.border = "5px solid white";
    answer4.style.borderTop = "5px solid darkgray";
    document.getElementById("start-game").classList.toggle("hide");
    document.getElementById("reset-game").classList.toggle("hide");
    messageBoxStart();
    document.getElementById("message-box").classList.remove("hide");
    document.getElementById("selection").classList.add("hide");
}

/**
 * startTimerHard sets the time to 3 seconds, hides the start game button & shows the reset button.
 * The message box is updated with a during timer game message. setTimeout is used to tick every 1 second and
 * update the timer paragraph with the current time left.
 * 
 * Once at 0 the start button is made visible again and the reset button is hidden. The question is then hidden and
 * the selection menu is made visible. The submit button is also made visible. All elemements mentioned that are
 * made visibile are done using the class toggle for the hide class.
 */

 function startTimerHard() {
    let time = 3;
    document.getElementById("seconds").innerHTML = time;
    document.getElementById("start-game").classList.toggle("hide");
    document.getElementById("reset-game").classList.toggle("hide");
    messageBoxDuring();
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            document.getElementById("start-game").classList.toggle("hide");
            document.getElementById("reset-game").classList.toggle("hide");
            toggleSelection();
            document.getElementById("submit").classList.toggle("hide");
            hideQuestion();
        }
    }
    nowTime = setTimeout(timer, 1000);
}

function incrementCorrect() {

}

function incrementIncorrect() {

}