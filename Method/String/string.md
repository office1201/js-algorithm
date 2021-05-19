# 자바스크립트 문자열 메소드

```jsx
문자열 메소드는 문자열 작업을 도와줌
"Joe Kelly"와 같은 원시형(Primitive Type) 데이터 타입은 객체(Object)가 아니기 때문에 속성이나 메소드를 가질 수x
하지만, 자바스크립트는 가능
"원시형 데이터 타입을 객체로 처리하기 때문"
그래서 문자열 메소드를 쓸 수 있음
```

---

## 1. 문자열 길이

`length`: 문자열의 길이 반환

> Returns the length of a String object.

## 2. 문자열에서 문자열 찾기

`indexOf` : 문자열이 발생한 처음 위치를 반환

> Returns the position of the first occurrence of a substring.
> indexOf(searchString: string, position?: number): number
> indexOf and lastIndexOf✨

## 3. 문자열에서 문자열 검색

`search`: 문자열 검색하고 일치하는 위치를 반환

> 스크립팅 언어인 JS는 일치하는 여부를 YES or No로 못하기 때문에 위치를 반환시켜주는 것
> Finds the first substring match in a regular expression search. (regExp === 정규식)

### 차이점을 알고 있는가??

- `indexOf`와 `search`는 다르다.
  - 이것들은 동일한 인수, 매개변수를 받아들이고 동일한 값을 반환하지 않는다.
  - 차이점은 다음과 같다.
    - search() 메소드는 두 번째 인수를 취할 수 없다.
    - indexOf() 메소드는 강력한 검색(정규 표현식)이 불가하다.

## 문자열 파트 추출하기

- 문자열 추출하는 방법 3가지

  - slice(start, and)
  - subString(start, and)
  - subStr(start, legnth)

`slice`: 문자열 일부를 선택해서 반환

> slice(start?: number, end?: number): string
> 매개 변수가 음수이면, 문자열의 끝에서부터 계산 (IE 8 이하 작동x)

`subString`: 문자열 일부를 선택해서 반환

> slice와 비슷
> 차이점은 음수 인덱스를 허용x

`subStr`: 문자열 일부를 선택해서 반환

> 차이점은 두 번째 인수가 인덱스x, 길이o

## 문자열 내용 바꾸기

`replace`: 문자열 값을 짚어서 다른 값으로 변환

> 호출된 문자열을 변경하지 않음, 새 문자열 반환
> replace(searchValue: string | RegExp, replaceValue: string): string
> 이 메소드는 첫 번째 일치 항목만 변환, 대/소문자를 구분함
> 🌼대/소문자를 구분하지 않으려면: /i플래그(대/소문자를 구분하지 않음)를 사용하는 정규표현식을 사용하도록 함
> 모든 일치항목을 변경하려면: /g 플래그(전역)와 함께 정규표현식을 사용(=정규표현식은 따옴표 없이 작성)

## 대/소문자 변환

`toUpperCase` : 대문자로 변환
`toLowerCase` : 소문자로 변환

## 문자열 합침

`concat` : 문자열 합침

> concat(...strings: string[]): string

## 문자열 문자 추출하기

- 문자열 문자 추출하는 방법 2가지
  - `charAt`
    > 숫자 👉 해당 문자 반환
    > charAt(pos: number): string
  - `charCodeAt`
    > 인덱스 👉 해당 유니코드 반환
    > charCodeAt(index: number): number
- 유니코드
  - 대문자: 65 ~ 90(26개)
  - 소문자: 97 ~ 122

## 배열로 문자열에 액세스하는 것은 좋지 않다

```js
//예제코드
const city = "Seoul";
city[0]; // Bad
```

> 모든 브라우저에서 작동x
> 문자열을 배열로 읽으려면 먼저, 배열로 변환

### 문자열을 배열로 변환

`split` : 문자열 배열로 변환

## 문자열 공백 제거

`trim` : 문자열 선행 및 후행의 공백을 제거한 다음 반환
