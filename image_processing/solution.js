function processImage(imageData, height, width, weights){
  //convert imageData to array
  let img = [];
  for (let i = 0; i < width * height * 3; i += height * 3) {
    let imgCol = [];
    for (let j = i; j < i + height * 3; j+=3)
      imgCol.push([imageData[j], imageData[j+1], imageData[j+2]]);
    img.push(imgCol);
  }
    
  let imgArr = [];

  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      let rWeight = 0;
      let gWeight = 0;
      let bWeight = 0;
      
      //calculate rgb weights
      let pxRow = -Math.floor(weights.length/2);
      for (let wtRow = 0; wtRow < weights.length; wtRow++) {
        let pxCol = -Math.floor(weights.length/2);
        for (let wtCol = 0; wtCol < weights.length; wtCol++) {
          let row = i+pxRow<0 ? 0 : i+pxRow>=height ? height - 1 : i+pxRow;
          let col = j+pxCol<0 ? 0 : j+pxCol>=width ? width - 1 : j+pxCol;
          
          rWeight += weights[wtRow][wtCol]*img[row][col][0];
          gWeight += weights[wtRow][wtCol]*img[row][col][1];
          bWeight += weights[wtRow][wtCol]*img[row][col][2];
          
          pxCol++;
        }
        pxRow++;
      }
      
      //correct weights if out of range
      rWeight = rWeight < 0 ? 0 : rWeight > 255 ? 255 : rWeight;
      bWeight = bWeight < 0 ? 0 : bWeight > 255 ? 255 : bWeight;
      gWeight = gWeight < 0 ? 0 : gWeight > 255 ? 255 : gWeight;
      
      imgArr.push(Math.round(rWeight));
      imgArr.push(Math.round(gWeight));
      imgArr.push(Math.round(bWeight));
    }
  }
  
  return imgArr;
  
}
