---
title: "[JavaScript] form"
date: 2025-08-13 13:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

### 1. submit

```html
<body>
  <form action="" method="post">
    <input type="text" name="text1" id="text1" />
    <input type="submit" value="전송" />
  </form>
  <p id="result">
    <script>
      // from submit 버튼 사용 시 자동으로 폼 전송이 일어남
      // a, submit 태그에 기능이 있는 경우 → 기능 중지
      const form = document.querySelector("form");
      const text1 = document.querySelector("#text1");
      form.addEventListener("submit", (e) => {
        // submit 중지
        e.preventDefault();

        document.querySelector("#result").innerHTML = text1.value;
        text1.value = "";
      });
    </script>
  </p>
</body>
```

![image.png](form%209a7e5ca72d914a1380a6debedbbb5165/image.png)

### 2. form을 이용한 계산기 만들기

```html
<body>
  <div style="margin-top: 10px">
    <input type="text" name="num3" id="num3" size="5" />
    <select name="op" id="">
      <option value="+">+</option>
      <option value="-">-</option>
      <option value="*">*</option>
      <option value="/">/</option>
    </select>
    +
    <input type="text" name="num4" id="num4" size="5" />
    =
    <input type="text" name="result2" id="result2" size="5" />
    <input type="button" value="계산" />
  </div>
  <script>
    document.querySelector("body div:nth-child(2) input[type='button']").addEventListener("click", () => {
      const num3 = Number(document.querySelector("#num3").value);
      const num4 = Number(document.querySelector("#num4").value);
      const op = document.querySelector("select[name='op']");
      const result2 = document.querySelector("#result2");

      // op : +, -, *, /
      switch (op.value) {
        case "+":
          result2.value = num3 + num4;
          break;
        case "-":
          result2.value = num3 - num4;
          break;
        case "*":
          result2.value = num3 * num4;
          break;
        case "/":
          result2.value = num3 / num4;
          break;
      }
    });
  </script>
</body>
```

![image.png](form%209a7e5ca72d914a1380a6debedbbb5165/image%201.png)

### 3. 유효성 검증

: 사용자의 입력값은 DB에 저장되어야 하는 값이므로 확인 필요

```html
<body>
  <form action="" method="get">
    <div>
      <label for="username">이름</label>
      <input type="text" name="username" id="username" />
    </div>
    <div>
      <label for="password">비밀번호</label>
      <input type="password" name="password" id="password" />
    </div>
    <div>
      <label for="age">나이</label>
      <input type="text" name="age" id="age" />
    </div>
    <div>
      <button type="submit">전송</button>
    </div>
  </form>
  <script>
    // input 요소의 값들이 비어 있다면 alert 띄우기
    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
	    // submit 중지
      e.preventDefault(); 

      const username = document.getElementById("username");
      const password = document.getElementById("password");
      const age = document.getElementById("age");

      if (username.value == "") {
        alert("이름을 입력해주세요");
        username.focus();
        return;
      } else if (password.value == "") {
        alert("비밀번호를 입력해주세요");
        password.focus();
        return;
      } else if (age.value == "" || isNaN(age.value)) {
        // 숫자가 아니라면
        alert("나이를 확인해주세요");
        age.select(); // 드래그된 상태
        return;
      }

      // 폼 전송
      form.submit();
    });
  </script>
</body>
```

![image.png](form%209a7e5ca72d914a1380a6debedbbb5165/image%202.png)

### 4. 숫자 맞추기 게임

```html
<body>
  <h3>숫자 맞추기 게임</h3>
  <p>
    이 게임은 컴퓨터가 생성한 숫자를 맞추는 게임입니다. <br />
    숫자는 1 ~ 100 사이에 있습니다.
  </p>
  <div>
    <label>
      숫자 <input type="text" name="num" id="num" size="5" />
      <button type="button">확인</button>
    </label>
  </div>
  <div>
    <label> 추측횟수 <input type="text" name="count" id="count" size="5" readonly /> </label>
  </div>
  <div>
    <label>힌트 <input type="text" name="hint" id="hint" readonly /></label>
  </div>
  <script>
    // 1 ~ 100 사이의 임의의 수 생성 후 알아맞추는 게임
    let random = Math.floor(Math.random() * 100 + 1);

    // 추측횟수 : 사용자가 숫자를 몇 번 추측했는지 증가
    let nGuess = 0;

    document.querySelector("button").addEventListener("click", (e) => {
      const num = parseInt(document.querySelector("#num").value);

      nGuess++;

			// 힌트 : 더 큰 수를 입력하세요 or 더 작은 수를 입력하세요 or 정답입니다
      let result = "";
      if (random == num) {
        result = "정답입니다";
        // 정답이면 버튼 막기
        e.target.disabled = "true";
      } else if (random > num) {
        result = "더 큰 수를 입력하세요";
      } else if (random < num) {
        result = "더 작은 수를 입력하세요";
      }

      document.querySelector("#count").value = nGuess;
      document.querySelector("#hint").value = result;
    });
  </script>
</body>
```

![image.png](form%209a7e5ca72d914a1380a6debedbbb5165/image%203.png)