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
    if (/^[0-9]/.test(input.value) || input.value == '') {
      btn.disabled = false
      input.style.background = '#252525';
      btn.textContent = 'play';
    } else {
      btn.disabled = true;
      input.style.background = '#840913';
      btn.textContent = '!put a nuber not a letter!';
  }
}

function playAgain() {
  number = Math.floor(100*Math.random())+1;
  count = 5;
  btn2.disabled = true;
  btn2.style.background = '';
  btn2.style.color = '#b6b98d';
  input.value = '';
  input.placeholder = 'you have ' + count + ' attempts';
  input.style.background = '#252525';
  btn.textContent = 'Attempts left ' + count;
  input.disabled = false;
}

let number = Math.floor(100*Math.random())+1;
let count = 5;

function playGame() {
    if(count > 0) {

      let userNum = input.value;
      userNum = parseInt(userNum);
      console.log(userNum);

      if (userNum == number) {
        btn.disabled = true;
        input.style.background = '#115329';
        input.value = "Yes, you guessed it!";
        btn.disabled = true;
        btn2.disabled = false;
        btn2.style.background = '#b6b98d';
        btn2.style.color = '#1d0320';
        input.disabled = 'true';
      } else if (userNum > number) {
        input.placeholder = "Too much";
        input.value = '';
        input.style.background = '#6b0029';
      } else if (userNum < number) {
        input.placeholder = "Not enough...";
        input.value = '';
        input.style.background = '#6b0029';
      }
      count = count - 1;
      btn.textContent = 'Attempts left ' + count;


    }
    else {
      input.value = 'You loooose!';
      btn.disabled = true;
      btn2.style.background = '#b6b98d';
      btn2.disabled = false;
      btn2.style.color = '#1d0320';
      input.disabled = true;
      input.style.background = '#6b0029';
    }
}



