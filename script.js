let playerSelection = "";
let winCount = 0;
let loseCount = 0;

function computerSelection() {
  let selectCard = ['Rock', 'Paper', 'Scissors'];
  let getRandomNumber = Math.floor(Math.random() * 3);
  return selectCard[getRandomNumber];
}

document.getElementById("clear").onclick = function clearFunc() {
  document.getElementById("choose").value = "";
  document.getElementsByClassName("result")[0].innerHTML = "";
  playerSelection = "";
}

document.getElementById("btn").onclick = function resultFunc() {
  document.getElementsByClassName("result")[0].innerHTML = "";
  let computerSelect = computerSelection();
  playerSelection = document.getElementById("choose").value;

  if(!(document.getElementById("choose").value)) {return};
  if(playerSelection === computerSelect) {
    document.getElementsByClassName("result")[0].innerHTML =
    "You Draw!"
  } else if(((playerSelection === "Scissors") && (computerSelect === "Paper"))
  || ((playerSelection === "Paper") && (computerSelect === "Rock"))
  || ((playerSelection === "Rock") && (computerSelect === "Scissors"))) {
    document.getElementsByClassName("result")[0].innerHTML =
    playerSelection + " Beats " + computerSelect + " then You Win!";
    winCount++;
  } else {
    document.getElementsByClassName("result")[0].innerHTML =
    playerSelection + " loses against " + computerSelect + " then You Lose!";
    loseCount++;
  }
  document.getElementsByClassName("howmany")[0].innerHTML = "Your Score is " + (winCount - loseCount);
}
