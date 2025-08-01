---
title: "[Java] 변수와 자료형"
date: 2025-08-01 09:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 변수

: 하나의 값 저장

```java
타입(자료형) 변수명 = 값;
```

- 기본 타입 (Primitive type)
    - 정수형, 실수형, 불린형, 문자형
    - 초기화가 반드시 필요 (변수 선언 = 값 할당)
- 타입 (자료형)
- 1byte = 8bit = 256개 (0~255 표현) = -128~127 (음수~양수)
- 상수 : 값을 한 번만 저장

```java
final 타입 변수명 = 값;
```

* 변수명 : 소문자로 시작 / 두 개의 단어가 합해진 변수명은 두번째 단어 시작을 대문자로 함

1. 정수형 : byte (1byte), short (2byte), int (4byte), long (8byte)

```java
byte 변수명 = 값;
short 변수명 = 값;
int 변수명 = 값;
long 변수명 = 값L;
```

2. 문자형 : char (2byte)

- 문자 (한 글자) : ‘ ‘ 사용
- 문자열 (한 글자 이상) : “ “ 사용
- 인코딩(ASCII, 유니코드(UTF-8, UTF-16)) : 문자를 컴퓨터가 이해하는 형태로 바꿈
  - A → 65

- ASCII : A = 65 , B = 66 , ... / a = 97 , b = 98 , ...
- 유니코드 : 가 = 44032
- UTF-8 : a = \u0041
- 디코딩
  - 65 → A
```java
char 변수명 = '문자';
String 변수명 = "문자열";
```

3. 논리형 : boolean (1byte)
            true, false 값만 가짐
    
```java
boolean 변수명 = true / false;
```

4. 실수형 : float (4byte), double (8byte)

```java
float 변수명 = 값f; // F, f 붙임
double 변수명 = 값d; // D, d 붙임
```

### 2. 변수의 유효범위

- local (지역) 변수 : { } 안에서 선언된 변수는 그 안에서만 유효

<img src="/assets/img/Coding/Java/변수와 자료형/Untitled.png" align="center" alt="type">

### 3. 형(타입)변환

 1) 자동형변환

- 타입 변환 가능함 : 작은 타입 → 큰 타입
- 연산 시 타입변환이 일어남 : 작은 타입 → 큰 타입

```java
// int(4byte) 보다 작을 때 byte → int 로 변환
byte v = 10;
int intValue = v;
    
// a → 97 코드값으로 변환
char ch = 'a';    
intValue = ch;
    
// 소수점이 자동으로 붙게 됨
double doubleValue = intValue;
    
// int + double → double 타입으로 변환
intValue = 55;
doubleValue = 98.25d;
// * int result = intValue + doubleValue; (X) - 무조건 큰 타입으로!
double result = intValue + doubleValue;
```

 2) 강제형변환
- 큰 타입 → 작은 타입
- 값의 손실이 일어날 수 있음

```java
int intValue = 129;
byte byteValue = (byte) intValue;
// -127
        
intValue = 44032;
char charValue = (char) intValue;
// 가
        
double doubleValue= 3.1415d;
intValue = (int) doubleValue;
// 3
```

- 문자 → 숫자 형변환 : Integer.parseInt
  ex) "88" → 88

```jsx
int x = Integer.parseInt(변환할 값);
```