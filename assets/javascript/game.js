// target number between 19-120 
// crystal numbers between 1-12

// generate target number (random each time)    √
// generate the crystal buttons/images dynamically √
// generate crystal values (random each time)   √
// assign each crystal a random value each time     √
// on click, crystal adds value to current score  √
// if current score === target number, add to wins counter. if >, add to losses counter    
// restart game without refreshing the page, keeps wins and losses totals






$(document).ready(function() {
// generate random target number between 19-120
var targetNumber = Math.floor(Math.random() * 102) + 19;
// sets the var currentScore to 0
var currentScore = 0;    

console.log(targetNumber, "target number");

// dispalys targetNumber in the DOM
$('#target-number').html(targetNumber);

// dynamic creation of crystals and crystal values
var blueCrystal = $('<img>');
    blueCrystal.addClass('btn crystal-image');
    blueCrystal.attr("src", "assets/images/bluecrystal.svg");
    blueCrystal.attr("id", "blue-crystal");
    blueCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(blueCrystal);
    console.log(blueCrystal);

var redCrystal = $('<img>');
    redCrystal.addClass('btn crystal-image');
    redCrystal.attr("src", "assets/images/redcrystal.svg");
    redCrystal.attr("id", "red-crystal");
    redCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(redCrystal);
    console.log(redCrystal);

var yellowCrystal = $('<img>');
    yellowCrystal.addClass('btn crystal-image');
    yellowCrystal.attr("src", "assets/images/yellowcrystal.svg");
    yellowCrystal.attr("id", "yellow-crystal");
    yellowCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(yellowCrystal);
    console.log(yellowCrystal);

var whiteCrystal = $('<img>');
    whiteCrystal.addClass('btn crystal-image');
    whiteCrystal.attr("src", "assets/images/whitecrystal.svg");
    whiteCrystal.attr("id", "white-crystal");
    whiteCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(whiteCrystal);
    console.log(whiteCrystal);

// adds crystal value to currentScore by running function addToScore()
$('.crystal-image').on('click', function() {
    currentScore = currentScore + parseInt(($(this).val()));
    $('#current-score').html(currentScore);
    if ((currentScore) > (targetNumber)) {
        alert('You lose this round');
    }
    console.log(currentScore, "current score");
});
// displays currentScore in the DOM 




console.log(currentScore, "outside click event");
});
