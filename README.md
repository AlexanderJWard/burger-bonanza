# Burger Bonanza


## Author
Alexander Ward

## Project Overview

Burger Bonanza is a javascript memory game based around remembering a customers burger order for a set amount of time based on difficulty. The order then dissapears and the player has to replicate the customers order in the selection window. After pressing submit the game will then inform the player if they are correct or wrong and tally the score, there are also cross or check marks against each selection so the player know exactly which part of their answer was correct or wrong. Burger Bonanza can be enjoyed by people of all ages however due to it fairly simple mechanics and forgiving difficulties it's more aimed towards children.

![image](https://user-images.githubusercontent.com/102811792/183261971-2c0edf86-8371-4093-a6a0-83f1403d55fa.png)

## Table of Contents


## UX

### Project Goals

The goal of the website is to provide the player with entertainment and education achieved through a memory puzzle. There are three difficulties to appeal to people of all ages and give players the choice if they want an easy and relaxing experience or maybe they want the harder difficulty to challenge their memory skills.

### Design Choices

#### Colors

I've chosen colors that fit the food and burger theme to tie together the difficulties to the Burger Bonanza vibe but also differentiates themseleves so each difficulty is distinguished and easily recognisable as that specific difficulty when switching between them. The green color is called Android color and is similar to a cucumber or pickle color and is used for the easy difficulty. Yellow is called Mustard and is meant to represent the condiment used on burgers, this is used for the medium difficulty. Finally, I used a red called Vermilion which is very close to a Ketchup / red sauce color and is used in the hard difficulty.

- #B6C94B - Android Green
- #FFDB58 - Mustard
- #DD3522 - Vermilion

![image](https://user-images.githubusercontent.com/102811792/181935504-cff5e34c-4218-4759-8aa6-3dfde5323d13.png)

#### Typography

The font I've used through-out Burger Bonanza has been __Fredoka One__ due to it's very thick and curvy approach which contains no sharp points, I think it fits the theme for a burger restaraunt style game very well and is readable for all age groups but esspecially for children so for me the main attraction was that the font needs to look fun from first viewing it.

![image](https://user-images.githubusercontent.com/102811792/181935850-c45933a2-0ffd-43d1-b4a8-2dab37274d8c.png)

#### Images

Background image containing lots of colorful burgers stacked on top of each other to show players the game is burger related from just a quick glance when the background image loads. This image is attributed in the code and also further down in CREDITS section.

![image](https://user-images.githubusercontent.com/102811792/181936186-80cfaef4-6c42-4e70-a319-e00845398b81.png)

The burger buns and food choices inside the burgers are colorful and obvious what they all are immediately. These images are used in the initial burger order question, the answer boxes and the selection boxes when the player is choosing.

![image](https://user-images.githubusercontent.com/102811792/181936305-278bb215-3577-46d0-9ffa-170e913fef53.png)

![image](https://user-images.githubusercontent.com/102811792/181936297-e711fb5c-27b5-4f3b-bfee-2a41e558744f.png)

![image](https://user-images.githubusercontent.com/102811792/181936320-ca8830c6-69b5-4e1a-b91c-05c73ecd1d08.png)

#### Animations and Transitions

Hover effect on each difficulty button to gradually fill with color based on the difficulty.

![image](https://user-images.githubusercontent.com/102811792/181936493-1e4ea609-0ae3-407b-b31a-30675058d71d.png)

![image](https://user-images.githubusercontent.com/102811792/181936499-e35e736d-aec7-4b2d-87ea-14808854a958.png)

![image](https://user-images.githubusercontent.com/102811792/181936505-08f60f65-a24b-488d-9180-1efc680c7cf0.png)

![image](https://user-images.githubusercontent.com/102811792/181936524-12f0b7dd-c767-49b1-bf76-6aeadf3c7083.png)

Hover effect on start, reset and submit buttons based on difficulty and as long as button isn't transparent.

![image](https://user-images.githubusercontent.com/102811792/181936571-e47daabd-9338-46ae-aa0b-98bfc1b4bad9.png)

![image](https://user-images.githubusercontent.com/102811792/181936574-b7cb6bdd-0a8a-46d5-ae3a-da1f79bc867c.png)

Scroll into view animation when the user selects a difficulty that scrolls to the top of the page so the game doesn't load in the middle forcing the user to manually scroll up.

Scroll into view animation when the user clicks the start button the scrolls to the question. Useful on small screen sizes where the start button and question are visible together.

Scroll into view when timer hits 0 that scrolls to the selection box. Useful on small screen sizes where the selection box is out of view from the timer, this way the user can easily see what they have to do after the timer ends.

### Wireframes

Wireframe created in Balsamiq and exported as PDF:

[Burger_Bonanza.pdf](https://github.com/AlexanderJWard/burger-bonanza/files/9227070/Burger_Bonanza.pdf)

### Features

#### Implemented Features

- __Difficulty Selection__

This is the page that loads upon entering the website and allows the player to select a difficulty out of easy, medium or hard.

![image](https://user-images.githubusercontent.com/102811792/183258760-cfd9b6ae-efea-4f9a-8312-948e495ecd5e.png)

- __Game Window__

The game window loads based off the difficulty selected, this changes the amount of time displayed in the timer and also the color theme of the game itself. Green for easy with the timer showing 10 seconds, yellow for medium with the timer showing 6 seconds and red for hard with the timer showing 3 seconds.

![image](https://user-images.githubusercontent.com/102811792/183258828-c433cd82-549d-4805-9690-aee59ac8c58e.png)

![image](https://user-images.githubusercontent.com/102811792/183258836-ee955850-41c7-46b3-867e-644b8f1f719b.png)

![image](https://user-images.githubusercontent.com/102811792/183258844-79883702-1541-4643-a7a7-a2b6268200ad.png)

- __Question__

The question starts out as four question marks, once the game starts this will randomly generate a burger filling for each question mark and display it until the timer hits 0. The question marks then return until the player hits submit when the burger fillings from earlier will reappear showing either a cross or check mark if they were wrong or correct.

![image](https://user-images.githubusercontent.com/102811792/183258965-309a3d91-ffe9-4b18-a7b0-63a5a8b0a78f.png)

![image](https://user-images.githubusercontent.com/102811792/183258973-ddca3817-1d45-44ef-b87c-1233448b3fa4.png)

- __Checkbox__

This checkbox appears after the player submits their answer and will display if each answer was correct or not by showing a tick or a cross to the left of the question.

![image](https://user-images.githubusercontent.com/102811792/183259055-ba650074-f575-49ce-8b61-004086524842.png)

On smaller screen sizes these become small icons in the corner of each question box.

![image](https://user-images.githubusercontent.com/102811792/183259084-338a5926-a3ef-4e3b-b594-426d572edd81.png)

- __Timer, start button and reset button__

The timer shows how much time is remaining before the question is hidden. The start button will show the question and start the timer ticking down towards 0. The reset button will stop the timer and reset everything back to how it was before the start button was pressed.

![image](https://user-images.githubusercontent.com/102811792/183259172-b480e2b3-36fb-4d4a-9a81-60d38968d668.png)

![image](https://user-images.githubusercontent.com/102811792/183259168-6e952c77-f03b-4668-900c-bf54497330af.png)

![image](https://user-images.githubusercontent.com/102811792/183259154-701a83d0-20f6-459a-81a4-294bbe4819ad.png)

- __Answer__

This contains the players currently selected answer which is decided by pressing the relevant selection box, the answer will cycle through the first box to the last box. If selecting something after entering all 4 boxes this is overwrite the first answer and continue in a loop.

![image](https://user-images.githubusercontent.com/102811792/183259246-319d222e-5f82-4950-80b3-937ed323b613.png)

![image](https://user-images.githubusercontent.com/102811792/183259254-64d92b84-d3ce-452a-bfc2-50bd0cd4da9d.png)

![image](https://user-images.githubusercontent.com/102811792/183259271-595f93b3-c994-42ac-8c36-5b70d915ad94.png)

- __Submit button and scoreboard

The submit button checks the current selected answer with the question and checks if it matches, if it does it will increment the 'correct' score and if not it will increment the 'wrong' score. This will also update the checkboxes with a tick or cross for each answer to show the player which part of their answer they got wrong. It will also display a releavnt message in the message box if the answer was correct or wrong.

![image](https://user-images.githubusercontent.com/102811792/183259442-6661843b-f73e-4ac0-b93b-c265bc77835b.png)

![image](https://user-images.githubusercontent.com/102811792/183259709-482cb264-c61e-440b-a7f1-e08d8a772e36.png)

- __Message Box__

Shows useful information displayed before the start button and after the submit button.

![image](https://user-images.githubusercontent.com/102811792/183259626-be77ed6d-a5c1-4649-bfc5-658edda1594c.png)

![image](https://user-images.githubusercontent.com/102811792/183259620-a6741b7b-2471-4dfb-ab90-9046aa4aade8.png)

![image](https://user-images.githubusercontent.com/102811792/183259610-961cb458-1b92-4bc5-b0d9-f73b23fe89da.png)

![image](https://user-images.githubusercontent.com/102811792/183259638-1e3b4a10-12a6-415c-84b6-3a58fca6444d.png)

![image](https://user-images.githubusercontent.com/102811792/183259649-5198e5d0-fe1d-4fca-b354-3bbff2813bd5.png)

- __Selection Box__

This box appears when the timer hits 0 before the submit button is pressed. It shows all four burger fillings that you can press to fill out the answer.

![image](https://user-images.githubusercontent.com/102811792/183259677-1bd1fb10-fa99-401d-a4fb-d111f0d4aff6.png)

- __404 Page__

Appears if entering an incorrect URL for Burger Bonanza for example: https://alexanderjward.github.io/burger-bonanza/a

![image](https://user-images.githubusercontent.com/102811792/183259851-bc8b7a51-bf02-40df-a995-07584e4d7de1.png)

#### Future Features

- I would like to add a more indepth scoreboard that keeps track of how many easy, medium and hard correct and wrong answers the player scores instead of the scoreboard resetting between changing difficulty.

- Adding more filler ingredients into the burger for harder difficulties instead of just having four, there could be 8 or more things to select for the answer.

## Testing

### Validation Testing

- __HTML__

![image](https://user-images.githubusercontent.com/102811792/183261017-880db659-fad5-4026-982c-9249a2a15b22.png)

- __CSS__

![image](https://user-images.githubusercontent.com/102811792/183261598-cb97d7e3-54f9-40ce-a791-3720cd2a0680.png)

- __JavaScript__

![image](https://user-images.githubusercontent.com/102811792/183261829-824ce450-d7ca-4b51-a79a-7c42bc48920e.png)

### Cross Browser and Cross Device Testing


### Manual Testing

#### Desktop

User lands on difficulty selection screen, verify the following UX effects happen:

- [x] hover for easy fades in to green
- [x] hover for medium fades to yellow
- [x] hover for hard fades to red
- [x] hover for faded buttons does NOT fade to any color
- [x] hover for start button easy fades in to green
- [x] hover for start button medium fades to yellow
- [x] hover for start button hard fades to red
- [x] hover for reset button easy fades in to green
- [x] hover for reset button medium fades to yellow
- [x] hover for reset button hard fades to red
- [x] hover for submit button easy fades in to green
- [x] hover for submit button medium fades to yellow
- [x] hover for submit button hard fades to red

#### All screen sizes

- [x] enter incorrect url to view 404 page and check link redirects to difficulty selection
- [x] tap or click mute button in header to start background audio
- [x] tap or click sound button in header to pause background audio
- [x] tap or click for easy loads the easy game
- [x] tap or click for medium loads the easy game
- [x] tap or click for hard loads the easy game
- [x] Start tap or click starts the timer
- [x] count down timer goes from starting value to 0
- [x] Reset tap or click stops timer and resets the game to pre clicking start
- [x] tap or click on each selection button to check it populates the expected item into answer box. Do this more than 4 times to check it overwrites the first selected answer as expected
- [x] Submit tap or click shows answer and tallies correct or wrong scoreboard
- [x] change difficulty tap or click resets game and loads difficulty selection
- [x] after change difficulty load either easy, medium or hard to check everything reset correctly

### Defect Tracking

Defects tracked via GitHub issues which can be viewed here: https://github.com/AlexanderJWard/burger-bonanza/issues

### Defects of Note

Reset button isn't stopping the SetTimeout in timer function was the first bug that took awhile to understand and fix. This required setting a time variable outside of the function in order for the reset button to change and stop the setTimeout based off this variable.

## Accessibility

### Lighthouse Audits

Lighthouse audit done using https://web.dev/measure/

![image](https://user-images.githubusercontent.com/102811792/183257924-5946859e-5dc6-48e3-8bb9-e4ef93bfafc9.png)

![image](https://user-images.githubusercontent.com/102811792/183258007-9b2d19e1-e046-4ddd-9bd2-5290f52f6d5a.png)

![image](https://user-images.githubusercontent.com/102811792/183257967-66f594e5-2e90-4133-86f2-8e952c64ca30.png)

### Keyboard Navigation

I tested how the game plays using only the keyboard pressing tab to switch between buttons and enter to press them. The game can be played this way instead of clicking with the mouse.

## Deployment

1. Open GitHub repository and navigate to the __Settings__ button.

![image](https://user-images.githubusercontent.com/102811792/181936979-7b39bc44-ba73-4fd3-bf77-466266afb6b1.png)

2. On the left menu panel navigate to the __Pages__ button.

![image](https://user-images.githubusercontent.com/102811792/181937008-eed6b18f-3adb-4e82-878a-735edf44d919.png)

3. Under the __Branch__ heading click on the drop down and select the word __main__.

![image](https://user-images.githubusercontent.com/102811792/181937136-a9d5c78c-4974-40b5-a36e-b82fdca8ccdd.png)

4. Click the __Save__ button

![image](https://user-images.githubusercontent.com/102811792/181937174-33ad8992-f644-498c-a34c-e93de2618bcf.png)

5. Finally, there is now a link to the live page displayed

![image](https://user-images.githubusercontent.com/102811792/181937227-ca5e345e-5a44-4fd1-8a05-e7229e41fb15.png)

## Credits

### Content

- Multiple icons used throughout have been taken from Font Awesome's free collection. Here is the link source:
https://fontawesome.com/search?m=free

### Media

- Background music from PlayOnLoop.com
https://www.playonloop.com/2018-music-loops/good-morning/
Licensed under Creative Commons by Attribution 4.0

- Background image by Storik UA from Vecteezy
https://www.vecteezy.com/vector-art/7685755-seamless-pattern-with-burger-icons-colored-hamburger-background-doodle-vector-burger-illustration

- Burger ingredients by pch.vector from FreePik.com
https://www.freepik.com/free-vector/burger-ingredients-set_8608963.htm#query=lettuce&position=8&from_view=search

### Acknowledgments

