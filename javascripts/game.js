function Game(homeTeam, homeGoals, awayTeam, awayGoals){
  this.homeTeam  = homeTeam;
  this.homeGoals = parseInt(homeGoals);
  this.awayTeam  = awayTeam;
  this.awayGoals = parseInt(awayGoals);
}

Game.prototype.homeTeamGoalDifference = function(){
  return this.homeGoals - this.awayGoals;
};

Game.prototype.awayTeamGoalDifference = function(){
  return this.awayGoals - this.homeGoals;
};

Game.prototype.toHtml = function(){
  var html  = '<div class="game">';
      html += this.homeTeam +' '+ this.homeGoals +' - '+ this.awayGoals+' '+ this.awayTeam;
      html += '</div>';
  return html;
};