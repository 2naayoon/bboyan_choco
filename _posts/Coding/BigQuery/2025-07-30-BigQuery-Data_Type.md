---
title: "[BigQuery] 자료 타입"
date: 2025-07-30 10--18:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

### 1. 데이터 타입

- 숫자, 문자, 시간, 날짜, Boolean

### 2. CAST / SAFE_CAST

: 자료 타입 변경

📍SAFE_ : 실패 시 NULL 반환 (SAFE_CAST, …)

```sql
# 숫자 1을 문자 1로 변경
# 실패 시 ERROR
SELECT
	CAST(1 AS STRING)
```

```sql
# 실패 시 NULL 반환
SELECT
	SAFE_CAST("SQL" AS INT64)
```

### 3. 수학 함수

- https://cloud.google.com/bigquery/docs/reference/standard-sql/mathematical_functions

### 4. 문자열 함수

- CONCAT : 문자열 붙이기
- SPLIT : 문자열 분리하기
- REPLACE : 특정 단어 수정하기
- TRIM : 문자열 자르기
- UPPER : 대문자 변환

```sql
SELECT
	CONCAT("안녕", "하세요") AS concat_example,
	SPLIT("가, 나, 다, 라", ",") AS split_example,
	REPLACE("안녕하세요", "안녕", "실천") AS replace_example,
	TRIM("안녕하세요", "하세요") AS trim_example,
	UPPER("ab") AS upper_example
```

<img src="/assets/img/Coding/BigQuery/자료 타입/image.png" align="center" alt="TYPE1">

### 5. 날짜 및 시간 데이터

- DATE : 날짜 표시 (2023-12-31)
- DATETIME : 날짜와 시간 표시 (2023-12-31 14:00:00)
- TIME : 시간만 표시 (23:59:59.00)
- TIMESTAMP : UTC부터 경과한 시간을 나타내는 값 (2023-12-31 14:00:00 UTC)

\* ms(millisecond) : 1/1000초
\* μs(microsecond) : 1/1000000초

```sql
SELECT
	TIMESTAMP_MILLIS(1704176819711) AS milli_to_timestamp_value,
	TIMESTAMP_MICROS(1704176819711000) AS micro_to_timestamp_value,
	DATETIME(TIMESTAMP_MICROS(1704176819711000)) AS datetime_value,
	DATETIME(TIMESTAMP_MICROS(1704176819711000),'Asia/Seoul') AS datetime_value_asia;
```

<img src="/assets/img/Coding/BigQuery/자료 타입/image 1.png" align="center" alt="TYPE2">

- CURRENT_DATETIME : 현재 DATETIME 출력
- EXTRACT : 날짜 데이터에서 특정 부분을 추출
    - DATOFWEEK : 한 주의 첫날이 일요일인 [1,7] 범위의 값을 반환

```sql
SELECT
	EXTRACT(파트 FROM 시간컬럼)

SELECT
	EXTRACT(DATE FROM DATETIME "2024-01-02 14:00:00") AS date,
	EXTRACT(YEAR FROM DATETIME "2024-01-02 14:00:00") AS year,
	EXTRACT(MONTH FROM DATETIME "2024-01-02 14:00:00") AS month,
	EXTRACT(DAY FROM DATETIME "2024-01-02 14:00:00") AS day,
	EXTRACT(HOUR FROM DATETIME "2024-01-02 14:00:00") AS hour,
	EXTRACT(MINUTE FROM DATETIME "2024-01-02 14:00:00") AS minute,
	EXTRACT(DAYOFWEEK FROM DATETIME "2024-01-02 14:00:00") AS dayofweek
```

<img src="/assets/img/Coding/BigQuery/자료 타입/image 2.png" align="center" alt="TYPE3">

- DATETIME_TRUNC :  특정 연, 월, 일, 시간 등의 밑은 0으로 처리

```sql
SELECT
	DATETIME_TRUNC(시간컬럼, 파트)

SELECT
	DATETIME "2024-03-02 14:42:13" AS original_data,
	DATETIME_TRUNC(DATETIME "2024-03-02 14:42:13", DAY) AS day_trunc,
	DATETIME_TRUNC(DATETIME "2024-03-02 14:42:13", YEAR) AS year_trunc,
	DATETIME_TRUNC(DATETIME "2024-03-02 14:42:13", MONTH) AS month_trunc,
	DATETIME_TRUNC(DATETIME "2024-03-02 14:42:13", HOUR) AS hour_trunc;
```
<img src="/assets/img/Coding/BigQuery/자료 타입/image 3.png" align="center" alt="TYPE4">

- PARSE_DATETIME : 문자열로 저장된 DATETIME을 DATETIME 타입으로 바꾸고 싶은 경우

```sql
SELECT
	PARSE_DATETIME('%Y-%m-%d %H:%M:%S', '2024-01-11 12:35:35') AS parse_datetime;
```

- FORMAT_DATETIME : DATETIME 타입 데이터를 특정 형태의 문자열 데이터로 변환하고 싶은 경우

```sql
SELECT
	FORMAT_DATETIME(포맷스타일, 시간컬럼)

SELECT
	FORMAT_DATETIME("%c", DATETIME "2024-01-11 12:35:35") AS formatted;
```

📍https://cloud.google.com/bigquery/docs/reference/standard-sql/format-elements#format_elements_date_time

- LAST_DAY : 월의 마지막 값 반환, 자동으로 월의 마지막 값을 계산해서 특정 연산을 할 경우

```sql
SELECT
	LAST_DAY(시간컬럼, 기준)

SELECT
	LAST_DAY(DATETIME '2024-01-03 15:30:00') AS last_day,
	LAST_DAY(DATETIME '2024-01-03 15:30:00', MONTH) AS last_day_month,
	LAST_DAY(DATETIME '2024-01-03 15:30:00', WEEK) AS last_day_week,
	LAST_DAY(DATETIME '2024-01-03 15:30:00', WEEK(SUNDAY)) AS last_day_week_sun,
	LAST_DAY(DATETIME '2024-01-03 15:30:00', WEEK(MONDAY)) AS last_day_week_mon
```

<img src="/assets/img/Coding/BigQuery/자료 타입/image 4.png" align="center" alt="TYPE5">

- DATETIME_DIFF : 두 DATETIME의 차이를 알고 싶은 경우

```sql
SELECT
	DATETIME_DIFF(시간컬럼1, 시간컬럼2, 기준)

SELECT
	DATETIME_DIFF(first_datetime, second_datetime, DAY) AS day_diff1,
	DATETIME_DIFF(second_datetime, first_datetime, DAY) AS day_diff2,
	DATETIME_DIFF(first_datetime, second_datetime, MONTH) AS month_diff,
	DATETIME_DIFF(first_datetime, second_datetime, WEEK) AS week_diff,
FROM (
	SELECT
		DATETIME "2024-04-02 10:20:00" AS first_datetime,
		DATETIME "2021-01-01 15:30:00" AS second_datetime,
)
```

<img src="/assets/img/Coding/BigQuery/자료 타입/image 5.png" align="center" alt="TYPE6">