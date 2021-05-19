"use strict";

// 26. 유효한 팰린드롬

const solution = () => {
  const replacer = s.toLowerCase().replace(/[^a-z]/g, "");
  if (replacer.split("").join() === replacer.split("").reverse().join()) return "YES";
  return "NO";
};

const s = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(s));
