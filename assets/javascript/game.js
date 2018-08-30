// target number between 19-120 
// crystal numbers between 1-12

// generate target number (random each time)    
// generate crystal values (random each time)   
// assign each crystal a random value each time     
// on click, crystal adds value to current score  
// if current score === target number, add to wins counter. if >, add to losses counter    
// restart game without refreshing the page, keeps wins and losses totals





$(document).ready(function() {

var targetNumber = Math.floor(Math.random() * 120) + 1;

$('#target-number').text(targetNumber);

var currentScore = 0;



});