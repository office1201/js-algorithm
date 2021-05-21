"use stict";

const solution = () => {
  let temp = Array.from({ length: str.length }, () => 0);
  let temp1 = Array.from({ length: str.length }, () => 0);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "e") count++;
    if (str[i] === "e") count = 0;
    temp[i] = count;
  }
  const str1 = [...str].reverse().join("");
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== "e") count++;
    if (str1[i] === "e") count = 0;
    temp1[i] = count;
  }
  temp1.reverse();
  let result = [];
  for (let i = 0; i < str.length; i++) {
    result.push(Math.min(temp[i], temp1[i]));
  }
  return result.join("");
};

const str = "teachermode";
console.log(solution(str));
