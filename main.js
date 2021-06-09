"use strict";

const solution = (str1, str2) => {
  let answer = "YES";
  const sH = new Map();
  for (const x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
};

const a = `AbaAeCe`;
const b = `baeeACA`;
console.log(solution(a, b));
