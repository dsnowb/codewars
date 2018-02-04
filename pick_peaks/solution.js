function pickPeaks(arr){
  console.log(arr);
  let res = {pos:[], peaks:[]};
  
  if (arr.length < 3) return res;
  
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
      res.pos.push(i);
      res.peaks.push(arr[i]);
    }
    else if (arr[i] > arr[i-1] && arr[i] === arr[i+1]) {
      for (let j = i + 2; j < arr.length; j++) {
        if (arr[i] < arr[j]) break;
        if (arr[i] > arr[j]) {
          res.pos.push(i);
          res.peaks.push(arr[i])
          i = j + 1;
        }
      }
    }
  }
  return res;
}
