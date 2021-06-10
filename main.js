"use strict";

// 44. 괄호문자제거
const solution = (s) => {
  let answer = "";
  let stack = [];
  for (const x of s) {
    if (x === ")") {
      while (stack.pop() !== "(");
    } else stack.push(x);
  }
  answer = stack.join("");
  return answer;
};

const str = `(A(BC)D)EF(G(H)(IJ)K)LM(N)`;
console.log(solution(str));

// 생각2.
const solution1 = (s) => {
  let answer = "";
  let stack = [];
  for (const x of s) {
    if (x === "(") stack.push(x);
    if (x === ")") stack.pop(x);
    else if (stack.length === 0) answer += x;
  }
  return answer;
};
