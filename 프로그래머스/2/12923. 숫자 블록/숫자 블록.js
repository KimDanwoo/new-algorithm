function solution(begin, end) {
    const result = new Array(end - begin + 1).fill(0);
    
    for(let i = 0; i < result.length; i++){
        const position = begin + i;
        
        if(position === 1) {
            result[i] = 0;
            continue;
        }
        
        result[i] = findLargesDivisor(position);
    }
    
    return result;
}

function findLargesDivisor(num){
    const limit = 10000000;
    
    const sqrt = Math.floor(Math.sqrt(num));
    let largesDivisor = 1;
    
    for(let i = 2; i <= sqrt; i++){
        if(num % i === 0){
            if(i <= limit){
                largesDivisor = i
            }
            
            const pair = num / i;
            
            if(pair <= limit){
                return pair;
            }
        }
    }
    
    return largesDivisor;
}