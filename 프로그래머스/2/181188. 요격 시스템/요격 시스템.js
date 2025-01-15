function solution(targets) {
  targets.sort((a, b) => a[1] - b[1])

  let answer = 0
  let currentEnd = -1

  for (let i = 0; i < targets.length; i++) {
    const [start, end] = targets[i]

    if (start >= currentEnd) {
      answer++
      currentEnd = end
    }
  }

  return answer
}