---
title: "[JavaScript] 조건문, 반복문"
date: 2025-08-13 08:30:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

## # 조건문

### 1. if

- true : 0 제외 숫자, "문자", [], {}
- false : 0, "", null, undefined, NaN

```jsx
if (조건) {
	실행문1;
} else if {
	실행문2;
} else {
	실행문3;
}
```

- 값을 입력 받아 홀수, 짝수 구분

```jsx
let num = Number(prompt("숫자를 입력해주세요"));

if (!isNaN(num)) {
  if (num % 2 == 0) {
    console.log("짝수");
  } else {
    console.log("홀수");
  }
}
```

### 2. switch

```jsx
switch () {
  case a:
    실행문1;
  case b:
    실행문2;
    break;
  default:
    실행문3;
    break;
}
```

- 점수 평균으로 등급 구하기

```jsx
// 국어, 영어, 수학 점수를 입력 받아 평균을 구한 후 성적 나누기 
// >= 90 A, >= 80 B, >= 70 C, >= 60 D, E
let kor = Number(prompt("국어 : "));
let eng = Number(prompt("영어 : "));
let math = Number(prompt("수학 : "));

let avg = (kor + eng + math) / 3;
let grade= "";

// if문
if (avg >= 90) {
  grade = "A";
} else if (avg >= 80) {
  grade = "B";
} else if (avg >= 70) {
  grade = "C";
} else if (avg >= 60) {
  grade = "D";
} else {
  grade = "E";
}

// switch문
switch (parseInt(avg / 10)) {
  case 10:
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "E";
    break;
}
```

## # 반복문

- for
- for/in
- for/of
- while
- do ~ while

### 1. for

```jsx
for (초기화; 조건식; 증감식) {
  실행문;
}
```

### 2. while

```jsx
while (조건식) {
 실행문;
 증감식;
}
```

- 1 ~ 100 짝수 출력

```jsx
// for문
for (let index = 1; index <= 100; index++) {
  if (index % 2 == 0) {
    console.log(index);
  }
}

// while문
while (index < 101) {
  if (index % 2 == 0) {
    console.log(index);
  }
  index++;
}
```