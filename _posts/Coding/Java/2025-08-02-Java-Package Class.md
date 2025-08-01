---
title: "[Java] 기본 클래스"
date: 2025-08-02 08:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

## 자바 기본 클래스
: java.lang.* : 기본 패키지 (import 구문 없이 사용 가능)

### 1. 자바 클래스 구문

```java
// package 구문
package pack.file;

// import 구문 : 다른 패키지에 있는 클래스 사용 시 추가
// 자바 제공 클래스 패키지
import java.time.LocalDate;
import java.util.Date;

// util 밑의 클래스 전부 포함
import java.util.*;

// java.lang 패키지는 기본 import 상태

// 클래스 선언
public class Book {
}
```

### 2. Object 클래스

: java.lang.Object 모든 클래스의 부모 (조상)

- equals() : 두 인스턴스가 동일한지 여부 반환
    - Object에서 넘겨 받을 시 주소값 비교 boolean 값 반환 ('==' 과 같은 역할)
    - 값 비교(논리 비교) 시 재정의하여 사용
    - String, Integer 클래스 : 재정의 되어 있음
    
    ```java
    // equals() : 주소비교, toString()
    // String 으로 변환해서 equals() 사용
    // 1. 생성자로 변환
    String str1 = new String("abc");
    String str2 = new String("abc");
    
    // 2. 메서드로 변환
    String str1 = "abc".toString();
    String str2 = "abc".toString();
    
    // str1 == str2 → 주소 값 비교
    // str1.equals(str2) → String 클래스의 메서드 사용, 문자열 값 비교
    
    Integer i1 = new Integer(100);
    Integer i2 = new Integer(100);
    
    // i1 == i2 → 주소 값 비교
    // i1.equals(i2) → Integer 클래스의 메서드 사용, 정수 값 비교
    ```
    
- toString() : 객체 정보를 문자열로 반환
- 재정의 하여 값 비교, 출력에 사용

<div style="display: flex; justify-content: center; gap: 10px;">
    <img src="/assets/img/Coding/Java/기본 클래스/Untitled.png" align="center" alt="package1">
    <img src="/assets/img/Coding/Java/기본 클래스/Untitled 1.png" align="center" alt="package2">
</div>

- hashCode() : 메모리 위치 값 반환

```java
hashCode = hash(key);
// 객체의 해시코드 값(메모리 위치 값) 반환
```

### 3. String 클래스

: java.lang.String 문자열 클래스

- 변경 불가능(immutable)한 클래스 (final)

```java
// String 인스턴스 생성
String str1 = new String("abc"); // 생성자의 매개변수로 문자열 생성
String str2 = "abc"; // 문자열 상수를 가리키는 방식 (저장 방식이 다름)
// str1 == str2 → 주소 값 다름

// char[] chars = { 'a', 'b', 'c' }; 배열형태로 저장
```

```
💡 String 클래스 : 내부 문자열 변경 x (변경 시 메모리 낭비 문제 발생) → StringBuffer, StringBuilder 클래스 사용 : 내부에 변경 가능한 char[] 변수 존재 (배열 확장으로 추가 메모리 낭비 x)
```

- StringBuffer : mutable (변경 가능한) 클래스, thread - safe
    - thread(여러 작업)이 동시에 문자열을 변경하려 할 때 문자열이 안전하게 변경되도록 보장
- StringBuilder : mutable (변경 가능한) 클래스
    - StringBuffer, StringBuilder 사용
    
    1) append() : 원본 문자열 뒤에 추가
    
    ```java
    StringBuffer sb1 = new StringBuffer("Hello");
    sb1.append(" World");
    sb1.append("123").append(456).append(12.3f);
    System.out.println(sb1); // Hello World12345612.3 
    ```
    
    2) delete() : 지정 위치 문자열 제외
    
    ```java
    sb1.delete(3, 6); → HelWorld12345612.3 
    
    sb1.deleteCharAt(5); → HelWold12345612.3  
    ```
    
    3) insert() : 지정 위치 문자열 삽입
    
    ```java
    sb1.insert(4, " 012345 "); → HelW 012345 old12345612.3
    ```
    
    4) replace() : 지정 위치 문자열 변환
    
    ```java
    sb1.replace(0, 3, "AB"); → ABW 012345 old12345612.3
    ```
    
    5) reverse() : 문자열 반대로 나열
    
    ```java
    StringBuffer sb2 = new StringBuffer("0123456789");
    sb2.reverse() → 9876543210
    ```
    
