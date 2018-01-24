function mutateMyStrings(stringOne, stringTwo){
  
  var res = `${stringOne}\n`;
  var arrOne = stringOne.split('');
  var arrTwo = stringTwo.split('');
  for (var i = 0; i < stringOne.length; i++) {
    if (arrOne[i]!==arrTwo[i]) {
      arrOne[i] = arrTwo[i];
      res += `${arrOne.join('')}\n`;
    }
  }
  return res;
}
