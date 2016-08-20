var wordLib = ["cat", "dog", "horse", "bees"];
var compLib ={
	list: ["fish","camels", "chimps"]
}


var compChoice = wordLib[Math.round(Math.random() * (wordLib.length-1))];
var split = compChoice.split("")
console.log(split);

// Board set-up=================================================
var board = [];
for(var i=0, n=compChoice.length; i<n; i++){
	board.push('_ ');
}


var html = "<p>"+ board + "</p>";
document.querySelector('#board').innerHTML = html;

//==============
function endGame (arr1, arr2){
	for(var i=0, n=board.length; i<n; i++){
		if(arr1[i] !== arr2[i]){
			return false;
		}
	}
	return true;
}

// Main game==================================================
var turns = 0;
var correct = 0;
var incorrect= 5;
var guesses = [];

document.onkeyup = function() {

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		console.log(userGuess)
	
	//if the letter has been guess do nothing
	if(guesses.indexOf(userGuess)>-1){
	}
	//otherwise go to town
	else{
			if(compChoice.indexOf(userGuess)>-1){
				guesses.push(userGuess);
				correct ++;
				turns ++;
				//check to see where in the arryay the guess is and replace board
				for(var i=0, n=split.length;i<n; i++){
					if(userGuess === split[i]){
						board[i]=userGuess;
						var html = "<p>"+ board + "</p>";
						document.querySelector('#board').innerHTML = html;
					}
				}
			}
			else{
				guesses.push(userGuess);
				incorrect --;
				turns ++;
			}
		var html = "<p> Score </p>" +

					"<p> correct: " + correct +"</p>"
					+
					"<p> incorrect: "+ incorrect +"</p>"
					+

					"<p>turns: " +turns +"</p>"
					+
					"<p>guesses: "+guesses+"</p>";

			document.querySelector('#score').innerHTML = html;

			if(endGame(board, split)===true){
			alert("You Win");
			}
		}
}

