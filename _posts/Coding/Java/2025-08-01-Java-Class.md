---
title: "[Java] 클래스"
date: 2025-08-01 15:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 클래스 정의

- 클래스 구성요소 (필수 x)
    - 멤버변수 (= 인스턴스변수, property, 속성, 필드)
    
           : 객체가 가져야 하는 특징
    
    - 멤버메서드 (= 인스턴스메서드, 기능, 동작)
    
           : 속성을 변경시킬 수 있도록 메서드작성
    
    - 생성자(constructor)
    
          : 클래스를 객체로 생성할 때 필요
    
- 클래스 정의
    
    ```java
    // main 없는 클래스
    (접근제어자) class 클래스명 {
    	멤버변수;
    	메소드;
    	생성자;
    }
    
    // defualt 생성자
    public 클래스명(){}
    
    // 멤버변수를 매개변수로 입력받는 생성자
    public 클래스명(타입 매개변수명, ... ) {
    	// this : 같은 클래스에서 생성한 나의 메모리(변수, 생성자 등) 가져오기
    	this.멤버변수명 = 매개변수명;
            .
            .
            .
    }
    ```
    

* 클래스명 : 보통 대문자로 시작

* 생성자, getter, setter, toString… 자동 생성 : 마우스 우클릭 → source action → 필요한 변수 체크 → ok

<img src="/assets/img/Coding/Java/클래스/Untitled.png" align="center" alt="class1">

- 접근제어자
    - public : 접근 제한 없음
    - default : 같은 패키지 내에서만 접근 가능(아무것도 안 붙는 경우 → 값을 안 주는 것)
    - protected : 같은 패키지 + 다른 패키지의 자손 클래스
    - private : 외부클래스에서 직접 접근, 사용하는 것을 막음
        - private 사용 시 외부에서 접근하고자 할 때 사용하는 메서드
            - get( ) : 값을 얻는 메서드
            - set( ) : 값을 지정하는 메서드

<img src="/assets/img/Coding/Java/클래스/Untitled 1.png" align="center" alt="class2">
<figcaption align="center" style="color:silver">get, set 생성</figcaption>

<img src="/assets/img/Coding/Java/클래스/Untitled 2.png" align="center" alt="class3">
<figcaption align="center" style="color:silver">get, set 사용</figcaption>
        
    - 대상에 따라 사용할 수 있는 접근제어자
    
    | 클래스 | public, default |
    | --- | --- |
    | 메서드, 멤버변수 | private, default, protected, public |
    - public > protected > default > private
- 멤버변수 초기값
    - String : null
    - int, long : 0
    - float, double : 0.0
    - char : ' ‘
    - boolean : false
- 오버로딩 : 하나의 클래스에 동일한 이름의 생성자, 메서드를 여러개 선언
    - ( ) 안에 매개변수 인자의 개수, 타입이 달라야 함
    - 생정자 오버로딩
    - 메소드 오버로딩
    
<img src="/assets/img/Coding/Java/클래스/Untitled 3.png" align="center" alt="class4">
    
- 실행 클래스
    - 객체(인스턴스) 생성
    
           : 클래스를 사용할 수 있는 상태로 만드는 개념
    
    ```java
    // main 있는 클래스 (실행 클래스)
    public class 클래스명 {
    	public static void main(String[] args) {
    	// 생성자 호출 : 앞에서 정의한 클래스 사용을 위해 클래스 생성
    	클래스형 참조변수명 = new 생성자;
    	
    	// 생성된 인스턴스에 값 할당
    	참조변수.멤버변수 = 값;
    	       .
    	       .
    	       .
    	       
    	// 매개변수 입력받는 생성자 호출
    	클래스형 참조변수명 = new 생성자(값, ...);
      }
    

    	// 메서드 사용
    	참조변수.메서드명(매개변수값);
    }
    ```
<img src="/assets/img/Coding/Java/클래스/Untitled 4.png" align="center" alt="class5">
<figcaption align="center" style="color:silver">defualt 생성자 클래스 생성 후 인스턴스 변수 초기화</figcaption>

