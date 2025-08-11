---
title: "[HTML] HTML 기초"
date: 2025-08-11 08:00:00 +09:00
categories: [Coding, HTML]
tags:
  - HTML
---

## # HTML(HyperText Markup Language)

: Markup Language - 태그를 이용하여 문서나 데이터 구조 생성 (브라우저에 문서 구조를 보여주는 언어)

```
💡 웹사이트 HTML, CSS 확인
   F12 - Elements, Styles
```

<img src="/assets/img/Coding/HTML/HTML 기초/Untitled.png" align="center" alt="basic1">

### 1. 기본 코드

- ! : HTML 기본 코드 생성 단축키
- `<html> - </html>` : 열고 닫기
- head : 페이지에 대한 지식, 참고 사항들
- body : 실제 페이지 표현식

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 문자 인코딩 방식 -->
    <meta charset="UTF-8" />
    <!-- viewport : 화면 영역이 늘어나고 줄어드는 비율 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 아이콘(favicon) 타이틀 -->
    <title>네이버</title>
  </head>
  <body>
    <!-- 내용 작성 -->
  </body>
</html>
```

- 요소(elements) : `<p>`
- 속성(attribute) : name, id
    - 전역속성 : 모든 태그에 사용할 수 있는 속성
        - id : 현재 페이지 내에 유일한 값을 부여 (페이지 내에서 동일 값 부여 X)
            - 아이디 값을 다른 곳에서 사용하려면 # 을 붙여주면 됨
        - class : 동일 값 가능
        - data-* : 사용자 정의 데이터 속성을 지정 (대문자 안 됨)
            - data-id="", data-animal-type="”
        - name : 이름 지정
        - style : 디자인 직접 지정
    - 특정 태그 속성 : src, alt, href
- 값(value) : para1

### 2. 태그 Tag

: 중첩 가능 (해석은 안 쪽 태그부터)

  태그가 잘못 사용되어도 문서가 에러 나는 경우는 없음

- <> : 태그
- / : 닫는 태그
- p : 문단 태그

```html
<!-- p>lorem -->
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic veniam mollitia magnam officia aut vel quidem minima tempora consectetur incidunt iure, vitae alias corrupti fuga, cupiditate doloremque similique asperiores nihil?</p>
```

- br : 엔터

```html
<!-- lorem : 텍스트 채우기 (의미 없음)
     lorem 500 : 500자로 텍스트 채우기 -->

<p>
  Lorem ipsum dolor <br />
  sit amet consectetur <br />
  adipisicing elit.
</p>
```

- pre : 작성한 그대로 화면 출력 (활용도 낮음)
- head : 제목 (숫자)
    - 숫자가 커질수록 글자는 작아진다
    
    ```html
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    ```
    
<img src="/assets/img/Coding/HTML/HTML 기초/Untitled 1.png" align="center" alt="basic2">

### 3. Text

- 블럭 요소(태그) : 공간이 있어도 한 줄 다 쓰는 요소 (ex : p 태그)
- 인라인 요소(태그) : 공간이 있다면 옆으로 배치되는 요소
- b(굵게), strong(중요한) : 진하게
- i(이태릭), em(강조하다) : 기울임꼴
- sub, sup : 아랫첨자, 윗첨자
- del : 제거 문자
- small : 문자 기본 크기보다 작게 (기본 글자 크기 16px)

```html
<b>This text is bold</b>
<strong>This text is important</strong>
<i>This text is italic</i>
<em>This text is emphasized</em>
<small>This is some smaller text.</small>
<p>My favorite color is <del>blue</del> red.</p>
<p>This is <sub>subscripted</sub> text.</p>
<p>This is <sup>superscripted</sup> text.</p>
```

<img src="/assets/img/Coding/HTML/HTML 기초/Untitled 2.png" align="center" alt="basic3">

* 중간 태그 삽입 : ctrl + shift + p → Emmet : wrap → 태그 작성