- String 클래스 메서드
    
    1) charAt() : 인덱스 위치 문자 반환
    
    ```java
    chatAt(x) : x번 위치 문자 반환
    ex) str1.charAt(0) → a
    ```
    
    2) concat() : 두 문자열 연결
    
    ```java
    문자열1.concat(문자열2)
    
    ex) str1.concat("def") → abcdef
    // 문자열 변경 x (final) → 새 문자열 생성
    ```
    
    3) compareTo() : 0, -1, 1 리턴
    
                         문자열과 사전 순서로 비교
    
    * 문자는 코드(유니코드 utf-8)로 변환
    
       ex) A:65, B:66..., a:97
    
    ```java
    기준값.compareTo(비교할값)
    기준값 = 비교할값 → 0
    기준값 > 비교할값 → -1
    기준값 < 비교할값 → 1
    ex) "a".compareTo("b") → -1
    ```
    
    4) contains() : 지정된 문자열이 포함되었는지 검사
    
    ```java
    전체문자열.contains(확인할문자열) → true / false
    ```
    
    5) endswith() : 지정된 문자열로 끝나는지 검사
    
    6) startsWith() : 지정된 문자열로 시작하는지 검사
    
    ```java
    전체문자열.endswith(확인할문자열)
    전체문자열.startsWith(확인할문자열)
    → true / false
    
    ex) "Hello.txt".endsWith("txt") // 확장자 확인
    ```
    
    7) equals() : 두 문자열이 동일한지 비교 (대소문자 구별)
    
    8) equalsIgnoreCase() : 두 문자열이 동일한지 비교 (대소문자 구별 x)
    
    ```java
    str1.equalsIgnoreCase("ABC") → true
    str1.equals("ABC") → false
    ```
    
    9) indexOf() : 주어진 문자가 문자열에 존재하는지 확인하여 위치 반환
    
    ```java
    있다 → 위치인덱스
    없다 → -1
    str1.indexOf("s") → -1
    str1.indexOf("a") → 0
    // 1번을 시작위치로 지정하여 찾기
    str1.indexOf("c", 1) → 2
    ```
    
    10) lastIndexOf() : 지정된 문자를 문자열의 오른쪽 끝에서 부터 찾아서 위치 반환
    
    11) IndexOf() : 지정된 문자를 문자열의 왼쪽부터 찾아 반환
    
    ```java
    String str3 = "java.lang.String";
    str4.lastIndexOf(".") → 9
    str4.indexOf(".") → 4
    ```
    
    12) length() : 문자열 길이 반환
    
    ```java
    str1.length() → 3
    ```
    
    13) replace() : 문자 변환
    
    14) replaceAll() : 동일한 문자 전체 변환
    
    15) replaceFirst() : 처음 찾은 문자만 변환
    
    ```java
    전체문자열.replace("찾을 문자열", "변경할 문자열")
    ```
    
    16) split() : 기준을 경계로 잘라서 반환
    
    ```java
    String str4 = "dog,cat,bear";
    strArr = str4.split(",");
    for (String string : strArr) {
    	System.out.println(string);
    }
    // dog / cat / bear
    
    // 문자열 전체를 지정된 숫자로 자름
    str4.split(",", 2)
    for (String string : strArr) {
    	System.out.println(string);
    }
    // dog / cat,bear
    ```
    
    17) substring() : 시작위치부터 끝위치까지 포함된 문자열 추출
    
    ```java
    전체문자열.substring(시작위치, 끝위치)
    ```
    
    18) toLowerCase() : 모든 문자를 소문자로 반환
    
    19) toUpperCase() : 모든 문자를 대문자로 반환
    
    ```java
    str1.toLowerCase() → abc
    str1.toUpperCase() → ABC
    ```
    
    20) toString() : 문자열 반환
    
    21) trim() : 앞, 뒤 공백 제거
    
    * 공백 하나 = 문자 하나
    
    ```java
    // "Hello" != "Hello " - 비교 시 공백 제거하고 비교해야 같게 나옴
    공백제거할문자열.trim()
    ```
    
    22) valueOf() : 지정된 값을 문자열로 변환하여 반환
    
    ```java
    // int, double, float, long, char → String
    String.valueOf(변환할값)
    ```
    
    - 다양한 형변환
    
    ```java
    String.valueOf(10) ↔ Integer.parseInt("10") or Integer.valueOf("10")
    String.valueOf(10.3) ↔ Double.parseDouble("10.3") or Double.valueOf("10.3")
    String.valueOf(10.3f) ↔ Float.parseFloat("10.3f") or Float.valueOf("10.3f")
    String.valueOf(10L) ↔ Long.parseLong("10L") or Long.valueOf("10L")
    ```
    

### 4. Math 클래스

: 기본적인 수학 계산에 유용한 메소드로 구성된 클래스

```java
// Math 클래스는 모든 요소가 static
// Math. 생략하고 메소드만 사용 가능
import static java.lang.Math.*;
```

1) PI, E

```java
// PI(원주율) : 3.141592653589793
System.out.println(Math.PI);

// E(자연로그) : 2.718281828459045
System.out.println(Math.E);
```

2) ceil() : 올림

3) floor() : 버림

4) round() : 반올림 - long or int 리턴

5) rint() : 반올림 - double 리턴

```java
// 실수형 변환 
System.out.println(Math.ceil(3.4)); // 4.0
System.out.println(Math.floor(3.4)); // 3.0
System.out.println(Math.round(3.4)); // 3
System.out.println(Math.rint(3.4)); // 3.000000
```

6) random() : 0.0 ≤ ~ < 1.0 의 무작위 숫자 반환

```java
System.out.println(Math.random()); // 0.7776468727475659
```

