function Player(name){
  this.name = name;
  this.totalPoints = 0;
  this.turnPoints = 0;
}

Player.prototype.addRollPoints = function (points) {
  this.turnPoints += points;
};

function endTurnDecider() {
  this.status = false;
}

function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}

var player1 = new Player("Garnett");
var player2 = new Player("Brea");
var endTurn = new endTurnDecider();

var currentPlayer = player1;

function play(){
  var rollPoints = rollDice();
  console.log(rollPoints);
  if (rollPoints === 1) {
    endTurn.status = true;
    currentPlayer.turnPoints = 0;
  }
  if (endTurn.status === true) {
    console.log("end");
    currentPlayer.totalPoints += currentPlayer.turnPoints;
    currentPlayer.turnPoints = 0;
    console.log(currentPlayer);
    if (currentPlayer === player1){
      currentPlayer = player2;
    } else {
      currentPlayer = player1;
    }
    endTurn.status = false;
  }
  else {
    currentPlayer.addRollPoints(rollPoints);
    console.log(currentPlayer);
  }
}


$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    play();
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    endTurn.status = true;
  });
});
