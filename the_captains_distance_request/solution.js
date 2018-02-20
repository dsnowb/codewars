const PI = 3.1415926;
const R = 6371;

function distance(coord1, coord2) {
  coord1 = parseCoord(coord1), coord2 = parseCoord(coord2);
  return Math.floor(2*R*Math.asin(Math.sqrt(Math.pow(Math.sin((coord2[0] - coord1[0])/2),2) + Math.cos(coord1[0])*Math.cos(coord2[0])*Math.pow(Math.sin((coord2[1]-coord1[1])/2),2))) / 10) * 10
}

//parse lat/lon string and return as a pair of radians i.e. [lat in radians,lon in radians]
function parseCoord(coord) {
  let lat = /^.*,/.exec(coord)[0].slice(0,-1);
  let lon = /,.*$/.exec(coord)[0].slice(1);

  let latRad = (parseInt(/^.*°/.exec(lat)[0].slice(0,-1)) + parseInt(/°.*′/.exec(lat)[0].slice(1,-1))/60 + parseInt(/′.*″/.exec(lat)[0].slice(1,-1))/3600)*PI/180;
  let lonRad = (parseInt(/^.*°/.exec(lon)[0].slice(0,-1)) + parseInt(/°.*′/.exec(lon)[0].slice(1,-1))/60 + parseInt(/′.*″/.exec(lon)[0].slice(1,-1))/3600)*PI/180;

  if (lat.charAt(lat.length-1) === 'S') latRad *= -1;
  if (lon.charAt(lon.length-1) === 'W') lonRad *= -1;

  return [latRad, lonRad]
}
