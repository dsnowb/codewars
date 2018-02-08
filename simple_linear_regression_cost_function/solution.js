function costFunctionJ(trainingSet, theta1, theta2)
{
  let meanSquaredSum = 0;
  for (let i = 0; i < trainingSet.length; i++)
    meanSquaredSum += Math.pow(theta1 + theta2*trainingSet[i][0] - trainingSet[i][1], 2);
  return parseFloat((meanSquaredSum / (2 * trainingSet.length)).toFixed(3));
}
