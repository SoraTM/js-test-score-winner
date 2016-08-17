const getWinner = (score) => {
  const [scoreFirst, , scoreSecond] = score;

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
