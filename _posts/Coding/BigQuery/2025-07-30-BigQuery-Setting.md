---
title: "[BigQuery] 트랜젝션, 데이터베이스 설계"
date: 2025-07-30 08:00:00 +09:00
categories: [Coding, BigQuery]
tags:
  - Oracle
---

### BigQuery
: 구글 클라우드의 데이터 웨어하우스
- 서버를 띄울 필요 없고, Firebase, Google Analytics 데이터 추출이 쉬움
- OLTP(MySQL) - OLAP(BigQuery)
- 속도가 빠른 대신 그만큼 결제해야 함
- 구조 : 프로젝트 - 데이터셋 - 테이블

[구글 클라우드 콘솔](https://console.cloud.google.com/bigquery)

### 1. 구글 클라우드 콘솔 사용

- $300 무료 크레딧 (90일)
- 결제 계정 등록

<img src="/assets/img/Coding/BigQuery/환경설정/image.png" align="center" alt="Setting1"></br>

- 새 프로젝트 생성
<p align="center">  <img src="/assets/img/Coding/BigQuery/환경설정/image 1.png" align="center" width="50%" alt="Setting2">  <img src="/assets/img/Coding/BigQuery/환경설정/image 2.png" align="center" width="41%" alt="Setting3">  </p>

- 데이터 세트, 테이블 생성

<p align="center">  <img src="/assets/img/Coding/BigQuery/환경설정/image 3.png" align="center" width="45%" alt="Setting3">  <img src="/assets/img/Coding/BigQuery/환경설정/image 4.png" align="center" width="45%" alt="Setting4">  </p>

- 스키마 확인

<p align="center">  <img src="/assets/img/Coding/BigQuery/환경설정/image 5.png" align="center" width="40%" alt="Setting5">  <img src="/assets/img/Coding/BigQuery/환경설정/image 6.png" align="center" width="55%" alt="Setting6">  </p>

- 탐색하는 데이터 확인
    - 용량이 많을수록 비용↑

<img src="/assets/img/Coding/BigQuery/환경설정/image 7.png" align="center" alt="Setting7">
