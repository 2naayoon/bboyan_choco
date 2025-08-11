---
title: "[JavaScript] JavaScript 활용"
date: 2025-08-13 14:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

## # list

### 1. Object객체 배열 활용 리스트 만들기

```html
<body>
  <div class="container card-group">
    <div class="card">
      <img src="http://placehold.co/600x600" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">가격 : <span>70000</span></p>
        <a href="#" class="btn btn-primary">주문하기</a>
      </div>
    </div>
    <div class="card">
      <img src="http://placehold.co/600x600" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">가격 : <span>70000</span></p>
        <a href="#" class="btn btn-primary">주문하기</a>
      </div>
    </div>
    <div class="card">
      <img src="http://placehold.co/600x600" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">가격 : <span>70000</span></p>
        <a href="#" class="btn btn-primary">주문하기</a>
      </div>
    </div>
  </div>
  <script>
	  // const obj = {key:value, key:value, ...}
    const products = [
      { id: 0, price: 70000, title: "Blossom Dress" },
      { id: 1, price: 50000, title: "Springfild Shirt" },
      { id: 2, price: 60000, title: "Black Monastery" },
    ];

    // products 값 화면 출력
    // 디자인 영역 가져오기 → products 삽
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, idx) => {
      card.querySelector("h5").innerHTML = products[idx].title;
      card.querySelector("p > span").innerHTML = products[idx].price;
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image.png" align="center" alt="in1">

## # scroll

### 1. 스크롤 위치 조정

- scrollBy(x,y) : 현재 위치 기준으로 스크롤 조정
- scrollTo(pageX,pageY) : *절대 좌표*를 기준으로 스크롤 조정

```jsx
window.scrollTo(0, 500);

