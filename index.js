'use strict';

let secretNumber=Math.trunc(Math.random()*20)+1;

let score=20;
let highscore=0;

document.querySelector('.check').addEventListener('click',function(){
    const guess= Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if(!guess){
        document.querySelector('.message').textContent='No number😒'
    }
    //when a player wins
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '🥳 Correct Number ';
        score++;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '40rem';
        document.querySelector('.number').textContent = secretNumber;

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    else if(guess>secretNumber){
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('body').style.backgroundColor='	#FF6347';
      document.querySelector('.score').textContent = 0;
    }

}
    else if(guess<secretNumber){
        if(score>1){
        document.querySelector('.message').textContent='Too Low';
        score--;
        document.querySelector('.score').textContent=score;
    } else {
        document.querySelector('.message').textContent = '💥 You lost the game!';
        document.querySelector('body').style.backgroundColor='	#FF6347';
        document.querySelector('.score').textContent = 0;
      }
    }

}); 

document.querySelector('.b').addEventListener('click',function(){
    score=20;
    secretNumber=Math.trunc(Math.random()*20)+1;

    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
})