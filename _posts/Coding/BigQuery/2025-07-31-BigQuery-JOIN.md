---
title: "[BigQuery] JOIN / 서브쿼리"
date: 2025-07-31 09:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

# JOIN / 서브쿼리

```
💡 정규화 - 하나의 테이블엔 해당 데이터만 저장
   유저 테이블 - 유저 정보
   주소 테이블 - 주소 정보
    …
   join - 오더 테이블에 유저 정보 가져오기
```

### 1. JOIN

: 서로 다른 테이블을 연결

- Key : id → A_id
- 공통적으로 존재하는 컬럼(=Key)를 기준으로 데이터를 연결

```sql
SELECT
  A.col1,
  A.col2,
  B.col11,
  B.col12
FROM table1 AS A
LEFT JOIN table2 AS B
  ON A.key = B.key
```

- 기준 테이블 : row 수가 더 많은 걸 기준으로 두는 방법

### 2. (INNER) JOIN

: 두 테이블의 공통 요소만 연결

```sql
SELECT
 col
FROM table_a AS A
INNER JOIN table_b AS B
  ON A.key = B.key
```

### 3. LEFT/RIGHT (OUTER) JOIN

: 왼쪽/오른쪽 테이블 기준으로 연결

```sql
SELECT
 col
FROM table_a AS A
LEFT/RIGHT JOIN table_b AS B
  ON A.key = B.key
```

### 4. FULL (OUTER) JOIN

: 양쪽 기준으로 연결

```sql
SELECT
 col
FROM table_a AS A
FULL JOIN table_b AS B
  ON A.key = B.key
```

### 5. CROSS JOIN

: 두 테이블의 각각의 요소를 곱하기

```sql
SELECT
 col
FROM table_a AS A
CROSS JOIN table_b AS B
```


### 6. 서브쿼리

: 일회성으로 사용할 때 유용

```sql
SELECT
 col, col2
FROM (
 SELECT
 col, col2, col3 …
 FROM table
)
```

### 7. WITH

: 쿼리 내에서 반복적으로 사용할 수 있음

- 하나의 간이 테이블을 만들 수 있음

```sql
WITH name_a AS (
 SELECT
 col
 FROM Table
), name_b AS (
 SELECT
 col2
 FROM Table2
)
SELECT
 col
FROM name_a
```

### 8. PARTITION

: 특정 기준으로 데이터를 분리

- 전체 데이터를 스캔하는 것보다 파티션을 설정한 곳만 스캔하는 것이 더 빠름
- 특정 일자의 데이터를 모두 변경하거나 삭제해야 하면 파티션을 설정해서 삭제할 수 있음
