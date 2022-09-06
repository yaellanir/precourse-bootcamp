const welcomeMessage = String.raw`
|------|    
|     __|__  
|   *|~ ~|* 
|     |_o_|  
|       |     
| ----|----  Welcome
|       |        To
|       |        Yael's
|      / \      Hangman!
|     /   \  
|   _/     \_       
      `;

const welcomeMessage2 = String.raw`
 ______________
//     |
||     O
||     \|/
||     / \
||______________
  YAEL'S HANGMAN

`;
const welcomeYael = String.raw`
                            \o_o/
 WELCOME TO YAEL'S HANGMAN!  
                              / \
`;

let userName = "";
let wordPool = ["hello", "flower", "beverage", "dictionary", "airplane"];
let correctGuessMessagePool = [
  "Correct",
  "Good job",
  "You're Greaaaaaat",
  "You're a god!",
  "WoW, you're on fire",
  "WA WA WEE WA! You're the Number one guesser in all of kazachstan",
];
let incorrectGuessMessagePool = [
  "Nooooope",
  "Try again",
  "Uh Oh - That's incorrect",
  "You're about to Lose!",
  "You're going down!",
];
let alreadyGuessedMessagePool = [
  "Did you forget? You already guessed that",
  "Yo! look at the list I provided- You guessed this already",
  "ohhhhh snap - You guessed this before!",
];
let chosenWord = wordPool[Math.floor(Math.random() * wordPool.length)];
let chosenWordArray = chosenWord.split("");
let maskedWordArray = chosenWordArray.map((letter) => {
  return "*";
});
let guessedLetters = [];
let availableGuessesCount = 10;

window.alert(welcomeMessage2);

const getUsersName = function () {
  userName = prompt("Please enter a username.", "Mordy");
};
getUsersName();

const gameState = function () {
  return `
    Hey ${userName},
    Guess this word: ${maskedWordArray.join(" ")}
    Remaining lives: ${availableGuessesCount}
    Letters Guessed: ${guessedLetters.join(", ")}`;
};
const isValidGuess = (guess) => {
  if (/^[a-zA-Z]+$/.test(guess) && guess.length === 1) {
    return true;
  } else {
    return false;
  }
};
const isCorrectGuess = (guess, word) => word.includes(guess);

const randomItemFromArray = (type, array) => {
  const messageHeaders = {
    correct: "Correct Guess:",
    guessed: "Already Guessed:",
    incorrect: "Incorrect Guess:",
  };
  return `${messageHeaders[type]}
  ${array[Math.floor(Math.random() * array.length)]}`;
};
// messages
const displayMessages = {
  win: () => {
    window.alert(
      `Woo Hoo! You won!!! (Accept me to the Bootcamp please :), ${userName}) `
    );
  },
  lose: () => {
    window.alert(
      `Boo Hoo! You lost!!! (Accept me to the Bootcamp please :), ${userName}) `
    );
  },
  correct: () => {
    window.alert(randomItemFromArray("correct", correctGuessMessagePool));
  },
  incorrect: () => {
    window.alert(randomItemFromArray("incorrect", incorrectGuessMessagePool));
  },
  invalid: () => {
    window.alert(`
    Uh oh!
    Invalid guess. Try again.`);
  },
  guessed: () => {
    window.alert(randomItemFromArray("guessed", alreadyGuessedMessagePool));
  },
};

const promptAGuess = function () {
  let guess = prompt(`
    ${gameState()}
    
    Guess a letter.`);
  if (isValidGuess(guess)) {
    return guess.toLowerCase();
  } else {
    return "invalid";
  }
};
const didWin = function () {
  return maskedWordArray.includes("*") ? false : true;
};
const isGameOver = function () {
  if (!maskedWordArray.includes("*") || availableGuessesCount === 0) {
    return true;
  } else {
    return false;
  }
};
const handleGuess = function (guess) {
  if (guess === "invalid") {
    return displayMessages.invalid();
  }
  if (!guessedLetters.includes(guess)) {
    let matchIndexes = [];
    guessedLetters.push(guess);
    chosenWordArray.forEach((letter, index) => {
      if (letter === guess) {
        matchIndexes.push(index);
      }
    });
    if (matchIndexes.length) {
      matchIndexes.forEach((index) => {
        maskedWordArray[index] = guess;
      });
      displayMessages.correct();
    } else {
      availableGuessesCount--;
      displayMessages.incorrect();
    }
  } else {
    displayMessages.guessed();
  }
};
const gameLoop = function () {
  while (!isGameOver()) {
    let guess = promptAGuess();
    handleGuess(guess);
  }
  if (didWin()) {
    return displayMessages.win();
  } else {
    return displayMessages.lose();
  }
};
gameLoop();
