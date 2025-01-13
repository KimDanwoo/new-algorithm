function solution(s){
    if(s.length <= 1) return s.length;
    
    let maxLenght = 1;
    
    function expandAroundCenter(left, right){
        while (left >= 0 && right < s.length && s[left] === s[right]){
            const currentLength = right - left + 1;
            maxLenght = Math.max(maxLenght, currentLength);
            left --;
            right ++;
        }
    }
    
    for (let i = 0; i < s.length; i ++){
        expandAroundCenter(i,i);
        
        expandAroundCenter(i,i+1);
    }

    return maxLenght;
}