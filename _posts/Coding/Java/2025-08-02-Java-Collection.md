---
title: "[Java] 컬렉션 프레임워크"
date: 2025-08-02 10:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### # 자바의 자료구조 Collection, Map

```
💡 컬렉션 프레임워크 : 데이터 군을 저장하는 클래스들을 표준화한 설계

  1. Collection
    - Collection 인터페이스 상속 : List, Set
      - List (Interface)
        : 순서가 있는 데이터의 집합 (데이터의 중복 허용)
        : 고정크기 → 크기 변경이 필요하다면 내부적으로 알아서 처리해줌
          (배열 : 크기 변경 시 다른 배열 생성 후 옮겨야 함)
  2. Map
```
<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled.png" align="center" alt="col1">
<figcaption align="center" style="color:silver">출처: https://techvidvan.com/tutorials/java-collection-framework/</figcaption>

| Collection | List | ArrayList, LinkedList, Vector, Stack |
| --- | --- | --- |
|  | Set | HashSet, LinkedHashSet, TreeSet |
|  | Queue | priorityQueue, ArrayDeque |
| Map |  | HashMap, LinkedHashMap, Hashtable, TreeMap |

### 1. Generics 제네릭

: 여러 참조 자료형이 쓰일 수 있는 곳에 특정한 자료형을 지정하지 않고, 클래스나 메서드를 정의한 후 사용하는 시점에 자료형을 지정하는 방식

- 타입 안정성 제공 / 타입체크와 형변환 생략 가능하므로 코드 간결
- T, E, K, V 등 : 자료형 매개변수 (대문자 : 객체 타입이 들어와야 한다)
- T[] : 배열이 객체 타입이라는 의미
- 제네릭 클래스 정의

```java
public class 클래스명<T> {
	private T 변수명;
	
	public void method1(T 매개변수명){}
	
	publice T method2(){
	return null;
	}
}
```

- 다이아몬드 연산자 <> : 생성자에 사용되는 자료형은 생략 가능

```java
ArrayList<T> list = new ArrayList<>();
```

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 1.png" align="center" alt="col2">
  <img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 2.png" align="center" alt="col3">
</div>

<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 3.png" align="center" alt="col4">
<figcaption align="center" style="color:silver">제네릭 사용 안할시 강제형변환 필요</figcaption>

- <T extends 클래스> : 제한된 제네릭 클래스
    - 특정 타입의 자손들만 대입
- <? super T>
    - 특정 타입(T)과 그 타입의 부모들만 대입
    - T, Object(모든 클래스의 조상) 클래스

### 2. List 인터페이스

- ArrayList
    
    * 배열 6. ArrayList 참고
    
- LinkedList

: ArrayList, Vector 비순차적인 데이터의 추가 또는 삭제에 시간이 많이 걸리는 부분 보완

```java
import java.util.LinkedList;
import java.util.List;

List<String> list = new LinkedList<>();
```

```
💡 ArrayList 와 LinkedList
  - 순차적으로 추가, 삭제 시 ArrayList 가 LinkedList 보다 빠르다
  - 중간 추가, 삭제 시 LinkedList 가 ArrayList 보다 빠르다
```

- 데이터 처리 시간 확인 메서드

```java
 // 순차적 추가 시간 확인
  public static long add1(List<String> list) {
    long start = System.currentTimeMillis(); // 현재 시간을 millisecond 단위로 돌려받음
    for (int i = 0; i < 1000000; i++) {
      list.add(i + ""); // 리스트에 순차적 추가
    }
    long end = System.currentTimeMillis(); // 끝나는 시간
    return end - start; // 걸린 시간
  }
  
  // 중간 추가 시간 확인
  public static long add2(List<String> list) {
    long start = System.currentTimeMillis();
    for (int i = 0; i < 10000; i++) {
      list.add(500, "X"); // 중간에 추가
    }
    long end = System.currentTimeMillis();
    return end - start;
  }

  // 순차적 삭제 시간 확인
  public static long remove1(List<String> list) {
    long start = System.currentTimeMillis();
    for (int i = list.size() - 1; i >= 0; i--) {
      list.remove(i);
    }
    long end = System.currentTimeMillis();
    return end - start;
  }

  // 중간 삭제 시간 확인
  public static long remove2(List<String> list) {
    long start = System.currentTimeMillis();
    for (int i = 0; i < 10000; i++) {
      list.remove(i);
    }
    long end = System.currentTimeMillis();
    return end - start;
  }
```

