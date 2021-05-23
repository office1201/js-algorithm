"use strict";

// 31. 뒤집은 소수

const determine = (number) => {
  if (number == 1) return false;
  if (number == 2 || number == 3) return true;
  if (number % 2 == 0 || number % 3 == 0) return false;
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i == 0 || number % (i + 2) == 0) return false;
  }
  return true;
};

const solution = (arr) => {
  return arr.map((number) => parseInt(String(number).split("").reverse().join(""))).filter((number) => determine(number));
};

const arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
