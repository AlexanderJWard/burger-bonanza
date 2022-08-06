document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("difficulty").classList.toggle("flex");
    let buttons = document.getElementsByClassName("btn");
    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("game-difficulty") === "easy") {
                document.getElementById("seconds").innerHTML = 10;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-easy");
                messageBoxStart();
                toggleHeader();
                easyStyle();
                toggleGame();
                document.getElementById("outer-title").scrollIntoView();
            } else if (this.getAttribute("game-difficulty") === "medium") {
                document.getElementById("seconds").innerHTML = 6;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-medium");
                messageBoxStart();
                toggleHeader();
                mediumStyle();
                toggleGame();
                document.getElementById("outer-title").scrollIntoView();
            } else if (this.getAttribute("game-difficulty") === "hard") {
                document.getElementById("seconds").innerHTML = 3;
                document.getElementById("start-game").setAttribute("game-difficulty", "start-hard");
                messageBoxStart();
                toggleHeader();
                hardStyle();
                toggleGame();
                document.getElementById("outer-title").scrollIntoView();
            } else if (this.getAttribute("game-difficulty") === "start-easy") {
                resetGame();
                displayQuestion();
                startTimerEasy();
                document.getElementById("outer-question").scrollIntoView();
            } else if (this.getAttribute("game-difficulty") === "start-medium") {
                resetGame();
                displayQuestion();
                startTimerMedium();
                document.getElementById("outer-question").scrollIntoView();
            } else if (this.getAttribute("game-difficulty") === "start-hard") {
                resetGame();
                displayQuestion();
                startTimerHard();
                document.getElementById("outer-question").scrollIntoView();
            } else if (this.getAttribute("button-type") === "change-difficulty") {
                resetGame();
                hideQuestion();
                toggleGame();
                document.getElementsByTagName("header")[0].style.background = "none";
                toggleHeader();
                document.getElementById("change").classList.toggle("display-hide");
                document.getElementById("outer-start-game").classList.remove("easy-animation");
                document.getElementById("outer-start-game").classList.remove("medium-animation");
                document.getElementById("outer-start-game").classList.remove("hard-animation");
                document.getElementById("outer-reset-game").classList.remove("easy-animation");
                document.getElementById("outer-reset-game").classList.remove("medium-animation");
                document.getElementById("outer-reset-game").classList.remove("hard-animation");
                document.getElementById("outer-submit").classList.remove("easy-animation");
                document.getElementById("outer-submit").classList.remove("medium-animation");
                document.getElementById("outer-submit").classList.remove("hard-animation");
                document.getElementById("correct-increment").innerHTML = 0;
                document.getElementById("wrong-increment").innerHTML = 0;
            } else if (this.getAttribute("button-type") === "reset") {
                resetGame();
                hideQuestion();
            } else if (this.getAttribute("button-type") === "submit") {
                checkAnswer();
                toggleSelection();
                document.getElementById("answer-1").style.backgroundColor = "white";
                document.getElementById("answer-2").style.backgroundColor = "white";
                document.getElementById("answer-3").style.backgroundColor = "white";
                document.getElementById("answer-4").style.backgroundColor = "white";
                if (document.getElementById("start-game").getAttribute("game-difficulty") === "start-easy") {
                    document.getElementById("outer-start-game").classList.toggle("easy-animation");
                    document.getElementById("outer-reset-game").classList.toggle("easy-animation");
                    document.getElementById("outer-submit").classList.toggle("easy-animation");
                } else if(document.getElementById("start-game").getAttribute("game-difficulty") === "start-medium") {
                    document.getElementById("outer-start-game").classList.toggle("medium-animation");
                    document.getElementById("outer-reset-game").classList.toggle("medium-animation");
                    document.getElementById("outer-submit").classList.toggle("medium-animation");
                } else if(document.getElementById("start-game").getAttribute("game-difficulty") === "start-hard") {
                    document.getElementById("outer-start-game").classList.toggle("hard-animation");
                    document.getElementById("outer-reset-game").classList.toggle("hard-animation");
                    document.getElementById("outer-submit").classList.toggle("hard-animation");
                }
                startButtonFade();
                resetButtonFade();
                submitButtonFade();
            }
        })
    }
    displayAnswer();
})

/**
* Music file setup
*/

let backgroundTrack = document.getElementById('backgroundTrack');
backgroundTrack.volume = 0.3;
backgroundTrack.loop = true;
let soundOn = false;

