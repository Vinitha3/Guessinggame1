const randomNumber = Math.floor(Math.random()*99+1);
const userGuess = document.querySelector("#input");
const resultDiv = document.querySelector(".result");
const historyDiv = document.querySelector(".history");



historyDiv.innerHTML = "";

let chances = 7;

let isWin = false;

function game() {
    let result;
    let guess = userGuess.value;
    if (guess > 100 || guess < 1) {
        result = " Note : <br> Guess a number between 1 and 100";
        resultDiv.innerHTML = `<h4>${result}</h4>`;
    }else if (chances && !isWin) {
        let guess = userGuess.value;
        if (randomNumber == guess) {
            result = "Cheer up!🥳<br>You won!";
            isWin = true;
        } else if (randomNumber < guess) {
            if (chances == 1) {
                result = `Game Over!<br>The answer is ${randomNumber}`;
            }else {
                result = "You too high! <br> Take another chance";
            }
        }else {
            if (chances == 1) {
                result = `Game Over!<br>The answer is ${randomNumber}`;
            }else {
                result = "You too low! <br> Take another chance";
            }
        }
        chances--;
        historyDiv.innerHTML += `<h2>You Guessed ${guess}</h2>`;
        return resultDiv.innerHTML = `<h4>${result}</h4>`;
    }
    
}


function reload() {
    if (!chances || isWin) {
        location.reload();
    }
    
}