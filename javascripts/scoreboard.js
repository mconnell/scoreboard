Scoreboard = {};
Scoreboard.teams = {};

Scoreboard.addGame = function(game){
  this.updateTeamScores(game);
  this.addGameHtml(game);
  this.refreshScoreboardTable();
  return game;
};

Scoreboard.updateTeamScores = function(game){
  var homeTeam = Scoreboard.teams[game.homeTeam];
  homeTeam.incrementGamesPlayed()
  homeTeam.goalDifference += game.homeTeamGoalDifference();

  var awayTeam = Scoreboard.teams[game.awayTeam];
  awayTeam.incrementGamesPlayed();
  awayTeam.goalDifference += game.awayTeamGoalDifference();

  return Scoreboard;
};

Scoreboard.TeamTableRowsHtml = function(){
  var rows = "";
  $.each(this.teams, function(teamName, team){
    rowHtml  = '<tr>';
    rowHtml += '<td>'+ teamName +'</td>';
    rowHtml += '<td>'+ team.gamesPlayed +'</td>';
    rowHtml += '<td>'+ team.goalDifference +'</td>';
    rowHtml += '</tr>';

    rows += rowHtml;
  });

  return rows;
}

Scoreboard.refreshScoreboardTable = function(){
  $('#scoreboard tbody').html(Scoreboard.TeamTableRowsHtml());
};

Scoreboard.addGameHtml = function(game){
  $('#games').append(game.toHtml());
};