/**
* musicControl pauses or unpauses the backgroundTrack and toggles the display icon to show
* either a mute or play symbol.
*/

function musicControl() {
   soundOn = !soundOn;
   if (soundOn) {
       backgroundTrack.play();
       document.getElementById("music-on").classList.toggle('display-hide');
       document.getElementById("music-off").classList.toggle('display-hide');
   } else {
       backgroundTrack.pause();
       document.getElementById("music-off").classList.toggle('display-hide');
       document.getElementById("music-on").classList.toggle('display-hide');
   }
}


/**
 * toggleGame toggles the flex class on both the difficulty div and the outer-game-box which means
 * only one will be visible at one time.
 */

function toggleGame() {
    document.getElementById("difficulty").classList.toggle("flex");
    document.getElementById("outer-game-box").classList.toggle("flex");
}

/**
 * toggleHeader toggles either the big header or small header class on the header, sub divs and title.
 */

function toggleHeader() {
    document.getElementById("header-div-1").classList.toggle("big-header-div");
    document.getElementById("header-div-1").classList.toggle("small-header-div");
    document.getElementById("header-div-2").classList.toggle("big-header-div");
    document.getElementById("header-div-2").classList.toggle("small-header-div");
    document.getElementById("title").classList.toggle("big-header-title");
    document.getElementById("title").classList.toggle("small-header-title");
    document.getElementsByTagName("header")[0].classList.toggle("big-header");
    document.getElementsByTagName("header")[0].classList.toggle("small-header");
}

/**
 * easyStyle changes the style of the header, answer background color, timer background color and toggles the
 * start button animation on loading easy difficulty.
 */

function easyStyle() {
    document.getElementById("change").classList.toggle("display-hide");
    document.getElementsByClassName("small-header")[0].style.backgroundColor = "rgb(182, 201, 75)";
    document.getElementById("answer-1").style.backgroundColor = "rgb(182, 201, 75)";
    document.getElementById("timer").style.backgroundColor = "rgb(182, 201, 75)";
    document.getElementById("outer-start-game").classList.toggle("easy-animation");
}

/**
 * mediumStyle changes the style of the header, answer background color, timer background color and toggles the
 * start button animation on loading medium difficulty.
 */

function mediumStyle() {
    document.getElementById("change").classList.toggle("display-hide");
    document.getElementsByClassName("small-header")[0].style.backgroundColor = "rgb(255, 219, 88)";
    document.getElementById("answer-1").style.backgroundColor = "rgb(255, 219, 88)";
    document.getElementById("timer").style.backgroundColor = "rgb(255, 219, 88)";
    document.getElementById("outer-start-game").classList.toggle("medium-animation");
}

/**
 * hardStyle changes the style of the header, answer background color, timer background color and toggles the
 * start button animation on loading hard difficulty.
 */

function hardStyle() {
    document.getElementById("change").classList.toggle("display-hide");
    document.getElementsByClassName("small-header")[0].style.backgroundColor = "rgb(221, 53, 34)";
    document.getElementById("answer-1").style.backgroundColor = "rgb(221, 53, 34)";
    document.getElementById("timer").style.backgroundColor = "rgb(221, 53, 34)";
    document.getElementById("outer-start-game").classList.toggle("hard-animation");
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
    for (let number of numbers) {
        if (number === 1) {
            question.push(`
            <img src="assets/images/burgerMeat.png" alt="Cartoon image of cooked burger meat with condiments">
            `);
        } else if (number === 2) {
            question.push(`
            <img src="assets/images/salad.png" alt="Cartoon image of salad">
            `);
        } else if (number === 3) {
            question.push(`
            <img src="assets/images/baconEggs.png" alt="Cartoon image of bacon and eggs">
            `);
        } else {
            question.push(`
            <img src="assets/images/cheese.png" alt="Cartoon image of sliced cheese">
            `);
        }
    }
    let question1 = document.getElementById("question-1");
    let question2 = document.getElementById("question-2");
    let question3 = document.getElementById("question-3");
    let question4 = document.getElementById("question-4");
    question1.innerHTML = `${question[0]}`;
    question1.setAttribute("question", `${numbers[0]}`);
    question2.innerHTML = `${question[1]}`;
    question2.setAttribute("question", `${numbers[1]}`);
    question3.innerHTML = `${question[2]}`;
    question3.setAttribute("question", `${numbers[2]}`);
    question4.innerHTML = `${question[3]}`;
    question4.setAttribute("question", `${numbers[3]}`);
}

