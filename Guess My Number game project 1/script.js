'use strict';

let secretNumber=Math.trunc(Math.random()*10) + 1;
let score=10;
let highscore=0;

const displayMessage= function(message){
    document.querySelector('.message').textContent=message;
};

const bgcolor= function(color){
    document.querySelector('.container').style.backgroundColor=color;
};

const textcolor= function(color){
    document.querySelector('.message').style.color=color;
};

const guessNumber= function(number){
    document.querySelector('.number').textContent=number;
};

const scoreNum= function(score){
    document.querySelector('.score').textContent=score;
};




document.querySelector('.check').addEventListener('click', function(){
    const guess=Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);


    // when no input
    if(!guess){
        displayMessage('No number!');
    }

    // when player wins the game
    else if(guess===secretNumber){
        displayMessage('Correct number! Congratulations you won');
        bgcolor('green');
        textcolor('yellow');
        guessNumber(secretNumber);

        if(score > highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    
    // when the guess is wrong (conditional statement)
    else if(guess!== secretNumber){
        if(score>1){
            displayMessage(guess>secretNumber? 'Number Too High':'Number Too Low');
            score--;
            scoreNum(score);
        }
        else{
            displayMessage('You Lost The Game! Try Again');
            // css property should always be a string
            bgcolor('red');
            textcolor('yellow');
            scoreNum(0);
        }

    }
});

document.querySelector('.again').addEventListener('click', function(){
    score=10;
    secretNumber=Math.trunc(Math.random()*10) + 1;
    displayMessage('Start Guessing...');
    bgcolor('black');
    scoreNum(score);
    guessNumber('?');
    document.querySelector('.guess').value='';

})