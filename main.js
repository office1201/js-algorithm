"use strict";

// 25. 회문 문자열
const solution = () => {
  const reverse = [...str].reverse().join("");
  if (str.toLowerCase() === reverse.toLowerCase()) return "YES";
  return "NO";
};

const str = "gooG";
console.log(solution(str));
