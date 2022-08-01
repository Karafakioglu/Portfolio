let humanScore=0;
let computerScore=0;
const humanScore_div = document.getElementById("human-score");
const compScore_div= document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

// Computer chooses randomly out of defined const array

function getCompChoice(){
	const choices = ['rock','paper','scissors'];
	let choice = choices[Math.floor(Math.random()*choices.length)];
	return choice;
}

// Converts lower case choices first letters to upper case

function convertToUpper(word){
	if (word === "rock"){
		let word = "rock";
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	if (word=== paper) {
		let word = "paper"
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
	else {
		let word = "scissors"
		return word.charAt(0).toUpperCase() + word.slice(1);
	}
}

// Updates the human score and changes html text

function win(human, computer){
	const humanChoice_div = document.getElementById(human);
	humanScore++;
	humanScore_div.innerHTML =humanScore;
	result_div.innerHTML = `${convertToUpper(human)} beats ${convertToUpper(computer)}. Human wins!`;
	humanChoice_div.classList.add('green-glow');
	setTimeout(function() {humanChoice_div.classList.remove('green-glow')} ,200)
}

// Updates the computer score and changes html text

function lose(computer, human){
	const humanChoice_div = document.getElementById(human);
	computerScore++;
	compScore_div.innerHTML =computerScore;
	result_div.innerHTML = `${convertToUpper(computer)} beats ${convertToUpper(human)}. Computer wins!`;
	humanChoice_div.classList.add('red-glow');
	setTimeout(function() {humanChoice_div.classList.remove('red-glow')} ,200)
}

// Changes the html text showing that is is a draw

function draw(computer, human){
	const humanChoice_div = document.getElementById(human);
	result_div.innerHTML = `${convertToUpper(computer)} equals ${convertToUpper(human)}. It is a draw!`;
	humanChoice_div.classList.add('gray-glow');
	setTimeout(function() {humanChoice_div.classList.remove('gray-glow')} ,200)
}

// Game Logic

function game(userChoice) {
	const compChoice= getCompChoice();

	// Checks whether user wins or not

	switch (userChoice+compChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		win(userChoice,compChoice)
		break;
	}

	// Checks whether comp wins or not

	switch (compChoice+userChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
		lose(compChoice,userChoice);
		break;
	}

	// Checks whether it is a tie or not

	switch(compChoice+userChoice){
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
		draw(compChoice,userChoice);
		break;
	}
}

// Main

function main() {
	rock_div.addEventListener("click",function(){
		game('rock');
	})

	paper_div.addEventListener("click",function(){
		game('paper');
	})

	scissors_div.addEventListener("click",function(){
		game('scissors');
	})
}

main();