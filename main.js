"use strict";

// 19. 보이는 학생

const solution = () => {
  let count = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i] < students[i + 1]) count++;
  }
  return count;
};

const students = [130, 135, 148, 140, 145, 150, 150, 153];
console.log(solution(students));
