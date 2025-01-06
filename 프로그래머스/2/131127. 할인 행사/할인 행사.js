function solution(want, number, discount) {
        var answer = 0;
        let idx = 0;
        const isLength = idx !== discount.length - 9;
        const wishlist = [];

        for (let j = 0; j < want.length; j++) {
          for (let i = 0; i < number[j]; i++) {
            wishlist.push(want[j]);
          }
        }

        while (idx !== discount.length - 9) {
          let newArr = [...wishlist];
          for (let i = idx; i < idx + 10; i++) {
            if (newArr.includes(discount[i])) {
              newArr.splice(newArr.indexOf(discount[i]), 1);
            }
          }

          if (newArr.length === 0) {
            answer += 1;
          }

          idx += 1;
        }

        return answer;
}