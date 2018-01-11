function abbrevName(name){
  return name.split(' ').reduce(function(a,b) {return a + b[0] + '.'},'').toUpperCase().slice(0,3);
}