/**
 * hideQuestion sets all inner HTML of each question box to the image of a question mark.
 */

function hideQuestion() {
    document.getElementById("question-1").innerHTML = '<img src="assets/images/question.png" alt="Image of a question mark">';
    document.getElementById("question-2").innerHTML = '<img src="assets/images/question.png" alt="Image of a question mark">';
    document.getElementById("question-3").innerHTML = '<img src="assets/images/question.png" alt="Image of a question mark">';
    document.getElementById("question-4").innerHTML = '<img src="assets/images/question.png" alt="Image of a question mark">';
}

/**
 * displayAnswer will listen for each button click with a class of btn and push whatever button-number
 * that button has into a numbers array. If the game-difficulty attribute is detected it clears the number
 * array back to empty. This is also done if the button type is reset, submit or change-difficulty.
 * 
 * A new array is created called answer and this will cycle through each number in the numbers array and
 * based on what number is returned the relevant image html will be pushed to the new answer array. For example
 * 1 = burger image or 2 = salad image etc.
 * 
 * Based off the length of the current number array this will determine the answer attribute on each answer box html
 * and also set the inner html to that related image html from the answer array. The correct color answer background is
 * then set based off difficulty and the current length of the number array. Finally, if the number array is 4 long then
 * this will reset the numbers array back to a blank array once completing the above task.
 */

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
            } else if (this.getAttribute("button-type") === "submit") {
                numbers = [];
            } else if (this.getAttribute("button-type") === "change-difficulty") {
                numbers = [];
            }
            let answer = [];
            for (let number of numbers) {
                if (number === 1) {
                    answer.push(`
            <img src="assets/images/burgerMeat.png" alt="Cartoon image of cooked burger meat with condiments">
            `);
                } else if (number === 2) {
                    answer.push(`
            <img src="assets/images/salad.png" alt="Cartoon image of salad">
            `);
                } else if (number === 3) {
                    answer.push(`
            <img src="assets/images/baconEggs.png" alt="Cartoon image of bacon and eggs">
            `);
                } else if (number === 4) {
                    answer.push(`
            <img src="assets/images/cheese.png" alt="Cartoon image of sliced cheese">
            `);
                }
            }
            let answer1 = document.getElementById("answer-1");
            let answer2 = document.getElementById("answer-2");
            let answer3 = document.getElementById("answer-3");
            let answer4 = document.getElementById("answer-4");
            let type = document.getElementById("start-game").getAttribute("game-difficulty");
            if (numbers.length === 1) {
                answer1.setAttribute("answer", `${numbers[0]}`);
                answer1.innerHTML = `${answer[0]}`;
                answer1.style.backgroundColor = "rgb(255, 255, 255)";
                if (type === "start-easy") {
                    answer2.style.backgroundColor = "rgb(182, 201, 75)";
                } else if (type === "start-medium") {
                    answer2.style.backgroundColor = "rgb(255, 219, 88)";
                } else if (type === "start-hard") {
                    answer2.style.backgroundColor = "rgb(221, 53, 34)";
                }  
            } else if (numbers.length === 2) {
                answer2.setAttribute("answer", `${numbers[1]}`);
                answer2.innerHTML = `${answer[1]}`;
                answer2.style.backgroundColor = "rgb(255, 255, 255)";
                if (type === "start-easy") {
                    answer3.style.backgroundColor = "rgb(182, 201, 75)";
                } else if (type === "start-medium") {
                    answer3.style.backgroundColor = "rgb(255, 219, 88)";
                } else if (type === "start-hard") {
                    answer3.style.backgroundColor = "rgb(221, 53, 34)";
                }
            } else if (numbers.length === 3) {
                answer3.setAttribute("answer", `${numbers[2]}`);
                answer3.innerHTML = `${answer[2]}`;
                answer3.style.backgroundColor = "rgb(255, 255, 255)";
                if (type === "start-easy") {
                    answer4.style.backgroundColor = "rgb(182, 201, 75)";
                } else if (type === "start-medium") {
                    answer4.style.backgroundColor = "rgb(255, 219, 88)";
                } else if (type === "start-hard") {
                    answer4.style.backgroundColor = "rgb(221, 53, 34)";
                }
            } else if (numbers.length === 4) {
                answer4.setAttribute("answer", `${numbers[3]}`);
                answer4.innerHTML = `${answer[3]}`;
                answer4.style.backgroundColor = "rgb(255, 255, 255)";
                if (type === "start-easy") {
                    answer1.style.backgroundColor = "rgb(182, 201, 75)";
                } else if (type === "start-medium") {
                    answer1.style.backgroundColor = "rgb(255, 219, 88)";
                } else if (type === "start-hard") {
                    answer1.style.backgroundColor = "rgb(221, 53, 34)";
                }
                numbers = [];
            }
        })
    }
}

