const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === "rock" || userInput === "paper" || userInput === "scissors" || userInput === "bomb") {
  return userInput;
  } else {
    console.log("Error!");
  }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie.";
  } else if (userChoice === "rock") {
            if (computerChoice === "paper") {
              return "The computer won!";
            } else {
              return "You won!";
            }
  } else if (userChoice === "paper") {
            if (computerChoice === "rock") {
              return "The computer won!";
            } else {
              return "You won!";
            }
  } else if (userChoice === "scissors") {
            if (computerChoice === "rock") {
              return "The computer won!";
            } else {
              return "You won!";
            }
  } else if (userChoice === "bomb") {
            return "You won, cheater!";
  }
}

const playGame = () => {
  const userChoice = getUserChoice("paper");
  const computerChoice = getComputerChoice();
  console.log("You threw: " + userChoice);
  console.log("The computer threw: " + computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
};

playGame();

// If you type "bomb", you will definitely win the game.
