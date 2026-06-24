# 🚀 Team Progress Dashboard - MVP Spec

## 🎯 문제 (Problem)

팀장이 10명의 팀원들의 진행상황을 관리할 때:

- 현재 **엑셀**로 수동 관리 중
- 팀원들에게 **매번 물어봐야** 상황을 파악 가능
- 정보가 **실시간 업데이트**되지 않아 정확도 낮음
- 팀장의 **행정 업무 부담 증가**

## 👥 사용자 (페르소나)

**팀장 (Primary User)**

- 10명의 팀원 진행상황을 실시간으로 모니터링해야 함
- 하루에 여러 번 상황을 확인함
- 엑셀 관리 대신 효율적인 솔루션 원함

**팀원 (Secondary User)**

- 자기 진행상황을 간단하게 입력/업데이트
- 복잡한 시스템보다는 빠르고 간단한 입력 원함

## 🚀 핵심 기능 (MVP - 3주)

### 1️⃣ 팀원 진행상황 입력

- TASK별 진행 상황을 텍스트로 입력
- 상태 선택: "진행중" / "완료" / "대기중"
- 간단하고 빠른 입력 경험

### 2️⃣ 팀장 대시보드

- 각 TASK 별 모든 팀원(10명)의 상황을 **한 화면에서 보기**
- 각 팀원별 최신 진행상황 표시
- 상태별 **색상 코드 구분** (진행중=파랑, 완료=초록, 대기=회색 등)
- 마지막 업데이트 시간 표시

### 3️⃣ 기본 데이터 관리

- 팀원 목록 관리 (10명)
- TASK 관리
- 진행상황 히스토리 보관 (최근 7일)

### 4️⃣ 🤖 AI 팀 현황 요약 (Claude API)

- 모든 팀원의 진행 텍스트를 수집해 Claude API로 분석
- **팀 현황 카드** 자동 생성 및 대시보드에 표시
- 예: "팀원 5명 진행중, 3명 완료, 2명 대기 | 주요 블로커: 데이터 검증, API 성능"
- 팀장이 팀 상태를 한눈에 파악하고 빠르게 의사결정

## 🎯 MVP 범위 & v2 제외

### ✅ MVP에 포함되는 기능

- 팀원 진행상황 입력 (상태 + 텍스트)
- 팀장 대시보드 (10명, 색상 코드)
- 데이터 관리 (7일 히스토리)
- 🤖 AI 팀 현황 요약 (Claude API)

### ❌ v2 이후 기능

- 로그인/인증
- 알림 기능 (이메일, 푸시, 슬랙 등)
- 마감일 및 일정 관리
- 팀 비용 관리
- 상세한 통계/리포트 기능
- 모바일 앱
- 실시간 채팅/댓글

## ✨ 성공 기준 (Success Criteria)

시연에서 팀장이 다음을 할 수 있으면 성공:

1. 대시보드에서 **10명 모두의 진행상황을 한눈에 파악** 가능
2. 팀원이 진행상황 입력 후 **1초 내**에 대시보드에 반영
3. 상태별 **색상 구분**이 명확해서 빠르게 스캔 가능
4. 팀장이 **30초 안에** 모든 팀원 상황을 파악 가능
5. 🤖 **AI 팀 현황 요약**이 정확하고 자연스러움
   - 팀원 진행 텍스트를 정확하게 분석
   - 블로커/지연 사항 자동 감지
   - 예: "팀원 5명 진행중, 3명 완료, 2명 대기 | 주요 블로커: 데이터 검증"

## 🛠️ 기술 스택 (Tech Stack)

| 구분                  | 기술                                   |
| --------------------- | -------------------------------------- |
| **Frontend**    | Next.js + TypeScript + App Router      |
| **상태 관리**   | React useState/useEffect               |
| **데이터 저장** | SQLite (파일 기반)                     |
| **백엔드 API**  | Next.js API Routes                     |
| **UI**          | 기본 HTML/CSS (외부 라이브러리 최소화) |
| **AI 기능**     | Claude API (팀 현황 자동 요약)         |
| **배포**        | Vercel                                 |

---

## 📊 데이터 구조 (정규화됨)

### Team 테이블 (팀원 정보)

```sql
CREATE TABLE Team (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Task 테이블 (작업 항목)

```sql
CREATE TABLE Task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### TeamTask 테이블 (팀원-작업 진행상황 관계)

```sql
CREATE TABLE TeamTask (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  teamId INTEGER NOT NULL,
  taskId INTEGER NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('진행중', '완료', '대기중')),
  description TEXT,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (teamId) REFERENCES Team(id),
  FOREIGN KEY (taskId) REFERENCES Task(id)
);
```

**장점:**

- ✅ 여러 팀원이 같은 작업 병렬 추적 가능
- ✅ 작업별 완료율 계산 가능 (예: "API 구현" 3/5명 완료)
- ✅ 팀원이 여러 작업 동시 관리 가능
- ✅ v2 확장 용이 (작업 마감일, 우선순위 추가)

---

## 📅 개발 계획 (3주)

### 📅 1주차 (Day 1-7, 14시간)

