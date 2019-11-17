let btn = document.querySelector('.prime-key')
let input = document.querySelector('.prime-screen')

btn.addEventListener('click', checkPrime)
input.addEventListener('keyup', inputChange)

btn.textContent = 'check to prime number';
input.style.background = '#252525';
btn.disabled = true;

function inputChange() {
    if (/^[0-9]/.test(input.value) || input.value == '') {
      btn.disabled = false
      input.style.background = '#252525';
      btn.textContent = 'check to prime number';
    } else {
      btn.disabled = true;
      input.style.background = '#840913';
      btn.textContent = '!put a nuber not a letter!';
  }
}

function inputClear() {
  input.value = '';
}

function checkPrime() {
  for(var i = 2; i < input.value; i++)
    if(input.value % i === 0) {
      input.value = 'number is compaund';
      input.addEventListener('click', inputClear)
    } else {
      input.value = 'number is prime';
      input.addEventListener('click', inputClear)
    }
}


