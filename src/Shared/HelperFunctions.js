/* eslint-disable */
const calcAvgRating = (ratings) => {
  let sum = 0;
  let total = 0;
  let avgRating = 0;
  if (ratings) {
    const keys = Object.keys(ratings);
    for (let i = 0; i < keys.length; i++) {
      sum += (Number(keys[i]) * ratings[keys[i]]);
      total += ratings[keys[i]];
    }
    avgRating = sum / total;
  }
  return avgRating;
};

export default calcAvgRating;
