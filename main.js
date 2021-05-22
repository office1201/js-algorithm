"use stict";

const solution = (s) => {
  let result = "";
  let count = 1;
  s = s + "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) count++;
    if (s[i] !== s[i + 1]) {
      result += s[i];
      if (count > 1) result += String(count);
      count = 1;
    }
  }
  return result;
};

const str = "KKHSSSSSSSE";
console.log(solution(str));
