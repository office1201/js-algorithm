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
