"use strict";

const str = `BACBACCACCBDEDE`;

// 40. 학급 회장

const solution = (s) => {
  let answer;
  let sH = new Map();
  for (const s of str) {
    if (sH.has(s)) sH.set(s, sH.get(s) + 1);
    else sH.set(s, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of sH) {
    if (value > max) (max = value), (answer = key);
  }
  return answer;
};
console.log(solution(str));
