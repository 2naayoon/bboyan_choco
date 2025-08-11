---
title: "[JavaScript] 함수"
date: 2025-08-13 11:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

# 함수

<aside>
💡 함수 : 단독으로 존재, 단독 호출
메서드 : 객체 안에 선언된 함수, 객체 생성 후 호출

</aside>

### 1. function

```jsx
function 함수명 (params) {
	실행문;
	return 결과;
}
```

- 기본값 지정

```jsx
function 함수명 (params = 기본값) {
	...
}
```

- 실행할 구문이 한줄인 경우 {} 생략 가능

### 2. 함수 표현식

- 파라메터 값이 안 넘어오는 경우 undefined / 기본값 사용

```jsx
const myFunction1 = function (a, b = 10) {
  return a + b;
};

// func 이름은 외부에서 사용 불가 (내부에서 사용)
const myFunction2 = function func(a, b) {
  return a + b;
};
```

- Arrow Function(화살표 함수)

```jsx
const myFunction3 = (a, b) => {
	a * b;
};

const myFunction3 = (a, b) => a * b;
```

### 3. 즉시 호출 함수

: 무조건 실행해야 할 때 스스로 호출

```jsx
(function () {
  실행문;
})();
```

### 4. 호이스팅(Hoisting)

: 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것 (선언하지 않고 호출)

- function 키워드로 작성된 함수

```jsx
test() // hello

function test() {
  document.write("hello");
}
```

- 함수 표현식은 호이스팅 시 오류 발생

```jsx
// *ReferenceError: Cannot access 'test2' before initialization
// test2();

const test2 = function () {
  document.write("hello");
};

test2(); // hello
```

- var 로 선언된 변수 : 호이스팅 시 undefined 로 변수를 초기화

```jsx
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

### 5. 재귀호출

```jsx
function f(num) {
  if (num === 0) {
    console.log(num);
  } else {
    f(num - 1); // 함수 내부에서 호출
  }
};
```

### 6. 메서드 활용

- foreach()

```jsx
const planetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"];

planetKor.forEach((element) => console.log(element));
```

- find()
- findIndex()

```jsx
const array = [15, 6, 9, 13, 22, 27];

console.log(array.find((item) => item > 20));
console.log(array.findIndex((item) => item > 20));
```

- map() : 새로운 배열을 만들어서 리턴

```jsx
const array2 = array.map((x) => x * 2);
// [30, 12, 18, 26, 44, 54]
```

- filter()

```jsx
const array3 = array.filter((x) => x > 10);
// [15, 13, 22, 27]
```

### 7. 내장함수

- alert()
- prompt()
- Number()
- parseInt()
- isNaN()
- confirm()

<aside>
💡 * 주소 전송 시 한글 깨짐 (UTF 계열) 인코딩 필요
- URI : Identifier (URL + 자원식별)
- URL : Location
주소 + 데이터 → get 방식

</aside>

- encodeURI() : 영문, 숫자, 일부기호 제외
- decodeURI()

```jsx
encodeURI("http://localhost:8080/basic/info.html?name=홍길동&age=15")
→ http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15

decodeURI("http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15")
→ http://localhost:8080/basic/info.html?name=홍길동&age=15
```

- encodeURIComponent() : 영문, 숫자 제외
- decodeURIComponent()

```jsx
encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동&age=15")
→ http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D1

decodeURIComponent("http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15")
→ http://localhost:8080/basic/info.html?name=홍길동&age=15
```

<aside>
💡 코드 실행 → 순차 (위 → 아래) : 동기식 (↔비동기식)

</aside>

- setTimeout(함수, 숫자) : 정해진 시간 후 함수 실행 (비동기식 진행)
    - clearTimeout() : 스케줄링 취소

```jsx
setTimeout(() => {
  console.log("3초가 지났습니다");
}, 3000);

// 스케줄링 취소
let timerId = setTimeout(...);
clearTimeout(timerId);
```

- setInterval(함수, 숫자) : 주기적으로 함수 실행
    - clearInterval() : 스케줄링 취소

```jsx
setInterval(() => {
  console.log("2초마다 실행");
}, 2000);

// 5초 후에 정지
let timerId = setInterval(...);
setTimeout(() => { clearInterval(timerId); }, 5000);
```