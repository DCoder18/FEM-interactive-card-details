$(document).ready( function () {
  const displayElArray = []
  const inputElArray = []

  /* 
  - Loop through display classes
  - Save the elements to the display array
  - Reposition items in display array
  */
  $(".card-display").each(function(i, elDisplay) {
    displayElArray.push(elDisplay)
  })


  // Switch first two elements to match the Input Array 
  displayElArray[0] = displayElArray.splice(1, 1, displayElArray[0])[0]


  /*
  - Loop through input classes
  - Save the elements to the input array
  - Replace display element text with input data
  */
  $(".card-input").each(function(j, elInputs) {
    const inputElID = `#${elInputs.id}`
    inputElArray.push(elInputs)

    validateInput(this)

    $(inputElID).keyup(function() {
      $(displayElArray[j]).text($(inputElID).val())
    })
  })

  // Helper Functions
  function validateInput(input) {
    const txtblank = "<p>Can't be blank</p>"

    for(const el of inputElArray)  {
      if(! $(`#${el.id}`).val())
        $(`.form-group`).after(txtblank)
    }

    $.each(inputElArray, function(i, el) {
      const isEmpty = false

      if(! $(`#${el.id}`).val())
        isEmpty = true
      })

      if(! isEmpty)
        $(`.form-group`).after(txtblank)

  }
    // const txtblank = "<p>Can't be blank</p>"
    // if(! $(`#${input.id}`).val())
    //   $(`.form-group`).after(txtblank)
    //   alert('tis empty!')
    // }
  
})
