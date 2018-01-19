function formatWords(words){
 return (!words || !words.length || words==null || !words.filter(w=>w!=='').length) ? '' : words.filter(w=>w!=='').reduce((a,b,i,arr) => (i === arr.length - 1) ? `${a} and ${b}` : `${a}, ${b}`);  
}
