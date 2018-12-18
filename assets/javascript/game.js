$(document).ready(function () {
  //Before all else, declare the variables!

  //declare my 4 crystals (which will I will later make display as images and make clicking on them add points to the user's score) and give them all a value of 0 to start.
  var targetScore = 0;
  var userScore = 0;
  var wins = 0;
  var losses = 0;

  //declare the targetScore variable that will be displayed to the page and the user will try to match (between 19 and 120)
  function generateTargetScore() {
    targetScore = Math.floor(Math.random() * 100) + 20;
    // display the targetScore to the screen in the appropriate div
    $("#target-score").html("Target Score: " + targetScore);
    console.log("generate target " + targetScore);
  }

  //declare the userScore variable that will be displayed on the page and will always start at 0 to begin every round, and it goes up every time the user clicks on an image, UNTIL the userScore >= (is greater than or equal to) targetScore
  function newUserScore() {
    userScore = 0;
    //display the userScore to the screen in the appropriate div
    $("#scoreDisplay").html("User Score: " + userScore);
  }


  // then, somewhat random point values must be assigned to each of the 4 crystal images/buttons


  // make it so that when the user clicks on any a crystal button, they increase their score for the round and this is displayed in the appropriate div as text
  function assignCrystalPoints() {
    $(".crystalimg").each(function () {
      var crystalPoints = Math.floor(Math.random() * 11) + 1;
      $(this).attr("data-value", crystalPoints);
      console.log(crystalPoints);
    })
  }

  generateTargetScore();
  newUserScore();
  assignCrystalPoints();

  $("#Crystal1").on("click", function () {
    var crystalWorth = Math.floor(Math.random() * 11) + 1;
    console.log(crystalWorth);
    crystalWorth = $(this).attr("data-value");
    console.log(crystalWorth);
    userScore = parseInt(userScore) + parseInt(crystalWorth);
    $("#scoreDisplay").html("User Score: " + userScore);
    console.log(crystalWorth);
    // userScore = userScore + crystalWorth;
    console.log("User Score:")
    console.log(userScore + "targetScore:" + targetScore);


    if (userScore === targetScore) {
      alert("You won the round. I'm so proud of you.");
      wins++;
      $("#userWins").html("Wins: " + wins);
      generateTargetScore();
      newUserScore();
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  
    if (userScore > targetScore) {
      alert("You lost the round. I'm very disappointed in you.");
      losses++;
      $("#userLosses").html("Losses: " + losses);
      generateTargetScore();
      newUserScore();
      console.log("results of loss if user score is more")
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  })

  $("#Crystal2").on("click", function () {
    var crystalWorth = Math.floor(Math.random() * 11) + 1;
    console.log(crystalWorth);
    crystalWorth = $(this).attr("data-value");
    console.log(crystalWorth);
    userScore = parseInt(userScore) + parseInt(crystalWorth);
    $("#scoreDisplay").html("User Score: " + userScore);
    console.log(crystalWorth);
    // userScore = userScore + crystalWorth;
    console.log("User Score:")
    console.log(userScore + "targetScore:" + targetScore);

    if (userScore === targetScore) {
      alert("You won the round. I'm so proud of you.");
      wins++;
      $("#userWins").html("Wins: " + wins);
      generateTargetScore();
      newUserScore();
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  
    if (userScore > targetScore) {
      alert("You lost the round. I'm very disappointed in you.");
      losses++;
      $("#userLosses").html("Losses: " + losses);
      generateTargetScore();
      newUserScore();
      console.log("results of loss if user score is more")
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  })

  $("#Crystal3").on("click", function () {
    var crystalWorth = Math.floor(Math.random() * 11) + 1;
    console.log(crystalWorth);
    crystalWorth = $(this).attr("data-value");
    console.log(crystalWorth);
    userScore = parseInt(userScore) + parseInt(crystalWorth);
    $("#scoreDisplay").html("User Score: " + userScore);
    console.log(crystalWorth);
    // userScore = userScore + crystalWorth;
    console.log("User Score:")
    console.log(userScore + "targetScore:" + targetScore);

    if (userScore === targetScore) {
      alert("You won the round. I'm so proud of you.");
      wins++;
      $("#userWins").html("Wins: " + wins);
      generateTargetScore();
      newUserScore();
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  
    if (userScore > targetScore) {
      alert("You lost the round. I'm very disappointed in you.");
      losses++;
      $("#userLosses").html("Losses: " + losses);
      generateTargetScore();
      newUserScore();
      console.log("results of loss if user score is more")
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  })

  $("#Crystal4").on("click", function () {
    var crystalWorth = Math.floor(Math.random() * 11) + 1;
    console.log(crystalWorth);
    crystalWorth = $(this).attr("data-value");
    console.log(crystalWorth);
    userScore = parseInt(userScore) + parseInt(crystalWorth);
    $("#scoreDisplay").html("User Score: " + userScore);
    console.log(crystalWorth);
    // userScore = userScore + crystalWorth;
    console.log("User Score:")
    console.log(userScore + "targetScore:" + targetScore);

    if (userScore === targetScore) {
      alert("You won the round. I'm so proud of you.");
      wins++;
      $("#userWins").html("Wins: " + wins);
      generateTargetScore();
      newUserScore();
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  
    if (userScore > targetScore) {
      alert("You lost the round. I'm very disappointed in you.");
      losses++;
      $("#userLosses").html("Losses: " + losses);
      generateTargetScore();
      newUserScore();
      console.log("results of loss if user score is more")
      console.log(`Target Score: ${targetScore}`);
      console.log(`UserScore: ${userScore}`);
    }
  })

})