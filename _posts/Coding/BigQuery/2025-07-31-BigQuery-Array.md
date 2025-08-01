---
title: "[BigQuery] 배열/피벗"
date: 2025-07-31 11:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - BigQuery
---

```
💡 Event
    - 사용자가 하는 행동 (클릭, 페이지 VIEW 등) → 분석
    - 시스템 이벤트(안드로이드, IOS), 오류
    - 이벤트 파라미터 저장 → 이벤트 파라미터의 값이 존재
```

📍로그 설계
[https://zzsza.github.io/data/2021/06/13/data-event-log-definition/](https://zzsza.github.io/data/2021/06/13/data-event-log-definition/)

📍Google analytics (웹) / Firebase (앱)

- .orc : 용량이 csv 대비 적음
    - 컬럼의 타입까지 정의되어 있어, 복잡한 구조를 표현할 수 있음
    - 파티션 설정이 안 되어서 먼저 만들고 파티션을 걸어 새 테이블 생성 (금액적, 실무)

```
- google analytics
 - user_pseudo_id : 로그인을 하지 않으면 id 가 생기지 않는 걸 보완하기 위해 애널리틱스에서 만듦
 - user_id : 둘 다 있다면 로그인을 했을 때 기능이 나눠져 있을 때
```

### 1. ARRAY (배열)

: 같은 타입의 여러 값을 하나의 컬럼에 저장할 수 있는 자료형

- 저장 용량이 효율적
- 예: 1, 3, 5, 6을 각각을 숫자형으로 저장하는 것이 아닌 하나로 저장

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/BigQuery/배열 피벗/image.png" align="center" alt="Array1">
  <img src="/assets/img/Coding/BigQuery/배열 피벗/image 1.png" align="center" alt="Array2">
</div>
- 하나의 Row(행)에 여러 데이터가 포함된 형태 => ARRAY(배열), STRUCT(구조체)

- 배열 생성
    - 대괄호 [ ]
    
    ```sql
    SELECT [0, 1, 1, 2, 3, 5] AS some_numbers
    UNION ALL
    SELECT [2, 4, 8, 16, 32]
    UNION ALL
    SELECT [5, 10]
    ```
    
    <img src="/assets/img/Coding/BigQuery/배열 피벗/image1-1.png" align="center" alt="Array1-1">
    
    - ARRAY<자료형> : 명시적으로 더 자세한 정보를 줌
    
    ```sql
    SELECT
     ARRAY<INT64>[0, 1, 3] AS some_numbers
     
    # ERROR : Array elements of types {INT64, STRING} do not have a common supertype
    # 배열엔 같은 자료형만 담을 수 있음
    -- SELECT
    --  ARRAY<INT64>[0, 1, "가"] AS some_numbers
    ```
    
    - 배열 생성 함수
        - `GENERATE_DATE_ARRAY(start_date, end_date, [INTERVAL INT64_expr date_part])`
        - 기본값은 INTERVAL 1 DAY
    
    ```sql
    SELECT
     GENERATE_DATE_ARRAY('2024-01-01', '2024-02-01', INTERVAL 1 WEEK) AS
    output1,
     GENERATE_ARRAY(1, 5, 2) AS output2
    ```
    
    <img src="/assets/img/Coding/BigQuery/배열 피벗/image 2.png" align="center" alt="Array3">
    
    - ARRAY_AGG : 여러 결과를 **마지막에** 배열로 저장하고 싶은 경우
        - 집계 함수로 취급
    
    ```sql
    WITH programming_languages AS (
      SELECT "python" AS programming_language
      UNION ALL
      SELECT "go"
      UNION ALL
      SELECT "scala"
      UNION ALL
      SELECT "SQL"
    )
    SELECT ARRAY_AGG(programming_language) AS output
    FROM programming_languages
    ```
    
    <img src="/assets/img/Coding/BigQuery/배열 피벗/image 3.png" align="center" alt="Array4">
    
- 배열 접근
    - OFFSET : 0부터 시작
    - ORDINAL : 1부터 시작
    
    📍배열의 길이보다 큰 값을 지정하면 오류 발생
    
    - Error : Array index N is out of bounds (overflow)
    - 방지하기 위해 SAFE_를 항상 추가
    
    ```sql
    SELECT
     배열_컬럼[OFFSET/ORDINAL(숫자)]
    ```
    
    <img src="/assets/img/Coding/BigQuery/배열 피벗/image 4.png" align="center" alt="Array5">
    
- ARRAY_LENGTH : 배열의 길이 조회

```sql
WITH programming_langs AS (
  SELECT "python" AS programming_lang
  UNION ALL
  SELECT "go"
  UNION ALL
  SELECT "scala"
  UNION ALL
  SELECT "SQL"
)
SELECT
  ARRAY_LENGTH(prog_array)
FROM (
  SELECT
    ARRAY_AGG(programming_langs) AS prog_array
    # ARRAY를 먼저 만들고 length 조회
    -- Syntax error: Expected end of input but got identifier "ARRAY_LENGTH"
    -- ARRAY_LENGTH(programming_langs)
  FROM programming_langs
)
```

- ARRAY_CONCAT : 여러 배열을 하나의 배열로 결합

```sql
SELECT
  ARRAY_CONCAT([1,2,3],[4,5,6])
```

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 5.png" align="center" alt="Array6">

### 2. STRUCT (구조체)

: 서로 다른 타입의 여러 값을 하나의 컬럼에 저장할 수 있는 자료형

- ARRAY는 같은 유형의 정보만 저장(단일자료형)한다면 STRUCT는 여러가지 정보 저장 가능
- 예: 사람이라는 STRUCT에 이름(문자열), 나이(정수), 성별(문자) 등을 하나로 묶어 저장
- STRUCT 생성
    - 소괄호( )
    
    ```sql
    SELECT
     (1,2,3) AS struct_test
    ```
    
    - STRUCT<자료형>(데이터)
    
    ```sql
    SELECT
     STRUCT<hi INT64, hello INT64, awesome STRING>(1, 2, 'HI') AS struct_test
    ```
    
<img src="/assets/img/Coding/BigQuery/배열 피벗/image 6.png" align="center" alt="Array7">
    
- STRUCT 접근 : key 이름을 명시해서 value 접근

```sql
# STRUCT의이름.key

SELECT
 struct_test.hi,
 struct_test.hello
FROM (
 SELECT
 STRUCT<hi INT64, hello INT64,
 awesome STRING>(1, 2, 'HI') AS struct_test
)
```

```
💡 ARRAY 안에 STRUCT가 저장될 수 있고
   STRUCT 안에 ARRAY가 저장될 수 있고
   STRUCT 안에 STRUCT가 저장될 수 있고
   ARRAY 안에 ARRAY가 저장될 수 있음
   유연하게 데이터를 저장할 수 있음 ⇒ 중첩된 구조
```

### 3. UNNEST

: 중첩된 데이터 구조 풀기 (평면화, Flatten)

- 배열을 직접적으로 접근해서 사용하는 것보다, 독립적인 행으로 풀어서(평면화) 사용
= ARRAY의 요소를 독립적인 행으로 펼칠때 UNNEST를 사용
- 장바구니(배열)에 있는 과일(배열의 값)을 모두 다 꺼내는 것 : UNNEST

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 7.png" align="center" alt="Array8">
<img src="/assets/img/Coding/BigQuery/배열 피벗/image 8.png" align="center" alt="Array9">

- UNNEST 사용법
    - **UNNEST** 쿼리 문법 → UNNEST한 결과를 **CROSS JOIN** → ALIAS로 조회

```sql
SELECT
 a.column,
 alias_name
FROM Table_A AS a
CROSS JOIN UNNEST(array_values) AS alias_name

# CROSS JOIN은 생략하고 쉼표를 사용해도 괜찮음
FROM Table_A AS a, UNNEST(array_values) AS alias_name
```

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/Coding/BigQuery/배열 피벗/1_ymQwpVJkJmrD_uhZODyiKw.gif" align="center" alt="Array9">
	<img src="/assets/img/Coding/BigQuery/배열 피벗/1_Ow1cPp2X5djsp2OtOizEhg.gif" align="center" alt="Array8">
</div>
<figcaption align="center" style="color:silver">이미지 출처 : How to use the UNNEST function in BigQuery</figcaption>

- 데이터 평면화

```sql
WITH example_data AS(
 SELECT
  'kyle' AS name,
  ['Python', 'SQL', 'R', 'Julia', 'Go'] AS preferred_language,
  'Incheon' AS hometown
 UNION ALL
 SELECT
  'max' AS name,
  ['Python', 'SQL', 'Scala', 'Java', 'Kotlin'] AS preferred_language,
  'Seoul' AS hometown
 UNION ALL
 SELECT
  'yun' AS name,
  ['Python', 'SQL'] AS preferred_language,
  'Incheon' AS hometown
 )
```

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 9.png" align="center" alt="Array10">

```sql
SELECT
 name, pref_lang, hometown
FROM example_data
# [Python, SQL, R, Julia] => Python, SQL, R, Julia
CROSS JOIN UNNEST(preferred_language) AS pref_lang
-- WHERE
  # No matching signature for operator = for argument types: ARRAY<STRING>, STRING Signature: T1 = T1 Unable to find common supertype for templated argument <T1> Input types for <T1>: {STRING, ARRAY<STRING>}
  # 배열이랑 스트링을 매칭해서 조회가 안 됨
  -- preferred_language = "Python"
```

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 10.png" align="center" alt="Array11">

### 4. PIVOT

: 축을 중심으로 회전

- 미리 데이터를 가공해서 ROW 수를 줄임(네트워크, 데이터 처리 비용의 효율성)
- PIVOT 하면서 연산도 진행할 수 있음(SUM, COUNT 등)
- PIVOT 할 때 모든 값이 같은 경우 **MAX**를 사용하거나 ANY_VALUE를 사용
- Row 수를 줄일 수 있어 용량/비용을 줄일 수 있음

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 11.png" align="center" alt="Array12">

```sql
# PIVOT 쿼리
# - MAX, IF, GROUP BY를 사용한 PIVOT
SELECT
 student,
 IF(subject="수학", score, NULL) AS 수학,
 IF(subject="영어", score, NULL) AS 영어,
 IF(subject="과학", score, NULL) AS 과학
FROM Table
```

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 12.png" align="center" alt="Array13">

```sql
SELECT
 student,
 MAX(IF(subject="수학", score, NULL)) AS 수학,
 MAX(IF(subject="영어", score, NULL)) AS 영어,
 MAX(IF(subject="과학", score, NULL)) AS 과학
FROM Table
GROUP BY
 student
```

<img src="/assets/img/Coding/BigQuery/배열 피벗/image 13.png" align="center" alt="Array14">

- ANY_VALUE
    - MAX 대신 사용
    - some row 를 반환 → 실행할 때마다 결과가 다를 수 있음
    - 하나만 있을 때 사용하면 명확
- PIVOT