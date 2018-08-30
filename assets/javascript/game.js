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
console.log(targetNumber, "target number");

$('#target-number').text(targetNumber);

var currentScore = 0;

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


$('.crystal-image').on('click', function() {
    currentScore = (parseInt(currentScore) + parseInt(($(this).val())));
    console.log(currentScore, "current score")
})




});