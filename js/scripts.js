// business logic
function Player(name, cpu){
  this.name = name;
  this.cpu = cpu;
  this.totalPoints = 0;
  this.turnPoints = 0;
}

Player.prototype.addRollPoints = function (points) {
  this.turnPoints += points;
};


function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}

var player1 = new Player("Player 1", false);
var player2 = new Player("Player 2", false);

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
    if (currentPlayer.totalPoints + currentPlayer.turnPoints >= 100) {
      alert(currentPlayer.name + " wins!");
    }
  }
  return rollPoints;
}



// function cpu() {
//   var cpuCounter = 0;
//   while (currentPlayer === player2 && player2.cpu === true && cpuCounter < 2) {
//     console.log("got here");
//     setTimeout(function(){
//       gameTurn();
//     }, 1500);
//     cpuCounter += 1;
//   }
//   switchPlayer();
// }


// user interface logic

function gameTurn(){
  $("#dice p").empty();
  $(".dice-faces").hide();
  if (currentPlayer === player2) {
    $("#p1").removeClass("highlight");
    $("#p2").addClass("highlight");
  } else {
    $("#p2").removeClass("highlight");
    $("#p1").addClass("highlight");
  }
  var points = play();
  $("#gif").show();
  setTimeout(function(){
    $("#gif").hide();
    $("#face-" + points).show();
  }, 500);
  $("#p1TotalPoints").text(player1.totalPoints);
  $("#p1TurnPoints").text(player1.turnPoints);
  $("#p2TotalPoints").text(player2.totalPoints);
  $("#p2TurnPoints").text(player2.turnPoints);
  $("#hold").show();
}

$(document).ready(function() {
  // $("#cpu").click(function(event) {
  //   event.preventDefault();
  //   player2.cpu = true;
  // })
  $("#nameCapture").submit(function(event) {
    event.preventDefault();
    player1.name = $("#name1").val();
    player2.name = $("#name2").val();
    $("#p1").text(player1.name);
    $("#p2").text(player2.name);
    $("#nameCapture").hide();
  });
  $("#hold").hide();
  $("#roll").click(function(event) {
    event.preventDefault();
    gameTurn();
    //cpu();
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    $("#hold").hide();
    sumPoints();
    switchPlayer();
  });
});
