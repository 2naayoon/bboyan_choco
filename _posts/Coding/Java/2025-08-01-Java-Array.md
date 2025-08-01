---
title: "[Java] 배열"
date: 2025-08-01 13:00:00 +09:00
categories: [Coding, Java]
tags:
  - Java
---

### 1. Array 배열

: 같은 타입의 변수를 하나의 묶음으로 처리 (반복문과 사용)

```java
타입[] 배열명 = new 타입[길이]; // 0 ~ 길이-1 까지 생성
타입 배열명[] = new 타입[길이];

// 초기갑 지정
타입 배열명[] = new 타입[] {값1, 값2, ... };

// 초기값 변경
배열명[0] = 값;
배열명[1] = 값;
      .
      .
      .
```

- [길이] 만큼의 방 배열
- 배열 선언, 생성하면 초기화까지 일어남
- `[ ]` = 배열
- new : 자동 초기화

```java
int[] arr1 = new int[5]; // 0 (byte, short, int, long 는 0으로 초기화)
float arr2[] = new float[10]; // 0.0 (float, double)
boolean arr3[] = new boolean[2]; // false
char arr4[] = new char[2]; // 공백

System.out.println(arr1); // [I@7a81197d : 메모리 주소값
System.out.println(arr1[0]); // 배열 값 확인
```

- 배열의 길이 확인

```java
배열명.length
```

- for 문으로 배열 확인

```java
int score[] = {90,80,70,60,50}

for (int i = 0; i < score.length; i++) {
	System.out.println(score[i]);
}
```

- 향상된 for 문으로 배열 확인

```java
for (배열요소가 담길 변수 지정 : 배열명){}

for (int i : score) {
	System.out.println(i);
}
```

- 배열 사용 시 유용한 메서드
    - toString( ) : 결과 값을 [] 안에 찍어줌 (for문 대신 확인할 때 사용)
    
    ```java
    String strArr[] = { "abc", "def", "hij", "apple" };
    System.out.println(Arrays.toString(strArr));
    // [abc, def, hij, apple]
    ```
    
    - toCharArray( ) : 캐릭터 배열로 바꾸는 메서드
    
    ```java
    String 변수명 = "ABCED";
    char[] 배열명 = 변수명.toCharArray();
    ```
    

### 2. 배열 복사

- 배열 사이즈 변경
    - 처음에 생성된 크기 변경은 불가능
    - 더 큰 배열을 생성 → 기존 배열을 새로운 배열에 복사
    
    1) for문
    
    ```java
    // 기존 길이의 2배 배열 생성
    타입 대상배열[] = new 타입[복사할배열.length * 2];
    // 새 배열에 기존값 담아주기
    for (int i = 0; i < 복사할배열.length; i++) {
    	대상배열[i] = 복사할배열[i];
    }
    ```
    
    2) arraycopy( ) 메서드 이용
    
    ```java
    // 기존 길이의 2배 배열 생성
    타입 대상배열[] = new 타입[복사할배열.length * 2];
    // 새 배열에 기존 값 복사
    System.arraycopy(복사할배열, 복사할위치, 대상배열, 붙여넣을 위치, 복사할 요소 개수);
    ```
    

### 3. 2차원 배열

: 2열로 생성

```java
타입 변수명[행][열] = {{값1, 값2}, {값3, 값4}};
```

- 2차원 배열 확인

```java
int score3[][] = { { 78, 98 }, { 88, 68 } };
  
// 행 길이      
for (int i = 0; i < score3.length; i++) {
// 열 길이
	for (int j = 0; j < score3[i].length; j++) {
		System.out.print(score3[i][j] + "\t");
	}
}

for (int[] arr : score3) {
	for (int num : arr) {
		System.out.print(num + "\t");
	}
}

// 78      98
// 88      68
```

<img src="/assets/img/Coding/Java/배열/Untitled.png" align="center" alt="Array1">


### 4. 알고리즘

: 선택정렬, 버블정렬, 힙정렬

