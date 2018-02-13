var trafficJam = function(mainRoad, sideStreets) {
  mainRoad = mainRoad.split('');
  
  for (let i = sideStreets.length - 1; i >= 0; i--) {
    let j = i + 1;
    if (sideStreets[i].length) var sideStreet = sideStreets[i].split('');
    while (sideStreet && sideStreet.length) {
      mainRoad.splice(j,0,sideStreet.pop());
      j+=2;
    }
  }
  
  for (let i = 0; i < mainRoad.length; i++) if (mainRoad[i]=='X') mainRoad = mainRoad.slice(0,i+1);

  return mainRoad.join('');
}
