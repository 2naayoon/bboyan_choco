---
title: "[CSS] position"
date: 2025-08-12 12:00:00 +09:00
categories: [Coding, CSS]
tags:
  - CSS
---

## # position

: 요소의 위치 지정

### 1. static

: 기본(요소의 기본 배치 방법 따라감) 

### 2. relative

: 요소 자신을 기준으로 배치

- 처음에 배치되었던 위치를 기준으로 움직임
- 다른 요소에 영향 x

```css
.box {
  border: 1px solid black;
  padding: 10px;
  position: relative;
}
```

### 3. absolute

: 위치 상 부모 요소를 기준으로 배치

- 부모 요소를 지정하지 않으면 화면(뷰포트)이 기준
- position 이 부여된 다른 요소 (대부분 relative) 이용

```html
<style>
  body {
    margin-top: 200px;
  }
  .container {
    width: 500px;
    height: 300px;
    margin: 0 auto;
    background-color: yellow;
    position: relative;
  }
  .box {
    height: 100px;
    position: absolute;
    white-space: nowrap; /* 공백을 기준으로 엔터 하지 말것 */
  }
  .a {
    background-color: red;
    right: 100%; /* 부모의 크기가 일정치 않은 경우 부모 크기만큼 위치로 사용 */
    top: 100px;
  }
  .b {
    background-color: blue;
    right: 200px;
    top: 100px;
  }
  .c {
    background-color: green;
    left: 500px;
    bottom: 100px;
  }
</style>

<body>
  <div class="container">
    <div class="box a">box aaaaa</div>
    <div class="box b">box b</div>
    <div class="box c">box ccc</div>
  </div>
</body>
```

<img src="/assets/img/Coding/CSS/position/Untitled.png" align="center" alt="po1">

- calc : 연산한수

```html
<style>
  .lastest-news {
    border: 2px solid #ccc;
    width: 350px;
    height: 145px;
    margin-top: 40px;
    position: relative;
  }
  .read-more {
    background: black;
    color: white;
    padding: 0 10px;
    text-decoration: none;
    line-height: 30px;
    position: absolute;
    right: 0;
    /* calc : 연산 함수 */
    bottom: calc(100% + 10px);
  }
</style>

<body>
  <div class="lastest-news">
    <ul>
      <li>리스트1</li>
      <li>리스트2</li>
      <li>리스트3</li>
      <li>리스트4</li>
      <li>리스트5</li>
    </ul>
    <a href="#" class="read-more">Read more</a>
  </div>
</body>
```

<img src="/assets/img/Coding/CSS/position/Untitled 1.png" align="center" alt="po2">

### 4. fixed

: 브라우저(뷰포트)를 기준으로 배치

- 위치 지정 : top, left, right, bottom

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  img {
    vertical-align: top;
  }
  .box {
    border: 1px solid black;
    /* 위치 고정 */
    position: fixed;
    right: 80px;
    bottom: 80px;
  }
</style>

<body>
  <div class="box">
    <img src="https://placehold.co/100" alt="" />
  </div>
  <p>
    lorem1000
  </p>
</body>
```

<img src="/assets/img/Coding/CSS/position/Untitled 2.png" align="center" alt="po3">

### 5. sticky

: 스크롤 영역 기준으로 배치

```html
<style>
  .section {
    height: 200px;
    border: 2px dashed lightgray;
  }
  .section h1 {
    text-align: center;
    line-height: 2;
    font-size: 24px;
    font-weight: bold;
    position: sticky;
    top: 0;
  }
</style>

<body>
  <!-- .section*8>h1{Title $} -->
  <div class="section">
    <h1>Title 1</h1>
  </div>
  <div class="section">
    <h1>Title 2</h1>
  </div>
  <div class="section">
    <h1>Title 3</h1>
  </div>
  <div class="section">
    <h1>Title 4</h1>
  </div>
  <div class="section">
    <h1>Title 5</h1>
  </div>
  <div class="section">
    <h1>Title 6</h1>
  </div>
  <div class="section">
    <h1>Title 7</h1>
  </div>
  <div class="section">
    <h1>Title 8</h1>
  </div>
</body>
```

<img src="/assets/img/Coding/CSS/position/Untitled 3.png" align="center" alt="po4">

## # z-index

: 요소의 쌓임 순서

- position 이 static 이 아닌 position 의 속성 값(2,3,4,5)이 존재할 때 가장 위에 쌓임
- position 이 모두 존재한다면 z-index 속성의 숫자 값이 높을수록 위에 쌓임
- position 이 모두 존재하고, z-index 속성의 값이 같다면, HTML 작성 순서가 늦을수록 위에 쌓임

```html
<style>
  .box-group {
    position: relative;
  }
  .box {
    position: absolute;
    width: 100px;
    height: 100px;
    border: 1px solid;
  }
  .box1 {
    left: 50px;
    top: 50px;
    background: red;
    z-index: 1;
  }
  .box2 {
    left: 110px;
    top: 70px;
    background: blue;
    z-index: 2;
  }
  .box3 {
    left: 70px;
    top: 110px;
    background: green;
  }
</style>

<body>
  <div class="box-group">
    <div class="box box1">1</div>
    <div class="box box2">2</div>
    <div class="box box3">3</div>
  </div>
</body>
```

<img src="/assets/img/Coding/CSS/position/Untitled 4.png" align="center" alt="po5">