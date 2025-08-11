---
title: "[Bootstrap] Bootstrap 사용법"
date: 2025-08-12 15:00:00 +09:00
categories: [Coding, CSS]
tags:
  - CSS
---

# Bootstrap

💡 Bootstrap : [https://getbootstrap.com/](https://getbootstrap.com/)

### 1. Bootstrap 사용

- Source files 다운로드 - css, js 폴더 이용
    - **.min.** : 공백 제거해서 원본 파일보다 파일 용량 줄이기

```html
<link rel="stylesheet" href="./css/bootstrap.min.css" />

<script src="./js/bootstrap.bundle.min.js"></script>
```

- CDN(Content Delivery Network) : 서버에 올려놓고 사용
    - class 명을 지켜야 하기 때문에 홈페이지 docs에서 html 코드 복사 후 사용

```html
<link
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
  rel="stylesheet"
  integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
  crossorigin="anonymous"
/>

<script
  src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
  integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
  crossorigin="anonymous"
></script>
```

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/CSS/Bootstrap/Untitled.png" align="center" alt="boot1">
  <img src="/assets/img/Coding/CSS/Bootstrap/Untitled 1.png" align="center" alt="boot2">
</div>

### 2. Navbar

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Shop</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">shirts</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> 신발 </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">구두</a></li>
            <li><a class="dropdown-item" href="#">운동화</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">남성화</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
```

<img src="/assets/img/Coding/CSS/Bootstrap/Untitled 2.png" align="center" alt="boot3">

### 3. column

: 12열 기준

- row : 행 하나
- col - sm-4 : 컬럼 나누기(기본 12개) 4칸씩 나눠가짐

```html
<div class="container">
  <div class="row">
    <!-- col-8 : 8열 만큼 차지 -->
    <div class="col-8">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non nesciunt maxime, molestias accusantium dolorem laboriosam deleniti ipsum
        suscipit nihil reiciendis atque modi rerum, cum aliquid. Quod consequuntur sequi eveniet repellendus?
      </p>
    </div>
  </div>
  <div class="row">
    <div class="col">Column</div>
    <div class="col">Column</div>
  </div>
</div>
```

<img src="/assets/img/Coding/CSS/Bootstrap/Untitled 3.png" align="center" alt="boot4">

### 4. login form

```html
<div class="container">
  <!-- m : margin, p : padding,  mb-3 : margin bottom 3  pt-3 : padding top 3
       mx-3 : margin left, right 
       my-3 : margin top, bottom
    -->
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
      <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input type="password" class="form-control" id="exampleInputPassword1" />
    </div>
    <div class="mb-3 form-check">
      <input type="checkbox" class="form-check-input" id="exampleCheck1" />
      <label class="form-check-label" for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
</div>
```

<img src="/assets/img/Coding/CSS/Bootstrap/Untitled 4.png" align="center" alt="boot5">
