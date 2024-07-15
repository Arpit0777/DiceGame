'use strict';
// current scores
let isPlaying = true;
let total = [0, 0];
let score1 = document.querySelector('#score--0');
let score2 = document.querySelector('#score--1');
const diceImg = document.querySelector('.dice');
// Buttons
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
let score = 0;
// players
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');
// Current score
let current1 = document.querySelector('#current--0');
let current2 = document.querySelector('#current--1');
// roll button
let activePlayer = 0;
function Switch() {
  score = 0;
  document.querySelector(`#current--${activePlayer}`).innerHTML = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player1El.classList.toggle('player--active');
  player2El.classList.toggle('player--active');
}

rollButton.addEventListener('click', function () {
  if (isPlaying) {
    let random = Math.floor(Math.random() * 6) + 1;
    diceImg.src = `dice-${random}.png`;

    if (random === 1) {
      Switch();
    } else {
      score += random;
      document.querySelector(`#current--${activePlayer}`).innerHTML = score;
    }
  }

  //   console.log(random);
  //   console.log(diceImg);
});
// Hold button
holdButton.addEventListener('click', function () {
  if (isPlaying) {
    total[activePlayer] += score;
    document.querySelector(`#score--${activePlayer}`).textContent =
      total[activePlayer];
    if (total[activePlayer] >= 20) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      isPlaying = false;
      diceImg.classList.add('hidden');
    } else {
      Switch();
    }
  }
});
// Reset the game
resetButton.addEventListener('click', function () {
  isPlaying = true;
  total = [0, 0];
  score = 0;
  score1.textContent = score;
  score2.textContent = score;
  current1.textContent = 0;
  current2.textContent = 0;
  if (player1El.classList.contains('player--winner')) {
    player1El.classList.remove('player--winner');
  } else {
    player2El.classList.remove('player--winner');
  }

  if (player2El.classList.contains('player-active')) {
    player2El.classList.remove('player--active');
  }
  player1El.classList.add('player--active');
});
