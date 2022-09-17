let holdersName = document.querySelector('.holdersName');
let cardNumber = document.querySelector('.cardNumber');
let exp = document.querySelector('.exp');
let holderInput = document.querySelector('.holderInput');
let cardNumberInput = document.querySelector('.cardNumberInput');
let dateInput = document.querySelector('.date');
let cvcInput = document.querySelector('.cvc');
let holderscvc = document.querySelector('.holderscvc');
let submitBtn = document.querySelector('.submitBtn');
const info = [holderInput, dateInput, cardNumberInput, cvcInput].forEach((item) => {
    item.addEventListener('input', (e) => {
      if (e.target.classList[0] === 'holderInput') {
         holdersName.textContent = e.target.value;
      }
      else if (e.target.classList[0] === 'cardNumberInput') {
         cardNumber.textContent = e.target.value;
         if (e.target.value === '') {
           cardNumber.textContent = "1234 5678 9100 0000";
         }
      }
      else if (e.target.classList[0] === 'date') {
        exp.textContent = e.target.value;
        if (e.target.value === '') {
          exp.textContent = "12/12";
        }
      }
      else if (e.target.classList[0] === 'cvc') {
        holderscvc.textContent = e.target.value;
        if (e.target.value === '') {
          holderscvc.textContent = "12/12";
        }
      }
    })
});
