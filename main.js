"use strict";

// 30. 자릿수의 합

const solution = (arr) => {
  let temp = [];
  let result;
  const reducer = (x, y) => Number(x) + Number(y);
  for (let i = 0; i < arr.length; i++) {
    temp.push(arr[i].toString().split("").reduce(reducer));
  }
  for (let i = 0; i < temp.length; i++) {
    if (temp[0] >= temp[i]) result = arr[0];
    else result = arr[i];
  }
  return result;
};

const arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
