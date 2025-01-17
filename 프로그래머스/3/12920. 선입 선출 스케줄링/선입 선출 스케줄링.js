function solution(n, cores) {
    if (n <= cores.length) {
        return n;
    }

    let remainingTasks = n - cores.length;

    let left = 1;
    let right = Math.max(...cores) * Math.ceil(n / cores.length);

    const getProcessableTaskCount = (time) => {
        return cores.reduce((sum, core) => sum + Math.floor(time / core), 0);
    };

    let targetTime = 0;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const processableTasks = getProcessableTaskCount(mid);

        if (processableTasks >= remainingTasks) {
            right = mid - 1;
            targetTime = mid;
        } else {
            left = mid + 1;
        }
    }

    const previousProcessedTasks = getProcessableTaskCount(targetTime - 1);
    
    const tasksAtTargetTime = remainingTasks - previousProcessedTasks;

    let processedCount = 0;
    for (let i = 0; i < cores.length; i++) {
        if (targetTime % cores[i] === 0) {
            processedCount++;
            if (processedCount === tasksAtTargetTime) {
                return i + 1; 
            }
        }
    }
}
