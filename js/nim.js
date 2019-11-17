let btn = document.querySelector('.prime-key');
let btn2 = document.querySelector('.again-key');
let btn3 = document.querySelector('.back-key');
let input = document.querySelector('.prime-screen');

btn.addEventListener('click', playGame);
btn2.addEventListener('click', playAgain);
input.addEventListener('keyup', inputChange);

btn.textContent = 'play';
input.style.background = '#252525';
btn.disabled = true;
btn2.disabled = true;

function inputChange() {
    if (/^[1-9]$/.test(input.value) || input.value == '') {
      btn.disabled = false
      input.style.background = '#252525';
      btn.textContent = 'play';
    } else {
      btn.disabled = true;
      input.style.background = '#840913';
      btn.textContent = '!put a nuber from 1 to 9!';
  }
}

function playAgain() {
  btn2.disabled = true;
  btn2.style.background = '';
  btn2.style.color = '#b6b98d';
  input.value = '';
  input.placeholder = 'Let`s PLAAAAYYY AGAIN';
  input.style.background = '#252525';
  input.disabled = false;
  s = 0;
}

let s = 0;

function playGame() {
  let number = Math.floor(9*Math.random()+1);
  let userNum = input.value;

  userNum = parseInt(userNum);

  s += userNum;

  console.log(s);

  if ( s == 100 ) {

    input.value = 'You Win!';
    input.style.background = '#115329';
    btn.disabled = true;
    btn2.disabled = false;
    btn2.style.background = '#b6b98d'
    btn2.style.color = '#1d0320';
    input.disabled = true;

  } else if ( s < 91 ) {

    s += number;

    input.value = '';
    input.placeholder = 'you turn ' + userNum + ' + bot turn ' + number + ' = ' + s;

  } else if ( s >= 91) {

    number = 100 - s;
    s += number;

    input.value = 'You lose!';
    input.style.background = '#6b0029';
    btn.disabled = true;
    btn2.disabled = false;
    btn2.style.background = '#b6b98d'
    btn2.style.color = '#1d0320';
    input.disabled = true;
  }

}



