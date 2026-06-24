# Team Progress Dashboard - 기술 스택 분석 보고서

**작성일:** 2026-06-24  
**프로젝트:** Team Progress Dashboard MVP  
**조사 대상:** spec.md 기술 스택

---

## 📋 핵심 기술 스택 요약

### Frontend (프론트엔드)

| 기술 | 버전 | 용도 | 주요 고려사항 |
|------|------|------|------------|
| **Next.js** | 15+ | App Router 기반 풀스택 프레임워크 | TypeScript 필수, 서버 컴포넌트 활용 |
| **TypeScript** | 5.0+ | 타입 안정성 및 개발 경험 | 초급자는 학습곡선 주의 |
| **React** | 18+ | UI 렌더링 및 상태 관리 | useState/useEffect 패턴 사용 |
| **HTML/CSS** | - | 기본 스타일링 | UI 라이브러리 최소화 정책 |

### Backend & Database

| 기술 | 용도 | 주요 고려사항 |
|------|------|------------|
| **Next.js API Routes** | RESTful API 구현 | `/app/api` 폴더 구조, 서버리스 함수 |
| **SQLite** | 파일 기반 데이터베이스 | 소규모 팀용, 확장성 제한 있음 |
| **better-sqlite3** | SQLite Node.js 드라이버 | 동기 API, 네이티브 바인딩 필요 |

### AI & 배포

| 기술 | 용도 | 주요 고려사항 |
|------|------|------------|
| **Claude API** | 팀 현황 자동 요약 (MVP 핵심 기능) | API 키 관리 필수, 비용 고려, Rate Limiting |
| **Vercel** | Next.js 자동 배포 | 자동 CI/CD, 환경 변수 설정, Edge Functions 지원 |

---

## 🔍 각 기술별 상세 분석

### 1. Next.js 15+ (App Router)

**특징:**
- 파일 기반 라우팅으로 자동화
- 서버 컴포넌트(Server Components) 기본 지원
- API Routes를 통한 백엔드 구현
- 내장 이미지 최적화, 폰트 최적화

**학습 포인트:**
- `'use client'` 디렉티브로 클라이언트 컴포넌트 표시 필수
- 서버 vs 클라이언트 컴포넌트 구분이 중요
- API Routes는 `/app/api` 폴더 구조 따름

**Spec에서의 주의:**
- ⚠️ "학습 곡선 높음" (예상 20-30% 시간 추가 소요)
- Day 1-2에서 기본 개념 충분히 학습 권장
- Claude Code 활용으로 빠른 학습 필요

---

### 2. TypeScript

**특징:**
- 정적 타입 체크로 런타임 에러 감소
- IDE 자동완성 및 개발 경험 향상
- Next.js와 자연스러운 통합

**학습 포인트:**
- React 컴포넌트에 Props 타입 정의
- API 응답/요청 타입 선언
- `interface` vs `type` 선택

**Spec에서의 권장사항:**
- 초급자는 학습 곡선 높음
- Day 1-2에서 기본 타입 문법만 학습
- 나머지는 실전에서 습득

---

### 3. React Hooks (useState/useEffect)

**사용 패턴:**
- `useState`: 컴포넌트 로컬 상태 관리
- `useEffect`: API 호출, 구독, 정리 작업
- Spec에서는 복잡한 상태 관리 최소화 정책

**주요 고려사항:**
- ✅ 간단한 상태는 useState로 충분
- ⚠️ 팀 10명 데이터는 fetch 후 컴포넌트 state에 저장
- 복잡해지면 Context API 고려 (v2 이후)

---

### 4. SQLite + better-sqlite3

**특징:**
- 파일 기반 데이터베이스 (별도 서버 불필요)
- better-sqlite3는 동기 API 제공
- Node.js 네이티브 바인딩 (C++ 확장)

