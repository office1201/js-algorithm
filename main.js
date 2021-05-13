"use strict";

// 14. 가장 긴 문자열

const solution = () => {
  let number;
  let string;
  for (const n of N) {
    if (3 <= n && n <= 30) number = n;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0].length < arr[i].length) string = arr[i];
  }
  return `${number} ${string}`;
};

const N = [1, 5];
const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(N, arr));

// 2. 생각2-내장함수
// 없음
