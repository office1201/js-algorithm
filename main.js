"use strict";

//대문자로 이루어진 영어단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램 작성
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

// * 생각의 순서
// 1. 생각1
const solution = (str) => {
  const strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === "A") strSplit[i] = "#";
  }
  const result = strSplit.join("");
  return result;
};

const str = "BANANA";
console.log(solution(str));

// 2. 생각2
// #forOf, #삼항연산자를 쓰지 않고
const solution = (str) => {
  let result = "";
  for (const i of str) {
    if (i !== "A") result += i;
    if (i === "A") result += `#`;
  }
  return result;
};

const str = "BANANA";
console.log(solution(str));

// 3. 생각3
// #replace(), #정규식🔥
//(1) const 활용 시
const solution = (s) => {
  const result = s.replace(/A/g, "#");
  return result;
};
// (2) let 활용 시
const solution = (s) => {
  let result = s;
  result = result.replace(/A/g, "#");
  return result;
};

const str = "BANANA";
console.log(solution(str));
