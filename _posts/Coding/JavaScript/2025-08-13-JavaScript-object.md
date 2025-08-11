---
title: "[JavaScript] 내장객체"
date: 2025-08-13 10:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

### 1. Object 객체 생성

```jsx
// {} 사용하여 객체 생성
let person = {
  name: ["Tomato", "Smith"],
  age: 32,
  gender: "male",
  interests: {
          first: "music",
          second: "skiing",
        },
  greeting: function () {
    alert("Hi!! I'm " + this.name[0] + ".");
  },
};

// Object 객체 생성
let person = new Object();
person.name =["Tomato", "Smith"];
person.age = 32;
person.gender = "male";
```

- 접근
    
    ```jsx
    console.log(person);
    console.log(person.name);
    console.log(person.name[0]);
    console.log(person.interests.first)
    ```

<img src="/assets/img/Coding/JavaScript/내장객체/Untitled.png" align="center" alt="ob1">

- 객체 얕은 복사
    
    ```jsx
    let obj1 = { ...person };
    let obj2 = person;
    
    // 원본 name 변경
    person.name[0] = "Bob";
    
    // 복사된 객체 name 확인
    console.log(obj1.name[0]); // Bob
    console.log(obj2.name[0]); // Bob
    ```
    
- 객체 깊은 복사
    
    ```jsx
    obj1 = { ...person, name: [...person.name], interests: {...person.interests} };
    person.name[0] = "Tomato";
    
    // 복사된 객체 name 확인
    console.log(obj1.name[0]); // Bob
    ```
    
- 객체 출력
    
    ```jsx
    let output = "";
    for (const key in person) {
      output += key + " : " + person[key] + "<br>";
    }
    document.write(output);
    ```
    

<img src="/assets/img/Coding/JavaScript/내장객체/Untitled 1.png" align="center" alt="ob2">

### 2. Date

```jsx
// 현재시간
const now = new Date();
console.log(now);
// Wed Aug 07 2024 10:42:57 GMT+0900 (한국 표준시)
```

- 메서드
    
    ```jsx
    now.getFullYear() → 2024
    now.getMonth() + 1 → 3 // 1월 : 0
    now.getDate() → 6
    now.getHours() → 10
    now.getMinutes() → 43
    now.getSeconds() → 15
    now.toLocaleString() → 2024. 3. 6. 오전 10:43:15
    ```
    

### 3. String

```jsx
const str = "Hello Javascript";
const str1 = new String("Hello Javascript");
```

- 메서드
    - charAt() : 특정 위치 문자 반환
    
    ```jsx
    str.charAt(4) → o
    ```
    
    - indexOf() : 문자 위치 반환
    
    ```jsx
    str.indexOf("a") → 7
    ```
    
    - replace() : 문자 변경
    
    ```jsx
    str.replace("l", "i") → Heilo Javascript
    ```
    
    - substring() : 문자 추출
    - slice() : 문자 추출
    
    ```jsx
    str.substring(6, 10) → Java
    str.slice(6, 10) → Java
    
    // 전화번호 가리기
    "010-4567-1234".replace(substring(4, 8), "####");
    // 010-####-1234
    ```
    
    - trim() : 문자 공백 제거
    
    ```jsx
    "   hello    ".trim() → hello
    ```
    
    - toUpperCase() : 대문자
    - toLowerCase() : 소문자
    
    ```jsx
    str.toUpperCase() → HELLO JAVASCRIPT
    str.toLowerCase() → hello javascript
    ```
    

### 4. Math

- 메서드
    - PI : 원주율
    - floor() : 내림
    - ceil() : 올림
    - abs() : 절대값
    - max() : 최대값
    - min() : 최소값
    
    ```jsx
    Math.PI → 3.141592653589793
    Math.floor(3.649) → 3
    Math.ceil(3.149) → 4
    Math.abs(-3) → 3
    Math.max(5, 1, 3, 16, 95, 25) → 95
    Math.min(5, 1, 3, 16, 95, 25) → 1
    ```
    
    - random() : 0 ≤ x < 1 임의의 값
    
    ```jsx
    Math.random() → 0 ≤ x < 1
    Math.random() * 10 → 0 ≤ x < 9
    (Math.floor(Math.random() * 10)) + 1 → 0 ~ 10
    ```