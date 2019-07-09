
let totalPrize = 0;
let	possiblePrize = 100;
let attempts = 3;
let	number2 = 2;
let	number3 = 3;
let	number4 = 4;
let	number8 = 8;
let	number100 = 100;
let	randomTop = 8;
let	gameStart = confirm('Do you want to play a game?');
	if (gameStart === false) {
		alert('You did not become a billionaire,but can.');
	}
while (gameStart === true) {
	let randomStart = 0;
	let	random = Math.floor(Math.random() * (randomTop - randomStart + 1)) + randomStart;
	let	yourNumber = +prompt(`Choose a roulette pocket number from 0 to ${randomTop} 
		Attempts left: ${attempts} 
		Total prize: $${totalPrize} 
		Possible prize on current attempt: $${possiblePrize}`);
		if (yourNumber === random) {
			attempts = number3;
			totalPrize += possiblePrize;
			randomTop = number8;
			gameStart = confirm(`Congratulation, you won!   
			Your prize is: ${possiblePrize}$. Do you want to continue?`);
			possiblePrize *= number2;
			if (gameStart === false) {
				alert(`Thank you for your participation. Your prize is: ${totalPrize}$`)
				gameStart = confirm('Want to play again?');
				if(gameStart === true) {
					totalPrize = 0,
					possiblePrize = number100,
					randomTop = number8,
					attempts = number3
				}
			}
		} else {
			let possiblePrize2 = possiblePrize;
			while(yourNumber !== random) {
				possiblePrize2 /= number2;	
				attempts--; 
				if (attempts === 0) {
					gameStart = confirm('You lose, want to play again?');
					totalPrize = 0,
					possiblePrize = number100,
					randomTop = number8,
					attempts = number3
					break
				} else {
					yourNumber = +prompt(`Choose a roulette pocket number from 0 to ${randomTop} 
					Attempts left: ${attempts} 
					Total prize:  $${totalPrize} 
					Possible prize on current attempt: $${possiblePrize2}`) 
				}
			}
			if (yourNumber === random) {
				attempts = number3;
				totalPrize += possiblePrize2;
				randomTop += number4;
				gameStart = confirm(`Congratulation, you won!   
				Your prize is: $${possiblePrize2}. Do you want to continue?`);
				possiblePrize *= number2;
				if (gameStart === false) {
					alert(`Thank you for your participation. Your prize is: $${totalPrize}`)
					gameStart = confirm('Want to play again?');
					if(gameStart === true) {
						totalPrize = 0,
						possiblePrize = number100,
						randomTop = number8,
						attempts = number3
					}
				}
			}
		}
} 