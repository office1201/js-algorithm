"use strict";

// 36. 공통원소 구하기
const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];

const solution = () => {
  let result = [];
  for (const i of a) {
    for (const j of b) {
      if (i === j) result.push(i);
    }
  }
  return result.sort();
};

console.log(solution(a, b));
