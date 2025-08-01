---
title: "[Java] 화면 출력"
date: 2025-08-01 08:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 화면 출력

```java
System.out.println("문자");
```

- + : 더하기 / 연결

```java
System.out.println("문자" + 변수 + "문자" + ...);
```

### 2. 특수기호

- 출력 지시자

```java
System.out.print(); // Enter 제외
System.out.println(); // Enter 한 번 포함
System.out.printf(); // Enter 제외
```

  - printf 지시자

- %d : 10진 정수 형태로 출력
- %b : boolean 형태로 출력
- %c : char 형태로 출력
- %s : 문자열(String) 출력
- %f : 부동소수점(float, double) 출력
- 숫자 : 총 자릿수

```java
double x = 31.41592d;
// 5.3 : 총 다섯자리, 소수점은 셋째까지
System.out.printf("d1 = %5.3f\n", x);
```

- \t = Tab
- \n = Enter

```java
System.out.print("문자\t문자\n");
```

- \ + 특정 기호, 출력할 기호, … (기호 포함 출력 시 사용)

```java
System.out.println("\"Hello\""); // "Hello" 출력
```

### 3. Scanner

: 화면에 값을 직접 입력 후 출력하는 클래스 인스턴스

- System.in : 키보드 (→ 키보드에서 입력이 들어올 거다)
- sc.nextLine, ... : Scanner의 메서드를 불러 사용

```java
Scanner sc = new Scanner(System.in);
System.out.print("값 입력 : ");
int 변수명 = sc.nextInt();
System.out.printf("입력한 값 %d", 변수명);
```