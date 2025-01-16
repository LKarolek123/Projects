document.addEventListener('DOMContentLoaded', () => {
//getting access to our buttons
const buttons = document.querySelectorAll('.button-container');
const playButton = document.getElementById('play-button');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const score = document.getElementById("score");

var points = 0;
let yourMove = null;
let computerMove = null;
// for every button-reaction when clicked
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // make other non-active
    buttons.forEach(btn => btn.classList.remove('active'));

    // add 'active' class only to clicked button
    button.classList.add('active');
    yourMove = button.getAttribute('data-move');
  });
});

playButton.addEventListener('click', () => {
  // add 'active' class to playButton
  playButton.classList.add('active');

  // Check, if our move was chosen and 'play' is pressed
  if (yourMove && playButton.classList.contains('active')) {
    console.log('The game was activated');//information so we know everything is fine
    computerMove = pickComputerMove();
    playGame();
    /*console.log(yourMove); */
    
    //let ymove = ''; /*another opction but our is easier to implement*/
/*if (rockButton.classList.contains('active')) {
    ymove = 'rock';
} else if (paperButton.classList.contains('active')) {
    ymove = 'paper';
} else if (scissorsButton.classList.contains('active')) {
    ymove = 'scissors';
}*/

    
  } else {
    console.log('Pick an option before you start the game!');
  }
});
function playGame(){ /*game simulation*/
    console.log(yourMove);
    console.log(computerMove);

     // Show choices
  showChoice("your", yourMove);
  showChoice("computer", computerMove);

    let result = '';
    if (yourMove ==='scissors'){ //computer logic & judgement
        if(computerMove ==='rock'){
            result = 'You lose';
        }
        else if (computerMove ==='scissors'){
            result = 'Tie';
        }
        else if (computerMove ==='paper'){
            result = 'You win';
            points++;
    score.textContent = points;
        }
    }
    if (yourMove ==='rock'){
        if(computerMove ==='rock'){
            result = 'Tie';
        }
        else if (computerMove ==='scissors'){
            result = 'You win';
            points++;
            score.textContent = points;
        }
        else if (computerMove ==='paper'){
            result = 'You lose';
        }
    }
    if (yourMove ==='paper'){
        if(computerMove ==='rock'){
            result = 'You win';
            points++;
    score.textContent = points;
        }
        else if (computerMove ==='scissors'){
            result = 'You lose';
        }
        else if (computerMove ==='paper'){
            result = 'Tie';
        }
    }
    console.log(result); //just to check if everything is fine
    /*if (result==='You win'){ //made if u'd like have losses-score
        score.wins+=1;
    }
    if (result==='You lose'){
        score.losses+=1;
    }
    if (result==='Tie'){
        score.ties+=1;
    }*/
        

        // hide after 2sec
        setTimeout(() => {
          resetChoices();
        }, 2000);
      
}

// function used to show picked-element
function showChoice(player, move) {
    const choices = ['rock', 'paper', 'scissors'];
    choices.forEach(choice => {
      const svg = document.getElementById(`${player}-${choice}`);
      if (choice === move) {
        svg.classList.remove("hidden"); // show this image
      } else {
        svg.classList.add("hidden"); // other-make hidden
      }
    });
  }
  
  // reset last choice
  function resetChoices() {
    const images = document.querySelectorAll("#choices-container svg");
    images.forEach(svg => svg.classList.add("hidden"));
  }


function pickComputerMove(){ /*random-picking computer moves*/
    const randomNumber = Math.random();
    let computerMove = '';
    if(randomNumber >= 0 && randomNumber <1/3){
        computerMove = 'rock';
    }
    else if (randomNumber >=1/3 &&randomNumber<2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}
});
/*function addPoint(){ //funcion to add points but not used
    points++;
    score.textContent = points;
}*/
