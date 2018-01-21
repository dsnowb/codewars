function LCS(x, y) {
  //longest found subsequence will be assigned to longSS
  var longSS = '';
  
  //try each string as "first" string
  for (var k = 0; k < 2; k++) {
    //initial values
    var tempSS = '';
    var initI = 0;
    var initJ = 0;
    //test each char in first string...
    for (var i = initI; i < x.length; i++) {
      //...against each char in second string, starting after the last matched character
      for (var j = initJ; j < y.length; j++) {
        //if match, add to subsequence, update last matched character, and go to next character in first string
        if (y[j] === x[i]) {
           tempSS += y[j];
           initJ = j+1;
           break;
        }
      }
    }
    //get longest subsequence
    if (tempSS.length > longSS.length) longSS = tempSS;
    
    //flip strings for second runthrough
    var tmp = x;
    x = y;
    y = tmp;
  }

  return longSS;
}
