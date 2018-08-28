// target number between 19-120 
// crystal numbers between 1-12

// generate target number (random each time)    √
// generate crystal values (random each time)   √
// assign each crystal a random value each time     √
// on click, crystal adds value to current score
// if current score === target number, add to wins counter, else, add to losses counter
// restart game without refreshing the page, keeps wins and losses totals

$(document).ready(function() {

// global var
// data containers
var targetNumber = $('#target-number');
var wins = 0;
var losses = 0;
var currentScore = 0;

// crystal buttons
var blueCrystal = $('#crystal-blue');
var redCrystal = $('#crystal-red');
var yellowCrystal = $('#crystal-yellow');
var whiteCrystal = $('#crystal-white');

// random number generators
var targetRandomNumber = Math.floor(Math.random() * 120) + 19;
var crystalRandomNumber = Math.floor(Math.random() *12) + 1;
    
function newRound() {
        targetNumber.text(targetRandomNumber);
        blueCrystal.val(crystalRandomNumber);
        redCrystal.val(crystalRandomNumber);
        yellowCrystal.val(crystalRandomNumber);
        whiteCrystal.val(crystalRandomNumber);
    }

newRound();

blueCrystal.on('click', function() {
    (currentScore = parseInt(currentScore) + parseInt($(this).val()));
    $('#current-score').html(currentScore);
})
    
redCrystal.on('click', function() {
    (currentScore = parseInt(currentScore) + parseInt($(this).val()));
    $('#current-score').html(currentScore);
})

yellowCrystal.on('click', function() {
    (currentScore = parseInt(currentScore) + parseInt($(this).val()));
    $('#current-score').html(currentScore);
})

whiteCrystal.on('click', function() {
    (currentScore = parseInt(currentScore) + parseInt($(this).val()));
    $('#current-score').html(currentScore);
})


});