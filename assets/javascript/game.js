// target number between 19-120 
// crystal numbers between 1-12

// generate target number (random each time)    √
// generate crystal values (random each time)   √
// assign each crystal a random value each time     √
// on click, crystal adds value to current score  √
// if current score === target number, add to wins counter. if >, add to losses counter    
// restart game without refreshing the page, keeps wins and losses totals





$(document).ready(function() {

var targetNumber = $('#target-number');
var wins = 0;
var losses = 0;
var currentScore = 0;

// crystal buttons
var blueCrystal = $('#crystal-blue');
var redCrystal = $('#crystal-red');
var yellowCrystal = $('#crystal-yellow');
var whiteCrystal = $('#crystal-white');

var targetRandomNumber = Math.floor(Math.random() * 120) + 19;
    
function newRound() {
        targetNumber.html(targetRandomNumber);
        console.log(targetRandomNumber);
        blueCrystal.val(Math.floor(Math.random() *12) + 1);
        redCrystal.val(Math.floor(Math.random() *12) + 1);
        yellowCrystal.val(Math.floor(Math.random() *12) + 1);
        whiteCrystal.val(Math.floor(Math.random() *12) + 1);
    }
newRound();

blueCrystal.on('click', function() {
    (currentScore = parseInt(currentScore) + parseInt($(this).val()));
    $('#current-score').html(currentScore);
    if (currentScore === targetRandomNumber) {
        ++wins;
        alert('You won this round');
    }
    
    if (currentScore > targetRandomNumber) {
        ++losses;
        alert('You lost this round');
        newRound();
    }
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



$('#wins-text').html(wins);
$('#losses-text').html(losses);


});