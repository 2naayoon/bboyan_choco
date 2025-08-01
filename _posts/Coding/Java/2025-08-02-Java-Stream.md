---
title: "[Java] Stream"
date: 2025-08-02 15:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. 스트림(stream)

: 같은 기능의 메서드들이 중복되거나, 배열, 컬렉션 등의 자료를 일관성 있게 처리하기 위해 사용

- 같은 종류의 데이터를 다룰 때 사용
    - 배열, 리스트, set, map
    - for, Iterator
    - list, sort(), Collections.sort(), Arrays.sort()
- 데이터 소스를 추상화시키고, 자주 사용하는 메소드들을 정의해 놓음
- 데이터 소스를 변경하지 않음 (데이터를 읽기만 함)
- 일회용 (스트림 1회 사용 시 닫힘)
- 작업을 내부 반복적으로 처리

```java
import java.util.stream.*;
```

- Stream 사용 방식 : 데이터 소스는 다르나 정렬/출력 방법 동일

```java
String[] strArr = { "ad", "abc", "aaa" };

// Arrays.sort(strArr); // 원본 자체 변경
List<String> list = Arrays.asList(strArr);

// stream 객체 변환
Stream<String> stream1 = Arrays.stream(strArr);
Stream<String> stream2 = list.stream();

stream1.sorted().forEach(item -> System.out.println(item));
stream2.sorted().forEach(item -> System.out.println(item));

// 처리해야 할 코드가 많은 경우 {} 사용
stream.forEach(student -> {});

// 정렬된 결과가 필요하다면
List<String> sortedList = stream2.sorted().collect(Collectors.toList());
```

- 타입 바꾸기

```java
// String → list 로 타입 바꿔서 담기
strList.stream().distinct().collect(Collectors.toList()).forEach(System.out::println);
```

- 특정 범위 정수를 스트림으로 생성

```java
// 0 ~ 9 생성
IntStream.range(0, 10).forEach(i -> System.out.print(i + " "));

// 0 ~ 10 생성
IntStream.rangeClosed(0, 10).forEach(i -> System.out.println(i + " "));
```

### 2. 스트림 연산

- 중간 연산 : 연산 결과가 스트림인 연산 (연속해서 중간 연산 가능)
    - 필터링, 정렬, 그룹핑
    
    ```java
    // skip(숫자). limit(숫자) : skip 위치부터 limit 양만큼 스트림 자르기
    stream1.skip(2).forEach(System.out::println);
    stream2.skip(2).limit(3).forEach(System.out::println);
    ```
    
- 최종 연산 : 연산 결과가 스트림이 아닌 연산 (스트림의 요소를 소모하므로 단 한번만 가능 → 최종 연산 후에는 스트림 닫힘)
    - 합계, 평균, 카운트, 최소값, 최대값
    - forEach(), 통계 - count(), sum(), average(), max(), min()
        
        ```java
        IntStream stream = IntStream.rangeClosed(1, 10);
        // 짝수의 개수 출력
        long count = stream.filter(num -> num % 2 == 0).count();
            
        // 짝수 합계
        stream = IntStream.rangeClosed(1, 10);
        long sum = stream.filter(num -> num % 2 == 0).sum();
            
        // 전체 합계
        IntStream.rangeClosed(1, 10).sum();
        ```
        
    - 평균, 최대, 최소, 첫번째 값
        
        ```
        💡 Optional 클래스
        
          - 리턴타입 : Optional<T>, OptionalInt, OptionalDouble, OptionalLong
          - 최종 연산의 결과를 Optional 객체에 담아서 반환 → null을 체크하기 위한 if 문 사용 안 함
          - 리턴 값이 널인지 아닌지 판단하는 코드 사용 → NullPointerException 발생 막기 위해
        ```
        
        ```java
        import java.util.Optional;
        
        Optional<String> optional = Optional.of("abcde");
        System.out.println(optional.get()); //
        System.out.println(optional.isPresent());
        
        // 전체 평균
        IntStream.rangeClosed(1, 10).average(); // OptionalDouble[5.5]
        
        // 최대값
        IntStream.rangeClosed(1, 10).max(); // OptionalInt[10]
        
        // 최소값
        IntStream.rangeClosed(1, 10).min(); // OptionalInt[1]
        
        // 첫번째 값
        IntStream.rangeClosed(1, 10).findFirst(); // OptionalInt[1]
        ```
        
    - collect()
        - 리스트 변환
        
        ```java
        Stream<Student> stream = Stream.of(
        	new Student("홍길동", 90, 80),
        	new Student("송중기", 85, 70),
        	new Student("김지원", 92, 81),
        	new Student("정우성", 88, 87),
        	new Student("송혜교", 68, 70)
        );
        
        // 수학점수 모아서 리스트로 반환
        List<Integer> mathList = stream.map(Student::getMath).collect(Collectors.toList());
        
        ```
        
        - 문자열 대문자로 변경 후 리스트 변환
        
        ```java
        Stream<String> stream2 = Stream.of(
        	"abc",
        	"def",
        	"apple",
        	"melon",
        );
        
        // 스트림 문자열을 대문자로 변경한 후 리스트로 돌려받기
        List<String> list = stream2.map(String::toUpperCase).collect(Collectors.toList());
        ```
        

### 3. 스트림 메서드

- distinct() : 스트림의 중복 요소 제거

```java
IntStream intStream = IntStream.of(1, 2, 2, 3, 3, 3, 4, 5, 5, 6);
intStream.distinct().forEach(System.out::print);
// 123456
```

- filter() : 조건에 맞지 않는 요소 제외

```java
IntStream intStream2 = IntStream.of(15, 16, 17, 18, 19);

intStream2.filter(i -> i % 2 != 0).forEach(System.out::print);
// 151719
```

### 4. map()

: 스트림의 요소에 저장된 값 중에서 원하는 필드만 추출하거나 특정 형태로 변환하는 경우 사용

- 파일의 스트림에서 이름 추출한 후 출력

```java
// Stream<File> stream = list.stream();
Stream<File> stream1 = Stream.of(new File("Ex1.java"),new File("Ex2"),new File("Ex3.bak"));

stream1.map(f -> f.getName()).forEach(f -> System.out.println(f));
stream1.map(File::getName).forEach(System.out::println);

stream1
	.map(File::getName)
	.filter(s -> s.lastIndexOf(".") != -1) // 확장자 없는 파일 제거
	.peek(s -> System.out.printf("fileName = %s\n", s)) // 필터링 결과 중간 확인
	.map(s -> s.substring(s.lastIndexOf(".") + 1)) // 확장자 모으기
	.peek(s -> System.out.printf("ext = %s\n", s)) // 필터링 결과 중간 확인
	.distinct() // 확장자 중복 제거
	.forEach(System.out::println); // 최종 확인
	
[txt, java, bak]
fileName = Ex1.java
ext = java
java
fileName = Ex3.bak
ext = bak
bak
```

- 문자열 추출

```java
Stream<String> stream2 = Stream.of("바둑","바나나","포도","딸기","바질","강아지","고양이");

// '바'로 시작하는 문자열 추출 : filter(), forEach()
stream2.filter(s -> s.startsWith("바")).forEach(System.out::println);
stream2.filter(s -> s.indexOf("바") >= 0).forEach(System.out::println);

바둑
바나나
바질
```

- peek : 조회 - 연산과 연산 사이에 올바르게 처리되었는지 확인
    - forEach 는 최종연산이기 때문에 스트림이 소모됨 → 확인용으로 peek 사용