---
title: "[Java] 연산자"
date: 2025-08-01 09:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 단항 연산자

: 부호 (양수+, 음수-), 증감연산자 (++, --)

- ++ = 변수 + 1
- -- = 변수 - 1

```java
int x = 10, y = 20;

// 후행연산자 : x = x; (1차 실행) x = x+1; (2차 실행)
System.out.println(x++); // 10
System.out.println(y++); // 20
System.out.printf("%d, %d", x, y) // 11, 21

int x = 10, y = 20;

// 선행연산자 : x = x+1; (1차 실행)
System.out.println(++x); // 11
System.out.println(++y); // 21
System.out.printf("%d, %d", x, y); // 11, 21
```

### 2. 관계(비교) 연산자

: >, <, >=, <=, != (같지 않다), == (같다) 

- 결과값 : true / false

- ! : 부정 (true → false, false → true)

```java
// boolean 형태로 나오는 변수에 사용
boolean x = true;
System.out.println(x); // true
System.out.println(!x); // false
```

- 문자열 비교 시 == 사용 (x) → equals( ) 메서드 사용

### 3. 대입 연산자

: =

### 4. 논리 연산자

: &&(AND), ||(OR), !(NOT)

- &&(AND) : 피연산자 모두 true 여야 true 결과를 얻음

```java
int x = 15;
System.out.println(x > 10 && x < 20); // true
```

- ||(OR) : 피연산자 중 어느 한 쪽만 true 여도 true 결과를 얻음

```java
int i = 6;
System.out.println(i % 2 == 0 || i % 3 == 0); // true
```

### 5. 산술 연산자

: +, -, *, /, % (나머지)

```java
int num1 = 5, num2 = 2;
int plus = num1 + num2; // 7

int minus = num1 - num2; // 3

int multiple = num1 * num2; // 10

int divide = num1 / num2; // 2
double divide = num1 / num2; // 2.000000

int remainder = num1 % num2; // 1

char ch1 = 'A' + 1; // B
```

### 6. 비트 연산자, 시프트 연산자

### 7. 조건(삼항) 연산자

```java
// 조건식이 참일 때 식1 값 출력, 거짓일 때 식2 값 출력
조건식? 식1: 식2;

= if (조건식) {식1} else {식2}
```

### 8. 복합 대입 연산자

: +=, -=, *=, /=

```java
int i = x;
i += a; // i = i + a;
i /= a; // i = i / a;
i *= a; // i = i * a;
```