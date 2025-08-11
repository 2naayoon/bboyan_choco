---
title: "[JavaScript] 배열"
date: 2025-08-13 09:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

### 1. Array

- 다양한 타입의 값을 담을 수 있음

```jsx
const cars = ["Saab", "Volvo", "BMW"];
const cars1 = new Array("Saab", "Volvo", "BMW");
const cars2 = [];

const others = ["과일", 1, 3.14, new Date(), 35, {}];
```

### 2. 조회

- for

```jsx
for (let index = 0; index < cars.length; index++) {
  const element = cars[index];
  console.log(element);
}
```

- 객체

```jsx
for (let i in cars) {
  console.log(cars[i]);
}
```

- 향상된 for문

```jsx
for (const car of cars) {
  console.log(car);
}
```

- forEach

```jsx
cars.forEach((car) => {
  console.log(car);
});
```

<img src="/assets/img/Coding/JavaScript/배열/Untitled.png" align="center" alt="ar1">

- index 조회

```jsx
console.log(cars[1]); // Volvo
```

### 3. 메서드

- 추가
    - push() : 뒤에 요소 삽입
    - unshift() : 맨 앞에 요소 삽입
    - splice(삽입위치, 지울개수, 삽입요소) : 지정한 위치 요소 삽입
    
    ```jsx
    const fruits = [];
    
    fruits.push("키위");
    
    fruits.unshift("오렌지");
    
    fruits.splice(1, 0, "두리안");
    ```
    
<img src="/assets/img/Coding/JavaScript/배열/Untitled 1.png" align="center" alt="ar2">


- 삭제
    - pop() : 마지막 요소 삭제
    - shift() : 첫 요소 삭제
    - splice(삭제위치, 지울개수) : 지정한 위치에 있는 요소 삭제
    
    ```jsx
    fruits.pop();
    
    fruits.shift();
    
    fruits.splice(0, 1);
    ```
    
    <img src="/assets/img/Coding/JavaScript/배열/Untitled 2.png" align="center" alt="ar3">
    
- length : 배열 길이
    
    ```jsx
    const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
    
    fruits.length; // 6
    ```
    
- toString() : 배열 요소를 string 으로 변환해서 돌려줌(, 로 구분)
    
    ```jsx
    fruits.toString(); // 사과,두리안,바나나,수박,자두,포도
    ```
    
- join() : 배열 요소를 연결해 하나의 값으로 돌려줌
    
    ```jsx
    fruits.join("-"); // 사과-두리안-바나나-수박-자두-포도
    ```
    
- sort() : 배열 요소 오름차순 정렬 - 문자열만 가능
    
    ```jsx
    fruits.sort(); // 두리안,바나나,사과,수박,자두,포도
    ```
    
    - 숫자 정렬 시 비교 함수 작성 필요
    
    ```jsx
    const numbers = [12, 6, 9, 1, 10, 7];
    
    numbers.sort(); // 1,10,12,6,7,9
    // 내림차순
    numbers.sort((a,b) => b - a);
    // 오름차순
    numbers.sort((a,b) => a - b);
    ```
    
- reverse() : 배열 거꾸로 출력
    
    ```jsx
    fruits.reverse(); // 포도,자두,수박,사과,바나나,두리안
    ```
    
- concat() : 다른 배열과 연결
    
    ```jsx
    fruits.concat("석류"); // 포도,자두,수박,사과,바나나,두리안,석류
    ```
    
- 배열 요소 찾기
    - indexOf() : 앞에서부터 검색 (위치 반환, 못 찾으면 -1)
    - lastIndexOf() : 뒤에서부터 검색 (위치 반환, 못 찾으면 -1)
    - includes() : 배열 요소 존재 확인( true, false)
    
    ```jsx
    const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도", "사과"];
    
    fruits.indexOf("사과"); // 0
    fruits.indexOf("파파야"); // -1
    fruits.lastIndexOf("사과"); // 6
    fruits.includes("파파야"); // false
    ```
    
    - find(함수) - 조건에 만족하는 첫번째 요소 반환
    - findIndex(함수) - 조건에 만족하는 첫번째 요소의 위치
    - findLast(함수)
    - findLastIndex(함수)
    
    ```jsx
    const numbers = [12, 6, 9, 1, 10, 7];
    
    numbers.find((num) => num > 5); // 12
    numbers.findIndex((num) => num > 5); // 0
    ```
    
- ...(spread) : 배열에 있는 요소를 하나씩 꺼내서 새로운 배열로 돌려줌
    - 배열 깊은 복사 (원본하고는 상관없는 새 배열)
    
    ```jsx
    let shallowCopy = [...fruits];
    console.log(shallowCopy);
    // 포도,자두,수박,사과,바나나,두리안
    
    const arr1 = ["1월", "2월", "3월"];
    const arr2 = ["4월", "5월", "6월"];
    const arr3 = ["7월", "8월", "9월"];
    const months = [...arr1, ...arr2, ...arr3];
    console.log(months);
    // 1월,2월,3월,4월,5월,6월,7월,8월,9월
    ```
    
- 배열 얕은 복사 (원본하고 상관있음)
    
    ```jsx
    const fruits2 = fruits;
    
    fruits.push("고구마");
    console.log(fruits); // 포도,자두,수박,사과,바나나,두리안,고구마
    console.log(fruits2); // 포도,자두,수박,사과,바나나,두리안,고구마
    ```
    
- fill() : 동일한 값으로 배열 생성
    
    ```jsx
    const arr = new Array(5).fill(1);
    // [1,1,1,1,1]
    ```