---
title: "[JavaScript] JavaScript 기초"
date: 2025-08-13 08:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

# JavaScript 기초

```
💡 화면
    html : 구조설계
    css : 디자인설계
    javascript : 동작 정의 (버튼 클릭~, 메뉴 클릭~)
```

## # JavaScript

→ ECMA Script version
→ ES6, ES9, ...
→ 자바스크립트 기반의 프레임워크 : node.js, react, next.js, ...
→ 자바스크립트 실행 환경
  1) 웹 브라우저
  2) Node.js 이용

- 자바와 유사 (문법)
- 실행 시 한줄씩 실행

### 1. 코드 작성 방법

1) <head> 태그 안
2) </body> 앞 쪽 (주로 사용)
3) 태그에 직접 사용

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <script>
    // alert("hello");
  </script>
  <!-- 외부 파일 이용 -->
  <!-- <script src="./my.js"></script> -->
</head>

<body>
  <script>
    // alert("hello");
  </script>
  <!-- 외부 파일 이용 -->
  <!-- <script src="./my.js"></script> -->
</body>
```

### 2. alert()

: 알림창 출력

```jsx
alert("hello");
```

<img src="/assets/img/Coding/JavaScript/JavaScript 기초/Untitled.png" align="center" alt="ba1">

### 3. console

: 콘솔창을 통해 값 확인 가능

- F12 - Console 에서 확인
- , : 출력값 나열
- + : 연결
    - string + string
    - string + number

```jsx
console.log("hello");

let num = "40";
console.log(num + 5); // 405
```

### 4. document.write

: 브라우저에 출력

```jsx
document.write("hello");
// <br> : 개행
document.write("<br>", "hello", "<br>");

