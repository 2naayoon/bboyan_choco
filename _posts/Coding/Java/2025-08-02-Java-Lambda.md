---
title: "[Java] Lambda"
date: 2025-08-02 14:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 람다식(Lambda Expression)

: 메서드를 하나의 식으로 표현한 것

```java
// 일반 메서드
리턴타입 메서드명(매개변수){실행문;}

// 람다식
(매개변수) -> {실행문;}
```

- 매개변수가 없을 때

```java
// 매개변수가 없을 때
int roll() {
	return (int) (Math.random() * 6);
}

() -> (int) (Math.random() * 6);
```

- 생략 가능 표현

```java
(int x, int y) -> {return x + y;}
(x, y) -> x + y
(str) -> {str.length();}
str -> str.length()
```

### 2. 함수형 인터페이스

: 람다식을 포함 (추상 메소드 하나만 사용)

- 람다식 = 익명 클래스 객체

```java
public interface MyFunction1 {
  void method(); // public abstract
}

public class LambdaEx1 {
  public static void main(String[] args) {
    MyFunction1 lambda1 = () -> {
      System.out.println("함수적 인터페이스");
    };
    lambda1.method();
  }
}
```

```java
public interface Animal {
  void eat();
}

public class Lion implements Animal {
  @Override
  public void eat() {
    System.out.println("고기를 먹는다");
  }
}

public class AnimalEx {
  public static void main(String[] args) {
    // 인터페이스 활용 방법
    Animal animal = new Lion();
    animal.eat();

    // 람다식 활용 방법
    Animal animal2 = () -> System.out.println("풀을 먹는다");
    animal2.eat();
  }
}

// 고기를 먹는다
// 풀을 먹는다
```

### 3. 함수형 인터페이스

- function 패키지 : 함수형 인터페이스 제공
    
    ```java
    import java.util.function.*;
    
    import java.util.function.BiConsumer;
    import java.util.function.BiFunction;
    import java.util.function.Consumer;
    import java.util.function.Function;
    import java.util.function.Predicate;
    import java.util.function.Supplier;
    ```
    
- 매개변수, 반환값에 따른 인터페이스
    
    
    | 매개변수 | 반환값 |  |  |
    | --- | --- | --- | --- |
    | X | X | void run() | java.lang.Runnable |
    | X | O | int run() | Supplier<T> T get() |
    | O | X | void run(int a) | Consumer<T> void accept(T t) |
    | O | O | int run(int a) | Function<T, R> R apply(T t) |
    
<img src="/assets/img/Coding/Java/Lambda/Untitled.png" align="center" alt="lam1">

- 조건식 표현할 때 사용되는 인터페이스

```java
boolean test(int a) → Predicate<T>
```

<img src="/assets/img/Coding/Java/Lambda/Untitled 1.png" align="center" alt="lam2">

- Bi ~ : 매개변수의 개수가 2개인 함수형 인터페이스

```java
void run(int a, String ) → BiConsumer<T, U> coid accept(T t, U u)

int run(String a, float f) → BiFunction<T, U, R> R apply(T t, U u)

boolean test(int a, double d) → BiPredicate<T, U> boolean test(T t, U u)
```

<img src="/assets/img/Coding/Java/Lambda/Untitled 2.png" align="center" alt="lam3">

- Funcion 과 같은 역할
    - 매개변수 타입과 반환 타입이 모두 일치한다
    
    ```java
    UnaryOperator<T> T apply(T t)
    
    BinaryOperator<T> T apply(T t, T u)
    ```
    
- 기본형을 이용하는 함수형 인터페이스 - ToIntFunction
- 컬렉션 프레임워크의 함수형 인터페이스를 매개변수로 사용하는 메서드

```java
ArrayList<Integer> list = new ArrayList<>();
for (int i = 0; i < 10; i++) {
	list.add(i);
}

// for(int i= 0; i < list.size(), i++)
// for(int i : list)
// forEach(Consumer<Integer> action)
list.forEach(i -> System.out.println(i));

// list에서 2 또는 3 배수 제거
// removeIf(Predicat<? super E> filter)
list.removeIf(i2 -> i2 % 2 == 0 || i2 % 3 == 0);

// list의 각 요소에 곱하기 10  
list.replaceAll(i -> i * 10);
```

### 4. 메서드 참조

: 람다식이 하나의 메서드만 호출하는 경우 사용

- 람다식을 더욱 간결하게 사용

```java
클래스이름::메서드명

// Function<String, Integer> f2 = s1 -> Integer.parseInt(s1);
Function<String, Integer> f2 = Integer::parseInt;

// 두 개의 문자열을 받아서 문자열이 동일한지 리턴
// BiFunction<String, String, Boolean> f1 = (s1, s2) -> s1.equals(s2);
BiFunction<String, String, Boolean> f1 = String::equals;

// Supplier<Student> s = () -> new Student();
Supplier<Student> s = Student::new;
```

- 예제

```java
// Arrays.asList() : 배열을 리스트로 변환
private static List<Student> list = Arrays.asList(
	new Student("홍길동", 100, 98),
	new Student("김길동", 80, 78)
);
  
// 학생 이름 출력하기
// list.forEach(stu -> System.out.println(stu.getName()));
// Function<Student, String> function = stu -> stu.getName();
// System.out.println(function.apply(function.apply(list.get(0))));
// System.out.println(function.apply(list.get(1)));
printString(stu -> stu.getName());

// 수학 점수 출력
printInt(stu -> stu.getMath());

// Function<T, R> R apply(T t)
static void printString(Function<Student, String> function) {
	for (Student student : list) {
		System.out.println(function.apply(student));
	}
}

static void printInt(ToIntFunction<Student> function) {
	for (Student student : list) {
		System.out.println(function.applyAsInt(student));
	}
}
```