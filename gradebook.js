function getAverage(scores) {
  let sum = 0;

  for (const score of scores) {
    sum += score;
  }

  return sum / scores.length;
}
 console.log(getAverage([12,34,54,65,45,32,2]).toFixed(2));