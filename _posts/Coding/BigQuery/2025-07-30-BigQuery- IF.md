---
title: "[BigQuery] 조건문"
date: 2025-07-31 08:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

### 1. CASE WHEN

: 여러 조건이 있을 때 유용

```sql
SELECT
  CASE
    WHEN 조건1 THEN 조건1이 참일 때 결과
    WHEN 조건2 THEN 조건2가 참일 때 결과
    ELSE 그 외 조건일 때 결과
  END AS 별칭
```

📍IN : and 조합

📍IS NULL : NULL 여부 조회

### 2. IF

: 단일 조건일 경우 유용

```sql
SELECT
  IF(조건문, True일 때 값, False일 때 값) AS 별칭
```

- IFNULL(expr, null_result) : 값이 NULL일 경우 반환값 지정

- https://cloud.google.com/bigquery/docs/reference/standard-sql/conditional_expressions

### 3. COUNTIF

: 특정 조건에 맞는 데이터만 카운트

### 4. COALESCE

: 첫 번째 인자부터 순서대로 검사하여 NULL인 값을 찾아 반환

```sql
COALESCE(value1, value2, value3,... 반환할 값)
```