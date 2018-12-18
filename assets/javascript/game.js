//Before all else, declare the variables!

//declare my 4 crystals (which will I will later make display as images and make clicking on them add points to the user's score) and give them all a value of 0 to start.
var crystal1 = 0;
var crystal2 = 0;
var crystal3 = 0;
var crystal4 = 0;

//declare the targetScore variable that will be displayed to the page and the user will try to match
var targetScore = Math.floor(Math.random() * 100) + 20;
// display the targetScore to the screen in the appropriate div
$("#target-score").html(targetScore);


//declare the userScore variable that will be displayed on the page and will always start at 0 to begin every round, and it goes up every time the user clicks on an image, UNTIL the userScore >= (is greater than or equal to) targetScore
var userScore = 0;
//display the userScore to the screen in the appropriate div
$("#scoreDisplay").html(userScore);


// first, the computer will have to randomly choose a target score number for the round


// then, somewhat random point values must be assigned to each of the 4 crystal images/buttons

// make it so that when the user clicks on any a crystal button, they increase their score for the round and this is displayed in the appropriate div as text




// JS CODE FOR USER WINNING THE ROUND: ---------------------

// make it so that if the user's round score is exactly equal to the target round score, they get alerted that they won the round!

// make it so that after the user gets alerted that they won a round, their win counter goes up by 1 and it gets displayed in the appropriate div.

// make it so that once the user gets their win alert and the win counter goes up by 1, and a new round starts. A new round starts when the user's round score is reset to 0, a new round target score is generated and displayed to the appropriate div, and new point values are assigned to the 4 crystal images/buttons.



// BONUS: make it so that something cool happens when the user acquires their fifth win!



// JS CODE FOR USER LOSING THE ROUND: ----------------------------

// make it so that if the user's round score is greater than the target round score, the user gets alerted that they lost the round!

//make it so that after the user gets alerted that they lost a round, their loss counter goes up by 1 and it gets displayed in the appropriate div.

// make it so that once the user gets their loss alert and the loss counter goes up by 1, and a new round starts. A new round starts when the user's round score is reset to 0, a new round target score is generated and displayed to the appropriate div, and the new point values are assigned to the 4 crystal images/buttons.
