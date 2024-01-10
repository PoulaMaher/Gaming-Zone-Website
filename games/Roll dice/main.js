var NewGameBtn = document.querySelector(".btnNew");
var rollBtn = document.querySelector(".btnRoll");
var holdBtn = document.querySelector(".btnHold");
var player1Section = document.querySelector("#player1");
var player2Section = document.querySelector("#player2");
var player1CurrentScoreField = document.getElementById("player1CurrentScore");
var player2CurrentScoreField = document.getElementById("player2CurrentScore");
var player1TotalScoreField = document.getElementById("player1Score");
var player2TotalScoreField = document.getElementById("player2Score");
var diceImg = document.querySelector(".dice");
var player1PlayHere = document.getElementById("playHere1");
var player2PlayHere = document.getElementById("playHere2");
var currentPlayer = 1;
var player1CurrentScore = Number(player1TotalScoreField.innerHTML);
var player2CurrentScore = Number(player2TotalScoreField.innerHTML);
var player1TotalScore = Number(player1TotalScoreField.innerHTML);
var player2TotalScore = Number(player2TotalScoreField.innerHTML);
var currentRandomDice = 1;
var isHolden = false;

var exitBtn = document.querySelector(".btnExit");

exitBtn.addEventListener("click", function () {
  window.open("../../index.html", "_self");
});

function createRandomDice() {
  var randomNumber = Math.floor(Math.random() * 6 + 1);
  switch (randomNumber) {
    case 1:
      diceImg.setAttribute("src", "images/dice-1.png");
      currentRandomDice = 1;
      isHolden = false;
      replacePlayer(currentPlayer);
      break;
    case 2:
      diceImg.setAttribute("src", "images/dice-2.png");
      currentRandomDice = 2;
      replaceCurrentScore(currentPlayer, currentRandomDice);
      break;
    case 3:
      diceImg.setAttribute("src", "images/dice-3.png");
      currentRandomDice = 3;
      replaceCurrentScore(currentPlayer, currentRandomDice);
      break;
    case 4:
      diceImg.setAttribute("src", "images/dice-4.png");
      currentRandomDice = 4;
      replaceCurrentScore(currentPlayer, currentRandomDice);
      break;
    case 5:
      diceImg.setAttribute("src", "images/dice-5.png");
      currentRandomDice = 5;
      replaceCurrentScore(currentPlayer, currentRandomDice);
      break;
    case 6:
      diceImg.setAttribute("src", "images/dice-6.png");
      currentRandomDice = 6;
      replaceCurrentScore(currentPlayer, currentRandomDice);
      break;
  }
}

rollBtn.addEventListener("click", function () {
  createRandomDice();
  diceImg.classList.remove("hidden");
});

function replacePlayer(current) {
  if (current == 1) {
    player2PlayHere.classList.remove("hidden");
    player1PlayHere.classList.add("hidden");
    player2Section.classList.add("playerActive");
    player1Section.classList.remove("playerActive");
    if (isHolden) {
      player1TotalScore += player1CurrentScore;
      player1TotalScoreField.innerHTML = player1TotalScore;
      winnerPlayer(player1TotalScore, player2TotalScore);
      currentPlayer = 2;
      player1CurrentScore = 0;
      player1CurrentScoreField.innerHTML = 0;
    } else {
      player1CurrentScore = 0;
      player1CurrentScoreField.innerHTML = 0;
      currentPlayer = 2;
    }
  } else {
    player1PlayHere.classList.remove("hidden");
    player2PlayHere.classList.add("hidden");
    player1Section.classList.add("playerActive");
    player2Section.classList.remove("playerActive");
    if (isHolden) {
      player2TotalScore += player2CurrentScore;
      player2TotalScoreField.innerHTML = player2TotalScore;
      winnerPlayer(player1TotalScore, player2TotalScore);
      currentPlayer = 1;
      player2CurrentScore = 0;
      player2CurrentScoreField.innerHTML = 0;
    } else {
      player2CurrentScore = 0;
      player2CurrentScoreField.innerHTML = 0;
      currentPlayer = 1;
    }
  }
}

function replaceCurrentScore(numOfPlayer, score) {
  if (numOfPlayer == 1) {
    player1CurrentScore += score;
    player1CurrentScoreField.innerHTML = player1CurrentScore;
  } else {
    player2CurrentScore += score;
    player2CurrentScoreField.innerHTML = player2CurrentScore;
  }
}

holdBtn.addEventListener("click", function () {
  isHolden = true;
  replacePlayer(currentPlayer);
});
NewGameBtn.addEventListener("click", function () {
  replacePlayer(2);
  newRound();
});

function newRound() {
  player2PlayHere.classList.add("hidden");
  player1PlayHere.classList.remove("hidden");
  player1PlayHere.innerHTML = "Turn";
  player2PlayHere.innerHTML = "Turn";
  player1Section.classList.remove("playerWinner");
  player2Section.classList.remove("playerWinner");
  rollBtn.disabled = false;
  holdBtn.disabled = false;
  diceImg.classList.add("hidden");
  player1CurrentScore = 0;
  player2CurrentScore = 0;
  player1TotalScore = 0;
  player2TotalScore = 0;
  player1CurrentScoreField.innerHTML = player1CurrentScore;
  player2CurrentScoreField.innerHTML = player2CurrentScore;
  player1TotalScoreField.innerHTML = player1TotalScore;
  player2TotalScoreField.innerHTML = player2TotalScore;
}

function winnerPlayer(player1TotalScore, player2TotalScore) {
  if (player1TotalScore >= 100) {
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    player1Section.classList.add("playerWinner");
    player2Section.classList.remove("playerActive");
    player1PlayHere.innerHTML = "Winner";
    player1PlayHere.classList.remove("hidden");
    player2PlayHere.classList.add("hidden");
  } else if (player2TotalScore >= 100) {
    rollBtn.disabled = true;
    holdBtn.disabled = true;
    player2Section.classList.add("playerWinner");
    // player1Section.classList.remove('playerActive');
    player2PlayHere.innerHTML = "Winner";
    player2PlayHere.classList.remove("hidden");
    player1PlayHere.classList.add("hidden");
  }
}
