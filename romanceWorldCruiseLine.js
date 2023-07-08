// Instruction: The Romance World Cruise Line provides special gifts and celebrations for passengers who are newlyweds, as well as for those who have been married more than 40 years. Design a flowchart or psuedocode for a proram that accepts a couple's last name, ship cabin number, and number years of marriage. Display a couple's data with the message Newlywed Gift if the couple has been married one year or less, Deluxe Anniversary Package if the couple has been married 40 years or more, and no message if the couple has been married between 2 and 39 years inclusive. 

$('#submit').click(function(){
  // console.log("Marriage");

  $('#specialGifts').empty();

  var coupleLastName = $('#coupleLastName').val();
  var cabinNumber = $('#cabinNumber').val();
  var yearsMarried = $('#yearsMarried').val();

  


  var floatYearsMarried = parseFloat(yearsMarried);

  // console.log(coupleLastName);
  // console.log(cabinNumber);
  // console.log(floatYearsMarried);

  if(floatYearsMarried <= 1){
    $('#specialGifts').append(`<p>Newlywed Gift for ${coupleLastName} couple!</p>`);
  } else if(floatYearsMarried >= 40){
    $('#specialGifts').append(`<p>Deluxe Anniversary Package for ${coupleLastName} couple!</p>`);
  }

})