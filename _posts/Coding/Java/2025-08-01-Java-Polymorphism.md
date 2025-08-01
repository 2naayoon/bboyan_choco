---
title: "[Java] 상속 다형성"
date: 2025-08-01 17:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. package

: 클래스 묶음 (폴더)

- 모든 클래스는 반드시 하나의 패키지에 속해야 한다
- 점을 구분자로 하여 계층 구조로 구성

### 2. 상속(is a) 관계 extends

: 기존의 클래스를 재사용하여 새로운 클래스 작성 (Child > Parent)

<img src="/assets/img/Coding/Java/상속 다형성/Untitled.png" align="center" alt="poly1">

- 적은 양의 코드로 새로운 클래스를 작성할 수 있고 코드를 공통적으로 관리하기 때문에 코드의 추가 및 변경이 용이함 (코드의 재사용성 증가 및 중복 제거)
- 부모가 가진 대부분의 값을 물려받음
- 자손 클래스는 조상 클래스의 모든 멤버를 상속 받음
- 생성자와 초기화 블럭은 상속되지 않음
- 단일 상속만 가능 (한 번에 하나만)
- 모든 클래스는 Object 클래스를 상속받음 (명시하진 않지만 default값)

```java
// 부모 클래스
public class Parent{
	private int age;
	
	public Parent(int age) {
		this.age = age;
	}
}

// 자식 클래스
public class Child extends Parent{
	// super() : 하위 클래스에서 상위 클래스에 접근
	// default 생성자 시 super 항상 포함 (생략)
	Child(){
		// super();
	}

	// 부모의 생성자 호출 (자신의 인스턴스 생성 전 부모의 인스턴스 생성)
	public Child(int age) {
		super(age);
	}
}
```

- Parent : 부모 클래스, 상위(super) 클래스, base 클래스
    - 부모의 역할을 할 수 있는 것
        
        1) 클래스   2) 인터페이스   3) 추상클래스
        
- Child : 자식 클래스, 하위(sub) 클래스, 파생 클래스

```java
public class Parent {
	public void parentMethod(){}
}

public class Child {
}

// 부모가 물려준 메서드 실행
public static void main(String[] args) {
	Child child = new Child();
	
	child.parentMethod();
}
```

- 부모 클래스의 생성자가 명시되어 있는 경우 자식 클래스에서 필수적으로 super() 이용하여 부모의 생성자 호출
    - super() 를 명시적으로 호출하지 않아도 되는 예외
        
        1) 부모 클래스의 생성자가 명시적으로 선언되어 있지 않은 경우
        
        2) 부모 클래스의 생성자가 명시적으로 선언되어 있어도 default 생성자만 명시되어 있는 경우
        
        ```java
        public class Parent {
        	public Parent(){}
        }
        
        public class Child {
        	// 컴파일러가 자동 생성 (생략)
        	// Child(){super();}
        }
        ```
        

### 3. 오버라이딩

: 부모 메서드 재정의 (부모가 넘겨주는 메서드를 조금 바꿔서 쓰고 싶을 때 사용)

- 부모의 메서드와 동일한 시그니처(리턴타입, 메서드명, 인자)를 가진다 (상속에서만 나옴)
- 오버라이딩 메서드는 부모보다 접근 제한자를 좁게 가져서는 안 됨
- 새로운 예외를 throws 할 수 없음

```java
// 부모 메서드
public void print(){
	System.out.println("안녕하세요");
}

// 자식 메서드 : 메서드 재정의
@Override
public void print(){
	System.out.println("반갑습니다");
}
```

- @(Annotation) : 컴파일러에게 특정한 정보 제공

<img src="/assets/img/Coding/Java/상속 다형성/Untitled 1.png" align="center" alt="poly2">
<figcaption align="center" style="color:silver">child - 오버라이딩 / grandchild - 오버라이딩 x</figcaption>

- 오버라이딩 시 자손은 자식의 오버라이딩 메소드 호출

### 4. 포함(has a) 관계

: 한 클래스의 멤버변수로 다른 클래스 타입의 참조 변수를 선언

<img src="/assets/img/Coding/Java/상속 다형성/Untitled 2.png" align="center" alt="poly3">

<img src="/assets/img/Coding/Java/상속 다형성/Untitled 3.png" align="center" alt="poly4">

### 5. 다형성(Polymorphism)

: 부모 클래스 타입의 참조변수로 자손 클래스의 인스턴스 참조

- 형변환 : 참조변수의 타입을 변환하는 것으로 참조할 수 있는 범위를 조절
    - 자손타입 → 조상타입 (자동형변환)
    - 조상타입 → 자손타입 (강제형변환)
    
    ```java
    public class Parent {
      String field1;
    }
    
    public class Child extends Parent {
      String field2;
    }
    
    public class ChildEx {
      public static void main(String[] args) {
    	  Child child1 = new Child();
    	  // child1 로 접근 가능한 범위 : field1, field2
    	  
    	  // 상속관계라면 왼쪽에 부모가 오는게 가능
    	  Parent child2 = new Child();
    	  // child1 으로 접근 가능한 범위 : field1
    	  
    	  // 메소드가 오버라이딩 되어있다면 자식 메소드 실행
    ```
    
- 동일한 메소드 실행 → (오버라이딩 시) 서로 다른 결과물

### 6. 다운 캐스팅, instanceof

- 다운 캐스팅

: 상위 클래스로 형변환되었던 하위 클래스를 다시 원래 자료형으로 형변환

```java
Parent parent = new Child();
// Parent 에서 선언한 메서드와 멤버변수만 사용 가능
// Child 형이 되어야 Child 메서드, 멤버변수까지 사용 가능
```

- instanceof

: 다운 캐스팅을 하기 전 상위 클래스로 형 변환된 인스턴스의 원래 자료형 확인

```java
// 자료형 확인 후 다운 캐스팅
if(parent instanceof Child) { // parent 자료형이 Child 라면
	Child child = (Child)parent; // 인스턴스를 Child 로 다운 캐스팅
}
```