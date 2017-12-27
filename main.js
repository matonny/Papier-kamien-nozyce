startGame();
function startGame(){
	addEventListeners();
	initializeScore();
}
function addEventListeners(){
	let buttons = document.querySelectorAll(".optionButton");
	for(let i = 0; i < buttons.length; i++){
	 	buttons[i].addEventListener('click', ()=>{
	  	startRound(Number(buttons[i].value));
	 });
	}
}
function startRound(playerMove){
	let computerMove = getComputerMove()
	let result = analyzeRound(playerMove, computerMove);
	updateScore(result, playerMove, computerMove);
}
function getComputerMove(){
	let computerMove = Math.floor(Math.random() * (2 + 1));
	return computerMove;
}
function analyzeRound(playerMove, computerMove){

	console.log(computerMove);	
	if(playerMove === computerMove){
		return 'tie';
	}else if(playerMove === 0){
		if(computerMove === 1){
			return 'pWon';
		}else{
			return 'cWon';
		}
	}else if(playerMove === 1){
		if(computerMove === 2){
			return 'pWon';
		}else{
			return 'cWon';
		}
	}else{
		if(computerMove === 0){
			return 'pWon';
		}else{
			return 'cWon';
		}
	}
}
function updateScore(result, playerMove, computerMove){
	if(result === 'tie'){
		updateRoundResult('tie', playerMove, computerMove);
	}else if(result === 'cWon'){
		updateRoundResult('cWon', playerMove, computerMove);
		updateComputerScore();
	}else{
		updateRoundResult('pWon', playerMove, computerMove);
		updatePlayerScore();
	}
}
function updateRoundResult(result, playerMove, computerMove){

	let roundResult = document.getElementById('roundResult');
	let options = ["Papier", "Kamien", "Nozyce"];
	if(result === 'tie'){
		roundResult.textContent = 'Remis: G[' + options[Number(playerMove)] + '] vs K[' + options[computerMove] + ']';
	}else if(result === 'cWon'){
		roundResult.textContent = 'Komputer wygrał rundę: G[' + options[playerMove] + '] vs K[' + options[computerMove] + ']';
	}else{
		roundResult.textContent = 'Gracz wygrał rundę: G[' + options[playerMove] + '] vs K[' + options[computerMove] + ']';
	}
}
function updateComputerScore(){
	let computerScore = document.getElementById('computerScore');
	computerScore.textContent = Number(computerScore.textContent) + 1;
	if(computerScore.textContent === '2'){
		finishGame('computer');
	}
}
function updatePlayerScore(){
	let playerScore = document.getElementById('playerScore');
	playerScore.textContent = Number(playerScore.textContent) + 1; 	
	if(playerScore.textContent === '2'){
		finishGame('player');
	}
}
function finishGame(winner){
	if(winner === 'player'){
		alert('Gracz wygrał grę!');
	}else{
		alert('Komputer wygrał grę!');
	}
	removeEventListenners();
}
function removeEventListenners(){
	let buttons = document.querySelectorAll(".optionButton");
	for(let i = 0; i < buttons.length; i++){
	 	buttons[i].removeEventListener('click',startRound);
	}
}
function initializeScore(){
	let playerScore = document.getElementById('playerScore');
	let computerScore = document.getElementById('computerScore');
	let roundResult = document.getElementById('roundResult');
	playerScore.textContent = '0';
	computerScore.textContent = '0';
	roundResult.textContent = 'Gra się dopiero zaczęła!';
}