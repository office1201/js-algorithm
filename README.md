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
