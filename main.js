"use strict";

// 22. 등수구하기
const solution = () => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

const arr = [87, 89, 92, 100, 76];
console.log(solution(arr));

// 생각2. Array.from 활용
const solution1 = () => {
  const result = Array.from({ length: arr.length }, () => 1);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[j]) result[i]++;
    }
  }
  return result;
};

const arr = [87, 89, 92, 100, 76];
console.log(solution1(arr));
