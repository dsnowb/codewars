var obj = {0:0, 1:1};
var fibonacci = function(n) {
    if (obj[n]) return obj[n];
    if(n==0 || n == 1) return n;
    var res = fibonacci(n-1) + fibonacci(n-2);
    obj[n] = res;
    return res;
}
