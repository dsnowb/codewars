function maskify(cc) {
return cc.split('').map((cur,idx,cc)=>(idx<cc.length-4)?cur='#':cur).join('');
}
