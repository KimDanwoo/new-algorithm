function solution(array, commands) {
    let arr =[]
    for(let x of commands){
        const [start,end,target] = x
        const sliceArr =array.slice(start-1,end)
        const sortArr = sliceArr.sort((a,b)=>a-b)
        arr.push(sortArr[target-1])
    }
    return arr
}