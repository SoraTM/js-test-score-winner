const compareScore = (rate, real) => {
    const rateFirst = rate[0];
    const rateSecond = rate[1];
    const realFirst = real[0];
    const realSecond = real[1];
    
    if (rateFirst === realFirst && rateSecond === realSecond) { 
        return 2; 
    }
    
    if (rateFirst !== realFirst || rateSecond !== realSecond){
        if((rateFirst === rateSecond && realFirst === realSecond)){
                return 1;
        }
        if((rateFirst > rateSecond && realFirst > realSecond) || 
            (rateFirst < rateSecond && realFirst < realSecond)){
                return 1;
        }        
    }
    
    return 0;
};

export default compareScore;
