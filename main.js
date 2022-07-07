const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (
      userInput === "rock" ||
      userInput === "paper" ||
      userInput === "scissors"
    ) {
      return userInput;
    } else {
      console.log("Error, please choose: rock, paper or scissors.");
    }
  };
  
  const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  };
  
  const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "GAME IS A TIE!";
    }
    if (userChoice === "rock") {
      if (computerChoice === "paper") {
        return "Sorry, computer won!";
      } else {
        return "Congratulations, you won!";
      }
    }
    if (userChoice === "paper") {
      if (computerChoice === "scissors") {
        return "Sorry, computer won!";
      } else {
        return "Congratulations, you won!";
      }
    }
    if (userChoice === "scissors") {
      if (computerChoice === "rock") {
        return "Sorry, compueter won!";
      } else {
        return "Congratulations, you won!";
      }
    }
  };
  
  const playGame = () => {
    const userChoice = getUserChoice("rock");
    const computerChoice = getComputerChoice();
    console.log("You choce: " + userChoice);
    console.log("The computer choice: " + computerChoice);
  
    console.log(determineWinner(userChoice, computerChoice));
  };
  
  playGame();