function Player(name){
  this.name = name;
  this.totalPoints = 0;
  this.turnPoints = 0;
}

Player.prototype.addRollPoints = function (points) {
  this.turnPoints += points;
};


function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}

var player1 = new Player("Garnett");
var player2 = new Player("Brea");

var currentPlayer = player1;

function switchPlayer() {
  if (currentPlayer === player1){
    currentPlayer = player2;
  } else {
    currentPlayer = player1;
  }
}

function sumPoints() {
  currentPlayer.totalPoints += currentPlayer.turnPoints;
  currentPlayer.turnPoints = 0;
}

function play(){
  var rollPoints = rollDice();
  if (rollPoints === 1) {
    currentPlayer.turnPoints = 0;
    switchPlayer();
  }
  else {
    currentPlayer.addRollPoints(rollPoints);
  }
  console.log(player1);
  console.log(player2);
  return rollPoints;
}


$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    var points = play();
    $("#dice p").text(points);
    $("#p1TotalPoints").text(player1.totalPoints);
    $("#p1TurnPoints").text(player1.turnPoints);
    $("#p2TotalPoints").text(player2.totalPoints);
    $("#p2TurnPoints").text(player2.turnPoints);
    if (currentPlayer === player2) {
      $("#p1").removeClass("highlight");
      $("#p2").addClass("highlight");
    } else {
      $("#p2").removeClass("highlight");
      $("#p1").addClass("highlight");
    }
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    sumPoints();
    switchPlayer();
  });
});