<img src="/assets/img/Coding/Java/클래스/Untitled 5.png" align="center" alt="class6">
<figcaption align="center" style="color:silver">클래스 생성과 동시에 인스턴스 변수 초기화</figcaption>
    
    
### 2. 메서드

- 중복되는 코드 등 메서드로 작성 (매개변수 이용)
    
    ```java
    (접근제어자) 리턴타입 메서드명(매개변수) {
    	실행문;
    }
    ```
    
    - Return type : 정수형, 실수형, boolean, char, String, 배열, void
        - void : return 값이 없음
            - 호출만 가능 (sys.out (x))
        - int, boolean, String, … : return 값 필요

<img src="/assets/img/Coding/Java/클래스/Untitled 6.png" align="center" alt="class7">

- 메소드에서 메소드 호출
    
<img src="/assets/img/Coding/Java/클래스/Untitled 7.png" align="center" alt="class8">

- return
    
    ```java
    // void 일 때, return 을 만나면 그냥 돌아감
    // (if문 만족 시 return까지만 실행, this.hour = hour 구문 실행 x)
      public void setHour(int hour) {
        if (hour < 0 || hour > 23) return;
        this.hour = hour;
      }
    ```
    
- 재귀호출 : 메서드 안에서 자기 자신 호출

<img src="/assets/img/Coding/Java/클래스/Untitled 8.png" align="center" alt="class9">

### 3. static 변수

: 클래스에서 공통으로 사용하는 변수 (정적변수, 클래스변수)

  클래스가 로딩될 때 생성되고 프로그램이 종료될 때 소멸

- static 변수 사용
    - 클래스 정의
    <img src="/assets/img/Coding/Java/클래스/2.png" align="center" alt="class9">

    - 호출
    
    <img src="/assets/img/Coding/Java/클래스/3.png" align="center" alt="clas10">

- static 메서드는 static 인 변수만 사용 가능
    <img src="/assets/img/Coding/Java/클래스/Untitled 9.png" align="center" alt="class11">

### 4. final 변수

: 처음 초기화한 값에서 수정 불가 (getters, setters x)

| 변수 | 상수 의미 |
| --- | --- |
| 메서드 | 오버라이딩 금지 (하위 클래스 재정의 금지) |
| 클래스 | 상속 금지 |
- 객체끼리 공유하는 상수

```java
// 상수는 대문자로 표현
private static final double Pi = 3.141592;
// Pi = 3.141592 값 고정 → 수정 불가
```

### 5. 매개변수

: 메서드를 호출할 때 매개변수로 지정한 값을 메서드의 매개변수에 복사

```java
int x = 0;

void change (int x) {
x = 20; // (X) 값 변경 불가능 x = 0
}

void change2 (클래스명 참조변수명) {
참조변수.x = 20; // x 값 변경 0 → 20
)
```

- 기본형 : 변수의 값을 읽기만 가능 (값이 복사됨) - int, double, boolean, long, …
- 참조형 : 변수의 값을 읽고 변경 가능 (주소를 공유) - 클래스, 배열
    - 클래스 참조

  <img src="/assets/img/Coding/Java/클래스/Untitled 10.png" align="center" alt="class12">
  <figcaption align="center" style="color:silver" >참조변수 student는 위의  student, student2와는 다른 새로운 변수(매개체 역할)</figcaption>      
        
    - 배열 참조
        
  <img src="/assets/img/Coding/Java/클래스/Untitled 11.png" align="center" alt="class13">
        

### 6. 싱글톤 패턴

: 단 하나의 객체만을 생성할 수 있도록 하는 패턴

```java
public class Singleton {

  private static Singleton singleton = new Singleton(); // 유일한 인스턴스
  
  private Singleton() {}

	// 외부에서 참조할 수 있는 public 메서드 구현
  public static Singleton getInstance() {
    if (singleton == null) {
      singleton = new Singleton();
    }
    return singleton;
  }
}
```
 <img src="/assets/img/Coding/Java/클래스/Untitled 12.png" align="center" alt="class14">