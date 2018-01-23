function high(x){
var words = x.split(' ');
var arr = words;
arr = arr.map(word=> {
  var value = 0;
  for(var i = 0; i < word.length; i++) value += word.charCodeAt(i)-96;
  return value;
});

var bigWord = 0;
var bwIndex = 0;
for (var i = 0; i < arr.length; i++) { if (arr[i] > bigWord) {bigWord = arr[i]; bwIndex = i;} }

return words[bwIndex];

}
