function solution(n) {
    const isPrime = Array.from({ length: n+1 }).fill(true);
    
    isPrime[0] = isPrime[1] = false;
    
    for(let i=2; i * i <= n; i++ ){
        if(isPrime[i]){
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false
            }
        }
    }
    
    return isPrime.filter(Boolean).length;
}