---
title: "[JavaScript] ajax"
date: 2025-08-13 17:00:00 +09:00
categories: [Coding, JavaScript]
tags:
  - JavaScript
---

# ajax

```
💡 ajax(Asynchronous JAvaScript and XML) : 비동기 방식으로 데이터 교환
   JavaScript Object Notation (JSON) : 서버-클라이언트 간 데이터 교환 파일
```

```jsx
▶ 동영상 재생 요청
요청 - request
클라이언트 -----→ 서버

응답 - response
클라이언트 ←----- 서버

응답 시 : 페이지 내에 데이터를 포함한 응답
        - 데이터만 응답 시 (json, excel, csv) → ajax 사용
```

### 1. fetch

: 비동기 통신을 위한 자바스크립트 내장 API

```jsx
fetch("주소", {요청시 세부사항 나열})
.then(서버에서 도착한 응답을 받아서 적절한 타입으로 변환하는 함수)
.then(변환된 데이터를 받는 함수)
.catch(서버에서 응답이 제대로 안 온 경우 처리하는 함수);
```

```
💡 Error 체크
    - ok : 200
    - not found : 404, 403, 401
    - 서버 오류 : 500
```

* json 데이터파일 생성 : [jsonplaceholder 가상 데이터 사용](https://jsonplaceholder.typicode.com/)

```jsx
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => response.json())
  .then((json) => console.log(json));
  
// {
//  "userId": 1,
//  "id": 1,
//  "title": "delectus aut autem",
//  "completed": false
// }
```


💡 json 과 자바스크립트 객체 구조가 동일

```jsx
// json 타입
{"userId": 1, "id": 1, "title": 'delectus aut autem', "completed": false}

// 자바스크립트 객체
{userId: 1, id: 1, title: 'delectus aut autem', completed: false}
// 자바스크립트 배열
[ ]
```

### 2. text 데이터 불러오기

- text 데이터 (깃허브 저장 후 활용)

```
<h1>우유</h1>
<h2>3500</h2>
<h1>커피</h1>
<h2>3600</h2>
<h1>아이스티</h1>
<h2>4500</h2>
```

- script

```html
<body>
  <ul class="container">
    <li>메뉴 1</li>
    <li>메뉴 2</li>
    <li>메뉴 3</li>
    <li>메뉴 4</li>
  </ul>
  <div class="result"></div>
  <script>
    // 메뉴1 클릭하면 서버로부터 데이터 가져오기
    document.querySelector(".container li:first-child").addEventListener("click", () => {
      fetch("https://깃허브저장소/data.txt")
        .then((response) => {
          if (!response.ok) throw new Error("주소를 확인하세요");
          // 데이터 잘 도착 시 리턴값
          return response.text();
        })
        .then((data) => {
	        console.log(data);
          document.querySelector(".result").innerHTML = data;
        })
        .catch((error) => console.log(error));
    });
  </script>
</body>
```

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/JavaScript/ajax/image.png" align="center" alt="aj1">
  <img src="/assets/img/Coding/JavaScript/ajax/image 1.png" align="center" alt="aj2">
</div>

### 3. json 데이터 가져오기

- json 데이터 (깃허브 저장 후 활용)

```json
[
    {
        "version": "1.5",
        "codename": "cupcake"
    },
    {
        "version": "1.6",
        "codename": "donut"
    },
    {
        "version": "1.7",
        "codename": "kitkat"
    }
]
```

- script

```html
<body>
  <ul class="container">
    <li>메뉴 1</li>
    <li>메뉴 2</li>
    <li>메뉴 3</li>
    <li>메뉴 4</li>
  </ul>
  <div class="result"></div>
  <script>
    // 메뉴2 클릭하면 서버로부터 데이터 가져오기
    document.querySelector(".container li:nth-child(2)").addEventListener("click", () => {
      fetch("https://깃허브저장소/version.json")
        .then((response) => {
          if (!response.ok) throw new Error();
          // 데이터 잘 도착 시 리턴값
          return response.json();
        })
        .then((data) => {
          console.log(data);

          // result 에 보여주기 ul li
          // data 를 받아와서 . 으로 접근
          let result = `<ul>`;
          data.forEach((item) => {
            result += `<li>version : ${item.version}</li>`;
            result += `<li>codename : ${item.codename}</li>`;
          });
          result += `</ul>`;

          document.querySelector(".result").innerHTML = result;
        })
        .catch(() => console.log("오류"));
    });
  </script>
</body>
```

<img src="/assets/img/Coding/JavaScript/ajax/image 2.png" align="center" alt="aj3">


### 4. json 데이터로 리스트 만들기

- json 더미 데이터 생성 : [mockaroo 더미데이터 생성](https://www.mockaroo.com/)

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/JavaScript/ajax/image 3.png" align="center" alt="aj4">
  <img src="/assets/img/Coding/JavaScript/ajax/image 4.png" align="center" alt="aj5">
</div>

```html
<body>
  <div class="container mt-5">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">id</th>
          <th scope="col">first_name</th>
          <th scope="col">email</th>
          <th scope="col">gender</th>
          <th scope="col">ip</th>
        </tr>
      </thead>
      <tbody>
        <!-- <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>@mdo</td>
        </tr> -->
      </tbody>
    </table>
  </div>
  <script>
    // MOCK_DATA.json 가져와서 tbody 안에 보여주기
    fetch("https://깃허브저장소/MOCK_DATA.json")
      .then((response) => {
        if (!response.ok) throw new Error();
        // 데이터 잘 도착 시 리턴값
        return response.json();
      })
      .then((data) => {
        let result = "";
        data.forEach((item) => {
          result += `<tr>`;
          result += `<th scope="row"> ${item.id}</th>`;
          result += `<td>${item.first_name}</td>`;
          result += `<td>${item.email}</td>`;
          result += `<td>${item.gender}</td>`;
          result += `<td>${item.ip_address}</td>`;
          result += `</tr>`;
        });

        document.querySelector("tbody").innerHTML = result;
      })
      .catch(() => console.log("오류"));
  </script>
</body>
```

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/JavaScript/ajax/image 5.png" align="center" alt="aj6">
  <img src="/assets/img/Coding/JavaScript/ajax/image 6.png" align="center" alt="aj7">
</div>
<figcaption align="center" style="color:silver">데이터 fetch 확인</figcaption>


### 5. 오픈 API 가져오기

```
💡 오픈API - API 별 사용법에 따라 사용
   무조건 데이터(xls, csv, json, xml)만 제공

    * Open API 데이터 가져오는 방법 - xhr(옛날), JQuery, fetch, axios
      Ajax문법 - 다양
                JQuery 지양 (예전 방식)
                fetch 함수 지향
                axios (설치해서 사용) : fetch 보다 간단

      • xls, csv, json : db 삽입 가능
      • jdbc 프로그램 작성 가능
      • 실시간 요청 : fetch 데이터 가져온 후 서비스 프로그램 작성 가능
      • key 발급, 요청 제한 (요청 多 서버 터짐)

      * 포스트맨 등으로 API 테스트 후 사용
```

- 영화진흥위원회 오픈 API 사용 (json) : [영화진흥위원회 오픈 API](https://www.kobis.or.kr/kobisopenapi/homepg/main/main.do)
    - 일별 박스오피스
    - 영화 상세정보
    
    ```
                                                                                             key, targetDt 필수 - key는 발급받아 사용해야함
    https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20240312
    
    http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=82ca741a2844c5c180a208137bb92bd7&movieCd=20124079
    ```

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/Coding/JavaScript/ajax/image 7.png" align="center" alt="aj8">
  <img src="/assets/img/Coding/JavaScript/ajax/image9.webp" align="center" alt="aj9">
</div>


- html
    
    ```html
    <body>
      <div class="container">
        <h3>일별 박스 오피스</h3>
        <div class="box1">
          <input type="text" name="txtYear" id="txtYear" size="6" />년
          <!-- select>option[value="$"]{$월}*12 -->
          <select name="selMon" id="selMon">
            <option value="01">1월</option>
            <option value="02">2월</option>
    										       ...
    				<option value="12">12월</option>
          </select>
          <!-- select>option[value="$"]{$일}*31 -->
          <select name="selDay" id="selDay">
            <option value="01">1일</option>
            <option value="02">2일</option>
    									         ...
            <option value="31">31일</option>
          </select>
          <button type="button">확인</button>
          <div id="msg"></div>
          <div class="box2"></div>
        </div>
      </div>
      <script src="./movie.js"></script>
    </body>
    ```
    
- script
    - 날짜 선택창에 어제 날짜 띄우기
    
    ```jsx
    const txtYear = document.querySelector("#txtYear");
    const selMon = document.querySelector("#selMon");
    const selDay = document.querySelector("#selDay");
    
    const init = () => {
      // 오늘 날짜 구하기
      const today = new Date();
    
      // 년, 월, 일 변수에 담기
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDate() - 1;
    
      // 화면에 보여주기
      txtYear.value = year;
      // 1~9월 : "0"+month → 01, 02, ...
      // 1~9일 : "0"+day → 01, 02, ...
      selMon.value = month < 10 ? "0" + month : month;
      selDay.value = day < 10 ? "0" + day : day;
    };
    init();
    ```
    
    - 사용자가 선택한 날짜의 박스 오피스 가져오기
    
    ```jsx
    document.querySelector("button").addEventListener("click", (e) => {
      let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=";
      url += txtYear.value + selMon.value + selDay.value;
      console.log(url);
    
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => {
          console.log(data);
    
          // json 데이터의 필요한 요소 추출 ( . 찍고 접근)
          let boxofficeList = data.boxOfficeResult.dailyBoxOfficeList;
          console.log(boxofficeList);
    
          let result = "";
          boxofficeList.forEach((movie) => {
            // 순위
            // 1위(▲1 / 0 / ▼1) : 파묘
            let rankInten = movie.rankInten;
            if (rankInten > 0) {
              rankInten = "▲";
            } else if (rankInten < 0) {
              rankInten = "▼";
            }
    
            result += `${movie.rank}위 (`;
            result += `${rankInten + movie.rankInten}) : `;
            result += `<a href="#" onclick='javascript:show(${movie.movieCd})'>${movie.movieNm}</a><br>`;
          });
          // 박스 안에 넣기
          document.querySelector("#msg").innerHTML = result;
        })
        .catch(() => console.log("주소 확인"));
    });
    ```
    
    - 영화 상세정보 가져오기
    
    ```jsx
    function show(movieCd) {
      console.log(movieCd);
    
      url = " http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=82ca741a2844c5c180a208137bb92bd7&movieCd=";
      url += movieCd;
    
      // 영화한글제목(movieNm), 영어제목(movieNmEn), 상영시간(showTm), 감독(directors), 배우(actors)
      fetch(url)
        .then((response) => {
          if (!response.ok) throw new Error();
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let result = "";
    
          let movieInfo = data.movieInfoResult.movieInfo;
          let movieNm = movieInfo.movieNm;
          let movieNmEn = movieInfo.movieNmEn;
          let showTm = movieInfo.showTm;
          // 감독, 배우 배열
          let directors = "";
          movieInfo.directors.forEach((director) => {
            directors += `${director.peopleNm} `;
          });
          let actors = "";
          movieInfo.actors.forEach((actor) => {
            actors += `${actor.peopleNm} `;
          });
    
          result += `<ul><li> 영화제목 : ${movieNm}</li>`;
          result += `<li> 영어제목 : ${movieNmEn}</li>`;
          result += `<li> 상영시간 : ${showTm}분</li>`;
          result += `<li> 감독 : ${directors}</li>`;
          result += `<li> 출연배우 : ${actors}</li>`;
          result += `</ul>`;
          document.querySelector(".box2").innerHTML = result;
        })
        .catch(() => console.log("오류"));
    }
    ```
    
    <img src="/assets/img/Coding/JavaScript/ajax/image 8.png" align="center" alt="aj10">