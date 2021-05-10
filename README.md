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
