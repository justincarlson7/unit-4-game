// var compRandoNumber = 0;

// function ranComp() {
//     compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
//  }

//  ranComp();

//  $("#compRandoNumberHtml").html("<a> Match this number:" + compRandoNumber + "</a>");

//Create random number for the computer

$(document).ready(function() {
  var compRandoNumber = 0;

  var jewelOne = 0;
  var jewelTwo = 0;
  var jewelThree = 0;
  var jewelFour = 0;
  var jewelCounter = 0;
  var wins = 0;
  var losses = 0;

  function randomNum1() {
    ranNum = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
    return ranNum;
  }

  jewelOne = randomNum1();

  jewelTwo = randomNum1();

  jewelThree = randomNum1();

  jewelFour = randomNum1();

  function ranComp() {
    compRandoNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    return compRandoNumber;
  }
 

  ranComp();

  $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");

  $("#winsHtml").html("<h2> Wins: 0</h2>");
  $("#lossesHtml").html("<h2> Losses: 0</h2>");
  $("#jewelCounterHtml").html("<h2> Number of Bugs: 0</h2>");

  $("#orangeBug").on("click", function() {
    // console.log("This is my random number: " + randomNum1);

    // function jewelOneAdder(randomNum1, jewelOne) {

    // }
    // jewelOneTotal += jewelOne;
    jewelCounter += jewelOne;

    if (jewelCounter === compRandoNumber) {
      wins++;
      $("#winsHtml").html("<h2> Wins:" + wins + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Win!!!!</h2>");
      $("#yourOutcomeHtml" ).fadeOut(5000);
      //need a jquery remove somehwhere
      console.log("You win!!!" + wins);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;

      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    } else if (jewelCounter >= compRandoNumber) {
      losses++;
      $("#lossesHtml").html("<h2> Loses:" + losses + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Lose!!!!</h2>");
      $( "#yourOutcomeHtml" ).fadeOut(5000);
      //need a jquery remove somehwhere
      console.log("<h2> You Lose!!!!</h2>" + losses);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;

      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    }

    //console.log("This is my counter  total: " + jewelCounter);

    // console.log("This is my jewel one total: " + jewelOneTotal);

    $("#jewelCounterHtml").html("<h2> Number of Bugs: " + jewelCounter + "</h2>");
  });

  $("#coffeeBug").on("click", function() {
    jewelCounter += jewelTwo;

    if (jewelCounter === compRandoNumber) {
      wins++;
      $("#winsHtml").html("<h2> Wins:" + wins + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Win!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);
      console.log("You win!!!" + wins);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    } else if (jewelCounter >= compRandoNumber) {
      losses++;
      $("#lossesHtml").html("<h2> Losses:" + losses + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Lose!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);

      console.log("<h2> You Lose!!!!</h2>" + losses);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    }

    // console.log("This is my random number: " + jewelTwo);

    $("#jewelCounterHtml").html("<h2> Number of Bugs: " + jewelCounter + "</h2>");
  });

  $("#blueBug").on("click", function() {
    jewelCounter += jewelThree;

    if (jewelCounter === compRandoNumber) {
      wins++;
      $("#winsHtml").html("<h2> Wins:" + wins + "</h2>");
      console.log("You win!!!" + wins);
      $("#yourOutcomeHtml").html("<h2> You Win!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    } else if (jewelCounter >= compRandoNumber) {
      losses++;
      $("#lossesHtml").html("<h2> Losses:" + losses + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Lose!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);
      console.log("<h2> You Lose!!!!</h2>" + losses);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    }

    $("#jewelCounterHtml").html("<h2> Number of Bugs: " + jewelCounter + "</h2>");
  });

  $("#silverBug").on("click", function() {
    jewelCounter += jewelFour;
    // console.log("This is my random number: " + jewelThree);

    if (jewelCounter === compRandoNumber) {
      wins++;
      $("#winsHtml").html("<h2> Wins:" + wins + "</h2>");
      console.log("You win!!!" + wins);
      $("#yourOutcomeHtml").html("<h2> You Win!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    } else if (jewelCounter >= compRandoNumber) {
      losses++;
      $("#lossesHtml").html("<h2> Losses:" + losses + "</h2>");
      $("#yourOutcomeHtml").html("<h2> You Lose!!!!</h2>");
      // $("#yourOutcomeHtml" ).fadeOut(5000);
      console.log("<h2> You Lose!!!!</h2>" + losses);

      ranComp();
      jewelOne = randomNum1();

      jewelTwo = randomNum1();

      jewelThree = randomNum1();

      jewelFour = randomNum1();
      jewelCounter = 0;
      $("#compRandoNumberHtml").html("<h2> Match this number: " + compRandoNumber + "</h2>");
    }

    $("#jewelCounterHtml").html("<h2> Number of Bugs: " + jewelCounter + "</h2>");
  });
});

//if

// function at end of each on click that checks if equal or over - then you win or you lose.

// $("p").append("Some appended text.");
