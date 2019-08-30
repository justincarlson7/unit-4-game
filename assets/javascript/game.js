// var compRandoNumber = 0;

// function ranComp() {
//     compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//  }

//  ranComp();

//  console.log("This is the computer number " + compRandoNumber);

//Create random number for the computer

$(document).ready(function() {
  var compRandoNumber = 0;

  var jewelOne = 0;
  var jewelTwo = 0;
  var jewelThree = 0;
  var jewelOneTotal = 0;
  var jewelCounter = 0;
  var test = 5;

  function randomNum1() {
    ranNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    return ranNum;
  }

jewelOne = randomNum1();

jewelTwo = randomNum1();

jewelThree = randomNum1();


  function ranComp() {
    compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 1;

    return compRandoNumber;
  }

  ranComp();

  console.log("This is the computer number " + compRandoNumber);

  console.log("This is test: " + test);

  $("#jewel1").on("click", function() {
    // console.log("This is my random number: " + randomNum1);

    // function jewelOneAdder(randomNum1, jewelOne) {

    // }
    // jewelOneTotal += jewelOne;
    jewelCounter += jewelOne;

    console.log("This is my counter  total: " + jewelCounter);

  
    // console.log("This is my jewel one total: " + jewelOneTotal);

    $("#addHere1").append("<div class='col-md-12'>" + jewelOne + "</div>");
  });



  $("#jewel2").on("click", function() {
  
    console.log("This is my random number: " + jewelTwo);

    $("#addHere2").append("<div class='col-md-12'>" + jewelTwo + "</div>");


  });




  $("#jewel3").on("click", function() {
   
  

    console.log("This is my random number: " + jewelThree);

    $("#addHere3").append("<div class='col-md-12'>" + jewelThree + "</div>");
  });
});

//if 

// function at end of each on click that checks if equal or over - then you win or you lose.

// $("p").append("Some appended text.");
