var robots = ["r2d2", "c3po", "robocop", "bender", "terminator", "robby", "rosie", "megatron", "t1000", "linguo", "sonny", "vision", "alpha", "bb8"];
var robot;
var underscores;
var wins = 0;
var guessedLetters = [];
var guessesLeft;
var gameOn = false;

function newGame(event) {
    gameOn = true;
    robot = robots[Math.floor(Math.random() * robots.length)];
    underscores = [];
    guessedLetters = [];
    guessesLeft = 10;
    for (var i = 0; i < robot.length; i++) {
        underscores.push("_");
    }
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#currentWord").innerHTML = underscores.join(" ");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join(", ");
}

document.onkeyup = function (event) {

    // Start game and hide instructions
    if (event.keyCode == 32 && gameOn == false) {
        newGame()
        gameOn == true
        document.getElementById("instructions").style.display = "none";
    }

    // Saving the keyCode in var userGuess to compare against robot
    if(event.keyCode >= 48 && event.keyCode <= 90 || event.keyCode >=96 && event.keyCode <= 105) {
        var userGuess = event.key.toLowerCase();
    }

    // Loop through the robot and if there's a match it replaces the underscore with the matched letter
    var letterFound = false;
    for (var i = 0; i < robot.length; i++) {
        if (robot[i] === userGuess) {
            underscores[i] = robot[i];
            letterFound = true;
        }
    }

    // if userGuess doesn't match it pushes the letter to the guessedLetters and deducts from guessesLeft
    if (letterFound === false && !guessedLetters.includes(userGuess)) {
        guessedLetters.push(userGuess);
        guessesLeft--;
    }

    // if guessesLeft are depleted alert a game over message
    if (guessesLeft <= 0) {
        alert("GAME OVER! You don't know your robots, bee bop, poop");
        newGame();
    }

    // if all underscores have been matched to the robot word add a win and start a new game
    if (underscores.join('') === robot) {
        wins++;
        document.querySelector("#victory-message").innerHTML = "You win! Get ready for next game!";
        setTimeout(function() {
            document.getElementById("victory-message").style.display = "none";
        }, 2000)
        setTimeout(newGame, 2100);
    }


    document.querySelector("#currentWord").innerHTML = underscores.join(" ");
    document.querySelector("#lettersGuessed").innerHTML = guessedLetters.join("~");
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#wins").innerHTML = wins;
}