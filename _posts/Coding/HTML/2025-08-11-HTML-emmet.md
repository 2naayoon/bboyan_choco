---
title: "[HTML] Emmet 단축키"
date: 2025-08-11 13:00:00 +09:00
categories: [Coding, HTML]
tags:
  - HTML
---

### 1.  HTML 표준 : !

```html
! + tab
```

### 2. 하위요소 생성 : >

```html
div > ul > li
```

### 3. 동급요소 생성 : +

```html
div > h1 + h2
```

### 4. 반복태그 생성 : *

```html
li * 5
```

### 5. class : .

```html
.클래스명 → <div class=클래스명></div>
태그명.클래스명1.클래스명2... → <태그명 class=클래스명1 클래스명2 ...></div>
```

### 6. id : #

```html
#아이디명
태그명#아이디명
```

### 7. 그룹화 : ()

```html
div > (header>ul>li) + (div>section)
```

### 8. 텍스트 : {}

```html
p{Hello}
```

### 9. 넘버링 : $

```html
ul > li.item$*5

<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
```

* Emmet Cheat-Sheet : [https://docs.emmet.io/cheat-sheet/](https://docs.emmet.io/cheat-sheet/)