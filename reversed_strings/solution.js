function solution(str){
  //functional
  //return str.split('').reverse().join('');
  //imperative
  let rstr='';
  for (let i = 0; i < str.length; i++) rstr+=str.charAt(str.length - i - 1);
  return rstr;
}
