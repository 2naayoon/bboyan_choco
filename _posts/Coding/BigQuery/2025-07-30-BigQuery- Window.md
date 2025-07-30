---
title: "[BigQuery] 윈도우 함수"
date: 2025-07-31 10:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

## # 윈도우 함수(Window/Analytics Function)

: 그룹 내 순위, 누적 합계, 평균 등을 계산할 때 유용

```sql
RANK() OVER (PARTITION BY 학년 ORDER BY 키 DESC) AS 학년 별 키 순위
윈도우 자체 함수 | OVER 키워드 | OVER 절(PARTITION BY, ORDER BY)
(RANK(), LAG(), SUM() 등)
```

- 윈도우 함수에서 `CURRENT ROW` 기본으로 생략되어 있음
    - 명시해줘야 하는 경우

```sql
RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
```

📍리텐션 지표 쿼리 짤 때 많이 사용

### 1. 탐색 함수

- LEAD : 후속 행의 값 반환
    - 이후의 값이 없을 때 NULL 반환
    - ORDER BY : 파티션 안에서 정렬

```
LEAD/LAG(컬럼, 순서) OVER (PARTITION BY 파티션_컬럼 ORDER BY 정렬_컬럼)
```

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image.png" align="center" alt="Window1">

```sql
SELECT
 user_id,
 visit_month,
 LEAD(visit_month, 1) OVER (PARTITION BY user_id ORDER BY visit_month) AS
after_visit_month,
 LEAD(visit_month, 2) OVER (PARTITION BY user_id ORDER BY visit_month) AS
after_two_visit_month
FROM advanced.analytics_function_01
ORDER BY user_id
```

- LAG : 이전 행의 값 반환

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 1.png" align="center" alt="Window2">

```sql
SELECT
 user_id,
 visit_month,
 LAG(visit_month) OVER (PARTITION BY user_id ORDER BY visit_month) AS
before_visit_month
FROM advanced.analytics_function_01
ORDER BY user_id
```

- FIRST_VALUE : 첫번째 값

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 2.png" align="center" alt="Window3">
  

```sql
LECT
 user_id,
 visit_month,
 FIRST_VALUE(visit_month) OVER (PARTITION BY
user_id ORDER BY visit_month) AS first_visit_month
FROM advanced.analytics_function_01
ORDER BY user_id
```

- LAST_VALUE : 마지막 값

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 3.png" align="center" alt="Window4">

```sql
SELECT
 user_id,
 visit_month,
 LAST_VALUE(visit_month) OVER (PARTITION BY
user_id ORDER BY visit_month) AS last_visit_month
FROM advanced.analytics_function_01
ORDER BY user_id
```

```
💡 FIRST_VALUE, LAST_VALUE의 NULL 처리
    - FIRST_VALUE, LAST_VALUE NULL 포함
        - IGNORE NULLS 사용하면 NULL 제외 `FIRST VALUE(컬럼 IGNORE NULLS) OVER ~`
    - 집계 함수는 NULL 제외
```

```sql
SELECT
  *,
  FIRST_VALUE(numbers) OVER(PARTITION BY date ORDER BY numbers) AS first_nulls,
  FIRST_VALUE(numbers IGNORE NULLS) OVER(PARTITION BY date ORDER BY numbers ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING) AS first_ignore
FROM raw_data
```

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 4.png" align="center" alt="Window5">

```sql
SELECT
 COUNT(*) AS cnt1, # 전체 로우수 체크
 COUNT(number_of_orders) AS cnt2, # NULL 제외
 AVG(number_of_orders) AS avg1, # NULL 제외
 MAX(number_of_orders) AS max1, 
 MIN(number_of_orders) AS min1
FROM raw_data;
```

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 5.png" align="center" alt="Window6">

### 2. 번호 지정 함수

- RANK : 파티션 별 순위 지정, 중복이 있으면 공동 N으로 처리하고 그 다음 값 패스(공동 2등이 있으면 3등은 없고 4등이 나옴)
    - DENSE_RANK : 동일한 값이면 중복 순위를 부여하고, 다음 순위는 중복 순위와 상관없이 순차적으로 반환

```sql
SELECT
 *,
 RANK() OVER(PARTITION BY product_type
ORDER BY revenue DESC) AS rank
FROM Table
```

- ROW_NUMBER : 중복이 있으면 순차적으로 순서 지정 (실행 시마다 값이 바뀔 수 있음)

