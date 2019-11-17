let btn = document.querySelector('.prime-key');
let btn2 = document.querySelector('.again-key');
let btn3 = document.querySelector('.back-key');
let input = document.querySelector('.prime-screen');
let list = document.querySelector('.list');

btn.addEventListener('click', playGame);
btn2.addEventListener('click', playAgain);
input.addEventListener('keyup', inputChange);

btn.textContent = 'play';
input.style.background = '#252525';
btn.disabled = true;
btn2.disabled = true;

function inputChange() {
    if (/^[0-9]{4}$/.test(input.value) || input.value == '') {
      btn.disabled = false
      input.style.background = '#252525';
      btn.textContent = 'play';
    } else {
      btn.disabled = true;
      input.style.background = '#840913';
      btn.textContent = '!put 4 nubers!';
  }
}

function playAgain() {
  number = Math.floor(9000 * Math.random() + 1000);
  console.log(number);
  btn2.disabled = true;
  btn2.style.background = '';
  btn2.style.color = '#b6b98d';
  input.style.fontSize = '2rem';
  input.value = '';
  input.placeholder = 'LET`S PLAY AGAIN';
  input.style.background = '#252525';
  input.disabled = false;
  list.innerHTML = 'HEAR, WILL BE YOUR RESULTS:';
}

let number = Math.floor(9000 * Math.random() + 1000), sch = 0;
console.log(number);




function playGame() {
  let x = 0, y = 0;
  let turn = input.value;
  let li = document.createElement('li');
  let sNumber = number.toString();

  console.log(turn);
  console.log(sNumber);

  for (let i = 0; i < sNumber.length; i++) {
    if (sNumber[i] === turn[i]) {
      x += 1;
      console.log('bull' + x)
    }
    for (let j = 0; j < turn.length; j++) {
        if (sNumber[i] === turn[j]) {
          y += 1;
          console.log(y);
          console.log(sNumber[i] + turn[j]);
          console.log('cow' + (y - x));
          break;
        }
      }
    }
  li.innerText = 'BULLS = ' + x + ' COWS = ' + (y-x) + ' YOUR TURN = ' + input.value;
  li.style.color = '#b6b98d';
  list.appendChild(li);
  if ( x === 4 ){
    input.style.fontSize = '1.5rem';
    input.value = 'YOU WIN, WITH NUMBER: ' + turn;
    input.style.background = '#115329';
    btn.disabled = true;
    btn2.disabled = false;
    btn2.style.background = '#b6b98d'
    btn2.style.color = '#1d0320';
    input.disabled = true;
  }
}



