function aspectRatio(x,y,constant){
  if (constant === 'width') return [x, Math.ceil(9*x/16)];

  if (constant === 'diagonal') {
    let c = Math.sqrt(Math.pow(x,2) + Math.pow(y,2));
    y = c / Math.sqrt(Math.pow(16/9,2) + 1);
  } else if (constant === 'area') {
    let a = x*y;
    y = Math.sqrt(9*a/16);
  }

  return [Math.ceil(16*y/9), Math.ceil(y)];  
}
