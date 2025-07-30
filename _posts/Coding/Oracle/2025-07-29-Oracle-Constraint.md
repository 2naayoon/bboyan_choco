---
title: "[Oracle] 제약 조건"
date: 2025-07-29 12:10:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

## # 제약 조건

: 테이블의 특정 열에 지정

### 1. NOT NULL

: 열에 NULL을 허용하지 않음

```sql
CREATE TABLE 테이블명 (
	컬럼명 타입 CONSTRAINT 제약조건명 NOT NULL,
	컬럼명 타입 NOT NULL, ...);
```

*Snakecase : 열이름(필드명)에 "_" 사용 = Snakecase

    ex) USERNAME → USER_NAME

- 생성한 테이블에 제약 조건 추가

```sql
ALTER TABLE 테이블명 MODIFY (
	컬럼명 CONSTRAINT 제약조건명 NOT NULL);
```

- 생성한 제약 조건 이름 변경

```sql
ALTER TABLE 테이블명 RENAME CONSTRAINT 기존조건명 TO 바꿀조건명;
```

- 제약 조건 삭제

```sql
ALTER TABLE 테이블명 DROP CONSTRAINT 제약조건명;
```

### 2. UNIQUE

: 지정한 열이 유일한 값을 가져야 함 (NULL 은 중복 시 따지지 않음)

- 데이터 무결성 : 데이터 정확성, 일관성을 보장해야 함

```sql
CREATE TABLE 테이블명 (
컬럼명 타입 CONSTRAINT 제약조건명 UNIQUE, ...);
```

- 생성한 테이블에 제약 조건 추가

```sql
ALTER TABLE 테이블명 MODIFY (
컬럼명 CONSTRAINT 제약조건명 UNIQUE);
```

- 제약 조건 삭제

```sql
ALTER TABLE 테이블명 DROP CONSTRAINT 제약조건명;
```

### 3. PRIMARY KEY(PK) : 기본키

: 지정한 열이 유일한 값이면서 NULL 을 허용하지 않음 (테이블 당 하나만 지정)

- 인덱스 설정 자동으로 만들어짐
- NOT NULL + UNIQUE (회원 아이디, 이메일, 상품코드,  …)

```sql
CREATE TABLE 테이블명 (
컬럼명 타입 PRIMARY KEY, ...);
```

### 4. FOREIGN KEY (FK) : 외래키

: 특정 테이블의 기본키로 지정한 열을 다른 테이블의 특정 열에서 참조 (부모키 / 자식키)

- 다른 테이블의 열을 참조하여 존재하는 값만 입력

<img src="/assets/img/Coding/Oracle/Untitled 13.png" align="center" alt="제약 조건1">

- 부모(참조 대상 테이블) / 자식(참조하는 테이블) : 부모 먼저 들어와야 자식을 넣을 수 있음
- ON DELETE CASCADE : 부모가 삭제되면 자식도 같이 삭제

<img src="/assets/img/Coding/Oracle/Untitled 14.png" align="center" alt="제약 조건2">

- ON DELETE SET NULL : 부모가 삭제되면 자식이 참조하는 부모의 값을 NULL로 변경

<div style="display: flex; justify-content: center; gap: 10px;">
	<img src="/assets/img/Coding/Oracle/Untitled 15.png"  align="center" width="55%" alt="제약 조건3">
	<img src="/assets/img/Coding/Oracle/Untitled 16.png"  align="center" width="40%" alt="제약 조건4">
</div>


### 5. CHECK

 : 열에 저장할 수 있는 값의 범위 혹은 패턴 정의

   설정한 조건식을 만족하는 데이터만 입력

```sql
CREATE TABLE 테이블명
	컬럼명 타입 CONSTRAINT 제약조건명 CHECK (조건식);
```

### 6. DEFAULT

: 특정 열에 값이 지정되지 않았을 때 기본값 주기

```sql
CREATE TABLE 테이블명
	컬럼명 타입 DEFAULT 기본값;
```