"use strict";

// 18. 큰 수 출력하기
const solution = () => {
  let arr = [];
  for (let i = 0; i < arrN.length; i++) {
    const fNumber = arrN[i];
    const bNumber = arrN[i + 1];
    if (fNumber < bNumber) arr.push(bNumber);
  }
  return arr;
};

const arrN = [6, 7, 3, 9, 5, 6, 12];
console.log(solution(arrN));

// 생각2. 🔥🔥🔥코드 리팩토링🔥🔥🔥
const solution1 = () => {
  let arr = [];
  arr.push(arrN[0]);
  for (let i = 1; i < arrN.length; i++) {
    if (arrN[i] > arrN[i - 1]) arr.push(arrN[i]);
  }
  return arr;
};

const arrN = [6, 7, 3, 9, 5, 6, 12];
console.log(solution1(arrN));
