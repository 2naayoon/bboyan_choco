---
title: "[Oracle] 서브쿼리"
date: 2025-07-29 11:30:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

### 1. 서브쿼리

: SQL 문 내부에서 SELECT 문 사용

- 괄호 ( ) 로 묶어서 사용
- 메인쿼리의 비교 대상과 같은 자료형과 개수로 지정

```sql
SELECT *
FROM 테이블명
WHERE 조건 >, <, >=, <=, <>, != (
    SELECT 컬럼명 FROM 테이블명 WHERE 조건);
```

### 2. 단일행 서브쿼리

: 서브쿼리 실행 결과가 단 하나의 행으로 나오는 서브쿼리

- 사용 가능한 연산자 : >, <, >=, <=, <>, !=, ^=

### 3. 다중행 서브쿼리

: 서브쿼리 실행 결과가 여러 개의 행으로 나오는 서브쿼리

- 사용 가능한 연산자 : IN, ANY(SOME), ALL, EXISTS
    - IN, ANY(SOME) : 메인 쿼리의 조건식을 만족하는 서브쿼리가 하나이상
    - ALL : 메인쿼리의 조건식을 서브쿼리의 결과 모두가 만족
    - EXISTS : 서브쿼리의 결과가 존재하면
    
    ```sql
    SELECT *
    FROM 테이블명 
    WHERE 조건 IN, ANY, ALL, EXISTS (
        SELECT 컬럼명 FROM 테이블명 WHERE 조건);
    ```
  - = ANY : IN과 동일한 결과
  - < ANY : MAX  /  > ANY : MIN 
    

### 4. 다중 열 서브쿼리

: 서브쿼리에 비교할 데이터를 여러 개 지정

```sql
SELECT *
FROM 테이블명 
WHERE 조건 연산자 (
    SELECT 컬럼1, 컬럼2 FROM 테이블명 WHERE 조건);
```

### 5. FROM 절에 사용하는 서브쿼리 (Inline View)

```sql
SELECT *
FROM (SELECT * FROM 테이블명 WHERE 조건) a,
     (SELECT * FROM 테이블명 ) b
WHERE 조건;
```

### 6. SELECT 절에 사용하는 서브쿼리 (Scalar subquery)

```sql
SELECT a.컬럼1, a.컬럼2, (
    SELECT b.컬럼3 FROM 테이블B b WHERE 조건) AS 별칭
FROM 테이블A a;
```