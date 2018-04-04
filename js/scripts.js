function Player(name){
  this.name = name;
  this.totalPoints = 0;
  this.turnPoints = 0;
}

Player.prototype.addRollPoints = function (points) {
  this.turnPoints += points;
};

var player1 = new Player("Garnett");

function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}


$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    var rollPoints = rollDice();
    player1.addRollPoints(rollPoints);
    console.log(player1);
  });
});
