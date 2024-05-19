let choices = document.querySelectorAll('.choice') //querySelectorAll grabs all elements with the class "choice"
let resultDisplay = document.getElementById('result')
let choicesArray = ['rock', 'paper', 'scissors']


for (let i = 0; i < choices.length; i++) {
choices[i].addEventListener('click', function(e) {  // this lines tells the computer to grab the element that is clicked
    let userChoice = e.target.id // now we log the selected choice to a variable that can now be computed
        let computerChoice = getComputerChoice()
        let result = mathForWin(userChoice, computerChoice)
        resultDisplay.innerText = `You chose ${userChoice}, the computer chose ${computerChoice}! ${result}`
    })
}
// functipn to generate a random computer choice
getComputerChoice = () => {
    let randomIndex = Math.floor(Math.random() * choicesArray.length)
    return choicesArray[randomIndex]
}
// function to decide how the computer decides a winner
mathForWin = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!'
    } else {
        return 'You lose!'
    }
}
