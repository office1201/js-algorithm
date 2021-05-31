"use strict";

// 35. 두 배열 합치기
const solution = (a, b) => {
  const arrN = [].concat(a, b);
  return arrN.sort((a, b) => a - b);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
