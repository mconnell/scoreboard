function Team(){
  this.gamesPlayed = 0;
  this.goalDifference = 0;
}

Team.prototype.incrementGamesPlayed = function(){
  this.gamesPlayed += 1;
  return this.gamesPlayed;
};
