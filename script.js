// const elCardHolderName = document.querySelector('.name')
$(".name").change(function() {
  $(".card-front--name").text($(".name").val)
  // display_el.textContent = document.querySelector(query).value;
})



// const elCardNo = document.querySelector('.card-no')
// const elExpDateMonth = document.querySelector('.exp-date--mm')
// const elExpDateYear = document.querySelector('.exp-date--yy')
// const elCVC = document.querySelector('.cvc')

// const elNameDisplay = document.querySelector('.card-front--name')
// const elNumberDisplay = document.querySelector('.card-front--no')
// const elExpiryMonthDisplay = document.querySelector('.card-front--exp-month')
// const elExpiryYearDisplay = document.querySelector('.card-front--exp-year')
// const elCVCDisplay = document.querySelector('.card-back--cvc')

// const inputElArray = [elCardHolderName, elCardNo, elExpDateMonth, elExpDateYear, elCVC]
// const displayElArray = [elNameDisplay, elNumberDisplay, elExpiryMonthDisplay, elExpiryYearDisplay, elCVCDisplay]
// const q = ['.name', '.card-no', '.exp-date--mm', '.exp-date--yy', '.cvc']

// function updateCardDisplay() {
//   inputElArray.forEach((input_el, i) => {
//     const display_el = displayElArray[i];
//     const query = q[i];

//     input_el.addEventListener('change', (event) => {
//       display_el.textContent = document.querySelector(query).value;
//     })
//   })
// }

// updateCardDisplay()
