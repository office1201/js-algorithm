# JS-Algorithm

자바스크립트 알고리즘

```jsx
// 1. 최솟값 구하기 (#삼항연산자)(#Math)
// 100이하의 자연수 A, B, C를 입력받아 세 수 중
// 가장 작은 값을 출력하는 프로그램을 작성하기

const solution = (a, b, c) => {
  let num;
  a <= b ? (num = a) : (num = b);
  num <= c ? num : (num = c);
  return num;
};

console.log(solution(-1, 100, 0));

// 개선1.
const solution1 = (a, b, c) => {
  let num = Math.min(a, b, c);
  return num;
};
```

```jsx
// 2. 삼각형 판별하기
// 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작아야 함

const solution = (a, b, c) => {
  let maxNum;
  let answer = "가능";
  const total = a + b + c;
  a <= b ? (maxNum = b) : (maxNum = a);
  maxNum < c ? (maxNum = c) : maxNum;
  if (total - maxNum <= maxNum) answer = "불가능";
  return answer;
};

console.log(solution(6, 7, 10));

// 개선1.
const solution1 = (a, b, c) => {
  const maxNum = Math.max(a, b, c);
  const total = a + b + c;
  let answer = "가능";
  if (total - maxNum <= maxNum) answer = "불가능";
  return answer;
};
```

```jsx
// 3. 연필 개수
// 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
// N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성

const solution = (num) => {
  const das = 12;
  const result = Math.ceil(num / das);
  return result;
};

console.log(solution(25));

// 개선1.
const solution = (num) => {
  const result = Math.ceil(num / 12);
  return result;
};
```

```jsx
// 4. 1부터 N까지 합 출력하기
// 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성
// 첫 번째 줄에 20이하의 자연수 N이 입력
// 첫 번째 줄에 1부터 N까지의 합을 출력

const solution = (num) => {
  let result = 0;
  for (let i = 0; i <= num; i++) {
    result += i;
  }
  return result;
};

console.log(solution(10));

// 개선1. #Math's reduce
const solution1 = (n) => {
  const reducer = (num1, num2) => num1 + num2;
  return n.reduce(reducer);
};

console.log(solution1([1, 2, 3, 4]));
```

```jsx
// 5. 홀수
// 주어진 자연수들 중 홀수값을 구해서 홀수의 총합 구하기
// 구한 홀수들 중 최소값 구하기

const solution = (...num) => {
  const arr = num;
  const arr1 = [];
  const reducer = (num1, num2) => num1 + num2;
  for (let i = 0; i < arr.length; i++) {
    const arrI = arr[i];
    if (arrI % 2 === 1) {
      arr1.push(arrI);
    }
  }
  const sumOddNum = arr1.reduce(reducer);
  const arrMinNum = Math.min(...arr1);
  console.log(`홀수 총합: ${sumOddNum},홀수 최소값:${arrMinNum}`);
};

console.log(solution(12, 77, 38, 41, 53, 92, 85));
```

```jsx
// 6. 최소값 구하기

const solution = (...num) => {
  const minNum = Math.min(...num);
  return minNum;
};

console.log(solution(5, 3, 7, 11, 2, 15, 17));
```

```jsx
// 7. 10부제

const solution = (today, numArr) => {
  let count = 0;
  for (const x of numArr) {
    if (x % 10 === today) count++;
  }
  return count;
};

const today = 3;
const numArr = [25, 23, 11, 47, 53, 17, 33];
console.log(solution(today, numArr));
```

```jsx
// 8. 일곱난쟁이
// 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다.
// 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며,
// 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.

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
```

```jsx
// 9. A를 #으로
// ▣ 입력예제 1 BANANA
// ▣ 출력예제 1 B#N#N#

// * 생각의 순서
// 생각1.
const solution = (str) => {
  const strSplit = str.split("");
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === "A") strSplit[i] = "#";
  }
  const result = strSplit.join("");
  return result;
};

const str = "BANANA";
console.log(solution(str));

// 생각2.
// #forOf, #삼항연산자를 쓰지 않고
const solution = (str) => {
  let result = "";
  for (const i of str) {
    if (i !== "A") result += i;
    if (i === "A") result += `#`;
  }
  return result;
};

const str = "BANANA";
console.log(solution(str));

// 생각3.
// #replace(), #정규식🔥
//(1) const 활용 시
const solution = (s) => {
  const result = s.replace(/A/g, "#");
  return result;
};
// (2) let 활용 시
const solution = (s) => {
  let result = s;
  result = result.replace(/A/g, "#");
  return result;
};

const str = "BANANA";
console.log(solution(str));
```

```jsx
// 10. 문자 찾기

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

// 생각2. 내장함수
// #split()
const solution = (str, x) => {
  const answer = str.split(x).length - 1;
  return answer;
};

const str = "0x01";
const x = "x";
console.log(solution(str, x));
```

```jsx
// 11. 대소문자 변환

