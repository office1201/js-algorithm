"use strict";

const solution = (today, numArr) => {
  let count = 0;
  for (const x of numArr) {
    if (x % 10 === today) count++;
  }
  return count;
};

const today = 3;
const numArr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(today, numArr));
