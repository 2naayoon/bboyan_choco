---
title: "[Oracle] 객체 종류"
date: 2025-07-29 12:05:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

### 1. 가상테이블 VIEW

: 편리성, 보안성

- VIEW 생성

```sql
CREATE VIEW 뷰이름 AS (SELECT * FROM 원본테이블명);
```

- VIEW 는 권한을 가진 사용자만 생성 가능
- WITH READ ONLY : 읽기만 가능 (INSERT, UPDATE, DELETE 불가능)

```sql
CREATE 뷰이름 AS (SELECT * FROM 원본테이블명) WITH READ ONLY;
```

- VIEW 삭제

```sql
DROP VIEW 뷰이름;
```

### 2. 색인, 목차 INDEX

: 기본키, 고유키일 때 자동으로 생성

- INDEX 생성

```sql
CREATE INDEX 인덱스명 ON 테이블명(인덱스로 사용할 컬럼명);
```

- INDEX 삭제

```sql
DROP INDEX 인덱스명;
```

### 3. SEQUENCE

: 하나씩 증가하는 값이 필요할 때 주로 사용

  다른 DB의 AUTO_INCREMENT 와 동일한 역할

- SEQUENCE 생성

```sql
CREATE SEQUENCE 시퀀스명
INCREMENT BY 증감값 START WITH 시작값 MAXVALUE 최대값 MINVALUE 최소값
NOCYCLE CACHE 숫자;
```

- SEQUENCE 삭제

```sql
DROP SEQUENCE 시퀀스명;
```