const solution = (str) => {
  let result = "";
  for (let i of str) {
    if (i === i.toUpperCase()) result += i.toLowerCase();
    if (i === i.toLowerCase()) result += i.toUpperCase();
  }
  return result;
};

const str = "StuDy";
console.log(solution(str));

// 생각2. 내장함수
// #charCodeAt()
// 대문자: 65~90, 소문자: 97~122
const solution = (str) => {
  let count = 0;
  for (let i of str) {
    let num = i.charCodeAt();
    if (num >= 65 && num <= 90) count++;
  }
  return count;
};

const str = "StuDy";
console.log(solution(str));
```

```jsx
// 12. 대문자 찾기
// #charCodeAt()

const solution = (param, param2) => {
  let count = 0;
  for (const i of param2) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) count++;
  }
  return `${param} ${count}`;
};

const str = "KoreaTimeGood";
console.log(solution(1, str));

// 생각2. 내장함수
// #toUpperCase()

const solution2 = (a, b) => {
  let count = 0;
  for (const i of b) {
    if (i === i.toUpperCase()) count++;
  }
  return `${a} ${count}`;
};

const str = "KoreaTimeGood";
console.log(solution2(1, str));
```

```jsx
// 13. 대문자로 통일

const solution = (param, param2) => {
  const result = param2.toUpperCase();
  return `${param} ${result}`;
};

const str = `ItisTimeToStudy`;
console.log(solution(1, str));
String.fromCharCode;

// 생각2. 내장함수
// #String.fromCharCode()
```

```jsx
// 14. 가장 긴 문자열

const solution = () => {
  let number;
  let string;
  for (const n of N) {
    if (3 <= n && n <= 30) number = n;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[0].length < arr[i].length) string = arr[i];
  }
  return `${number} ${string}`;
};

const N = [1, 5];
const arr = ["teacher", "time", "student", "beautiful", "good"];
console.log(solution(N, arr));

// 생각2. 내장함수
// 없음
```

```jsx
// 15. 가운데 문자 출력
// 🏓삼항연산자를 쓰지 않고 진행

const solution = () => {
  const validate = Math.floor(str.length / 2);
  const oddNum = str[Math.floor(str.length / 2)];
  const evenNum = [str[validate - 1], str[validate]].join("");
  str.length % 2 === 1 ? oddNum : evenNum;
};

const str = "study";
console.log(str.substring(3));

// 생각2. 내장함수
// #susString
const solution1 = () => {
  const num = Math.floor(str.length / 2);
  if (str.length % 2 === 1) return str.substring(num, num + 1);
  if (str.length % 2 === 0) return str.substring(num - 1, num + 1);
};

const str = "stud1y";
console.log(solution1(str));
```

```jsx
// 16. 중복문자 제거

const solution = () => {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    // console.log(i, str[i], str.indexOf(str[i]));
    if (str.indexOf(str[i]) === i) result += str[i];
  }
  return result;
};

const str = "ksekset";
console.log(solution(str));

// 생각2. 표준내장객체
// #Set
const solution1 = (str) => {
  const set = [...new Set(str)].join("");
  return set;
};

const str = "ksekset";
console.log(solution1(str));
```

```jsx
// 17. 중복단어 제거

const solution = () => {
  const set = [...new Set(str)];
  let arr = [];
  for (const i of set) {
    if (typeof i === "string") arr.push(i);
  }
  return arr;
};

const str = [5, "good", "time", "good", "time", "student"];
console.log(solution(str));

// 생각2. 표준내장객체
// #filter(), #indexOf()
const solution = () => {
  let result;
  result = str.filter((v, i) => {
    if (str.indexOf(v) === i) return v;
  });
  return result;
};
```

```jsx
// 18. 큰 수 출력하기

const solution = () => {
  let arr = [];
  for (let i = 0; i < arrN.length; i++) {
    const fNumber = arrN[i];
    const bNumber = arrN[i + 1];
    if (fNumber < bNumber) arr.push(bNumber);
  }
  return arr;
};

const arrN = [6, 7, 3, 9, 5, 6, 12];
console.log(solution(arrN));

// 생각2. 🔥🔥🔥코드 리팩토링🔥🔥🔥

const solution1 = () => {
  let arr = [];
  arr.push(arrN[0]);
  for (let i = 1; i < arrN.length; i++) {
    if (arrN[i] > arrN[i - 1]) arr.push(arrN[i]);
  }
  return arr;
};

const arrN = [6, 7, 3, 9, 5, 6, 12];
console.log(solution1(arrN));
```

```jsx
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
```

```jsx
// 20. 가위 바위 보

const solutionGame = (A, B) => {
  if ((A === "가위" && B === "보") || (A === "가위" && B === "보") || (A === "보") & (B === "바위")) return "WinA";
  if ((B === "가위" && A === "보") || (B === "가위" && A === "보") || (B === "보") & (A === "바위")) return "WinB";
  else return "Draw";
};

console.log(solutionGame("가위", "가위"));
```

```jsx
// 21. 점수계산
const solution = (num) => {
  let count = 0;
  let counting = 0;
  for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if (element === 1) counting++;
    if (element === 0) counting = 0;
    count += counting;
  }
  return count;
};

