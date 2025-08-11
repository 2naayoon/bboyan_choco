---
title: "[JavaScript] Regex"
date: 2025-08-13 16:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

### 1. Script에서 정규식 사용

- exec() : 정규 표현식과 일치하는 문자열 리턴
- test() : 정규 표현식과 일치하는 문자열이 있으면 true, 없으면 false
    - true 자료 : 0 제외 숫자, '문자', []. {}
    false 자료 : 0, '', null, undefinded, NaN
- match() : 정규 표현식과 일치하는 문자열 리턴

```jsx
const ko = "kokokoko";
const koooo = "kooookoooo";
console.log(ko.match(/ko+/)) // ['ko']
console.log(koooo.match(/ko+/)); // ['koooo']
console.log(ko.match(/(ko)+/)); // ['kokokoko','ko']
console.log(ko.match(/(ko)/g)); // ['ko', 'ko', 'ko', 'ko']
console.log(ko.match(/(ko)/)); // ['ko', 'ko']
console.log(koooo.match(/(ko)+/)); // ['ko', 'ko']
```

- search() : 정규 표현식과 일치하는 문자열 위치 리턴

```jsx
const regEx = /Java/; // 패턴 생성
const content = "Hello Java";

console.log(regEx.exec(content)); // ['Java']

console.log(regEx.test(content)); // true

// String 메소드 match, search
console.log(content.match(regEx)); // ['Java']

console.log(content.search(regEx)); // 6
```

- replace() : 기억해 놓은 것(캡쳐링)을 갖고와 재배치

```jsx
const regEx2 = /(\w+)\s(\w+)/;
const content2 = "John Smith";
console.log(content2.match(regEx2)); // ['John Smith', 'John', 'Smith']
console.log(content2.replace(regEx2, "$2, $1")); // Smith, John
```

- split()

### 2. 문자 찾기

```html
<body>
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident suscipit laudantium, ipsum numquam nemo labore corporis quis odio, minus
    tempora harum architecto quia rem. Quae qui numquam aut blanditiis repellat. <br />
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus exercitationem laudantium temporibus dicta sit officia, esse libero quisquam
    aspernatur, totam beatae necessitatibus, ad vel facere nemo nisi reiciendis ab enim. <br />
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, beatae, quod dicta maxime quam nostrum ducimus dolores exercitationem saepe ut
    fugiat similique minus nisi, ratione repudiandae provident. Nobis, ducimus voluptatum!
  </p>
  <p id="match"></p>
  <script>
    // ipsum 문자 찾기

    // d원본 문자열 가져오기
    const p = document.querySelector("p").innerText;
    // 패턴 생성
    const regEx = /ipsum/g;

    document.querySelector("#match").innerText = p.match(regEx);
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/Regex/image.png" align="center" alt="re1">

### 3. 유효성 검증

- 이름 검증

```html
<body>
  <form action="" method="post">
    <div>
      <label for="name">이름</label>
      <input type="text" name="name" id="name" />
      <small class="text-danger"></small>
    </div>
    <div>
      <button type="submit">전송</button>
    </div>
  </form>
  <script>
    // 폼 submit 이 일어나면 이름 유효성 검증
    // 이름을 가져와서 유효성 검증
    // 2 ~ 5 자리여야 하고, 한글이 입력되어야 한다
    document.querySelector("form").addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.querySelector("#name");
      const regEx = /^[가-힣]{2,5}$/;

      if (!regEx.test(name.value)) {
        name.nextElementSibling.innerHTML = "이름을 확인해 주세요";
      } else {
        name.nextElementSibling.innerHTML = "";
      }
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/Regex/image 1.png" align="center" alt="re2">

- 폼 유효성 검증 속성
    
    1) required
    
    2) pattern
    
    3) min, max
    
    4) type = 'email' + required → @ 여부 (간단 검증)
    
    → 서버단에서 요구하는 검증이 필요
    

```jsx
// 폼 submit 일어나면 submit 중지 후 required
// input value 가 들어 있는지 확인
// value 가 어떤 특정 조건을 만족하는지 확인

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const userId = document.querySelector("#userid");
  const password = document.querySelector("#password");
  const confirmPassword = document.querySelector("#confirm-password");

  const regId = /(?=^[A-Za-z])(?=.+\d)[A-Za-z\d]{6,12}$/;
  const regPwd = /(?=^[A-Za-z])(?=.+\d)(?=.+[!@$%])[A-Za-z\d!@$%]{6,15}$/;

	// <div class="invalid-feedback">아이디를 확인해 주세요</div>
	// .invalid-feedback(부트스트랩) display: none; 기본
	// .show 클래스명에 display: block; 부여

  // if (userId.value == '')
  // if (userId.value.length == 0)
  if (!userId.value || !regId.test(userId.value)) {
    userId.nextElementSibling.classList.add("show");
  } else {
    userId.nextElementSibling.classList.remove("show");
  }

  if (!password.value || !regPwd.test(password.value)) {
    password.nextElementSibling.classList.add("show");
  } else {
    password.nextElementSibling.classList.remove("show");
  }

  if (!confirmPassword.value || !regPwd.test(confirmPassword.value)) {
    confirmPassword.nextElementSibling.classList.add("show");
  } else {
    confirmPassword.nextElementSibling.classList.remove("show");
  }

  // password == confirm-password
  // 이전 비밀번호와 다릅니다
  if (password.value != confirmPassword.value) {
    confirmPassword.nextElementSibling.classList.add("show");
    confirmPassword.nextElementSibling.textContent = "이전 비밀번호와 다릅니다";
  } else {
    // password, confirm 둘 다 입력 안 된 경우 값이 동일하기 때문에 remove가 실행됨
    if (confirmPassword.value) {
      confirmPassword.nextElementSibling.classList.remove("show");
    }
  }
});
```

<img src="/assets/img/Coding/JavaScript/Regex/image 2.png" align="center" alt="re3">