"use strict";

// 17. 중복단어 제거

const solution = () => {
  const set = [...new Set(str)];
  let arr = [];
  for (const i of set) {
    if (typeof i === "string") arr.push(i);
  }
  return arr;
};

const str = [5, "good", "time", "good", "time", "student"];
console.log(solution(str));

// 생각2.표준내장객체
// #filter(), #indexOf()
const solution = () => {
  let result;
  result = str.filter((v, i) => {
    if (str.indexOf(v) === i) return v;
  });
  return result;
};
