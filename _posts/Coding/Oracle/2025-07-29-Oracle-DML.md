---
title: "[Oracle] 데이터 조작어"
date: 2025-07-29 11:40:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

## #DML(Data Manipulation Language)

: 데이터 조작 언어

### 1. 조회 SELECT

### 2. 삽입 INSERT

```sql
INSERT INTO 테이블명 (컬럼1, 컬럼2, ...)
VALUES (데이터1, 데이터2, ...);
```

### 3. 수정 UPDATE

```sql
// 전체 변경
UPDATE 테이블명 SET 수정할 내용, ... ;

// 일부 변경
UPDATE 테이블명 SET 수정할 내용, ... WHERE 조건;
```

### 4. 삭제 (행 단위) DELETE

```sql
DELETE 테이블명 WHERE 조건;
DELETE FROM 테이블명 WHERE 조건;
```

### 5. 서브쿼리 + DML

<img src="/assets/img/Coding/Oracle/Untitled.png" alt="DML1"/>