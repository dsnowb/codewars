function connectFour(board) {
  return (a = /R{4}|Y{4}|(R.{7}){3}R|(Y.{7}){3}Y|(R.{8}){3}R|(Y.{8}){3}Y|(R.{6}){3}R|(Y.{6}){3}Y/.exec(board.reduce((acc,cur)=>`${acc}0${cur.join('')}`,''))) ? a[0].charAt(0) : /-/.test(board[0].join(',')) ? 'in progress' : 'draw';
}
