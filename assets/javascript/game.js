
var targetNumber = Math.floor(Math.random() * 102) + 19;
    $('#target-number').html("Target Number: " + targetNumber);
var currentScore = 0;
var wins = 0;
var losses = 0;


// dynamic creation of crystals and crystal values
var blueCrystal = $('<img>');
    blueCrystal.addClass('btn crystal-image');
    blueCrystal.attr("src", "assets/images/bluecrystal.svg");
    blueCrystal.attr("id", "blue-crystal");
    blueCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(blueCrystal);
    
var redCrystal = $('<img>');
    redCrystal.addClass('btn crystal-image');
    redCrystal.attr("src", "assets/images/redcrystal.svg");
    redCrystal.attr("id", "red-crystal");
    redCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(redCrystal);
    
var yellowCrystal = $('<img>');
    yellowCrystal.addClass('btn crystal-image');
    yellowCrystal.attr("src", "assets/images/yellowcrystal.svg");
    yellowCrystal.attr("id", "yellow-crystal");
    yellowCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(yellowCrystal);
    
var whiteCrystal = $('<img>');
    whiteCrystal.addClass('btn crystal-image');
    whiteCrystal.attr("src", "assets/images/whitecrystal.svg");
    whiteCrystal.attr("id", "white-crystal");
    whiteCrystal.val(Math.floor(Math.random() * 12) + 1);
    $('#crystals').append(whiteCrystal);

// crystal click    
$('.crystal-image').on('click', function() {
    currentScore = currentScore + parseInt(($(this).val()));
    $('#current-score').html(currentScore);

        // win/loss logic
        if ((currentScore) > (targetNumber)) {
            alert('You lost this round.');
            losses++;
            newRound();
            
        }    
        if ((currentScore) === (targetNumber)) {
            alert('You won this round.');
            wins++;
            newRound();
            
        }

    $('#losses-text').html('Failed Orders: ' + losses);
    $('#wins-text').html('Orders Filled: ' + wins);
});

// new round (reset)
function newRound() {
    targetNumber = Math.floor(Math.random() * 102) + 19;
    $('#target-number').html("Target Number: " + targetNumber);  
    currentScore = 0;
    $('#current-score').html(currentScore);
    blueCrystal.val(Math.floor(Math.random() * 12) + 1);
    redCrystal.val(Math.floor(Math.random() * 12) + 1);
    yellowCrystal.val(Math.floor(Math.random() * 12) + 1);
    whiteCrystal.val(Math.floor(Math.random() * 12) + 1);
}