- 스택(Stack)
    - LIFO(Last In First Out) - 수식계산, 수식괄호검사, undo/redo, 웹 브라우저 뒤로/앞으로
    
    ```java
    import java.util.Stack;
    
    Stack<String> stack = new Stack<>();
    ```
    
    - push()
    
    ```java
    stack.push("0");
    stack.push("1");
    stack.push("2");
    ```
    
    - pop()
    
    ```java
    while (!stack.isEmpty()) {
    	System.out.println(stack.pop());
    }
    // 2
    // 1
    // 0
    ```
<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 4.png" align="center" alt="col5">
<figcaption align="center" style="color:silver">출처 : https://velog.io/@gptlr9982/Stack-Queue-2ab98qgd</figcaption>

- 큐(Queue)
    - FIFO(First In First Out) - 최근사용문서, 인쇄작업 대기목록, 버퍼
    
    ```java
    import java.util.LinkedList;
    import java.util.Queue;
    
    Queue<String> queue = new LinkedList<>();
    ```
    
    - offer()
    
    ```java
    queue.offer("사과");
    queue.offer("딸기");
    queue.offer("배");
    ```
    
    - poll()
    
    ```java
    while (!queue.isEmpty()) {
    	System.out.println(queue.poll());
    }
    // 사과
    // 딸기
    // 배
    ```

<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 5.png" align="center" alt="col6">
<figcaption align="center" style="color:silver">출처 : https://velog.io/@gptlr9982/Stack-Queue-2ab98qgd</figcaption>

### 3. Set 인터페이스

: 중복을 허용하지 않음, 저장 순서가 유지되지 않음

- HashSet : 중복 허용 x
    
    ```java
    import java.util.HashSet;
    import java.util.Set;
    
    Set<Integer> set = new HashSet<>();
    
    set.add(1);
    set.add(11);
    set.add(1);
    System.out.println(set); // [1, 12, 13] 
    
    // 배열 전환
    Object[] arr = set.toArray();
    System.out.println(Arrays.toString(arr)); // [1, 12, 13]
    ```
    
    - 중복 판별
        - 클래스에서 중복 확인 시 equals(), hashCode() 오버라이딩으로 중복 판별 코드를 개별 작성해야함 → Set 클래스 활용
    
    ```java
    // 생성자에 담기
    ArrayList<Integer> list = new ArrayList<>();
    list.add(35);
    list.add(45);
    list.add(55);
    list.add(55);
    
    Set<Integer> set = new HashSet<>(list);
    System.out.println(set); // [35, 55, 45]  
    
    // 클래스 타입 지정
    Set<Member> set2 = new HashSet<>();
    Member member = new Member();
    member.setId("hong123");
    member.setName("홍길동");
    set3.add(member);
        
    member = new Member();
    member.setId("hong123");
    member.setName("홍길동");
    set3.add(member);
        
    for (Member mem : set3) {
    	System.out.println(mem);
    }
    // Member [id=hong123, name=홍길동]
    ```
    
