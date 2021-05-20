"use strict";

// 27. 숫자만 추출

const solution = () => {
  const replacer = s.toLowerCase().replace(/[a-z]/g, "");
  return Number(replacer);
};

const s = "g0en2T0s8eSoft";
console.log(solution(s));

// 생각2. isNan() 활용

const solution1 = () => {
  let result = "";
  for (const i of s) {
    if (!isNaN(i)) result += i;
  }
  return Number(result);
};
