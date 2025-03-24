function solution(a, b) {
    const first = String(a) + String(b)
    const second = String(b) + String(a)
    return Number(first) > Number(second) ? Number(first) : Number(second)
}