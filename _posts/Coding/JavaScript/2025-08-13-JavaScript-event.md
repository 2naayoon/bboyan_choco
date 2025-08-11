---
title: "[JavaScript] event"
date: 2025-08-13 12:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

# event

: 사이트에서 방문자가 취하는 모든 행위

```
💡 이벤트 핸들러 or 이벤트 리스너
   : 이벤트 발생 → 이벤트가 발생했음을 감지하는 코드 필요
```

### 1. 함수 활용 이벤트

```html
<body>
  <button type="button" onclick="myFunction()">클릭</button>
  <button type="button">클릭2</button>
  <script>
    // on ~ : 이벤트 리스너, myFunction() : 이벤트 핸들러
    function myFunction() {
      // 버튼이 눌러졌을 때 실행할 내용
      alert("버튼 클릭됨");
    }
  </script>
</body>
```

### 2.  addEventListener

```jsx
document.querySelector("요소").addEventListener (이벤트명, 함수);

document.querySelector("button:nth-last-of-type(1)").addEventListener("click", myFunction);
document.querySelector("button:nth-last-of-type(1)").addEventListener("click", () => {
  alert("버튼 클릭2");
});
```

- querySelectorAll

```html
<body>
  <button type="button">버튼 1</button>
  <button type="button">버튼 2</button>
  <script>
    // 버튼 찾기
    const btns = document.querySelectorAll("button");

    function showDialog(greeting, name) {
      alert(`${greeting}!! ${name}`);
    }
    
    // 버튼 이벤트 여부 감지
    btns[0].addEventListener("click", () => alert("안녕하세요"));
    btns[1].addEventListener("click", () => showDialog("Hello", "홍길동"));
  </script>
</body>
```

- 삼항연산자 활용

```html
<body>
  <table id="outside">
    <tr>
      <td id="t1">one</td>
    </tr>
    <tr>
      <td id="t2">two</td>
    </tr>
  </table>
  <script>
    // table 클릭 시 two → three, three → two
    const table = document.querySelector("#outside");
    table.addEventListener("click", () => {
      const t2 = document.getElementById("t2");

      // if (t2.innerText == "two") {
      //   t2.innerText = "three";
      // } else {
      //   t2.innerText = "tow";
      // }

      // 삼항 연산자
      t2.innerText = t2.innerText == "tow" ? "three" : "tow";
    });
  </script>
</body>
```

- a, submit, reset : 기능을 가지고 있는 요소
    - e.preventDefault() : 기능 중단 (스크립트 동작 작성 시 우선 실행)

```html
<body>
  <div>
    <a href="http://www.naver.com">네이버</a>
  </div>
  <script>
    // a 클릭 시 다음으로 이동하기
    document.querySelector("a").addEventListener("click", (e) => {
      // 요소가 가지고 있는 기능 중지
      e.preventDefault();

      location.href = "http://www.daum.net";
    });
  </script>
```

- 스타일 수정

```html
<body>
  <form action="" method="get">
    <input type="radio" name="color" id="" value="green" /> 녹색 <input type="radio" name="color" id="" value="blue" /> 파랑
  </form>
  <script>
    // 라디오를 클릭하면 해당 색상을 body 배경색으로 변경
    const colors = document.querySelectorAll("input[name='color']");

    colors.forEach((color) => {
      color.addEventListener("click", (e) => {
        document.body.style.backgroundColor = e.target.value;
      });
    });
  </script>
</body>
```

### 3. 이벤트 버블링

: 이벤트가 발생한 요소부터 부모 요소를 거슬러 올라가서 window 까지 이벤트를 전파하는 것

- e.target : 이벤트가 발생한 실제 대상
- e.currentTarget : 이벤트 버블링으로 이벤트가 발생한 모든 요소

```html
<body>
  <div class="one">
    one
    <div class="two">
      two
      <div class="three">three</div>
    </div>
  </div>
  <script>
    const one = document.querySelector(".one");
    one.addEventListener("click", (e) => {
      console.log("e.target", e.target);
      console.log("e.currentTarget", e.currentTarget);
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/event/image.png" align="center" alt="ev1">

### 4. 이벤트 종류

- click
- mouse

|  | 요소에 마우스를 올릴 때 | 요소에서 마우스가 벗어날 때 |
| --- | --- | --- |
| 현재 요소 및 자식 요소 포함 | mouseover | mouseout |
| 현재 요소 영역만 포함 | mouseenter | mouseleave |

```html
<body>
  <p>Mouse Over me!!!</p>
  <script>
    const p = document.querySelector("p");
    
    p.addEventListener("mouseover", (e) => (e.target.style.color = "red"));
    p.addEventListener("mouseout", (e) => (e.target.style.color = "black"));
  </script>
</body>
```

- change : 값의 변화가 일어나고, focus가 사라질 때 실행 (기본값 변화 x)
    - secret 작성 시 사용

```html
<body>
  <form action="" method="post">
    <div>
      <label> 이름 <input type="text" name="word" id="word" value="ABCDE" /> </label>
    </div>
  </form>
  <script>
    const word = document.getElementById("word");
    word1.addEventListener("change", (e) => {
      // 사용자의 입력값을 소문자로 변경
      // 사용자 입력값 가져오기 → 소문자로 변경 후 value 에 삽입
      e.target.value = e.target.value.toLowerCase();
    });
  </script>
</body>
```

- input : 입력과 동시에 실행
    - text 작성 시 사용

```jsx
// change 는 입력 후 실행
// input 은 입력과 동시에 실행
word.addEventListener("input", (e) => {
  e.target.value = e.target.value.toLowerCase();
});
```

- blur : 값의 변화와 상관없이 focus가 사라질 때 실행 (기본값 변화 o)

```jsx
word.addEventListener("blur", (e) => {
  e.target.value = e.target.value.toLowerCase();
});
```