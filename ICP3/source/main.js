// getting the user choice:
const getUserChoice = userInput =>{
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput==='paper' || userInput ==='scissors') {
        return userInput;
    } else {
        console.log('not a valid choice');
    }
};
// Creating an random computer choice:
function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
}
// determining the winner between the choice:
function determineWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return 'It\'s a tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'paper'){
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        }else {
            return 'You win!';
        }
    } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    } else if (userChoice === 'bomb') {
        return 'You win!';
    }
};
// Calling the playGame function:
function playGame(choice) {
    var userChoice = getUserChoice(choice);
    var computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    const resultId = document.getElementById("result");
    resultId.innerHTML = determineWinner(userChoice,computerChoice); ;
};
