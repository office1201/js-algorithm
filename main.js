"use strict";

// 15. 가운데 문자 출력
// 🏓삼항연산자를 쓰지 않고 진행

const solution = () => {
  const validate = Math.floor(str.length / 2);
  const oddNum = str[Math.floor(str.length / 2)];
  const evenNum = [str[validate - 1], str[validate]].join("");
  str.length % 2 === 1 ? oddNum : evenNum;
};

const str = "study";
console.log(str.substring(3));

// 2. 생각2-내장함수
// #susString
const solution1 = () => {
  const num = Math.floor(str.length / 2);
  if (str.length % 2 === 1) return str.substring(num, num + 1);
  if (str.length % 2 === 0) return str.substring(num - 1, num + 1);
};

const str = "stud1y";
console.log(solution1(str));
