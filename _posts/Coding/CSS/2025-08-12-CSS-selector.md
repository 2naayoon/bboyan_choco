---
title: "[CSS] selector"
date: 2025-08-12 10:00:00 +09:00
categories: [Coding, CSS]
tags:
  - CSS
---

### 1. class

: 전역 속성인 클래스 이용

```html
.클래스명 {}
```

### 2. id

: 전역 속성인 아이디 이용

```html
#아이디명 {}
```

### 3. tag

: 태그 이용 (현재 페이지 내의 동일한 태그에 모두 적용됨)

### 4. *

: 전체 선택자

### 5. 자손(하위)

: 자식 + 손자   부모선택자 자식선택자

### 6. 자식

```html
부모선택자 > 자식선택자 {}
```

### 7. 형제

- 선택자 + 선택자 (바로 뒤따라 오는 선택자 요소만)
- 선택자 ~ 선택자 (뒤따라 오는 선택자 요소)

### 8. 그룹

: 다양한 선택자 요소에 동일한 디자인을 적용

### 9. 속성

- `[속성명]`
- `[속성명 = "value"]`
- `[속성명 ~="value"]`
- `[속성명 |="value"]`
- `[속성명^ = "value"]`
- `[속성명 $= "value"]`
- `[속성명 *= "value"]`

### 10. pseudo class

- a 태그
    - link : 밑줄
    - visited : 자주색
    - active : 빨강색
- hover : 요소에 마우스를 올리는 행동
- focus : 요소 중 포커스를 받게 되면 사용 가능
- disabled
- checked (radio, checkbox)

```html
<style>
  #name:disabled {
    border: 1px solid brown;
    background-color: lightcoral;
  }
  [type="radio"]:checked + label {
    color: red;
  }
</style>

<body>
    <form action="" method="get">
      <fieldset>
        <legend>사용자 정보</legend>
        <label for="name">이름</label>
        <input type="text" name="name" id="name" disabled />
      </fieldset>
      <fieldset>
        <legend>신청과목</legend>
        <p>이 달에 신청할 과목을 선택하세요</p>
        <div>
          <input type="radio" name="subject" id="" value="speaking" />
          <label for="">회화</label>
          <input type="radio" name="subject" id="" value="grammer" />
          <label for="">문법</label>
          <input type="radio" name="subject" id="" value="writing" />
          <label for="">작문</label>
        </div>
      </fieldset>
    </form>
  </body>
```

<img src="/assets/img/Coding/CSS/selector/Untitled.png" align="center" alt="sel1">

- selected (select)

```html
<style>
  a:link {
    color: black;
  }
  a:visited {
    color: green;
  }
  a:active {
    color: blue;
  }
  a:hover {
    color: hotpink;
  }
  h1:hover {
    color: red;
  }
  [type="text"] {
    width: 150px;
    /* input text 요소가 focus 받을 때 테두리 굵게 되는 것 방지 */
    outline: none;
    border: 1px solid lightgray;
    transition: 0.4s;
    padding: 5px 10px;
  }
  [type="text"]:focus {
    width: 200px;
    background-color: yellow;
  }

  [type="text"]:disabled {
    background-color: violet;
  }

  input[type="radio"]:checked {
    width: 50px;
    height: 50px;
  }
</style>
```

<img src="/assets/img/Coding/CSS/selector/Untitled 1.png" align="center" alt="sel2">

- pseudo class 구조
    - first-child
    - last-child
    - nth-child
    
    ```html
    <style>
      ul li:first-child {
        text-decoration: underline;
      }
      ul li:last-child {
        text-decoration: underline;
      }
      ul li:nth-child(3) {
        text-decoration: underline;
      }
    
      /* n 은 0부터 시작 */
      /* ul li:nth-child(2n + 1) {
        background-color: silver;
      }
      ul li:nth-child(2n) {
        background-color: gold;
      } */
    
      ul li:nth-child(-n + 3) {
        background-color: green;
      }
      ul li:nth-child(n + 4) {
        background-color: cornflowerblue;
      }
    </style>
        
    <body>
      <ul>
        <li>List Item1</li>
        <li>List Item2</li>
        <li>List Item3</li>
        <li>List Item4</li>
        <li>List Item5</li>
      </ul>
    </body>
    ```

    <img src="/assets/img/Coding/CSS/selector/Untitled 2.png" align="center" alt="sel3">

    
    - 테이블 꾸미기
    
    ```html
    <style>
      table,
      th,
      td {
        border: 1px solid black;
      }
      table {
        border-collapse: collapse;
        width: 60%;
      }
    
      /* 짝수행에 마우스 올렸을 때 배경색 변경 */
      tr:hover:nth-child(2n) {
        background-color: pink;
      }
    </style
    
    <body>
      <table>
        <tr>
          <th>제목 1</th>
          <th>제목 2</th>
          <th>제목 3</th>
        </tr>
        <tr>
          <td>컬럼 1</td>
          <td>컬럼 2</td>
          <td>컬럼 3</td>
        </tr>
        <tr>
          <td>컬럼 1</td>
          <td>컬럼 2</td>
          <td>컬럼 3</td>
        </tr>
        <tr>
          <td>컬럼 1</td>
          <td>컬럼 2</td>
          <td>컬럼 3</td>
        </tr>
      </table>
    </body>
    ```

    <img src="/assets/img/Coding/CSS/selector/Untitled 3.png" align="center" alt="sel4">
    

### 11. pseudo element (가상요소)

- ::before
- ::after

```html
<style>
  h1::before {
    content: "before ";
    color: red;
  }
  h1::after {
    content: "after ";
    color: blue;
  }
  h3::before {
    content: "";
    width: 10px;
    height: 10px;
    background-color: red;
    display: inline-block;
    margin-right: 10px;
  }
</style>

<body>
  <h1>가상요소</h1>
  <h3>가상요소 선택자</h3>
</body>
```

<img src="/assets/img/Coding/CSS/selector/Untitled 4.png" align="center" alt="sel5">

### 12. 형태 구조 선택자

: 태그로 찾기

- first-of-type
- last-of-type
- nth-last-of-type()

```html
<style>
  h1:first-of-type {
    color: red;
  }
  h3:last-of-type {
    color: blue;
  }
  h4:nth-last-of-type(2) {
    text-decoration: underline;
  }
  ul li:nth-of-type(3) {
    color: red;
  }
</style>

<body>
  <h1>형태 구조 선택자</h1>
  <ul>
    <li>리스트 아이템</li>
    <li>리스트 아이템</li>
    <li>리스트 아이템</li>
    <li>리스트 아이템</li>
    <li>리스트 아이템</li>
  </ul>
  <h3>heading 3</h3>
  <h4>heading 4</h4>
  <h3>heading 3</h3>
  <h4>heading 4</h4>
</body>
```

<img src="/assets/img/Coding/CSS/selector/Untitled 5.png" align="center" alt="sel6">

### 13. 부정 선택자

- :not

```html
<style>
  :not(p) {
    color: blue;
  }
</style>

<body>
  <h1>This is a heading</h1>
  <p>This is a paragraph.</p>
  <div>div element</div>
  <a href="http://www.daum.net">Link Daum</a>
</body>
```

<img src="/assets/img/Coding/CSS/selector/Untitled 6.png" align="center" alt="sel7">


* css 선택자 연습 : [CSS Diner - Where we feast on CSS Selectors! (flukeout.github.io)](https://flukeout.github.io/)