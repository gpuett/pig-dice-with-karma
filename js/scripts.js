function rollDice(){
  return (Math.floor(Math.random() * 6)) + 1;
}






$(document).ready(function() {
  $("#roll").click(function(event) {
    event.preventDefault();
    console.log(rollDice());
  });
});
