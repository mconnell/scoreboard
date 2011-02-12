$(document).ready(function(){
  function createGameFromForm(){
    var game = new Game($('#home_team').val(), $('#home_score').val(), $('#away_team').val(), $('#away_score').val());
    Scoreboard.addGame(game);
    return game;
  };

  $('form').submit(function(){
    createGameFromForm();
    return false;
  });

  // All the teams in the league
  var teamNames = ['Kilmarnock', 'Rangers', 'Celtic', 'Aberdeen'];

  // create scoreboard teams
  $.each(teamNames, function(index, name){
   Scoreboard.teams[name] = new Team();
  });

  // add games to the scoreboard
  Scoreboard.addGame(new Game("Kilmarnock", 3, "Rangers", 0));
  Scoreboard.addGame(new Game("Celtic", 0, "Aberdeen", 0));
});