const getWinner = (score) => {
  const scoreArr = score.split(':');
  const scoreFirst = parseInt(scoreArr[0], 10);
  const scoreSecond = parseInt(scoreArr[1], 10);

  if (scoreFirst > scoreSecond) return 'first';
  if (scoreFirst < scoreSecond) return 'second';
  return 'friendship';
};

const compareScore = (rate, real) => {
  if (rate === real) {
    return 2;
  }

  if (getWinner(rate) === getWinner(real)) {
    return 1;
  }

  return 0;
};

export default compareScore;
