import { Player } from './pig-dice';
import { switchPlayer } from './pig-dice';
import { play } from './pig-dice';
import { sumPoints } from './pig-dice';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';

var player1 = new Player("Player 1");
var player2 = new Player("Player 2");

var currentPlayer = player1;


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
  });
  $("#hold").click(function(event) {
    event.preventDefault();
    $("#hold").hide();
    sumPoints();
    switchPlayer();
  });
});
