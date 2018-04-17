// business logic
export function Player(name){
  this.name = name;
  this.totalPoints = 0;
  this.turnPoints = 0;
}

Player.prototype.addRollPoints = function (points) {
  this.turnPoints += points;
};


export function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

var currentPlayer = player1;

export function switchPlayer() {
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

export function sumPoints() {
  currentPlayer.totalPoints += currentPlayer.turnPoints;
  currentPlayer.turnPoints = 0;
}

export function play(){
  var rollPoints = rollDice();
  if (rollPoints === 1) {
    currentPlayer.turnPoints = 0;
    switchPlayer();
  }
  else {
    currentPlayer.addRollPoints(rollPoints);
    if (currentPlayer.totalPoints + currentPlayer.turnPoints >= 100) {
      alert(currentPlayer.name + " wins!");
      location.reload();
    }
  }
  return rollPoints;
}
