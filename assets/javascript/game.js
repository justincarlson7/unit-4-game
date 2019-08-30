// var compRandoNumber = 0;

// function ranComp() {
//     compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//  }

//  ranComp();

//  console.log("This is the computer number " + compRandoNumber);

$(document).ready(function() {
  var compRandoNumber = 0;

  var jewelOne = 0;
  var jewelTwo = 0;
  var jewelThree = 0;
  var jewelOneTotal =0;

  function ranComp() {
    compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 1;
  }

 

  ranComp();

  console.log("This is the computer number " + compRandoNumber);




  $("#jewel1").on("click", function() {
    function ran1() {
      randomNum1 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }

    ran1();

    console.log("This is my random number: " + randomNum1);
      
    function jewelOneAdder(randomNum1, jewelOne) {

       
        var jewelOneTotal = randomNum1 + jewelOne;
           
       
  
    jewelOneAdder();

    console.log("This is my jewel one total: " + jewelOneTotal);


    $("#addHere1").append("<div class='col-md-12'>" + randomNum1 + "</div>");
  }

});

  $("#jewel2").on("click", function() {
    function ran2() {
      randomNum2 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }

    ran2();

    console.log("This is my random number: " + randomNum2);

    $("#addHere2").append("<div class='col-md-12'>" + randomNum2 + "</div>");
  });
  $("#jewel3").on("click", function() {
    function ran3() {
      randomNum3 = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    }

    ran3();

    console.log("This is my random number: " + randomNum3);

    $("#addHere3").append("<div class='col-md-12'>" + randomNum3 + "</div>");


     
  });
});

// $("p").append("Some appended text.");