- TreeSet : 중복 허용 x, 출력 결과 값 정렬
    - 이진검색트리라는 자료구조의 형태로 데이터를 저장
    - 모든 노드는 최대 두 개의 자식노드를 가짐
    - 왼쪽 자식 노드의 값은 부모노드의 값보다 작고 오른쪽 노드의 값을 부모 노드의 값보다 커야 한다.
    - 노드의 추가,삭제에 시간이 걸린다.
    - 검색과 정렬에 유리
    
    ```java
    import java.util.TreeSet;
    
    TreeSet<Integer> treeSet = new TreeSet<>();
    
    treeSet.add("고양이");
    treeSet.add("사자");
    treeSet.add("타조");
    treeSet.add("송아지");
    treeSet.add("악어");
    
    // 문자열 정렬(a=>z, ㄱ=>ㅎ)
    // 영어(공백,숫자,대문자,소문자 순으로 정렬)
    // [고양이, 다람쥐, 사자, 송아지, 악어]
    
    // 가장 낮은 값
    treeSet.first(); → 고양이
    
    // 가장 높은 값
    treeSet.last(); → 악어
    
    //사자보다 작은 값(전체)
    treeSet.headSet("사자"); → [고양이, 다람쥐]
    
    //사자보다 큰 값(전체)
    treeSet.tailSet("사자"); → [사자, 송아지, 악어]
    
    // 사자보다 작은 값
    treeSet.lower("사자"); → 다람쥐
    
    // 사자보다 큰 값
    treeSet.higher("사자"); → 송아지
    
    while (!treeSet.isEmpty()) {
    	// 내림차순으로 객체 가져오기
    	System.out.println(treeSet.pollLast());
    }
    // 고양이
    // 다람쥐
    // 사자
    // 송아지
    // 악어
    ```
    

```
💡 이진검색(탐색)트리 
    : 정렬, 검색, 범위검색에 높은 성능을 보이는 자료구조
    - 특정 값을 찾기 위해 한 노드와 비교해 작은 값이면 왼쪽 자식 노드 방향, 그렇지 않으면 오른쪽 자식 노드 방향으로 이동
    - 왼쪽 → 부모 → 오른쪽 순회 : 오름차순
    - 오른쪽 → 부모 → 왼쪽 : 내림차순
```

<img src="/assets/img/Coding/Java/컬렉션 프레임워크/Untitled 6.png" align="center" alt="col7">

### 4. Map 인터페이스

: key, value 를 하나의 쌍으로 묶어서 저장

- key는 중복불가, value는 중복 가능
- 내부 인터페이스 Map.Entry
- 구현클래스 : Hashtable, HashMap, TreeMap 등

```java
import java.util.HashMap;
import java.util.Map;

Map<String, String> map = new HashMap<>();
```

- 메서드
    - put() : 요소 추가
    
    ```java
    map.put(key, value);
    
    map.put("id1", "홍길동");
    map.put("id2", "박보검");
    map.put("id3", "송중기");
    map.put("id4", "현빈");
    ```
    
    - get() : key 에 해당하는 value 가져오기
    
    ```java
    map.get("id1"); → 홍길동
    ```
    
    - containsKey() : key 존재여부 반환
    - containsValue() : value 존재여부 반환
    
    ```java
    map.containsKey("id5") → false
    map.containsValue("송중기") → true
    ```
    
    - size() : map 요소 크기
    
    ```java
    map.size() → 4
    ```
    
    - remove() : map 요소 삭제
    
    ```java
    map.remove(key);
    ```
    
    - keySet() : key 값 모두 가져오기
    - entrySet() : key, value 값 모두 가져오기
    - values() : value 값 모두 가져오기
    
    ```java
    Set<String> keys = map.keySet();
    System.out.println(keys);
    // [id1, id2, id3, id4]
    
    Set<Entry<String, String>> entries = map.entrySet();
    System.out.println(entries);
    // [id1=홍길동, id2=박보검, id3=송중기, id4=현빈]
    
    Collection<String> values = map.values();
    System.out.println(values);
    // [홍길동, 박보검, 송중기, 현빈]
    ```
    

### 5. Iterator 인터페이스

- Iterator, Enumeration 인터페이스

: 컬렉션에 저장된 요소를 접근하는 데 사용되는 인터페이스

```java
import java.util.Iterator;
```

- 데이터를 담는 구조에 따라 접근하는 방법이 다르다
    
    ```java
    // list 요소 접근 : list.get()
    for (int i = 0; i < list.size(); i++) {
    	String item = list.get(i);
    }
    
    for (String item : list) {
    }
    
    // set 요소 접근 : 순서의 개념이 없어 get() 불가
    for (String item : set) {
    }
    ```
    
    → Iterator : 컬렉션 요소를 읽어오는 방법 표준화
    
    ```java
    // Map 요소 Iterator 변경
    // 키 값 모두 가져온 후 Iterator 구조로 변경
    Set<String> set = map.keySet();
    Iterator<String> iterator = set.iterator();
    
    while (iterator.hasNext()) {
    	String key = iterator.next();
    	String value = map.get(key);
    	System.out.println(key + ": " + value);
    }
    ```
    

