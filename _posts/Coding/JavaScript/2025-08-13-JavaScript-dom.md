---
title: "[JavaScript] Dom"
date: 2025-08-13 12:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

## # BOM

: Browser Object Model (브라우저 객체 모델)

### 1. window

: 팝업창 (open(), alert(), prompt(), setTimeout())

- open(url, name, option) : 팝업창 띄우기

```jsx
window.open("./child.html", "", "width=420, height=550");

// child.html
<div>
  <img src="https://placehold.co/200x100" alt="" />
</div>
<input type="checkbox" name="popup" id="" />오늘은 이 창 보지 않기
```

<img src="/assets/img/Coding/JavaScript/dom/image.png" align="center" alt="dom1">

### 2. location

: 페이지 이동

- href

```jsx
location.href = "https://www.naver.com";
```

- replace() : 사이트 자체를 대체 (뒤로가기x)

```jsx
location.replace("https://www.naver.com");
```

### 3. histroy

- back() : 이전 페이지 이동
- forward() : 다음 페이지 이동
- go(숫자) : 지정된 페이지수만큼 이동

```jsx
<button type="button" onclick="history.back()">이전으로</button>
<button type="button" onclick="history.forward()">다음으로</button>
<button type="button" onclick="history.go(-2)">지정된만큼</button>
```

### 4. document

## # DOM

: Document Object Model (문서 객체 모델)

  html → 자바스크립트를 이용해 요소에 접근 (자바스크립트를 이용해서 모든 요소 변화)

  값, 스타일, 요소 제거, 요소 변경, 요소 추가, …

<img src="/assets/img/Coding/JavaScript/dom/image 1.png" align="center" alt="dom2">
<figcaption align="center" style="color:silver">이미지 출처 : By ‍Birger Eriksson - 자작, CC BY-SA 3.0, https://commons.wikimedia.org/w/index.php?curid=18034500</figcaption>




```
💡 <tag>text</tag>
    - tag : element
    - text : textnode
```

### 1. 요소 찾기

- getElementById() : id 값으로 찾기

```html
<body>
  <h1 id="header1">Header 1</h1>
  <h1 id="header2">Header 2</h1>
  <script>
    const element = document.getElementById("header1");
    console.log(element);

    const element2 = document.getElementById("header2");
    console.log(element2)
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 2.png" align="center" alt="dom3">

- querySelector() : css 선택자 모두 가능
    - `#` : id명
    - `.` : class명
    - `[속성명 = "value"]`
    - `부모선택자 > 자식선택자` : 자식요소 찾기
    - `부모선택자  자식선택자`:nth-child(숫자)

```jsx
const element = document.querySelector("#header1");
const element2 = document.querySelector("#header2");
```

- querySelectorAll() : 현재 페이지에서 css 선택자를 가진 모든 요소 찾기 → NodeList (배열)

```html
<body>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
  <script>
    const columns = document.querySelectorAll("[scope='col']");
    console.log(columns);
    
    // console.log(columns[0]);

    columns.forEach((col) => {
      console.log(col);
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 3.png" align="center" alt="dom4">

- 요소의 자식 찾기

```html
<body>
  <div class="alert-box">
    알림
    <span class="close">X</span>
  </div>
  <script>
    const alert = document.querySelector(".alert-box");
    console.log(alert.firstChild); // 첫번째 자식
    console.log(alert.firstElementChild); // tag로 감싸진 첫번째 자식
  </script>
</body>
```

### 2. text

- textContent : script나 style 태그와 상관없이 해당 노드가 가지고 있는 text
    - `display: none` 속성을 이용해 사용자에게 보이지 않는 텍스트까지 불러온다
- innerText : 요소 내에서 사용자에게 보여지는 텍스트 값을 가져오거나 설정
- innerHTML : 요소 내에 포함된 HTML 또는 XML 마크업을 가져오거나 직접 설정
    - 태그 수정, 자식 요소 추가 및 삭제, 스타일 적용 가능

```html
<body>
  <p id="text1">innerText</p>
  <p id="text2">textContent</p>
  <p id="text3">innerHTML</p>
  <script>
    const p1 = document.getElementById("text1");
    const p2 = document.getElementById("text2");
    const p3 = document.getElementById("text3");

    console.log(p1.textContent); // p.innerText or p.innerHTML

    p1.innerText = "innerText change";
    p2.textContent = "textContent change";
    p3.innerHTML = "<h1>innerHTML change</h1>";
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 4.png" align="center" alt="dom5">

