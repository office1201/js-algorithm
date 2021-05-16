"use strict";

// 21. 점수계산
const solution = (num) => {
  let count = 0;
  let counting = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element === 1) counting++;
    if (element === 0) counting = 0;
    count += counting;
  }
  return count;
};

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