### 6. Collections 클래스

: 컬렉션(List, Set, Map)과 관련된 메소드 제공

- static 요소로 구성
- 동기화, fill(), copy(), sort(), binarySearch() 유용한 메소드 제공
- Collection 인터페이스와는 다름
- 메서드
    
    ```java
    import java.util.ArrayList;
    import java.util.Collections;
    import java.util.Comparator;
    import java.util.List;
    
    List<Integer> list = new ArrayList<>();
    list.add(1);
    list.add(2);
    list.add(3);
    list.add(4);
    list.add(5);
    
    // 오른쪽으로 두 칸씩 이동
    Collections.rotate(list, 2); → [4, 5, 1, 2, 3]
    
    // 자리바꿈
    Collections.swap(list, 0, 2); → [1, 5, 4, 2, 3]
    
    // 내림차순 정렬
    // list.sort(Comparator.reverseOrder());
    Collections.sort(list, Comparator.naturalOrder());
     → [1, 2, 3, 4, 5]
    
    // binarySearch() : 오름차순으로 정렬된 배열에서 
    // key 와 일치하는 index 반환, 못 찾으면 음수로 반환
    Collections.binarySearch(list, 5); → 4
    Collections.binarySearch(list, 6); → -6
    
    // 최대값, 최소값
    Collections.max(list); → 5
    Collections.min(list); → 1
    
    // 리스트를 하나의 값으로 채우기
    Collections.fill(list, 9); → [9, 9, 9, 9, 9]
    ```
    
    * Comparator 인터페이스 : 정렬을 구현하는 인터페이스
    
    * Linear Search : 순차검색 (첫 번째 요소부터 하나씩 검색 / 정렬상관없음)
    
      Binary Search : 이진검색 (정렬(오름차순) 된 상태여야 함)
    

### 7. Arrays 클래스

: 배열을 다루는데 유용한 메소드가 정의되어 있음

- static 요소로 구성

```java
import java.util.Arrays;
```

- 메서드
    - toString()
    
    ```java
    int[] arr = { 3, 2, 1, 0, 4, 5 };
    System.out.println(Arrays.toString(arr));
    // [3, 2, 1, 0, 4, 5]
    ```
    
    - fill() : 배열을 하나의 값으로 채우기
    
    ```java
    int[] arr2 = new int[6];
    Arrays.fill(arr2, 9); → [9, 9, 9, 9, 9, 9]
    ```
    
    - equals() : 배열 요소 비교
    
    ```java
    Arrays.equals(arr, arr2); → false
    ```
    
    - asList() : 배열 → List 구조로 변경
    
    ```java
    List<Integer> list = Arrays.asList(new Integer[] { 1, 2, 3, 4, 5 });
    
    // 배열에 새로 값 추가 시
    // *Error : UnsupportedOperationException 발생 ← 반환된 List 크기는 변경 불가
    
    // 기존 배열 + 새로 추가 방법 사용
    List<Integer> list2 = new ArrayList<>(Arrays.asList(new Integer[] { 1, 2, 3, 4, 5 }));
    list2.add(6);
    ```
    
    ```
    💡 **배열 → 리스트 변환**
        - List<객체타입> list = new ArrayList<>();
        - ArrayList<객체타입> list = new ArrayList<>();
        → list.add(배열 값);
    ```
    
    - sort() : 오름차순 정렬
    
    ```java
    Arrays.sort(arr); → [0, 1, 2, 3, 4, 5]
    
    // 내림차순 정렬
    // int → Integer (객체 타입으로 변경)
    Integer arr3[] = { 0, 1, 2, 3, 4, 5 };
    Arrays.sort(arr3, Comparator.reverseOrder()); → [5, 4, 3, 2, 1, 0]
    ```
    
    - binarySearch() : 오름차순으로 정렬된 배열에서 key 와 일치하는 index 반환, 못 찾으면 음수로 반환
    
    ```java
    Arrays.binarySearch(arr, 2); → 2
    ```