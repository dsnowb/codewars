function disemvowel(str) {
  return str.replace(/[aeiouAEIOU]/g, '');
}

/* A more imperative-ish solution
function disemvowel(str) {
  for (let i = 0; i < str.length; i++) {
    if (/[aeiou]/i.test(str.charAt(i))) {
      str = str.slice(0,i) + str.slice(i+1);
      i--;
    }
  }
  return str;
}*/