**목표:** 환경 세팅 + 팀원 입력 폼 완성

| 일정    | 항목                        | 시간 |
| ------- | --------------------------- | ---- |
| Day 1-2 | 환경 세팅 & 프로젝트 초기화 | 4h   |
| Day 3-5 | UI 디자인 & 컴포넌트 설계   | 6h   |
| Day 6-7 | 팀원 입력 폼 개발           | 4h   |

**✅ 마일스톤:** 팀원이 진행상황을 입력할 수 있는 폼 완성

### 📅 2주차 (Day 8-14, 14시간)

**목표:** 대시보드 완성 + 데이터 구조 설계

| 일정      | 항목                                | 시간 |
| --------- | ----------------------------------- | ---- |
| Day 8-11  | 대시보드 UI 개발 (StatusCard, 색상) | 8h   |
| Day 12-14 | 데이터 구조 & API 엔드포인트 설계   | 6h   |

**✅ 마일스톤:** 더미 데이터로 10명 대시보드 표시 가능

### 📅 3주차 (Day 15-21, 14시간)

**목표:** API 연동 + AI 요약 기능 + 배포

| 일정      | 항목                         | 시간 |
| --------- | ---------------------------- | ---- |
| Day 15-17 | SQLite 연동 & API 구현       | 6h   |
| Day 18    | 실시간 동기화 & 7일 히스토리 | 2h   |
| Day 19    | 🤖 AI 요약 기능 (Claude API) | 2h   |
| Day 20    | 샘플 데이터 (10명) & 테스트  | 2h   |
| Day 21    | 최종 테스트 & Vercel 배포    | 2h   |

**✅ 마일스톤:** 팀원 입력 → 1초 내 반영 + AI 팀 현황 요약 + 배포 완료

---

## ⚠️ 주요 리스크 & 대응 방안

### 1️⃣ 학습 곡선 (높음)

- **문제:** Next.js App Router + TypeScript를 처음 배우면서 동시에 개발
- **영향:** 개발 속도 저하 (예상 20-30% 더 오래 걸림)
- **대응:**
  - Day 1-2에서 기본 개념 충분히 학습
  - Claude Code로 코드 생성하며 빠르게 따라가기
  - 튜토리얼보다는 실전으로 배우기

### 2️⃣ 환경 세팅 (중간)

- **문제:** Node.js, npm, Next.js, SQLite 설정 경험 없음
- **영향:** 예상 2-3시간 vs 실제 4-6시간 걸릴 가능성
- **대응:**
  - Day 1 전에 미리 Node.js, npm 설치
  - Claude Code에게 단계별 가이드 받기
  - 설정 완료 후 API Routes 예제로 검증

### 3️⃣ 버그 & 테스트 시간 (높음)

- **문제:** Day 21에 할당된 2시간(최종 테스트)으로 충분하지 않을 가능성
- **영향:** 배포 전 주요 버그 미해결 → 일정 초과 또는 품질 저하
- **대응:**
  - 개발하면서 **지속적으로 테스트** (Day별)
  - Day 7 이후 (2주차부터) 발견된 버그 즉시 수정
  - 필수 기능(입력 → 표시 → AI 요약)부터 우선 검증

### 4️⃣ 1명 개발의 병목 (중간)

- **문제:** 기술적 문제 발생 시 해결 속도 저하, 혼자 결정해야 함
- **영향:** 막히면 진행 불가 → 일정 압박
- **대응:**
  - Claude Code 활용으로 빠른 문제 해결
  - 온라인 커뮤니티(Stack Overflow, Next.js Discord) 참고
  - 설계 단계부터 신중히 (되돌리기 어려운 결정 피하기)

---

## ✅ 필수 조건 & 주의사항

### 반드시 지켜야 할 것

**1. Claude Code 활용 필수** 🤖

- 코드 작성, 컴포넌트 생성, API 작성 시 활용
- 이것만으로 **20-30% 시간 절감**
- 혼자 모든 코드를 작성하면 일정 초과 위험

**2. 일정 엄수** 📅

- 각 주차별 마일스톤 달성 필수
- 1주차 밀리면 이후 전체 일정 영향
- 미루지 말고 **매일 꾸준히 진행하기**

**3. MVP 범위 유지** 🎯

- 로그인, 알림, 통계는 **v2로 미루기**
- 현재 목표: 입력 + 대시보드 + AI 요약만
- 추가 기능 시도 금지 (일정 압박)

**4. 지속적인 테스트** 🧪

- Day 21에 몰아서 하지 말 것
- 각 단계마다 테스트 (Day 1-2 이후부터)
- 버그는 빨리 발견할수록 비용이 적음

---

## 🔧 Day 1-2 환경 세팅 상세 가이드 (4시간)

**개발 시작 전에 꼭 따라하세요!**

### 1️⃣ Node.js & npm 설치 확인 (30분)

터미널/PowerShell을 열고 다음을 실행:

```bash
node --version   # v18 이상 필요
npm --version
```

✅ 버전이 출력되면 이미 설치됨

### 2️⃣ Next.js 프로젝트 생성 (30분)

