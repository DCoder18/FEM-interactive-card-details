// $(".name").change(function() {
//   alert("This workd.")
//   $(".card-front--name").text($(".name").val())
// })

$(document).ready( function () {
  const displayElArray = []
  const inputElArray = []
  // let k = ''



  $(".card-display").each(function(i, elDisplay) {
    displayElArray.push(elDisplay)
  });

  $(".card-input").each(function(j, elInputs) {
    // inputElArray.push(elInputs)
    elInputs.addEventListener('change', (event) => {
      console.log(elInputs[j]);
      // displayElArray[j].text()
    })
    // console.log(elInputs);

    // console.log(elInputs);
    // elInputs[i].change(function() {
    //   displayElArray[j].text(inputElArray[i].val())
    // })
  });

  // $.each(inputElArray, function(i) {
  //   const display_el = displayElArray[i];
  //   const input_el = inputElArray[i];
  //   console.log(display_el);
  //   console.log(input_el);
    
  //   input_el.addEventListener('change', (event) => {
  //     console.log($(".name").val());
  //     display_el.text(input_el.val())
  //   })
  // })


  // $.each(inputElArray, function(k, inputs) {
    
    // console.log(inputElArray[k]);
    // inputElArray[k].change(function() {
    // inputElArray[k].change(function() {
      // console.log('workd');
      // displayElArray[l].text(inputs.val())
    // })
    // inputs[k].change(function() {
    //   displayElArray[0].text(inputs.val())
    // })
    // console.log(inputs, k, inputElArray);
    // console.log(inputElArray[k]);
    // inputElArray[i].change(function() {
    //   displayElArray[j].text(inputElArray[i].val())
    // })
  // })


  // console.log(displayElArray);
  // console.log(inputElArray);

});


// function getElements() {
//   $('.card-display').each( fuction (i)) {
//     console.log('')
//   }
// }



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
