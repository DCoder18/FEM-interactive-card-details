const elCardHolderName = document.querySelector('.name')
const elCardNo = document.querySelector('.card-no')
const elExpDateMonth = document.querySelector('.exp-date--mm')
const elExpDateYear = document.querySelector('.exp-date--yy')
const elCVC = document.querySelector('.cvc')

// Card Holder Name
elCardHolderName.addEventListener('change', (event) => {
  const cardHolderName = document.querySelector('.name').value;
  console.log(cardHolderName);
})

//Card Number
elCardNo.addEventListener('change', (event) => {
  const cardNo = document.querySelector('.card-no').value;
  console.log(cardNo);
})

//Expiry Date Month
elExpDateMonth.addEventListener('change', (event) => {
  const cardExpiryMonth = document.querySelector('.exp-date--mm').value;
  console.log(cardExpiryMonth);
})

//Expiry Date Year
elExpDateYear.addEventListener('change', (event) => {
  const cardExpiryYear = document.querySelector('.exp-date--yy').value;
  console.log(cardExpiryYear);
})

//CVC
elCVC.addEventListener('change', (event) => {
  const cardCVC = document.querySelector('.cvc').value;
  console.log(cardCVC);
})
