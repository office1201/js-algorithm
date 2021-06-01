"use strict";

// 37. 연속 부분수혈1
const a = [1, 2, 1, 3, 1, 1, 1, 2];

const solution = (m, arr) => {
  let answer = 0;
  let i = 0;
  let sum = 0;
  let index = 0;
  while (i < arr.length) {
    if (index === arr.length) {
      i++;
      index = i;
      sum = 0;
      continue;
    }

    sum += arr[index++];

    if (sum === m) {
      answer++;
      i++;
      index = i;
      sum = 0;
    }
  }
  return answer;
};

console.log(solution(6, a));
