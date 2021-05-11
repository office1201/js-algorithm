"use strict";

const solution = (...num) => {
  const minNum = Math.min(...num);
  return minNum;
};

console.log(solution(5, 3, 7, 11, 2, 15, 17));
