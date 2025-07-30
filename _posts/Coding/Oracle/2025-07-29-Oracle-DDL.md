---
title: "[Oracle] 데이터 정의어"
date: 2025-07-29 12:03:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

- SQL

```
1. DDL  -  CREATE, ALTER, RENAME, TRUNCATE, DROP

2. DML - SELECT, INSERT, UPDATE, DELETE

3. DCL (권한 부여) - GRANT, REVOKE
```

## #DDL

: 데이터 정의어

- 테이블 정의, 사용자 정의, 권한 부여 (취소)

### 1. 테이블 생성 CREATE

```sql
CREATE TABLE 테이블명 (컬럼명 컬럼타입(크기) 제약조건);

// 기존 테이블 열 구조와 데이터를 복사해서 새 테이블 생성
CREATE TABLE 새테이블명 AS SELECT * FROM 기존테이블명;

// 기존 테이블 열 구조만 복사해서 새 테이블 생성
CREATE TABLE 새테이블명 AS SELECT * FROM 기존테이블명 WHERE 1<>1;
```

- 열 이름 규칙
    - 문자로 시작 / 30byte 이하로 작성 / 한 테이블 안 열 이름 중복 불가
    - 열 이름은 문자, 0-9, 특수문자($, #, _) 사용 가능
    - SQL 키워드는 열 이름으로 사용 불가 (order, group, select,...)
    
1) 문자
    
      1. CHAR : 열의 너비 고정값
    
    ```sql
    CHAR(10) : 10자리 전부 사용
    ```
    
      2. VARCHAR2 : 열의 너비 가변
    
    ```sql
    VARCHAR2(10) : 입력된 글자에 따라 가변
    ```
    
    3. NCHAR : 유니코드 문자열 타입이고, 고정
        
                       (문자 1개 당 1byte - 한글, 영어 상관 X)
        
    4. NVARCHAR2 : 유니코드 문자열 타입이고, 가변
        
                       (문자 1개 당 1byte - 한글, 영어 상관 X)
        
    
    * VACHAR2, CHAR 가 한글, 영문 입력 시 사용하는 바이트 수가 다름
    
    * NCHAR, NVARCHAR 사용하는 바이트 수 통일
    
    5. CLOB : 문자열 데이터를 외부 파일로 저장
        
                    엄청 많은 텍스트 입력 시 사용
        
    6. NCLOB
    7. LONG : 2GB
    
2) 숫자
    
    1. NUMBER
    
    ```sql
    NUMBER(전체자릿수, 소수점자릿수)
    ```
    
    2. BINARY_FLOAT : 32bit의 부동 소수점 숫자를 표현할 때 사용
    3. BINARY_DOUBLE : 64bit 부동 소수점 숫자를 표현할 때 사용
    
3) 날짜
    
    1. DATE
    2. TIMESTAMP

### 2. 테이블 변경 ALTER

1) ADD : 열 추가

```sql
ALTER TABLE 테이블명 ADD 추가할컬럼명 데이터타입(숫자);
```

2) RENAME : 열 이름 변경

```sql
ALTER TABLE 테이블명 RENAME COLUMN 기존컬럼명 TO 변경컬럼명;
```

3) MODIFY : 열 자료형 변경

```sql
ALTER TABLE 테이블명 MODIFY 컬럼명 데이터타입(숫자);
```

4) DROP : 열 제거

```sql
ALTER TABLE 테이블명 DROP COLUMN 컬럼명;
```

### 3. 테이블 이름 변경 RENAME

```sql
RENAME 기존테이블명 TO 변경테이블명;
```

### 4. 테이블 삭제 DROP

```sql
DROP TABLE 테이블명;
```

### 5. 테이블 데이터 삭제 TRUNCATE

```sql
TRUNCATE TABLE 테이블명;
```

## #DCL

### 1. 사용자 생성

```sql
CREATE USER 아이디 IDENTIFIED BY 비밀번호;
```
<img src="/assets/img/Coding/Oracle/Untitled 11.png" align="center" alt="DDL1">

<img src="/assets/img/Coding/Oracle/Untitled 12.png" align="center" alt="DDL2">

### 2. 권한 부여 GRANT

```sql
GRANT 권한이름, ... TO 아이디;
GRANT 롤이름, ... TO 아이디;
```

### 3. 권환 취소 REVOKE

```sql
REVOKE 권한이름, ... FROM 아이디;
```

### 4. 저장공간 할당

- 생성 시 할당

```sql
CREATE USER 아이디 IDENTIFIED BY 비밀번호
DEFAULT TABLESPACE 테이블스페이스명
TEMPORARY TABLESPACE 테이블스페이스명
QUORA 테이블스페이스크기 ON 테이블스페이스명;
```

- 생성 후 할당

```sql
ALTER USER 아이디 DEFAULT TABLESPACE 테이블스페이스명;
ALTER USER 아이디 TEMPORARY TABLESPACE 테이블스페이스명;
ALTER USER 아이디 QUOTA 테이블스페이스크기 ON 테이블스페이스명;
```

### 5. 사용자 삭제

```sql
DROP USER 아이디 CASCADE;
// CASCADE 사용시 유저와 객체(스키마) 모두제거가능
```

<aside>
💡 비밀번호 변경

</aside>

```sql
ALTER USER 아이디 IDENTIFIED BY 비밀번호;
```

<aside>
💡 계정 잠금 해제

</aside>

```sql
ALTER USER 아이디 ACCOUNT UNLOCK;
```