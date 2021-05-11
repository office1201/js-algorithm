"use strict";

const solution = (...num) => {
  const arr = num;
  const minNum = Math.min(...arr);
  return minNum;
};

console.log(solution(5, 3, 7, 11, 2, 15, 17));
