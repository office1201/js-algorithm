"use strict";

// 한 개의 문자열을 입력받고,
// 특정 문자를 입력받아 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램 작성

const solution = () => {
  let count = 0;
  for (const i of str) {
    if (i === x) count++;
  }
  return count;
};

let str = "0x0x";
let x = "x";
console.log(solution(str, x));

// 2. 생각2-내장함수
// #split()
const solution = (str, x) => {
  const answer = str.split(x).length - 1;
  return answer;
};

const str = "0x01";
const x = "x";
console.log(solution(str, x));