```bash
npx create-next-app@latest team-dashboard --typescript --app

# 선택지가 나오면:
# - TypeScript: Yes
# - ESLint: Yes
# - Tailwind CSS: No (기본 CSS 사용)
# - src/ directory: No
# - App Router: Yes

cd team-dashboard
```

### 3️⃣ SQLite 드라이버 설치 (30분)

```bash
npm install better-sqlite3
npm install @types/better-sqlite3 --save-dev
```

### 4️⃣ 프로젝트 폴더 구조 이해 (1시간)

생성된 `team-dashboard/` 폴더를 VS Code로 열면 이런 구조:

```
team-dashboard/
├── app/
│   ├── layout.tsx         (전체 레이아웃)
│   ├── page.tsx           (메인 페이지 → 나중에 대시보드 추가)
│   └── api/
│       └── hello/
│           └── route.ts   (API 엔드포인트 예제)
├── components/            (React 컴포넌트들 저장)
├── public/                (이미지, 파일 저장)
├── lib/                   (유틸리티, DB 연결 함수)
├── package.json
└── tsconfig.json
```

**핵심 폴더:**

- `app/page.tsx` — 메인 페이지 (대시보드 UI)
- `app/api/` — 백엔드 API Routes
- `components/` — InputForm, Dashboard 등 컴포넌트
- `lib/` — SQLite 연결, 데이터 쿼리 함수

### 5️⃣ 개발 서버 실행 (1시간)

```bash
npm run dev
```

✅ 터미널에 `ready - started server on localhost:3000` 나오면 성공

**브라우저에서 확인:**

- http://localhost:3000 열기
- Next.js 환영 페이지 보이면 OK

**종료하기:** 터미널에서 `Ctrl+C`

---

**✅ Day 1-2 완료 체크리스트:**

- [ ] Node.js v18+ 설치됨
- [ ] Next.js 프로젝트 생성됨
- [ ] SQLite 드라이버 설치됨
- [ ] npm run dev 실행 가능

**다음:** Day 3부터 UI 디자인 시작!

---

## 📊 샘플 데이터 안내 (Day 20에 준비)

### 목적

- 빈 대시보드는 시연 임팩트 약함
- **시연 전에 10명 다양한 상태 데이터 미리 준비**
- 배포 후 즉시 보기 좋은 상태로 데모 가능

### 10명 샘플 데이터 구성

**진행중 (파란색) - 5명**

```
1. 팀원1 — "API 연동 중"
2. 팀원2 — "DB 스키마 작성 진행 중"
3. 팀원3 — "프론트엔드 컴포넌트 개발 중"
4. 팀원4 — "데이터 검증 로직 개발 중"
5. 팀원5 — "테스트 케이스 작성 중"
```

**완료 (초록색) - 3명**

```
6. 팀원6 — "초기 설계 완료"
7. 팀원7 — "UI 목업 완료"
8. 팀원8 — "요구사항 분석 완료"
```

**대기중 (회색) - 2명**

```
9. 팀원9 — "검토 대기 중"
10. 팀원10 — "데이터 확보 대기 중"
```

### Day 20 구현 방법

**Step 1: `lib/seedData.ts` 생성**

```typescript
// lib/seedData.ts
export const sampleTeams = [
  { name: "팀원1" },
  { name: "팀원2" },
  { name: "팀원3" },
  { name: "팀원4" },
  { name: "팀원5" },
  { name: "팀원6" },
  { name: "팀원7" },
  { name: "팀원8" },
  { name: "팀원9" },
  { name: "팀원10" },
];

export const sampleTasks = [
  { title: "API 구현", description: "백엔드 API 개발" },
  { title: "UI 개발", description: "프론트엔드 컴포넌트" },
  { title: "DB 설계", description: "데이터베이스 구축" },
];

export const sampleTeamTasks = [
  { teamId: 1, taskId: 1, status: "진행중", description: "API 연동 중" },
  { teamId: 2, taskId: 3, status: "진행중", description: "DB 스키마 작성 진행 중" },
  // ... (10명 × 다양한 작업)
];
```

**Step 2: 앱 시작 시 자동 로드**

`app/layout.tsx` 또는 초기화 함수에서:

```typescript
import { initSampleData } from '@/lib/seedData';

// 개발 환경에서만 실행
if (process.env.NODE_ENV === 'development') {
  initSampleData();
}
```

**Step 3: Day 20 테스트 항목**

배포 전 다음을 확인:

- [ ] 10명 모두 대시보드에 표시
- [ ] 상태별 색상 구분 정확 (파랑/초록/회색)
- [ ] AI 요약이 정확하게 생성 ("5명 진행중, 3명 완료, 2명 대기")
- [ ] 10명을 한 화면에서 스크롤로 모두 볼 수 있음
- [ ] 각 팀원의 진행 텍스트가 명확함

---

## 🎯 v2 Roadmap (이후)

- 각 작업의 마감일 & 완료 여부 관리
- 팀 비용 추적
- 주간 리포트 자동 생성
- 슬랙/이메일 알림 기능 (선택적)
- 로그인/권한 관리
