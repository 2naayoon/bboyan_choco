---
title: "[Oracle] 다중 행 함수 / JOIN"
date: 2025-07-29 11:00:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

# 다중 행 함수 / JOIN

### 1. 다중 행 함수

- SUM() : 합계
- AVG() : 평균
- COUNT() : 개수 세기
- MAX() : 최대값
- MIN() : 최소값

### 2. GROUP BY

: 결과 값을 원하는 열로 묶기

```sql
SELECT 컬럼명(열이름), ...
FROM 테이블명
WHERE 조건
GROUP BY 그룹화할 컬럼, ... (HAVING 조건 (옵션))
ORDER BY 조건;
```

### 3. JOIN

: 여러 테이블을 하나의 테이블처럼 사용

- 조건이 없을 경우 : 일치하지 않는 값도 모두 출력

```sql
SELECT *
FROM 테이블A a, 테이블B b;
```

- 내부 JOIN : 일치하는 값이 있을 경우 - 두 테이블의 교집합)

```sql
SELECT a.컬럼1, ...
FROM 테이블A a, 테이블B b
WHERE a.컬럼1 = b.컬럼1;

// 범위 지정 방식으로 JOIN
SELECT a.컬럼1, b.컬럼2, b.컬럼3, ...
FROM 테이블A a, 테이블B b
WHERE a.컬럼1 BETWEEN b.컬럼2 AND b.컬럼3;

// SELF JOIN
SELECT *
FROM 테이블A a1, 테이블A a2
WHERE a1.컬럼1 = a2.컬럼2;
```

```sql
// SQL-99 표준 구문
SELECT *
FROM 테이블A INNER JOIN 테이블B ON JOIN조건
WHERE 조건;
```

- 외부 JOIN : 일치하지 않는 값도 출력
    - LEFT OUTER JOIN : 일치하지 않는 값을 왼쪽 테이블 기준
    - RIGHT OUTER JOIN : 일치하지 않는 값을 오른쪽 테이블 기준
    
    ```sql
    SELECT *
    FROM 테이블A a LEFT OUTER JOIN 테이블B b ON JOIN조건;
                   RIGHT OUTER JOIN
    ```
    
- 3개의 테이블 JOIN

```sql
SELECT *
FROM 테이블A a
JOIN 테이블B b ON a.컬럼1 = b.컬럼1 
JOIN 테이블C c ON b.컬럼1 = c.컬럼1
```
