var lastDigit = function(str1, str2){
  //get the last digit of the base
  let base = parseInt(str1.charAt(str1.length-1));
  
  //edge cases
  if (!base && parseInt(str2)) return 0;
  if (!parseInt(str2)) return 1;
  
  //get %4 for the second string
  var remainder = 0;
  for (var i = 0; i < str2.length; i++) {
    remainder = (10*remainder+parseInt(str2.charAt(i)))%4;
  }
  
  //return last digit depending on base and %4 of exponent.
  if (remainder===1) return base;
  switch (base) {
    case 1: case 5: case 6: return base;
    case 4: case 9: return (remainder%2) ? base : 10-base;
    case 2: case 8: 
      if (!remainder) return 6;
      if (remainder===2) return 4;
      return (base===2) ? 8 : 2;
    case 3: case 7:
      if (!remainder) return 1;
      if (remainder===2) return 9;
      return (base===3) ? 7 : 3;
  }
}
