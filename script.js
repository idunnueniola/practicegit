document.body.style.backgroundColor = 'purple';
document.querySelector('.between').innerHTML = 'Between 1-60';

document.querySelector('.again').style.display = 'none';

const playAgain = document.querySelector('.again');

playAgain.addEventListener('click', function () {
  document.body.style.backgroundColor = 'orange';
  document.querySelector('.again').innerHTML = 'I just Clicked';
  document.querySelector('.message').innerHTML = 'Just Guess';
});

const checkPlay = document.querySelector('.check');

checkPlay.addEventListener('click', function () {
  document.body.style.backgroundColor = 'red';
  document.querySelector('.check').innerHTML = 'Tor!';
});

const highscore = document.querySelector('.highscore');
const number = document.querySelector('.number');
const score = document.querySelector('.score');
number.textContent = '?';
const check = document.querySelector('.check');
const secretNumber = Math.trunc(Math.random() * 5 + 1);

check.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess === secretNumber) {
    document.body.style.backgroundColor = 'green';
    playAgain.style.display = 'block';
    playAgain.textContent = 'Play Again';
    document.querySelector('.message').textContent =
      'C0NG@TUL@TI0NS🥳🤩🤩 You don Win🤩';
    document.querySelector('.number').innerHTML = secretNumber;
    document.querySelector('.check').innerHTML = 'ku Ise';
    document.querySelector('.highscore').textContent = 'score' * 10;
  } else {
    document.querySelector('.message').textContent = 'Run Am Again😡';
    document.querySelector('.score').textContent = 10;
  }
});

console.log();

// const score = document.querySelector('.score').innerHTML;

// console.log(score);
