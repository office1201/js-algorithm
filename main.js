"use strict";

// 46.후위식 연산(postfix)
const str = "352+*9-";

const solution = (s) => {
  let stack = [];
  for (const i of s) {
    if (!isNaN(i)) stack.push(i);
    if (i === "+") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      const addNum = Number(num1) + Number(num2);
      stack.push(addNum);
    }
    if (i === "*") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      const multiNum = num1 * num2;
      stack.push(multiNum);
    }
    if (i === "-") {
      let num1 = stack.pop();
      let num2 = stack.pop();
      const minusNum = num2 - num1;
      stack.push(minusNum);
    }
  }
  return stack.toString();
};

console.log(solution(str));
