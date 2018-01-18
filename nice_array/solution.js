function isNice(arr){
  if (arr.length < 2) return false;
  arr.sort(sortNumber);
  for (let i = 0; i < arr.length; i++) if (arr[i]===arr[i+1]) {
    arr.splice(i+1,1);
    i--;
  }
  if (arr[0] !== arr[1] - 1 || arr[arr.length-1] !== arr[arr.length-2] + 1) return false;
  
  for (let i = 1; i < arr.length - 1; i++) if (arr[i] !== arr[i+1] - 1 && arr[i] !== arr[i-1] + 1) return false; 
  return true;
}

function sortNumber(a,b) {
    return a - b;
}
