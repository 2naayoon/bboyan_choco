---
title: "[Oracle] 트랜젝션, 데이터베이스 설계"
date: 2025-07-29 12:00:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

## #Transaction

: 하나의 작업 또는 밀접하게 연관되어 있는 작업 수행을 위해 나눌 수 없는 최소 작업 단위

- 최종 반영 Commit
- 모두 취소 Rollback
- DBeaver 설정에서 commit 모드 변경 가능
- 기본 설정 : Auto commit 상태

<img src="/assets/img/Coding/Oracle/Untitled 1.png" alt="Transaction1"/>

```sql
INSERT INTO ~ ;

// MANUAL 모드 시 COMMIT을 통해서만 실행 가능
COMMIT;

// COMMIT 전 실행 (COMMIT 취소 X)
ROLLBACK;
```

- LOCK : 한 세션에서 트랜잭션 작업이 완료되지 않으면 다른 세션에서 작업을 처리할 수 없는 상태
(DML - insert, update, delete)

```sql
DBeaver / SQLplus - 동시 작업 X
```

## #데이터베이스 설계 단계

**1단계 : 요구 사항 분석**

**2단계 : 개념적 설계 - ER다이어그램**

- 명사 찾기! → 개체와 속성 추출
- 동사 찾기! → 관계 추출

**3단계 : 논리적 설계**

- 규칙1 : ER다이어그램의 각 개체를 하나의 릴레이션으로 변환
- 규칙2 : 다대다(n:m) 관계는 릴레이션으로 변환한다
    
     * 테이블을 따로 만듦
    
- 규칙3 : 일대다(1:n) 관계는 외래키로 표현한다
- 규칙4 : 일대일(1:1) 관계는 외래키로 표현한다
- 규칙5 : 다중 값 속성은 릴레이션으로 변환한다

**4단계 : 물리적 설계**

**5단계 : 구현**

1) ERD 작성

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/Coding/Oracle/Untitled 2.png" alt="Transaction2">
  <img src="/assets/img/Coding/Oracle/Untitled 3.png" alt="Transaction3">
  <img src="/assets/img/Coding/Oracle/Untitled 4.png" alt="Transaction4">
</div>

2) 릴레이션 작성

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/Coding/Oracle/Untitled 7.png" align="center" alt="Transaction7">
  <img src="/assets/img/Coding/Oracle/Untitled 8.png" align="center" alt="Transaction8">
</div>

3) 테이블 작성

<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="/assets/img/Coding/Oracle/Untitled 9.png" align="center" alt="Transaction9">
  <img src="/assets/img/Coding/Oracle/Untitled 10.png" align="center" alt="Transaction10">
</div>