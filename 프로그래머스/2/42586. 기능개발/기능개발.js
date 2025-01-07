function solution(progresses, speeds) {
    const answer = [];
    const daysLeft = progresses.map((progress,index)=>Math.ceil((100-progress)/speeds[index]))
    let maxDay = daysLeft[0]
    let count = 1
    for(let i =1;i<progresses.length;i++){
        if(daysLeft[i]<=maxDay){
            count ++
        }else{
            answer.push(count)
            count = 1
            maxDay = daysLeft[i]
        }
    }
    answer.push(count)
    return answer;
}