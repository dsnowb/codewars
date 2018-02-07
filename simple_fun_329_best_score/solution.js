function bestScore(teamA,teamB){

  teamA.sort((a,b) => parseInt(a) - parseInt(b))[0];
  
  let diff = 2*teamA.length - 2*teamB.length;
  for (let i = 0; i < teamA.length; i++) {
    let aScore = 3*teamA.length - i;
    let bScore = 2*teamB.length;
    let min = teamA[i];
    teamB.forEach(el => { if (el >= min) bScore++; });
    if (aScore - bScore > diff) diff = aScore - bScore;
  }
  
  return diff;
}