/**
 * checkAnswer will create variables for each answer box answer attribute and also create
 * variables for question box question attributes.
 * 
 * The function will put them into two arrays and compare the contents using toString().
 * If correct the message box innerHTML will change and correct score will go up. If the compare
 * shows false the message box innerHTML will change and wrong score will go up.
 * 
 * The question box images are then replaced with images of the question before it was hidden with question
 * marks so the player can visually see the difference between their answer and the question.
 */

function checkAnswer() {
    let question1 = document.getElementById("question-1").getAttribute("question");
    let question2 = document.getElementById("question-2").getAttribute("question");
    let question3 = document.getElementById("question-3").getAttribute("question");
    let question4 = document.getElementById("question-4").getAttribute("question");
    let answer1 = document.getElementById("answer-1").getAttribute("answer");
    let answer2 = document.getElementById("answer-2").getAttribute("answer");
    let answer3 = document.getElementById("answer-3").getAttribute("answer");
    let answer4 = document.getElementById("answer-4").getAttribute("answer");
    let question = [question1, question2, question3, question4];
    let answer = [answer1, answer2, answer3, answer4];
    let compare = question.toString() === answer.toString();
    if (compare) {
        document.getElementById("message-box").innerHTML = `<p>CORRECT!</p><p>Well done, your doing great!</p><p>Press START to play again!</p>`;
        incrementCorrect();
    } else {
        document.getElementById("message-box").innerHTML = `<p>WRONG!</p><p>Better luck next time.</p><p>Press START to play again!</p>`;
        incrementWrong();
    };
    let numbers = [];
    for (let number of question) {
        if (number === "1") {
            numbers.push(`
    <img src="assets/images/burgerMeat.png" alt="Cartoon image of cooked burger meat with condiments">
    `);
        } else if (number === "2") {
            numbers.push(`
    <img src="assets/images/salad.png" alt="Cartoon image of salad">
    `);
        } else if (number === "3") {
            numbers.push(`
    <img src="assets/images/baconEggs.png" alt="Cartoon image of bacon and eggs">
    `);
        } else if (number === "4") {
            numbers.push(`
    <img src="assets/images/cheese.png" alt="Cartoon image of sliced cheese">
    `);
        }
    }
    document.getElementById("question-1").innerHTML = `${numbers[0]}`;
    document.getElementById("question-2").innerHTML = `${numbers[1]}`;
    document.getElementById("question-3").innerHTML = `${numbers[2]}`;
    document.getElementById("question-4").innerHTML = `${numbers[3]}`;
    toggleCheckbox();
    if (question1 !== answer1) {
        document.getElementById("checkbox-1").getElementsByClassName("cross")[0].classList.toggle("display-hide");
    } else {
        document.getElementById("checkbox-1").getElementsByClassName("check")[0].classList.toggle("display-hide");
    }
    if (question2 !== answer2) {
        document.getElementById("checkbox-2").getElementsByClassName("cross")[0].classList.toggle("display-hide");
    } else {
        document.getElementById("checkbox-2").getElementsByClassName("check")[0].classList.toggle("display-hide");
    }
    if (question3 !== answer3) {
        document.getElementById("checkbox-3").getElementsByClassName("cross")[0].classList.toggle("display-hide");
    } else {
        document.getElementById("checkbox-3").getElementsByClassName("check")[0].classList.toggle("display-hide");
    }
    if (question4 !== answer4) {
        document.getElementById("checkbox-4").getElementsByClassName("cross")[0].classList.toggle("display-hide");
    } else {
        document.getElementById("checkbox-4").getElementsByClassName("check")[0].classList.toggle("display-hide");
    }
}

/**
 * toggleCheckbox will toggle the display-hide class which sets display to none.
 */

function toggleCheckbox() {
    document.getElementById("outer-checkbox").classList.toggle("hide");
}

/**
 * toggleSelection toggles the class hide for both selection box and message box.
 * The class hide sets visibility to hidden.
 */

