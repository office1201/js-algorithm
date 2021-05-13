"use strict";

// 12. 대문자 찾기
// charCodeAt()

const solution = (param, param2) => {
  let count = 0;
  for (const i of param2) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) count++;
  }
  return `${param} ${count}`;
};

const str = "KoreaTimeGood";
console.log(solution(1, str));

// 2. 생각2-내장함수
// toUpperCase() 고려하기

const solution2 = (a, b) => {
  let count = 0;
  for (const i of b) {
    if (i === i.toUpperCase()) count++;
  }
  return `${a} ${count}`;
};

const str = "KoreaTimeGood";
console.log(solution2(1, str));
