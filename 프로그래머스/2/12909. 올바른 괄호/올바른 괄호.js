function solution(brackets) {
  let stack = []
  const isOpenBracket = (b) => b === '('
  const isMachBracket = (open, close) => open === '(' && close === ')'
  for (let i = 0; i < brackets.length; i++) {
    if (isOpenBracket(brackets[i])) {
      stack.push(brackets[i])
    } else {
      const last = stack.pop()
      if (!last || !isMachBracket(last, brackets[i])) {
        return false
      }
    }
  }
  return stack.length === 0
}