function toggleSelection() {
    document.getElementById("message-box").classList.toggle("flex");
    document.getElementById("selection-title").classList.toggle("flex");
    document.getElementById("selection").classList.toggle("flex");
}

/**
 * messageBoxStart changes the innerHTML text with relevant text for before the game has started.
 */

function messageBoxStart() {
    document.getElementById("message-box").innerHTML = `<p>Press START to play the game!</p><p>You have ${document.getElementById("seconds").innerHTML} seconds to remember the customers order!</p>`;
}

/**
 * startButtonFade will toggle the start button transparant background and toggle if the button is clickable.
 */

function startButtonFade() {
    document.getElementById("outer-start-game").classList.toggle("btn-circle");
    document.getElementById("outer-start-game").classList.toggle("btn-circle-fade");
    document.getElementById("start-game").classList.toggle("btn-disable")
    document.getElementById("start-game").classList.toggle("btn-enable");
    document.getElementById("start-game").classList.toggle("btn-text")
    document.getElementById("start-game").classList.toggle("btn-text-fade");
}

/**
 * resetButtonFade will toggle the reset button transparant background and toggle if the button is clickable.
 */

function resetButtonFade() {
    document.getElementById("outer-reset-game").classList.toggle("btn-circle");
    document.getElementById("outer-reset-game").classList.toggle("btn-circle-fade");
    document.getElementById("reset-game").classList.toggle("btn-disable")
    document.getElementById("reset-game").classList.toggle("btn-enable");
    document.getElementById("reset-game").classList.toggle("btn-text")
    document.getElementById("reset-game").classList.toggle("btn-text-fade");
}

/**
 * submitButtonFade will toggle the submit button transparant background and toggle if the button is clickable.
 */

function submitButtonFade() {
    document.getElementById("outer-submit").classList.toggle("btn-circle");
    document.getElementById("outer-submit").classList.toggle("btn-circle-fade");
    document.getElementById("submit").classList.toggle("btn-disable")
    document.getElementById("submit").classList.toggle("btn-enable");
    document.getElementById("submit").classList.toggle("btn-text")
    document.getElementById("submit").classList.toggle("btn-text-fade");
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
    startButtonFade();
    document.getElementById("outer-start-game").classList.toggle("easy-animation");
    resetButtonFade();
    document.getElementById("outer-reset-game").classList.toggle("easy-animation");
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            toggleSelection();
            submitButtonFade();
            document.getElementById("outer-submit").classList.toggle("easy-animation");
            hideQuestion();
            document.getElementById("selection-title").scrollIntoView();
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
    startButtonFade();
    document.getElementById("outer-start-game").classList.toggle("medium-animation");
    resetButtonFade();
    document.getElementById("outer-reset-game").classList.toggle("medium-animation");
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            toggleSelection();
            submitButtonFade();
            document.getElementById("outer-submit").classList.toggle("medium-animation");
            hideQuestion();
            document.getElementById("selection-title").scrollIntoView();
        }
    }
    nowTime = setTimeout(timer, 1000);
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
    startButtonFade();
    document.getElementById("outer-start-game").classList.toggle("hard-animation");
    resetButtonFade();
    document.getElementById("outer-reset-game").classList.toggle("hard-animation");
    function timer() {
        time--;
        document.getElementById("seconds").innerHTML = time;
        if (time > 0) {
            nowTime = setTimeout(timer, 1000);
        } else {
            toggleSelection();
            submitButtonFade();
            document.getElementById("outer-submit").classList.toggle("hard-animation");
            hideQuestion();
            document.getElementById("selection-title").scrollIntoView();
        }
    }
    nowTime = setTimeout(timer, 1000);
}

