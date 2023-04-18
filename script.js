$(document).ready( function () {
  const displayElArray = []
  const inputElArray = []

  // Loop through display classes and save the elements to the display array
  $(".card-display").each(function(i, elDisplay) {
    displayElArray.push(elDisplay)
  });

  //Switch first two elements to match the Input Array
  displayElArray[0] = displayElArray.splice(1, 1, displayElArray[0])[0]

  // Loop through input classes and save the elements to the input array
  $(".card-input").each(function(j, elInputs) {
    const inputElID = `#${elInputs.id}`
    inputElArray.push(elInputs)

    // Then replace display element text with input data
    $(inputElID).change(function() {
      $(displayElArray[j]).text($(inputElID).val())
    })
  });
});


