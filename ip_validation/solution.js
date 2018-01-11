function isValidIP(str) {
  console.log(str);
  if (/[^0-9\.]/.test(str)) return false;
  var arr = str.split('.');
  if (arr.length!=4) return false;
  for (var i = 0; i < 4; i++) if (!(parseInt(arr[i]) >= 0 && parseInt(arr[i]) <= 255)) return false;
  return true;
}
