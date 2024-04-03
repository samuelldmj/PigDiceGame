'use strict';

//getting the score elements from DOM
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');

//setting the score elements to a default value 0
score0Element.textContent = 0;
score1Element.textContent = 0;

//hide the dice image
diceElement.classList.add('hidden');

//getting button element class
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnhold = document.querySelector('.btn--hold');

//getting the current score elements ids
const currentScore0Element = document.getElementById('current--0');
const currentScore1Element = document.getElementById('current--1');

//initializing the current score, ensuring it is stored
let currentScore = 0;

//initializing active player
let activePlayer = 0;

//active player pane
const player0element = document.querySelector('.player--0')
const player1element = document.querySelector('.player--1')

//making the dice roll on clicking using the event listner
btnRoll.addEventListener('click', function () {

    //unhiding the dice image when the rolling button is clicked
    diceElement.classList.remove('hidden');

    //generating random numbers from 1 to 6 and appending it to the dice images
    let dice = Math.trunc(Math.random() * 6) + 1;

    //This make the image change dynamically
    diceElement.src = `dice-${dice}.png`;


    if (dice !== 1) {
        //incrementing the current score as dice is rolled
        currentScore += dice;

        //dynamically displaying the current score of the active player
        document.querySelector(`#current--${activePlayer}`).textContent = currentScore;

    } else {
        //switching to the next player
        document.querySelector(`#current--${activePlayer}`).textContent = 0;
        currentScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0element.classList.toggle('player--active')
        player1element.classList.toggle('player--active')

    }



})