```sql
SELECT
 *,
 ROW_NUMBER() OVER(PARTITION BY product_type ORDER BY revenue DESC) AS row_num
FROM Table
```

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 6.png" align="center" alt="Window7">
  <img src="/assets/img/Coding/BigQuery/윈도우 함수/image 7.png" align="center" alt="Window8">
</div>

📍ROW_NUMBER 순서 보장 - ORDER BY에 id 기준을 추가하면 고정된 값을 얻을 수 있음

```sql
SELECT
 *,
 ROW_NUMBER() OVER (PARTITION BY product_type ORDER BY revenue DESC,
id) AS row_num 
FROM Table
```

### 3. 집계 분석 함수

: GROUP BY가 여러 Row의 값을 집계해서 반환하는 반면 윈도우 함수는 각각의 Row에 값을 계산해서 반환

```sql
SELECT
 store,
 SUM(sales) AS sum_sales
FROM sales_data
GROUP BY
 store
```

```sql
SELECT
 store,
 sales_date,
 sales,
 SUM(sales) OVER(PARTITION BY store) AS sum_sales
FROM sales_data
```

<img src="/assets/img/Coding/BigQuery/윈도우 함수/image 8.png" align="center" alt="Window9">

- 집계 분석
  - AVG
  - COUNT
  - SUM
  - MAX / MIN
```sql
집계 함수(컬럼) OVER(PARTITION BY 파티션_컬럼)
```
- 탐색
  - LAG
  - LEAD
  - FIRST_VALUE
  - LAST_VALUE
- 번호 지정
  - RANK
  - ROW_NUMBER
```sql
탐색, 번호 지정 함수(컬럼) OVER(PARTITION BY 파티션_컬럼 ORDER BY 정렬컬럼)
```

### 4. Frame 지정

: 데이터의 범위를 제한해서 연산하고 싶은 경우 (집계 분석에서 많이 사용)

- ROWS : 물리적인 행 수를 기준으로 경계를 지정
    - 이전 행, 이후 3개의 행
    - ROWS Frame를 더 많이 사용
- RANGE : 논리적인 값의 범위를 기준으로 지정
    - 값의 3일 전, 3일 후
- Frame의 시작과 끝 지점 명시하기
    - PRECEDING : 현재 행 기준으로 이전 행
    - CURRENT ROW : 현재 행
    - FOLLOWING : 현재 행 기준으로 이후 행
    - UNBOUNDED : 처음부터 또는 끝까지(사전적 의미 : 묶이지 않고 제한되지 않음)
        - FIRST_VALUE, LAST_VALUE 시 명시해야 함

```sql
# 현재 행과 그 앞뒤 한 행씩을 포함해서 평균
AVG(col) OVER (PARTITION BY product_type ORDER BY timestamp
ROWS BETWEEN 1 PRECEDING AND 1 FOLLOWING)

# 파티션의 처음부터 현재 행을 포함한 평균
AVG(col) OVER (PARTITION BY product_type ORDER BY timestamp
ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)
```

### 5. QUALIFY

: 윈도우 함수의 결과에 대해 조건 지정

```sql
 SELECT
  order_id,
  order_date,
  user_id,
  amount,
  SUM(amount) OVER (PARTITION BY user_id) AS amount_total
FROM advanced.orders
QUALIFY amount_total >= 500
```

```
💡 로그 : 통나무에서 왔음. 히스토리, 기록. 
   로그성 데이터 : 기록이 한줄에 하나씩(Row). RAW. 이벤트 데이터 > 어떤 유저가 무엇을 했다
      - 고객에게(유저에게) 노출을 하진 않음
      - 회사마다 다름. AWS라는 클라우드의 저장소(파일 저장소 - S3) -> 데이터 웨어하우스, 데이터베이스
      - Google Analytics 4, Firebase 플랫폼을 사용해서 데이터 저장하면 생기는 형태
      - 앱 로그, 웹 로그                     데이터베이스 데이터가 많이 나올 것. Table
                        MySQL, PostgreSQL, Oracle
      - 형태가 개발자가 어떻게 개발하냐에 따라서 그냥 못생긴 형태도 있음
      - 데이터 엔지니어가 Table 형태로 가공해서 줌
   데이터베이스 데이터 : 거래와 관련된 데이터.배민. 주문 데이터. 주문 목록  
```