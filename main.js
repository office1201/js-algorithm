"use strict";

const solution = (str) => {
  let result = "";
  for (let i of str) {
    if (i === i.toUpperCase()) result += i.toLowerCase();
    if (i === i.toLowerCase()) result += i.toUpperCase();
  }
  return result;
};

const str = "StuDy";
console.log(solution(str));

// 2. 생각2-내장함수
// #charCodeAt()
// 대문자: 65~90, 소문자: 97~122
const solution = (str) => {
  let count = 0;
  for (let i of str) {
    let num = i.charCodeAt();
    if (num >= 65 && num <= 90) count++;
  }
  return count;
};

const str = "StuDy";
console.log(solution(str));
