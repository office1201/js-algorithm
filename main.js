"use strict";

// 38. 연속 부분수혈2

const solution = (m, arr) => {
  let answer = 0;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > m) {
      sum = arr[i++];
    }
    answer += i - j + 1;
  }
  return answer;
};

const arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