const arr = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];
console.log(solution(arr));
```

```jsx
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
```

```jsx
// 23. 격자판 최대합
`🔥🔥🔥🔥난이도🔥🔥🔥🔥, 이후 진행📝`;
```

```jsx
// 24. 봉우리
`🔥🔥🔥🔥난이도🔥🔥🔥🔥, 이후 진행📝`;
```

```jsx
// 25. 회문 문자열
const solution = () => {
  const reverse = [...str].reverse().join("");
  if (str.toLowerCase() === reverse.toLowerCase()) return "YES";
  return "NO";
};

const str = "gooG";
console.log(solution(str));
```

```jsx
// 26. 유효한 팰린드롬

const solution = () => {
  const replacer = s.toLowerCase().replace(/[^a-z]/g, "");
  if (replacer.split("").join() === replacer.split("").reverse().join()) return "YES";
  return "NO";
};

const s = "found7, time: study; Yduts; emit, 7Dnuof";
console.log(solution(s));
```

```jsx
// 27. 숫자만 추출

const solution = () => {
  const replacer = s.toLowerCase().replace(/[a-z]/g, "");
  return Number(replacer);
};

const s = "g0en2T0s8eSoft";
console.log(solution(s));

// 생각2. isNaN() 활용

const solution1 = () => {
  let result = "";
  for (const i of s) {
    if (!isNaN(i)) result += i;
  }
  return Number(result);
};
```

```jsx
// 28. 가장 짧은 문자거리
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
//
```

```jsx
// 29. 문자열 압축

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
```

```jsx
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
```

```jsx
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
```

```jsx
// 32. 멘토링
`🔥🔥🔥🔥난이도🔥🔥🔥🔥, 이후 진행📝`;
```

```jsx
// 33. 졸업선물
`🔥🔥🔥🔥난이도🔥🔥🔥🔥, 이후 진행📝`;
```

```jsx
// 34. K번째 큰 수
`🔥🔥🔥🔥난이도🔥🔥🔥🔥, 이후 진행📝`;
```

```jsx
// 35. 두 배열 합치기
const solution = (a, b) => {
  const arrN = [].concat(a, b);
  return arrN.sort((a, b) => a - b);
};

const arr1 = [1, 3, 5];
const arr2 = [2, 3, 6, 7, 9];
console.log(solution(arr1, arr2));
```

```jsx
// 36. 공통원소 구하기
const a = [1, 3, 9, 5, 2];
const b = [3, 2, 5, 7, 8];

const solution = () => {
  let result = [];
  for (const i of a) {
    for (const j of b) {
      if (i === j) result.push(i);
    }
  }
  return result.sort();
};

console.log(solution(a, b));
```

```jsx
// 37. 연속 부분수혈1
const a = [1, 2, 1, 3, 1, 1, 1, 2];

const solution = (m, arr) => {
  let answer = 0;
  let i = 0;
  let sum = 0;
  let index = 0;
  while (i < arr.length) {
    if (index === arr.length) {
      i++;
      index = i;
      sum = 0;
      continue;
    }

    sum += arr[index++];

    if (sum === m) {
      answer++;
      i++;
      index = i;
      sum = 0;
    }
  }
  return answer;
};

console.log(solution(6, a));
```

```jsx
// 38. 연속 부분수혈2

const solution = (m, arr) => {
  let answer = 0;
  let sum = 0;
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    while (sum > m) {
      sum = arr[i++];
    }
    answer += i - j + 1;
  }
  return answer;
};

const arr = [1, 3, 1, 2, 3];
console.log(solution(5, arr));
```

```jsx
// 39. 최대 매출

const arr = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

const solution = (a, arr) => {
  let answer = 0;
  let sum = 0;
  for (let i = 0; i < a; i++) sum += arr[i];
  answer = sum;
  for (let i = a; i < arr.length; i++) {
    sum += arr[i] - arr[i - a];
    answer = Math.max(answer, sum);
  }
  return answer;
};

console.log(solution(3, arr));
```

```jsx
// 40. 학급 회장(해쉬)

const solution = (s) => {
  let answer;
  let sH = new Map();
  for (const s of str) {
    if (sH.has(s)) sH.set(s, sH.get(s) + 1);
    else sH.set(s, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  for (const [key, value] of sH) {
    if (value > max) (max = value), (answer = key);
  }
  return answer;
};
console.log(solution(str));
```

```jsx
// 41. 아나그램

const solution = (str1, str2) => {
  let answer = "YES";
  const sH = new Map();
  for (const x of str1) {
    if (sH.has(x)) sH.set(x, sH.get(x) + 1);
    else sH.set(x, 1);
  }
  for (const x of str2) {
    if (!sH.has(x) || sH.get(x) === 0) return "NO";
    sH.set(x, sH.get(x) - 1);
  }

  return answer;
};

const a = `AbaAeCe`;
const b = `baeeACA`;
console.log(solution(a, b));
```
