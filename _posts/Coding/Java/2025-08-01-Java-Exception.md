---
title: "[Java] 예외"
date: 2025-08-02 16:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. Exception 예외

1) 컴파일 예외(CheckedException)

: 컴파일 시에 발생하는 예외 (컴파일러가 바로 알려줌) - 빨간줄

2) 런타임 예외(RuntimeException)

: 실행 시에 발생하는 예외 (ArrayIndexOutOfBoundsException, ClassCastException, NullPointerException, ArithmeticException, ...)

- ArrayIndexOutOfBoundsException : 인덱스가 배열의 크기보다 크거나 음수 인덱스에 대한 요청이 있을 시 발생

<img src="/assets/img/Coding/Java/예외/Untitled.png" align="center" alt="except1">

- ArithmeticException: / by zero : 정수를 0으로 나눌 시 발생

3) 논리적 예외

: 실행은 되나, 의도와는 다르게 동작

<img src="/assets/img/Coding/Java/예외/Untitled 1.png" align="center" alt="except2">

4) 사용자 정의 예외

- Exception 상속

<img src="/assets/img/Coding/Java/예외/Untitled 2.png" align="center" alt="except3">

### 2. 예외 핸들링

1) try ~ catch

```java
try {
	예외가 발생할 수 있는 코드
} catch(처리할 예외 타입 e) {
	예외가 발생 시 예외를 처리하는 부분
}

// Exception 발생 시 catch 실행
```

<img src="/assets/img/Coding/Java/예외/Untitled 3.png" align="center" alt="except4">

- printStackTrace() : 어디에서 예외가 발생했는지 따라가는 메서드

2) try ~ catch ~ finally

```java
try {
	예외가 발생할 수 있는 코드
} catch(처리할 예외 타입 e) {
	예외가 발생 시 예외를 처리하는 부분
} finally {
  // 예외의 발생 여부와 상관없이 무조건 실행
	항상 수행되는 부분
}
```

3) try ~ with ~ resources : 자동 자원 반환

```java
try {
	// 리소스 (close 할 객체) 선언
	A a = new A();
} catch(Exception e) {
	...
}
// close() 메서드를 명시적으로 호출하지 않아도 자동으로 닫아줌
// finally 명시 x
```

```java
// try {} finally {}
// try {} catch (Exception e) {}
// try {} catch (Exception e) {} finally {}
```

4) throw : 고의로 예외 발생

<img src="/assets/img/Coding/Java/예외/Untitled 4.png" align="center" alt="except5">


5) throws : 예외를 메서드에 선언하는 방법

                  → 메서드를 호출 할 때 처리되도록 미룸

<img src="/assets/img/Coding/Java/예외/Untitled 5.png" align="center" alt="except6">

```java
  void ex(int x) throws Exception {
    if (x != 1) {
      throw new Exception("Exception"); // return하고 같은 효과 (if문에 걸리면 실행하고 돌아감)
    }
    System.out.println(x);
  }
```