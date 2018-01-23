function cubeOdd(arr) {
  for (var i = 0; i < arr.length; i++) if (typeof(arr[i])!=='number') return undefined;

  return arr.filter(num=>num%2).map(num=>Math.pow(num,3)).reduce((a,b)=>a+b, 0);
}
