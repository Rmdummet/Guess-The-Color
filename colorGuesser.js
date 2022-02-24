let color;
let score = 0;

function toHexColor(r, g, b){
	const hexR = Number(r).toString(16).padStart(2, 0)
	const hexG = Number(g).toString(16).padStart(2, 0)
	const hexB = Number(b).toString(16).padStart(2, 0)
	return "#" + hexR + hexG + hexB;
}

function drawRandomColor(hexColor){
	
	randomColor.innerHTML = `<canvas width="400" height="300" style="outline: 1px solid black; background-color: ${hexColor};"></canvas>`
	console.log(hexColor);
}

function generateRandomColor(){
	const r = Math.floor(Math.random() * 256)
	const b = Math.floor(Math.random() * 256)
	const g = Math.floor(Math.random() * 256)
	const hexColor = toHexColor(r, g, b);
	return hexColor;
}

function startGame(){
	color = generateRandomColor();
	drawRandomColor(color);
	addOptions();
}

function generateGuesses(){
	const guesses = [color];
	for(let i = 0; i<3; i++){
		const hexColor = generateRandomColor();
		guesses.push(hexColor);
	}
	return guesses.sort();
}

function addOption(hexColor){
	options.innerHTML += `<input value="${hexColor}" type="button" class="button" onclick="checkGuess('${hexColor}')"></input>`
}

function addOptions(){
	options.innerHTML = "";
	const colors = generateGuesses()
	for(let option of colors){
		addOption(option)
	}
}

function checkGuess(guess){
	const isCorrect = guess == color;
	console.log(isCorrect);
	if(isCorrect){
		updateScore();
	}
	else{
		document.body.innerHTML = `<h1> Game Over! </h1> <p>Score: ${score}</p>`;
	}
}

function updateScore(){
	score++;
	scoreHud.innerHTML = `score: ${score}`;
	startGame();
}
startGame();

