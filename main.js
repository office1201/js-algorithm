"use strict";

// 16. 중복문자 제거

const solution = () => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(i, str[i], str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) result += str[i];
  }
  return result;
};

const str = "ksekset";
console.log(solution(str));

// 2. 생각2-표준내장객체
// #Set
const solution1 = (str) => {
  const set = [...new Set(str)].join("");
  return set;
};

const str = "ksekset";
console.log(solution1(str));
