"use strict";

const solution = (...num) => {
  const arr = num;
  const arr1 = [];
  const reducer = (num1, num2) => num1 + num2;
  for (let i = 0; i < arr.length; i++) {
    const arrI = arr[i];
    if (arrI % 2 === 1) {
      arr1.push(arrI);
    }
  }
  const sumOddNum = arr1.reduce(reducer);
  const arrMinNum = Math.min(...arr1);
  console.log(`홀수 총합: ${sumOddNum},홀수 최소값:${arrMinNum}`);
};

console.log(solution(12, 77, 38, 41, 53, 92, 85));
