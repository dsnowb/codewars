function insertDash(num) {
   var arr = num.toString().split('');
   for (var i = 0; i < arr.length - 1; i++)
     if (parseInt(arr[i])%2 && parseInt(arr[i+1])%2) {
       arr.splice(i+1, 0, '-');
       i++;
      }
    return arr.reduce(function(a,b) { return a + b; });
}

