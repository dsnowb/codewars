function firstNonRepeatingLetter(s) {
  //make an array that's stripped of any of the duplicated characters
  arr = s.split('');
  for (let i = 0; i < arr.length; i++) if (/[a-z]/.test(arr[i])) arr[i] = arr[i].toUpperCase();
  arr.sort();
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i+1]) {
      do { arr.splice(i+1,1) } while (arr[i] === arr[i+1]);
      arr.splice(i,1);
      i--;
    }
  }
  
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (s.substr(i,1)===arr[j] || s.substr(i,1).toUpperCase()===arr[j]) return s.substr(i,1);
    }
  }
  return '';
}
