"use strict";

// 43. 올바른 괄호(스택)

const solution = (s) => {
  const answer = "YES";
  let stack = [];
  for (const x of s) {
    if (x === "(") stack.push(x);
    else {
      if (stack.length === 0) return "NO";
      stack.pop();
    }
  }
  if (stack.length > 0) return "NO";

  return answer;
};

const str = `(())()`;
console.log(solution(str));
