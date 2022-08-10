const elCardHolderName = document.querySelector('.name')
const elCardNo = document.querySelector('.card-no')
const elExpDateMonth = document.querySelector('.exp-date--mm')
const elExpDateYear = document.querySelector('.exp-date--yy')
const elCVC = document.querySelector('.cvc')

const elNameDisplay = document.querySelector('.card-front--name')
const elNumberDisplay = document.querySelector('.card-front--no')
const elExpiryMonthDisplay = document.querySelector('.card-front--exp-month')
const elExpiryYearDisplay = document.querySelector('.card-front--exp-year')
const elCVCDisplay = document.querySelector('.card-back--cvc')

// Card Holder Name
elCardHolderName.addEventListener('change', (event) => {
  let cardHolderName = document.querySelector('.name').value;
  elNameDisplay.textContent = cardHolderName
  console.log(cardHolderName);
})

//Card Number
elCardNo.addEventListener('change', (event) => {
  const cardNo = document.querySelector('.card-no').value;
  elNumberDisplay.textContent = cardNo
  console.log(cardNo);
})

//Expiry Date Month
elExpDateMonth.addEventListener('change', (event) => {
  const cardExpiryMonth = document.querySelector('.exp-date--mm').value;
  elExpiryMonthDisplay.textContent = cardExpiryMonth
  console.log(cardExpiryMonth);
})

//Expiry Date Year
elExpDateYear.addEventListener('change', (event) => {
  const cardExpiryYear = document.querySelector('.exp-date--yy').value;
  elExpiryYearDisplay.textContent = cardExpiryYear
  console.log(cardExpiryYear);
})

//CVC
elCVC.addEventListener('change', (event) => {
  const cardCVC = document.querySelector('.cvc').value;
  elCVCDisplay.textContent = cardCVC
  console.log(cardCVC);
})