- 선택정렬

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/Java/배열/Selection-Sort-Animation.gif" align="center" alt="Array2">
  <img src="https://velog.velcdn.com/images/dodokyumin/post/152ddcfb-60bf-476d-b7ba-9fe9cecdb71f/image.png" align="center" alt="Array3">
</div>
<figcaption align="center" style="color:silver">이미지 출처 : https://ko.wikipedia.org/wiki/선택_정렬</figcaption>


```java
int arr[] = { 25, 85, 55, 65, 5, 3 };

int i = 0, j = 0;
for (i = 0; i < arr.length; i++) {
	int min_idx = i;
	// 최솟값을 갖고있는 인덱스 찾기
	for (j = 1; j < arr.length; j++) {
		if (arr[j] < arr[min_idx]) {
			min_idx = j;
		}
	}
	System.out.println(Arrays.toString(arr));
	int temp = arr[i];
	arr[i] = arr[min_idx];
	arr[min_idx] = temp;
}
```

<img src="/assets/img/Coding/Java/배열/Untitled 1.png" align="center" alt="Array4">

- sort (오름차순) : 자바 제공 정렬 메서드

```java
Arrays.sort(배열명);
```

### 5. 고정배열, 가변배열

- 고정배열

```java
int[][] score = new int[5][3];
```

- 가변배열

```java
// 처음 인덱스 길이 지정
int[][] score2 = new int[3][];
// 각 인덱스 길이 배열 선언
score2[0] = new int[3];
score2[1] = new int[4];
score2[2] = new int[5];

int[][] score3 = {
	{ 100, 100, 95 },
	{ 85, 78 },
	{ 99, 86, 35 },
	{ 15, 35, 45, 55, 65 },
};
```

### 6. ArrayList 클래스

: 객체 배열을 관리할 수 있는 멤버변수와 메서드 제공

- initial capacity(초기 기본용량) : 10
- <> 안에 담을 데이터의 타입 결정

```java
import java.util.ArrayList;

ArrayList<타입> 배열명 = new ArrayList<>(용량);
// <E(자료형)> : 제네릭(generic) 자료형 
```

- 사용자에게 입력 받아 ArrayList 구현

<img src="/assets/img/Coding/Java/배열/Untitled 2.png" align="center" alt="Array5">

- ArrayList → 배열

```java
Object[] arr = list.toArray();
for (Object object : arr) {
	System.out.println(object);
}
```

- 배열 →  ArrayList

```java
int[] arr2 = { 3, 5, 6, 7, 9 };
Arrays.asList(arr2);
List<int[]> list2 = Arrays.asList(arr2);
```

- ArrayList 클래스 메서드
    
    1) add() : 데이터 요소 하나 추가
    
    ```java
    ArrayList<String> list = new ArrayList<>();
    list.add("a");
    list.add("b");
    list.add("c");
    ```
    
    2) size() : ArrayList 에 저장된 객체 개수
    
    ```java
    // 배열 : arr.length()
    list.size(); → 3
    ```
    
    3) get() : 지정된 위치에 있는 객체 반환
    
    ```java
    // 배열 : arr[2]
    list.get(2); → c
    ```
    
    4) indexOf() : 지정된 객체가 저장된 위치 반환
    
    ```java
    // list = {1,2,3}
    // 있으면 위치 반환
    list.indexOf("c"); → 2
    // 없으면 -1
    list.indexOf("d"); → -1
    ```
    
    5) remove() : 지정된 객체 제거
    
    ```java
    list.remove(index or 객체);
    System.out.println(list.remove("b")); → true / false
    System.out.println(list.remove(1));→ b (제거되는 객체 출력)
    ```
    
    6) isEmpty() : ArrayList가 비어 있는지 확인
    
    ```java
    list.isEmpty(); → true / false
    ```
    
    7) set() : 특정 위치에 객체 추가 (중간대체)
    
    ```java
    list.set(위치, 대체할객체);
    ```
    
    8) sort() : 정렬
    
    ```java
    // 내림차순
    list.sort(Comparator.reverseOrder());
    
    // 오름차순
    list.sort(Comparator.naturalOrder());
    ```