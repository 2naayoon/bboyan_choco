---
title: "[Oracle] 데이터 조회"
date: 2025-07-01 15:40:00 +09:00
categories: [Coding, Oracle]
tags:
  - Oracle
---

# 데이터 조회

### **1. SELECT**

```sql
SELECT 조회할 컬럼명 FORM 테이블명;
SELECT * FROM 테이블명;
// * : 전체 컬럼
```

### **2. DISTINCT**

: 중복 값 제외

```sql
SELECT DISTINCT 컬럼명 FORM 테이블명;
```

### 3. AS

: 별칭 부여 (AS 생략 가능, “ ” - 공백 포함 시 반드시 사용)

```sql
SELECT 컬럼명 AS 별칭
       컬럼명 별칭
       컬럼명 "별칭"
```

### 4. ORDER BY

: 정렬

```sql
ORDER BY 컬럼명 ASC (오름차순, 생략가능) or DESC (내림차순);
```

### 5. **WHERE**

: 조건

- =, 산술연산자(>, <, >=, <=)
- ~이 아닌 : !=(java), <>, ^=
- 이고 : **AND**
- 이거나 : **OR**
- 문자, 날짜 데이터 **' '** 사용

```sql
SELECT 컬럼명 FROM 테이블명 WHERE 조건문;
			   WHERE 조건문 AND / OR 조건문;
```

### **6. IN** / NOT IN

```sql
a OR b OR c → IN (a, b, c)				 	  
	      NOT IN (a, b, c)
```

### **7. BETWEEN** A **AND** B

: A 이상 B 이하

### **8. LIKE / NOT LIKE**

 : 문자를 포함하는 값 조회

- _ : 문자 한 개
- -% : 문자 개수 무한대

```sql
WHERE 컬럼명 LIKE '문자';
		  'a%'; // a로 시작
		  '_a%'; // 두 번째 글자가 a
		  '%a%'; // a를 포함
```

### **9. NULL**

: 값이 없는 상태

- **''** : 빈 값
- **'   '** : 스페이스바도 문자로 인식
- **NULL** 비교 시 **IS**(=) 사용

```sql
WHERE 컬럼명 IS NULL;
IS NOT NULL;
```

### 10. 집합연산자

- 합집합 : **UNION**(중복값 제거) / **UNION** **ALL**(중복값 제거X)
- 교집합 : **INTERSECT**
- 차집합 : **MINUS**
- 집합 연산자 사용 시 출력 열 개수와 순서, 타입(숫자, 문자 등) 동일해야 함

```sql
SELECT ~ UNION SELECT ~;
		UNION ALL
		INTERSECT
		MINUS
```