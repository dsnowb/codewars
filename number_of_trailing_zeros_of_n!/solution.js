function zeros (n) {

  var numZeros = 0;
  
  //calculates the largest log5(n), rounded down.
  var exp = 0;
  while (true) {
    if (Math.pow(5,exp) <= n) exp++;
    else break;
  }
  exp--;

  //adds up the zeros given by each exponent of 5, starting with the largest
  for (exp; exp > 0; exp--) numZeros += Math.floor(n/Math.pow(5,exp));
  
  return numZeros;
}