### 5. Date 클래스

- 현재 시스템 날짜 출력
    
    ```java
    import java.util.Date;
    
    Date date = new Date();
    System.out.println(date);
    // Thu Apr 04 09:36:01 KST 2024
    ```
    
- 다른 형태 출력
    - yyyy : 년도 4자리 / MM : 월 2자리 / dd : 일자 2자리 / a(am/pm) / HH : 시 / mm : 분
    
    ```java
    // java.text.SimpleDateFormat : 2024/04/04
    SimpleDateFormat sDate = new SimpleDateFormat("yyyy/MM/dd");
    System.out.println(sDate.format(date));
    
    // java.time.LocalDateTime : 2024-04-04T09:36:01.131338300
    LocalDateTime dateTime = LocalDateTime.now();
    System.out.println(dateTime);
    
    // lastModified() : 1970-1-1 시작으로 현재날짜까지의 시간을 밀리세컨드로 돌려줌
    // Date date2 = new Date(date.lastModified());
    // 1708498371715 → 2024/02/21
    ```
    
- Calender

```java
import java.util.Calendar;
   
Calendar calendar = Calendar.getInstance(); // new (X)

// 년도
calendar.get(Calendar.YEAR);

// 월(0~11) : 0 = 1월 
calendar.get(Calendar.MONTH);

// 이 달의 몇 째 주
calendar.get(Calendar.WEEK_OF_MONTH);

// 이 달의 몇 일
calendar.get(Calendar.DATE);

// 이 달의 몇 일
calendar.get(Calendar.DAY_OF_MONTH);

// 이 해의 몇 일
calendar.get(Calendar.DAY_OF_YEAR);

// 시간(0~11)
calendar.get(Calendar.HOUR);

// 시간(0~23)
calendar.get(Calendar.HOUR_OF_DAY);

// 분(0~59)
calendar.get(Calendar.MINUTE);

// 초(0~59)
calendar.get(Calendar.SECOND);
```

### 6. time 패키지

: java 1.8 버전 - java.time 패키지 추가 (Date 클래스의 단점 보완)

```java
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

// 오늘 날짜
LocalDate.now(); → 2024-02-22

// 현재 시간 (ISO-8601)
LocalTime.now(); → 15:00:45.443600700

// 윤연 / 평년
LocalDate.isLeapYear() → 윤년이면 true

// 특정 날짜 지정
LocalDate birth = LocalDate.of(1950, 11, 23);
LocalTime birthTime = LocalTime.of(23, 11, 58);

birth.plusDays(1); → 1950-11-24
birth.minusDays(3); → 1950-11-20

// getHour() : 시간 반환
// getMinute() : 분 반환
// getSecond() : 초 반환
// getYear() : 연도 반환
// getMonth() : 월 영문 반환
// getMonth().getValue() : 월 숫자 반환
// getDayOfMonth() : 날짜 반환
```

### 7. Wrapper 클래스

: 기본 자료형을 객체로 사용하기 위한 클래스

- 기본형 : int, long, short, byte, float, double, boolean, char
- 참조형 : String, Array 등 기본형을 제외한 타입

| 기본형 | 객체형 |
| --- | --- |
| byte | java.lang.Byte |
| short | java.lang.Short |
| char | java.lang.Character |
| int | java.lang.Integer |
| long | java.lang.Long |
| float | java.lang.Float |
| double | java.lang.Double |
| boolean | java.lang.Boolean |
- ex) int → Integer (객체 타입으로 변경)

<img src="/assets/img/Coding/Java/기본 클래스/Untitled 2.png" align="center" alt="package2">

### 8. Scanner 클래스

: 화면, 파일, 문자열과 같은 입력소스로부터 문자 데이터 읽어오기

- System.in : 키보드
- System.out : 화면
- System.exit : 강제 종료 코드 (while 문 빠져나오기, …)

```java
import java.util.Scanner;

public static void main(String[] args) {

Scanner sc = new Scanner(System.in);
System.out.print("값 입력 : ");
int 변수명 = sc.nextInt();
System.out.printf("입력한 값 %d", 변수명);
}
```

### 9. StringTokenizer 클래스

: 긴 문자열을 지정된 구분자를 기준으로 토큰이라는 여러 개의 문자열로 분리 (구분자는 단 하나의 문자만 사용 가능)

```java
StringTokenizer 변수명 = new StringTokenizer(문자열, 구분자, 구분자 출력여부));
```

```java
import java.util.StringTokenizer;

public static void main(String[] args) {
	String str = "Hello ! World";
	// 기준을 주지 않을 경우 공백 한 번 기준으로 잘라 줌
	StringTokenizer st = new StringTokenizer(str);
	while (st.hasMoreTokens()) {
		System.out.println(st.nextToken());
	}
	// Hello
	// !
	// World
	
	// "!" 를 기준으로 자르며, ! 도 돌려받음
	StringTokenizer st2 = new StringTokenizer(str, "!", true);
	while (st2.hasMoreTokens()) {
		System.out.println(st2.nextToken());
	}
	// Hello
	// !
	//  World
}
```