**주의사항:**
- ⚠️ **동기 API는 blocking** → 대량 데이터 처리 시 주의
- 🔧 `npm install better-sqlite3` 후 빌드 필요
- 데이터 크기 제약: MVP 수준(10명)에서는 무관

**Spec의 데이터 구조:**
```sql
-- 3개 테이블: Team, Task, TeamTask
-- 팀원-작업 M:N 관계 정규화
-- 7일 히스토리 보관
```

---

### 5. Claude API (Anthropic)

**MVP 핵심 기능:**
- 모든 팀원의 진행 텍스트를 수집
- Claude API로 팀 현황 자동 분석
- 예: "팀원 5명 진행중, 3명 완료, 2명 대기 | 주요 블로커: 데이터 검증"

**구현 고려사항:**
- 🔑 API 키 관리 (`.env.local` 사용)
- 💰 요청당 비용 발생 (Prompt + Completion 토큰)
- ⏱️ Rate Limiting 전략 필요 (너무 자주 호출 방지)
- Day 19: AI 요약 기능 예정 (2시간)

**권장 패턴:**
```typescript
// API 라우트에서 Claude API 호출
POST /api/summarize-team-status
- TeamTask 데이터 수집
- Claude API에 프롬프트 전송
- 응답을 캐싱하거나 DB에 저장
```

---

### 6. Next.js API Routes

**구조:**
```
/app/api
  ├── team/
  │   ├── route.ts (GET: 팀원 목록, POST: 추가)
  │   └── [id]/route.ts
  ├── task/
  ├── status/
  └── summarize/
```

**주의사항:**
- 🔐 API 인증은 MVP 범위 외 (v2로 미룸)
- 🌍 CORS 설정 필요 (프론트엔드 요청 허용)
- 📊 SQLite 연동 (Day 15-17 예정)

---

### 7. Vercel 배포

**특징:**
- Next.js 최적화된 호스팅
- Git 자동 연동으로 CI/CD
- Edge Functions 지원 (선택적)
- 환경 변수 관리 UI

**배포 전 체크리스트:**
- [ ] `.env.local` 파일은 `.gitignore`에 포함
- [ ] Vercel에서 환경 변수 설정 (Claude API 키 등)
- [ ] 프로덕션 DB 경로 확인
- [ ] Day 21: 최종 배포 예정

---

## ⚠️ 주요 기술적 리스크 & 대응

### 리스크 1: Next.js App Router 학습곡선 (높음)

| 항목 | 설명 |
|------|------|
| **문제** | 처음 사용하면서 동시에 개발 → 속도 저하 (20-30% 추가) |
| **영향** | Day 1-7 스케줄 지연 위험 |
| **대응** | Claude Code 활용, 실전 학습, 튜토리얼 최소화 |

### 리스크 2: SQLite 성능 (중간)

| 항목 | 설명 |
|------|------|
| **문제** | better-sqlite3의 동기 API는 blocking |
| **영향** | 10명 규모에서는 무관하나, 향후 확장 시 제약 |
| **대응** | MVP는 SQLite 유지, v2에서 PostgreSQL 고려 |

### 리스크 3: Claude API 비용 & Rate Limiting (중간)

| 항목 | 설명 |
|------|------|
| **문제** | 매번 팀 요약 시 API 호출 → 비용 발생 |
| **영향** | 시연 중 예상 비용, API 제한 도달 가능 |
| **대응** | 응답 캐싱 (시간 제한), 요청 배치 처리 |

### 리스크 4: TypeScript 학습곡선 (중간)

| 항목 | 설명 |
|------|------|
| **문제** | 타입 정의 시간 증가 |
| **영향** | Day 3-5 컴포넌트 설계 단계에서 지연 |
| **대응** | 기본 타입만 학습, 복잡한 타입은 나중에 |

---

## 📊 개발 일정별 기술 적용

### 📅 1주차 (Day 1-7) - 환경 세팅 + 입력 폼