- value : 폼 태그 텍스트 노드 값 가져오기

```html
<body>
  <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success" type="submit">Search</button>
  </form>
  </div>
  <script>
    // form 안의 input 요소 찾기
    const input = document.querySelector("[type='search']");
    console.log(input);

    // text 노드 값 변경
    input.value = "검색";
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 5.png" align="center" alt="dom6">

```
💡 일반 태그 : h1, div, span, ... → innerHTML, innerText, textContent
   폼 태그 : input, select, option, textarea, ... → value
```

### 3. create

- createElement() : 태그 요소 생성
- createTextNode() : 텍스트노드 생성

```jsx
const header = document.createElement("h1");
const content = document.createTextNode("Hello");

// h1 요소와 텍스트 노드 연결
header.appendChild(content);

// body 자식 요소로 추가
document.body.appendChild(header); // 뒤에 추가
```

<img src="/assets/img/Coding/JavaScript/dom/image 6.png" align="center" alt="dom7">

- body.innerHTML

```jsx
let output = "<ul><li>javascript</li>";
output += "<li>html</li>";
output += "<li>css</li>";
output += "<li>jquery</li>";
output += "</ul>";

document.body.innerHTML = output;
```

<img src="/assets/img/Coding/JavaScript/dom/image 7.png" align="center" alt="dom8">

- insertAdjancentHTML(위치, 삽입할 요소)
    - beforeend : 현재 태그 요소의 마지막 자식으로 삽입
    - beforebegin : 현재 태그 요소의 이전 형제 요소로 삽입
    - afterbegin : 현재 태그 요소의 첫번째 자식으로 삽입
    - afterend : 현재 태그 요소의 다음 형제 요소로 삽입

```html
<body>
  <div id="test">
    <p>반갑습니다</p>
  </div>
  <script>
    const p = "<p>안녕하세요</p>";
    document.getElementById("test").insertAdjacentHTML("afterend", p);
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/0f734d95-1200-4520-948a-dd210d30024a.png" align="center" alt="dom9">

### 4. remove

- remove() : 요소 삭제
- removeChild() : 자식 요소 제거
- removeAttribute() : 지정하는 속성 제거
- innerText = “”

```html
<body>
  <h1 name="head" class="head">Header 1</h1>
  <h2>Header 2</h2>
  <script>
    // 요소 찾은 후 삭제
    document.querySelector("h1").remove();

    // 요소 속성 삭제
    document.querySelector("h1").removeAttribute("class");

    // 텍스트 노드 삭제
    document.querySelector("h1").innerText = "";
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 8.png" align="center" alt="dom9">

### 5. modify

- getAttribute() : 속성 조회
- setAttribute() : 속성 변경

```html
<body>
  <a href="https://www.naver.com/">네이버</a>
  <script>
    const aTag = document.querySelector("a");
    
    // href 속성 조회
    console.log(aTag.getAttribute("href"));
    console.log(aTag.href);

		// a 태그의 href 속성 변경
    aTag.setAttribute("href", "https://www.daum.net/");
    aTag.href = "https://www.daum.net/";
    console.log(aTag.href);
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 9.png" align="center" alt="dom10">

- 스타일 변경

```html
<body>
  <h1 id="header">Header</h1>
  <script>
    const header = document.querySelector("#header");
    
    // 스타일 변경
    header.style.color = "red";
    header.style.fontSize = "50px";
    header.style.border = "1px solid blue";
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/dom/image 10.png" align="center" alt="dom11">

- classList : 클래스명 모두 가져오기
    - replace(변경할 클래스명, 새 클래스명) : 클래스 이름 변경
    - add() : 클래스 이름 추가
    - remove() : 클래스 이름 제거
    - toggle() : 클래스 값이 없으면 추가하고, 있으면 제거

```html
<body>
  <h1 class="header one">Header</h1>
  <script>
	  const header = document.querySelector("h1");
    console.log(header.classList);
		// DOMTokenList(3) ['header', 'one', value: 'header one']

    header.classList.replace("one", "two");
    // ['header', 'two']
    
    header.classList.add("three");
    // ['header', 'two', 'three']

    header.classList.remove("two");
    // ['header', 'three']

    header.classList.toggle("four");
    // ['header', 'three', 'four']
    
    header.classList.toggle("three");
    // ['header', 'four']
  </script>
</body>
```