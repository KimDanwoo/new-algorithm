function solution(phone_book) {
  phone_book.sort()

  for (let i = 0; i < phone_book.length - 1; i++) {
    const currentNumber = phone_book[i]
    const nextNumber = phone_book[i + 1]

    if (nextNumber && nextNumber.startsWith(currentNumber)) {
      return false 
    }
  }

  return true
}