**적용 기술:**
- ✅ Next.js 프로젝트 초기화
- ✅ TypeScript 기본 설정
- ✅ React 컴포넌트 + Hooks (InputForm)
- ⏳ SQLite 드라이버 설치만 (연동은 나중)

**핵심 학습:**
- Next.js App Router 구조
- TypeScript Props 타입
- React useState (폼 상태)

---

### 📅 2주차 (Day 8-14) - 대시보드 + 데이터 구조

**적용 기술:**
- ✅ React 컴포넌트 (Dashboard, StatusCard)
- ✅ CSS 스타일링 (상태별 색상 코드)
- ✅ SQLite 스키마 설계
- ✅ Next.js API Routes 기본 구조

**핵심 학습:**
- 데이터 정규화 (Team, Task, TeamTask)
- API 엔드포인트 설계
- 컴포넌트 Props 흐름

---

### 📅 3주차 (Day 15-21) - API 연동 + AI 요약 + 배포

**적용 기술:**
- ✅ SQLite + better-sqlite3 연동 (Day 15-17)
- ✅ API 엔드포인트 구현
- ✅ **Claude API 통합** (Day 19, 2시간)
- ✅ Vercel 배포 (Day 21)

**핵심 학습:**
- 데이터베이스 쿼리
- API 요청/응답 처리
- 외부 API (Claude) 통합
- 환경 변수 관리

---

## ✅ 기술 스택 검증 체크리스트

### 개발 환경 구성

- [ ] Node.js v18+ 설치
- [ ] npm 최신 버전
- [ ] VS Code + TypeScript 확장
- [ ] better-sqlite3 컴파일 환경 (Python, C++ 빌드 도구)

### 라이브러리 버전 확인

- [ ] Next.js 15.x (최신)
- [ ] React 18+
- [ ] TypeScript 5.0+
- [ ] better-sqlite3 9.0+

### API 키 설정

- [ ] Claude API 키 (Anthropic 콘솔에서 발급)
- [ ] Vercel 배포 토큰

---

## 🎯 Success Criteria와 기술의 연관성

| Success Criteria | 관련 기술 | 구현 방법 |
|-----------------|---------|---------|
| 10명 진행상황 한눈에 파악 | React + Next.js | Dashboard 컴포넌트, 색상 코드 |
| 1초 내 반영 | useEffect + Fetch API | 폴링 또는 실시간 업데이트 |
| 색상 구분 명확 | CSS | status별 색상 클래스 |
| 30초 내 파악 | UI/UX | 정보 레이아웃 최적화 |
| AI 팀 현황 요약 정확 | Claude API | 프롬프트 엔지니어링 |

---

## 📚 추가 자료 & 링크

### 공식 문서
- **Next.js 공식 문서:** https://nextjs.org/docs
- **React 공식 문서:** https://react.dev
- **Anthropic Claude API:** https://anthropic.com/api
- **better-sqlite3:** https://github.com/WiseLibs/better-sqlite3

### 추천 리소스
- Next.js App Router 튜토리얼 (공식)
- TypeScript Handbook (기본 타입 섹션)
- Claude API 예제 (Anthropic)

---

## 💡 MVP 완성 후 기술 고도화 (v2+)

### 상태 관리 고도화
- `useState` → Context API → Redux (필요 시)

### 데이터베이스 확장
- SQLite → PostgreSQL (수평 확장, 다중 사용자)

### 인증 & 보안
- 로그인 기능 (NextAuth.js 또는 Auth0)
- API 인증 (JWT 토큰)

### 모니터링 & 성능
- 에러 로깅 (Sentry)
- 성능 모니터링 (Vercel Analytics)

### 실시간 기능
- WebSocket 또는 Server-Sent Events (SSE)
- 다중 사용자 동시 작업 지원

---

**보고서 작성:** 2026-06-24  
**프로젝트 상태:** MVP 설계 단계  
**다음 단계:** Day 1 환경 세팅 시작
