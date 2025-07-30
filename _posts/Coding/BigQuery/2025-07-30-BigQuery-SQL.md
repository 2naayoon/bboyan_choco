---
title: "[BigQuery] SQL 문법"
date: 2025-07-30 15:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

# SQL 문법

```sql
SELECT 컬럼
FROM 테이블
WHERE 조건문
```

📍Ctrl + / : 주석

- 테이블명 : `프로젝트명.데이터세트.테이블명` (프로젝트명, `` 생략 가능)

### 1. SELECT

: 데이터를 Column 단위로 추가

- `*` : 전체 row
- COUNT(*) : NULL 상관없이 Row 수만 센다
- COUNT(col) : NULL이 아닌 col 값만 COUNT

📍AS : 별칭

- 날짜 : `(Backtick) 로 감싸기

```sql
SELECT 컬럼 AS "별칭"

FROM 테이블 AS "별칭"
```

### 2. UNION ALL

: 데이터를 Row 단위로 추가 

### 3. WHERE

: 조건 지정

- = : 같다
- != : 같지 않다
- AND : 그리고 (교집합)
- OR : 또는 (합집합)

### 4. 집계 GROUP BY

- 집계 함수 : SUM, AVG, COUNT, …
- ALL (BigQuery만 있음)
- 1, 2, … : select 조회 컬럼 순서로 지정 가능 `GROUP BY 1`

```sql
SELECT 컬럼, 집계 함수
FROM 테이블
WHERE 조건문
GROUP BY 집계할 컬럼
```

📍ALL : 집계할 컬럼 대신 ALL 을 쓰면 빅쿼리에서 집계 (빅쿼리만 가능-2025.05)

```
GROUP BY ALL
```

### 5. DISTINCT

: 중복 제외하고 고유값만 확인

```sql
SELECT 컬럼, COUNT(DISTINCT *)
FROM 테이블
GROUP BY 집계할 컬럼
```

- GROUP BY와 비슷함
    - GROUP BY : 특정 값을 기준으로 집계 (본질적으로는 둘 다 중복을 제거)

```sql
SELECT
  col
  -- DISTINCT col
FROM table
GROUP BY col
```

### 6. HAVING

: GROUP BY 후 집계 결과에 조건을 설정하고 싶은 경우 사용

```sql
SELECT 컬럼, COUNT(*) AS col1_count
FROM 테이블
GROUP BY 집계할 컬럼
HAVING col1_count > 3
```

### 7. ORDER BY

: 정렬

- DESC : 내림차순
- ASC : 오름차순 (Default)
- 1, 2, … : select 조회 컬럼 순서로 지정 가능 `ORDER BY 1`

```sql
SELECT *
FROM 테이블
ORDER BY DESC
```

### 8. LIMIT

: 출력 row 수 제한

```sql
SELECT 컬럼
FROM 테이블
LIMIT 10
```