/**
 * resetGame will set everything back to how it was at the very start. It clears the timer if running, 
 * resets the timer seconds innerHTML, sets all answer border colors back to starting, removes any previous
 * answer images in the answer boxes and toggles the start, reset, message box and selection elements.
 */

 function resetGame() {
    let answer1 = document.getElementById("answer-1");
    let answer2 = document.getElementById("answer-2");
    let answer3 = document.getElementById("answer-3");
    let answer4 = document.getElementById("answer-4");
    clearTimeout(nowTime);
    answer1.innerHTML = "";
    answer1.setAttribute("answer", "");
    answer2.innerHTML = "";
    answer2.setAttribute("answer", "");
    answer2.style.backgroundColor = "rgb(255, 255, 255)";
    answer3.innerHTML = "";
    answer3.setAttribute("answer", "");
    answer3.style.backgroundColor = "rgb(255, 255, 255)";
    answer4.innerHTML = "";
    answer4.setAttribute("answer", "");
    answer4.style.backgroundColor = "rgb(255, 255, 255)";
    let type = document.getElementById("start-game").getAttribute("game-difficulty");
    if (type === "start-easy") {
        document.getElementById("seconds").innerHTML = 10;
        answer1.style.backgroundColor = "rgb(182, 201, 75)";
        document.getElementById("outer-start-game").classList.add("easy-animation");
        document.getElementById("outer-reset-game").classList.remove("easy-animation");
        document.getElementById("outer-submit").classList.remove("easy-animation");
    } else if (type === "start-medium") {
        document.getElementById("seconds").innerHTML = 6;
        answer1.style.backgroundColor = "rgb(255, 219, 88)";
        document.getElementById("outer-start-game").classList.add("medium-animation");
        document.getElementById("outer-reset-game").classList.remove("medium-animation");
        document.getElementById("outer-submit").classList.remove("medium-animation");
    } else if (type === "start-hard") {
        document.getElementById("seconds").innerHTML = 3;
        answer1.style.backgroundColor = "rgb(221, 53, 34)";
        document.getElementById("outer-start-game").classList.add("hard-animation");
        document.getElementById("outer-reset-game").classList.remove("hard-animation");
        document.getElementById("outer-submit").classList.remove("hard-animation");
    } 
    document.getElementById("outer-start-game").classList.add("btn-circle");
    document.getElementById("outer-start-game").classList.remove("btn-circle-fade");
    document.getElementById("start-game").classList.remove("btn-disable")
    document.getElementById("start-game").classList.add("btn-enable");
    document.getElementById("start-game").classList.add("btn-text")
    document.getElementById("start-game").classList.remove("btn-text-fade");

    document.getElementById("outer-reset-game").classList.remove("btn-circle");
    document.getElementById("outer-reset-game").classList.add("btn-circle-fade");
    document.getElementById("reset-game").classList.add("btn-disable")
    document.getElementById("reset-game").classList.remove("btn-enable");
    document.getElementById("reset-game").classList.remove("btn-text")
    document.getElementById("reset-game").classList.add("btn-text-fade");

    document.getElementById("outer-submit").classList.remove("btn-circle");
    document.getElementById("outer-submit").classList.add("btn-circle-fade");
    document.getElementById("submit").classList.add("btn-disable")
    document.getElementById("submit").classList.remove("btn-enable");
    document.getElementById("submit").classList.remove("btn-text")
    document.getElementById("submit").classList.add("btn-text-fade");

    messageBoxStart();
    document.getElementById("message-box").classList.add("flex");
    document.getElementById("selection-title").classList.remove("flex");
    document.getElementById("selection").classList.remove("flex");
    document.getElementById("checkbox-1").getElementsByClassName("check")[0].classList.add("display-hide");
    document.getElementById("checkbox-1").getElementsByClassName("cross")[0].classList.add("display-hide");
    document.getElementById("checkbox-2").getElementsByClassName("check")[0].classList.add("display-hide");
    document.getElementById("checkbox-2").getElementsByClassName("cross")[0].classList.add("display-hide");
    document.getElementById("checkbox-3").getElementsByClassName("check")[0].classList.add("display-hide");
    document.getElementById("checkbox-3").getElementsByClassName("cross")[0].classList.add("display-hide");
    document.getElementById("checkbox-4").getElementsByClassName("check")[0].classList.add("display-hide");
    document.getElementById("checkbox-4").getElementsByClassName("cross")[0].classList.add("display-hide");
    document.getElementById("outer-checkbox").classList.add("hide");
}

/**
 * incrementCorrect gets the innerHTML of the correct-information span and increments by one.
 */

function incrementCorrect() {
    let correct = document.getElementById("correct-increment").innerHTML;
    let correctIncrement = ++correct;
    document.getElementById("correct-increment").innerHTML = correctIncrement;
}

/**
 * incrementWrong gets the innerHTML of the wrong-information span and increments by one.
 */

function incrementWrong() {
    let wrong = document.getElementById("wrong-increment").innerHTML;
    let wrongIncrement = ++wrong;
    document.getElementById("wrong-increment").innerHTML = wrongIncrement;
}