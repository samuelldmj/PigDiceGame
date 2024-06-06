





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
const btnHold = document.querySelector('.btn--hold');

//getting the current score elements ids
const currentScore0Element = document.getElementById('current--0');
const currentScore1Element = document.getElementById('current--1');

//active player pane
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');

let scores, playing, currentScore, activePlayer;

//switching between player function
const switchPlayer = function () {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

//resetting the game
const init = function () {
  scores = [0, 0];
  playing = true;
  currentScore = 0;
  activePlayer = 0;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0Element.textContent = 0;
  currentScore1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};

init();

btnRoll.addEventListener('click', function () {
  if (playing) {
    diceElement.classList.remove('hidden');
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceElement.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.querySelector(`#current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.querySelector(`#score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);