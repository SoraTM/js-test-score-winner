const compareScore = (rate, real) => {
    if (rate === real) {
        return 2;
    }

    if (getWinner(rate) === getWinner(real)) {
        return 1;
    }

    return 0;
};

const getWinner = (score) => {
    const scoreFirst = score[0];
    const scoreSecond = score[2];
    
    if (scoreFirst > scoreSecond) return "first";
    if (scoreFirst < scoreSecond) return "second";
    return "friendship";
}

export default compareScore;
