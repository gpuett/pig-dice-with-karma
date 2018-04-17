import { Player } from './../src/pig-dice.js';

describe('Player', function() {

  it('should test whether a Player has a name', function() {
    var player = new Player("Mark")
    console.log(player);
    expect(player.name).toEqual("Mark");
  });

  it('should have player total points start at zero', function() {
    var player = new Player("Mark")
    expect(player.totalPoints).toEqual(0);
  });

  it('should have player turn points start at zero', function() {
    var player = new Player("Mark")
    expect(player.turnPoints).toEqual(0);
  });

});
