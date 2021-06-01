"use strict";

// 39. 최대 매출

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

const solution = (a, arr) => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < a; i++) sum += arr[i];
  answer = sum;
  for (let i = a; i < arr.length; i++) {
    sum += arr[i] - arr[i - a];
    answer = Math.max(answer, sum);
  }
  return answer;
};

console.log(solution(3, arr));
