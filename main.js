"use strict";

const solution = (arr) => {
  const reduceArr = arr.reduce((num1, num2) => num1 + num2, 0);
  for (let i = 0; i <= arr.length; i++) {
    const element = arr[i];
    for (let j = 1; j <= arr.length; i++) {
      const element1 = arr[i];
      if (reduceArr - (element + element1) === 100) {
        arr.splice(i, 1);
        arr.splice(j, 1);
      }
    }
  }
  return arr;
};

console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