window.scrollBy(0, 500);
```

💡 브라우저 너비와 높이 구하기
```
window.innerWidth / innerHeight : 스크롤바 포함 계산
document.documentElement.clientWidth / clientHeight : 스크롤바 제외 계산
```

### 2. 스크롤 위치에 따른 요소 수정

- 스크롤 이동 시 폰트 사이즈 축소

```html
<head>
  <style>
    .navbar {
      position: fixed;
      width: 100%;
      z-index: 1;
    }
    .navbar-brand {
      font-size: 45px;
      transition: all 1s; /* css 속성이 변경될 때 부드럽게 변경되도록 */
    }
    body {
      height: 4000px;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-light bg-light">
    <div class="container-fluid">
      <span class="navbar-brand">JSShop</span>
    </div>
  </nav>
  <script>
    // 페이지 스크롤바를 500px 이상 내리면 로고 폰트 사이즈 줄이기
    const navbar = document.querySelector(".navbar-brand");
    window.addEventListener("scroll", () => {
      // scrollY : Y축 위치
      if (window.scrollY > 500) {
        navbar.style.fontSize = "20px";
      } else {
        navbar.style.fontSize = "45px";
      }
    });
  </script>
</body>

* bootstrap 적용
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image 1.png" align="center" alt="in2">

- overflow 활용

```html
<head>
  <style>
    * {
      box-sizing: border-box;
    }
    div {
      height: 150px;
      /* div 영역 scroll */
      overflow: auto;
      border: 1px solid;
    }
  </style>
</head>
<body>
  <div>
    lorem1000
  </div>
  <script>
    const div = document.querySelector("div");
    console.log(div.scrollHeight); // 스크롤 높이 + div height
    console.log(div.clientHeight); // div height

    // 스크롤을 끝까지 내리면 alert 띄우기
    div.addEventListener("scroll", () => {
      // scrollTop(세로 스크롤 위치) == scrollY
      // 스크롤 위치 == 스크롤 높
      if (div.scrollTop == div.scrollHeight - div.clientHeight) {
        alert("회원 약관을 다 읽었습니다.");
      }
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image 2.png" align="center" alt="in3">

## # tab

- body

```html
<head>
  <style>
    ul.list {
      list-style: none;
      padding: 0;
      margin: 0;
      border-bottom: 1px solid #ccc;
    }
    .tab-button {
      padding: 10px 20px;
      color: gray;
      cursor: pointer;
      margin-right: -1px;
      margin-bottom: -1px;
      float: left;
    }	
    .orange {
      border-top: 2px solid orange;
      border-right: 1px solid #ccc;
      border-bottom: 1px solid white;
      border-left: 1px solid #ccc;
      color: black;
      margin-top: -2px;
    }
    .tab-content {
      padding: 10px;
      display: none;
    }
    .show {
      display: block;
    }
  </style>
</head>
<body>
  <div class="container mt-5">
    <ul class="list">
      <li class="tab-button orange">Products</li>
      <li class="tab-button">Information</li>
      <li class="tab-button">Shipping</li>
    </ul>

    <div class="tab-content show">
      <p>이 상품의 특징은 다음과 같습니다.</p>
    </div>
    <div class="tab-content">
      <p>상품 상세 페이지</p>
    </div>
    <div class="tab-content">
      <p>배송정보</p>
    </div>
  </div>
  <script src="./tab.js"></script>
</body>
```

- script

```jsx
// orange, show 클래스명으로 css 변화

// 세 개의 li, div 찾기 : querySelectorAll()
const allLi = document.querySelectorAll(".tap-button");
const allDiv = document.querySelectorAll(".tab-content");

allLi.forEach((li, idx) => {
  li.addEventListener("click", (e) => {
    // 모든 li 에 orange 클래스명 제거
    // 현재 이벤트가 일어난 li orange 클래스명 추가
    allLi.forEach((item) => {
      item.classList.remove("orange");
    });
    e.target.classList.add("orange");

    // 모든 div 의 show 제거
    // 현재 이벤트가 일어난 li 와 순서가 일치하는 div show 추가
    allDiv.forEach((item) => {
      item.classList.remove("show");
    });
    allDiv[idx].target.classList.add("show");
  });
});
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image 3.png" align="center" alt="in5">

## # alert

- 메세지 띄우기/삭제

```html
<body>
  <div class="alert-box">
    아이디를 입력해 주세요
    <span class="close">X</span>
  </div>
  <button class="btn1">버튼 1</button>
  <button class="btn2">버튼 2</button>
  <script>
    // 버튼 클릭 시 알림창 보여주기
    const alert = document.querySelector(".alert-box");
    
    // document.querySelector(".btn1").addEventListener("click", () => {
    //   alert.style.display = "block";
    //   alert.firstChild.textContent = "아이디를 입력해 주세요";
    // });
  
    // X 클릭 시 알림창 숨기기
    // document.querySelector(".close").addEventListener("click", () => {
    //   alert.style.display = "none";
    // });

    const notification = (state, msg) => {
      alert.style.display = state;

      if (msg != undefined) {
        alert.firstChild.textContent = msg;
      }
    };
   
    document.querySelector(".btn1").addEventListener("click", () => notification("block", "아이디를 입력해 주세요"));
    document.querySelector(".btn2").addEventListener("click", () => notification("block", "비밀번호를 입력해 주세요"));
    document.querySelector(".close").addEventListener("click", () => notification("none"));
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image 4.png" align="center" alt="in5">

## # menu

- 화면 축소 시 Navbar 햄버거 버튼 메뉴 띄우기

```html
<head>
  <style>
    .list-group {
      display: none;
      width: 200px;
      float: right;
    }
    .show {
      display: block;
    }
  </style>
</head>
<body>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">로그인</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">로그아웃</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">상품상세</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">상품목록</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- 햄버거 버튼 클릭 시 보여줄 서브메뉴 -->
  <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">로그인</a>
    <a href="#" class="list-group-item list-group-item-action">로그아웃</a>
    <a href="#" class="list-group-item list-group-item-action">상품상세</a>
    <a href="#" class="list-group-item list-group-item-action">상품목록</a>
  </div>

  <script>
    const toggler = document.querySelector(".navbar-toggler");
    toggler.addEventListener("click", () => {
      // 숨겨진 메뉴 보여주기 → show 클래스명 이용
      document.querySelector(".list-group").classList.toggle("show");
    });
  </script>
</body>

* 부트스트랩 사용
```

<img src="/assets/img/Coding/JavaScript/JS 활용/image 5.png" align="center" alt="in6">