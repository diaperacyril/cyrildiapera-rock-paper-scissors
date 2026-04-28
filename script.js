function play(userChoice) {
    
const choices = ["rock", "paper", "scissors"];
const computerChoice = choices[Math.floor(Math.random() * 3)];

document.getElementById("user-choice").innerText =
    "Your Choice: " + userChoice;

document.getElementById("computer-choice").innerText =
    "Computer Choice: " + computerChoice;

}