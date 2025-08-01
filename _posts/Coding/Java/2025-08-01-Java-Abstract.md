---
title: "[Java] 추상클래스, 인터페이스"
date: 2025-08-01 18:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 추상클래스(abstract)

: 미완성 설계도, 상속을 하기 위해 만든 클래스

* 클래스 : 완성 설계도

```java
public abstract class AbstractParent{
	private String x;
	
	public AbstractParent() {}
	
	// 멤버 메소드
  public void method1() {}
  
  // 추상 메소드 : {} 없음
  public abstract void method2();
}
```

- 자식 클래스에서 부모의 미완성 부분을 무조건 완성해야 함
    
    : 자식 클래스에서 각각 다르게 메서드를 구현할 때 사용
    

```java
public class AbstractChild extends AbstractParent{

  @Override
  public void method2() {}
}
```

- 인스턴스 생성 불가

```java
// *Error : Cannot instantiate the type Account
// Account account = new Account();

AbstractParent ap = new AbstractChild();
```

### 2. 인터페이스(interface)

: 프로그램이 제공하는 기능을 명시적으로 선언하는 역할

- 모든 멤버 변수는 public static final (자동 변환)
- 모든 멤버 메소드는 public abstract (자동 변환)

```java
public interface InterfaceParent{

	// 멤버 변수는 상수만 가능 (상수로 자동 변환)
	// public static final 생략
	int SPADE = 4;
	
	// interface 메소드는 무조건 추상
	// public abstract 생략
	void deposit()
	  
	// {}가 들어올 수 있는 경우 : static, default
  static void getCardKind() {}
	default void getCard() {}
}
```

*  {}(body)를 가진 메소드는 static, default 만 가능 (1.8 버전 추가)

- 인터페이스 구현

```java
public class InterfaceChild implements InterfaceParent{

  @Override
  public void deposit() {}
}
```

- 인스턴스 생성

```java
public static void main(String[] args) {
	// 인스턴스 생성 불가
	// InterfaceParent parent = new InterfaceParent();
    
	// 왼쪽 부모 - 오른쪽 자식
	InterfaceParent parent = new InterfaceChild();
	
	InterfaceChild child = new InterfaceChild()
}
```

- 다른 인터페이스 상속 가능

```java
public class Unit {
  int currentHP;
  int x, y;
}

public interface Movable {
  void move(int x, int y);
}

public interface Attackable {
  void attack(Unit unit);
}

public interface Fightable extends Movable, Attackable {}

public class Fighter extends Unit implements Fightable {
  @Override
  public void move(int x, int y) {}

  @Override
  public void attack(Unit unit) {}
}

public static void main(String[] args) {
	Fighter f = new Fighter();
}
```
```
💡 instanceof : 객체가 어떤 클래스인지, 어떤 클래스를 상속받았는지 확인 (ClassCastException 방지)
```
<img src="/assets/img/Coding/Java/추상클래스, 인터페이스/Untitled.png" align="center" alt="Setting1">