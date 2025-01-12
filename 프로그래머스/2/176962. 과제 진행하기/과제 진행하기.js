function timeToMinutes(timeStr) {
    const [hours, minutes] = timeStr.split(':').map(Number);
    return hours * 60 + minutes;
}

function solution(plans) {
    plans.sort((a, b) => timeToMinutes(a[1]) - timeToMinutes(b[1]));
    
    const result = [];
    const pausedTasks = [];
    
    let currentTask = null;
    let currentEndTime = 0;
    
    for (const [name, start, playtime] of plans) {
        const startTime = timeToMinutes(start);
        const playtimeInt = parseInt(playtime, 10);

        while (currentTask && startTime >= currentEndTime) {
            result.push(currentTask);
            if (pausedTasks.length > 0) {
                [currentTask, remainingTime] = pausedTasks.pop();
                currentEndTime += remainingTime;
            } else {
                currentTask = null;
            }
        }
        
        if (currentTask) {
            const remainingTime = currentEndTime - startTime;
            pausedTasks.push([currentTask, remainingTime]);
        }
        
        currentTask = name;
        currentEndTime = startTime + playtimeInt;
    }
    
    if (currentTask) {
        result.push(currentTask);
    }
    while (pausedTasks.length > 0) {
        const [task, _] = pausedTasks.pop();
        result.push(task);
    }
    
    return result;
}