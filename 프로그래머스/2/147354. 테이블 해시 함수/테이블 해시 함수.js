function solution(data, col, row_begin, row_end) {
   const sortedData = data.sort((a, b) => {
       if (a[col-1] === b[col-1]) {
           return b[0] - a[0];
       }
       return a[col-1] - b[col-1];
   });
   
   let result = 0;
   
   for (let i = row_begin; i <= row_end; i++) {
       const s_i = sortedData[i-1].reduce((sum, value) => {
           return sum + (value % i);
       }, 0);
       
       result ^= s_i;
   }
   
   return result;
}