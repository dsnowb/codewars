function regression_line(x,y){
  let intercept = 0;
  let slope = 0;
  let alpha = .0001;
  let precision = .00000005;
  
  do {
    let meanSumIntercept = 0;
    let meanSumSlope = 0;
    for (var i = 0; i < x.length; i++) {
      meanSumIntercept += intercept + slope * x[i] - y[i];
      meanSumSlope += (intercept + slope * x[i] - y[i]) * x[i];
    }
  
    var cost_intercept_deriv = meanSumIntercept / x.length;
    var cost_slope_deriv = meanSumSlope / x.length;
      
    intercept -= alpha * cost_intercept_deriv;
    slope -= alpha * cost_slope_deriv;
  } while (cost_intercept_deriv > precision || cost_intercept_deriv < -precision)
  
  return [parseFloat(intercept.toFixed(4)), parseFloat(slope.toFixed(4))];
}
