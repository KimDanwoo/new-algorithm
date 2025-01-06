function solution(arr) {
  const sorting = (a, b) => b - a
  arr.sort(sorting)
  let i = 0
  while (i + 1 <= arr[i]) {
    i++
  }
  return i
}