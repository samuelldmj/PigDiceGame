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

//active player pane
const player0element = document.querySelector('.player--0');
const player1element = document.querySelector('.player--1');


//switching between player function,  so as to maintain DRY
let switchPlayer = function () {

    //making the current score of the active player 0, after hitting one on the dice
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    //it helps holding the score of the active player to 0.
    currentScore = 0;
    //switching to the next player
    activePlayer = activePlayer === 0 ? 1 : 0;
    //changes the background to the active player
    player0element.classList.toggle('player--active');
    player1element.classList.toggle('player--active');

};

//resetting the game
let scores, playing, currentScore, activePlayer;

const newGame = function () {
    //Holding the big score
    scores = [0, 0];

    //checking if playing is on
    playing = true;

    //initializing the current score, ensuring it is stored
    currentScore = 0;

    //initializing active player
    activePlayer = 0;

    //hiding the dice image
    diceElement.classList.add('hidden');

    //resetting the current score
    //setting the score elements to a default value 0
    currentScore0Element.textContent = 0;
    currentScore1Element.textContent = 0;


    //resetting the big score
    score0Element.textContent = 0;
    score1Element.textContent = 0;

    //removing winner background
    player0element.classList.remove('player--winner');
    player1element.classList.remove('player--winner');

    //removing active background
    player0element.classList.add('player--active');
    player1element.classList.remove('player--active');

}
newGame();


//making the dice roll on clicking using the event listner
let Roll = btnRoll.addEventListener('click', function () {
    if (playing) {

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

            //switch player
            switchPlayer();

        };

    }
})

let hold = btnhold.addEventListener('click', function () {
    if (playing) {

        //add current score to the big score
        scores[activePlayer] += currentScore;

        document.querySelector(`#score--${activePlayer}`).textContent = scores[activePlayer];

        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceElement.classList.add('hidden');
        } else {
            //switch player
            switchPlayer();
        }
    }

})

//new game button
btnNew.addEventListener('click', newGame);

