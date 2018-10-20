document.onkeyup = function(event) {
    hangman.gameOn = true;
    if (hangman.gameOn == true) {
        hangman.instructions1.style.display = "none";
        hangman.instructions2.style.display = "block";
    }
    hangman.keyPressed = event.key.toLowerCase();

    hangman.robot = hangman.famousRobots[Math.floor(Math.random() * hangman.famousRobots.length)]
    // console.log(hangman.robot)

    hangman.robotLetters = hangman.robot.split(",")
    // console.log(hangman.robotLetters)
    
}



var hangman = {
    gameOn: false,
    instructions1: document.getElementById("instructions-1"),
    instructions2: document.getElementById("instructions-2"),
    keyPressed: "",
    famousRobots: ["r2d2","c3po","robocop","bender","terminator","robby","rosie","megatron","t1000","linguo","sonny","android17","android18"],
    robot: "",
    robotLetters: []
}

// hangman.robot = Math.floor(Math.random() * this.famousRobots.length)

//     movies: ["The Godfather", "The Matrix", "Captain America Civil War", "The Fox and the Hound", "Wonder", "Requiem for a Dream", "Green Street Hooligans", "Avengers Infinity War", "American Beauty", "Good Will Hunting", "Fight Club", "Guardians of the Galaxy Volume 2", "Pans Labyrinth", "Gangs of New York", "Vicky Cristina Barcelona", "300", "Big", "Deadpool", "Full Metal Jacket"],
//     movie: "",
//     guesses: [],
//     charactersPressed: [],
//     keyPressed: function (event) {
//         var character = event.character.toLowerCase();
//         if (this.gameOn === 0) {
//             this.startGame();
//         }
//         else if (this.gameState === 1 && this.alphabet.indexOf(key) >= 0) {
//             if (this.guesses.indexOf(key) < 0) {
//                 this.Guess(key);
//                 this.winCheck();
//             }
//         }
//         else if (this.gameState === 2) {
//             this.resetAll();
//         }
//     }
// }

// var movie = movies[Math.floor(Math.random() * movies.length)];
// console.log(movie)

// var underscores = [];

// for (var i = 0; i <=movie.length;i++){
//     // console.log(movieSelection.length)
//     underscores.push("_")
// }

// console.log(underscores)