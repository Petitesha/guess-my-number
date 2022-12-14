'use strict'; 

let secretNumber = Math.trunc(Math.random() * 20 + 1)


let score = 20;

document.querySelector('.check').addEventListener('click', function (){
  
        const guess = Number(document.querySelector('.guess').value)
        if (!guess){
        document.querySelector('.message').textContent = 'No number yet!'
    }else if (guess === secretNumber){
            document.querySelector('.message').textContent = 'yay! That is correct!'
            document.querySelector('.highscore').textContent = score;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            document.querySelector('.number').textContent = secretNumber
            

    }else if (guess > secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too high!'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You have lost this game'
        }
     
    }else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 'Too Low!'
            score--;
            document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 'You have lost this game'
        }
        
    }
})

document.querySelector('.again').addEventListener('click', function (){
   score = 20;
    secretNumber = Math.trunc(Math.random() * 20 + 1)
    document.querySelector('.message').textContent = 'Start guessing.... !'
    document.querySelector('.score').textContent = score; 
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.highscore').textContent = '0';
})