document.write(`숫자 : ${num}`);
```

```
💡 Back-Tics ( ` ) : “”, ${변수} 와 문자 같이 출력
                     `${변수}`, `"문자열"출력`, ...
```

### 5. prompt()

: 사용자로부터 값을 입력 받는 함수

- 입력받는 값은 모두 string

```jsx
prompt("입력");
```

<img src="/assets/img/Coding/JavaScript/JavaScript 기초/Untitled 1.png" align="center" alt="ba2">

### 6. confirm()

- 확인 → true, 취소 → false

```jsx
confirm("정말 삭제하시겠습니까?");
```

<img src="/assets/img/Coding/JavaScript/JavaScript 기초/image.png" align="center" alt="ba3">

### 7. onclick

```html
<button type="button" onclick="bgColor1()">클릭</button>
<button type="button" onclick="alert('hello')">인사</button>

<script>
	// 배경색 변경 함수 선언
	function bgColor1() {
	  // document.body → body 태그
	  document.body.style.background = "skyblue";
	}
</script>
```

<img src="/assets/img/Coding/JavaScript/JavaScript 기초/Untitled 2.png" align="center" alt="ba4">

## # 변수

### 1. 변수

- 타입 없음 → 값을 담은 후에 타입이 생김
- 상수 선언
    - var : 재선언 가능, 재할당 가능
    
    ```jsx
    var num1 = 3;
    num1 = 3.4; // 재할당
    console.log("num1 = ", num1);
    num1 = "hello"; // 재할당
    console.log("num1 = ", num1);
    
    var num1 = 55; // 재선언
    console.log("num1 = ", num1);
    ```
    
    - let : 재선언 안됨, 재할당 가능 (추천)
    
    ```jsx
    let num2 = 15;
    console.log("num2 = ", num2);
    num2 = 4.9; // 재할당
    console.log("num2 = ", num2);
    ```
    
    - const : 재선언 안됨, 재할당 안됨
    
    ```jsx
    const num3 = 65;
    console.log("num3 = ", num3);
    ```
    
    <img src="/assets/img/Coding/JavaScript/JavaScript 기초/Untitled 3.png" align="center" alt="ba5">
    
    - 재선언 시  TypeError 발생
    
    ```jsx
    // * TypeError: Assignment to constant variable.
    num3 = 75;
    console.log("num3 = ", num3);
    ```
    
    <img src="/assets/img/Coding/JavaScript/JavaScript 기초/Untitled 4.png" align="center" alt="ba6">
    

### 2. 변수 범위(스코프)

- 함수 스코프 : 함수 안에서 선언된 변수는 함수를 벗어나서는 호출 불가
    - var, let, const 적용
    
    ```jsx
    function foobar() {
      var foo = 5;
      console.log(foo);
      let bar = 10;
      const num = 1;
    }
    
    // 함수 스코프(지역변수)
    // * ReferenceError: foo is not defined
    // console.log(foo);
    // console.log(bar);
    // console.log(num);
    ```
    
- 블럭 스코프 : 블럭 안에 선언된 변수는 블럭 바깥에서 호출 불가
    - let, const 적용
    
    ```jsx
    if (true) {
      var a = 5;
      console.log(a);
    }
    // var 호출 가능
    console.log(a);
    
    if (true) {
      let b = 5;
      console.log(b);
    }
    // let, const 호출 불가
    // * ReferenceError: b is not defined
    // console.log(b);
    ```
    

### 3. 자료형(타입)

- 문자열 : string (문자와 문자열 구분 안함) 'c' or "d”
- 숫자 : number (정수, 실수)
- 논리형 : boolean (true, false)
- 객체 : object
- 함수 : function
- 값을 담고 있지 않는 상태
    - 지정하기 전 : undefined, null
- NaN : Not a Number

* objects : Date, Array, String, Number, Boolean, Object

- typeof : 자료형 확인

```jsx
let a, b, c, d, e, f, g, h;

// 값을 담기 전 타
console.log(typeof c); // undefined

a = 2; → number
b = "abc"; → string
c = "테스트"; → string
d = 3.14; → number
e = true; → boolean
f = new Date(); → object
g = null; → object
h = [1, 2, 3, 4]; → object
const i = function () {}; → function
```

- isNaN()
  - 문자 → true
  - 숫자 → false

```jsx
console.log(isNaN("문자")); // true
console.log(isNaN(5)); // false
```

### 4. 타입 변환

- string → number
    - Number(), parseInt()

```jsx
let num1 = "40";
console.log(typeof num1); // string
console.log(typeof Number(num1)); // number
console.log(typeof parseInt(num1)); // number
```

- number → string
    - String(), toString()

```jsx
console.log(typeof String(123)); // string
let a = 456;
console.log(typeof a.toString()); // string
```

- boolean → number

```jsx
console.log(Number(true)); // 1
console.log(Number(false)); // 0
```

### 5. 연산자

- 대입연산자 : =
- 산술연산자 : +, -, *, /, %, ++, - -
    - / : 나머지도 출력
    
    ```jsx
    var num1 = 9;
    var num2 = 3;
    console.log(num1 + num2); // 12
    console.log(num1 - num2); // 6
    console.log(num1 * num2); // 27
    console.log(num1 / num2); // 3
    console.log(num1 % num2); // 0
    ```
    
- 비교연산자 : `==, ===, !=, !==, <, >, <=, >=, ?`
    - == : 값 비교
    - === : 타입과 값 비교
- 논리 연산자 : &&, ||, !

```jsx
let a = "3";
let b = 3;

console.log("a == b", a == b); // true
console.log("a === b", a === b); // false

console.log("a != b", a != b); // false
console.log("a !== b", a !== b); // true
```

💡 디버깅 : 코드 확인 - f12 - sources - 중단점 설정

![](https://blogfiles.pstatic.net/MjAyNDAzMTJfNjMg/MDAxNzEwMjIyODA4OTgz.jgImdEUzkdRJuk59EKrPkDAHESOUT0dGKwF09M-ddBgg.A2DknkjYNVHUk23DIi7SKc1o4-VTLOTA_ziLu9XKN7kg.PNG/image.png?type=w1)