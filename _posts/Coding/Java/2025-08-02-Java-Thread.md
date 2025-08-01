---
title: "[Java] Thread"
date: 2025-08-02 13:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

# Thread
: 프로세스 내에서 실제로 작업을 수행하는 주체

### 1. 프로세스

: 실행 중인 프로그램 (os 로부터 실행에 필요한 자원 (메모리) 할당받아 실행)

- 프로그램을 수행하는 데 필요한 데이터 + 자원 + 스레드
- 모든 프로세스는 최소한 하나 이상의 스레드가 존재
- 멀티스레드 프로세스 : 둘 이상의 스레드를 가진 프로세스

### 2. 멀티스레드 구현

1) Runnable 구현하는 클래스 작성

2) Thread 상속받는 클래스 작성

- 스레드를 통해 작업하고 싶은 내용을 run() 메소드에 오버라이딩
- 멀티스레드 단점
    - 여러 개의 스레드가 번갈아가면서 작업을 처리하기 때문에 스레드간 작업 전환 시간이 소요
    - 한 스레드가 수행하는 동안 다른 스레드는 대기하는 대기시간이 필요

```java
public class SmallLetters implements Runnable {
  @Override
  public void run() {
    // 스레드로 실행할 코드 작성
    for (char ch = 'a'; ch <= 'z'; ch++) {
      System.out.println(ch + " ");
    }
  }
}

public class SmallLetters2 extends Thread {
  @Override
  public void run() {
    // 스레드로 실행할 코드 작성
    for (char ch = 'A'; ch <= 'Z'; ch++) {
      System.out.println(ch + " ");
    }
  }
}

public class ThreadEx {
  public static void main(String[] args) {
    Thread t = new Thread(new SmallLetters());
    Thread t2 = new SmallLetters2();
   
    t.start(); // thread 실행
    t2.start();
  }
}
```

### 3. 스레드 실행 제어

- sleep(밀리세컨드) : 지정된 시간 동안 스레드일시 정지 (자동적으로 실행 대기 상태)

```java
public class ThreadEx {
  public static void main(String[] args) {
    Thread t = new Thread(new SmallLetters());
    Thread t2 = new SmallLetters2();
   
    t.start(); 
    t2.start();
    
    try {
	    Thread.sleep(2000); // 2초간 스레드 일시정지
    } catch (InterruptedException e) {
	    e.printStackTrace();
    }
  }
}
```

- suspend() : 일시 정지, resume() 호출해야 실행 대기 상태가 됨
- stop(), interrupt()

### 4. 동기화

: 한 스레드가 진행중인 작업을 다른 스레드가 간섭하지 못하도록 막는 것

- synchronized
    - 메서드 동기화
    - 동기화 블록

<img src="/assets/img/Coding/Java/Thread/Untitled.png" align="center" alt="thread1">
<figcaption align="center" style="color:silver">한 메소드가 완전히 끝난 후 다른 스레드 실행</figcaption>