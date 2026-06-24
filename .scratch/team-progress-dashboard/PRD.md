# 팀 진행상황 대시보드 - Product Requirements Document (PRD)

**Status**: ready-for-agent  
**작성일**: 2026-06-24  
**개발 기간**: 3주 (21일)

---

## Problem Statement

10명 이상의 팀원을 관리하는 팀장들이 현재 진행상황 파악에 어려움을 겪고 있습니다:

- **Manual Tracking** — 진행상황을 엑셀로 관리하며 지속적인 수동 업데이트 필요
- **Reactive Discovery** — 팀장이 각 팀원에게 일일이 물어봐야만 상황 파악 가능
- **Information Staleness** — 실시간 업데이트가 불가능해 정확도 저하
- **Admin Overhead** — 상태 업데이트에 전략적 업무 시간 소모
- **No Synthesis** — 원본 진행 데이터를 분석하거나 병목 현상 파악 어려움

결과: 팀장은 신속한 의사결정을 내릴 수 없고, 팀원들은 반복적인 상태 보고에서 오는 마찰을 경험합니다.

---

## Solution

팀장이 다음을 할 수 있도록 하는 Real-time Progress Dashboard 구축:

1. **Unified Team View** — 10명 팀원의 모든 작업 상태를 하나의 통합 화면에서 확인
2. **Sub-second Updates** — 팀원이 진행상황을 입력하면 1초 내에 대시보드에 반영
3. **Color-coded Status** — 색상 코드 (진행중=파란색, 완료=초록색, 대기=회색)로 빠른 스캔 가능
4. **AI-powered Synthesis** — AI 기반 요약이 자동으로 진행 데이터를 종합해 주요 블로커, 완료율, 트렌드 파악

팀원들은 간단하고 마찰 없는 진행상황 입력 경험을 제공받습니다.

---

## User Stories

### 팀장 (Primary User)

1. 팀장으로서, 나는 모든 팀원(10명)의 모든 작업 진행상황을 하나의 대시보드에서 보고 싶습니다. 그래야 팀 전체 상태를 한눈에 파악할 수 있습니다.

2. 팀장으로서, 나는 팀원의 진행상황 입력 후 1초 이내에 대시보드에 업데이트되는 것을 보고 싶습니다. 그래야 항상 최신 상태를 볼 수 있습니다.

3. 팀장으로서, 나는 진행상황 상태를 색상으로 구분하고 싶습니다 (진행중=파란색, 완료=초록색, 대기=회색). 그래야 빠르게 스캔하고 문제 영역을 찾을 수 있습니다.

4. 팀장으로서, 나는 각 팀원의 작업별 마지막 업데이트 시간을 보고 싶습니다. 그래야 정보가 얼마나 최신인지 알 수 있습니다.

5. 팀장으로서, 나는 모든 팀원의 진행상황 입력을 AI가 종합 분석한 팀 현황 요약을 보고 싶습니다. 그래야 개별 항목을 읽지 않고도 블로커와 전체 완료율을 이해할 수 있습니다.

6. 팀장으로서, 나는 AI 요약이 진행상황 입력에서 언급된 주요 블로커를 찾아내고 표면화하기를 바랍니다. 그래야 차단 해제 작업을 우선순위로 설정할 수 있습니다.

7. 팀장으로서, 나는 AI 요약이 한 문장의 스냅샷을 제공하기를 바랍니다 (예: "5명 진행중, 3명 완료, 2명 대기 | 주요 블로커: 데이터 검증, API 성능"). 그래야 이해관계자들에게 빠르게 보고할 수 있습니다.

8. 팀장으로서, 나는 지난 7일간의 진행상황 히스토리를 보고 싶습니다. 그래야 트렌드를 이해하고 지연 패턴을 감지할 수 있습니다.

9. 팀장으로서, 나는 팀원 명단을 관리하고 싶습니다 (팀원 추가/제거). 그래야 팀 구성이 바뀔 때 대시보드를 최신으로 유지할 수 있습니다.

10. 팀장으로서, 나는 작업 목록을 관리하고 싶습니다 (새 작업 추가, 설명 수정). 그래야 대시보드가 현재 업무를 반영하게 합니다.

11. 팀장으로서, 나는 어느 브라우저에서나 대시보드에 접근하고 싶습니다. 그래야 책상에서, 회의 중, 이동 중에도 진행상황을 확인할 수 있습니다.

### 팀원 (Secondary User)

12. 팀원으로서, 나는 최소한의 마찰로 빠르게 작업 진행상황을 업데이트하고 싶습니다. 그래야 업무를 방해하지 않으면서 상태를 보고할 수 있습니다.

13. 팀원으로서, 나는 미리 정의된 상태 옵션 중 선택하고 싶습니다 (진행중, 완료, 대기). 그래야 상태 입력이 빠르고 일관성 있게 진행됩니다.

14. 팀원으로서, 나는 진행상황을 간단한 텍스트로 설명하고 싶습니다 (예: "API 인증 모듈 작업 중, 토큰 갱신에서 차단 문제 발생"). 그래야 팀장이 상세 정보를 이해할 수 있습니다.

15. 팀원으로서, 나는 입력 폼이 간단하고 모바일 친화적이기를 바랍니다. 그래야 책상에서 벗어나 있어도 진행상황을 업데이트할 수 있습니다.

16. 팀원으로서, 나는 진행상황 업데이트가 제출되었다는 확인을 보고 싶습니다. 그래야 팀장이 최신 상태를 볼 것이라는 것을 알 수 있습니다.

---

## Implementation Decisions

### Architecture & Tech Stack

- **Frontend** — Next.js App Router + TypeScript로 빠른 반복과 풀스택 JavaScript 개발 가능
- **State Management** — React hooks (useState, useEffect)로 MVP 범위에 충분; 단순성을 우선으로 함
- **Styling** — HTML/CSS만 사용하여 외부 UI 프레임워크 의존도 제거 및 설정 시간 최소화
- **Backend** — Next.js API Routes로 백엔드 로직을 프론트엔드와 함께 배치하여 별도 서버 불필요
- **Database** — SQLite 파일 기반으로 인프라 없이 10명 팀원 + 7일 히스토리 관리에 충분
- **AI Integration** — Claude API로 진행상황 데이터를 인간이 읽을 수 있는 요약으로 종합
- **Deployment** — Vercel의 Next.js 제로 설정 배포

### Data Model

세 개의 정규화된 테이블로 구성:

**Team** — 팀원 명단
```sql
CREATE TABLE Team (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL UNIQUE,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**Task** — 작업 항목
```sql
CREATE TABLE Task (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL,
  description TEXT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

**TeamTask** — 진행상황 연결 테이블
```sql
CREATE TABLE TeamTask (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  teamId INTEGER NOT NULL,
  taskId INTEGER NOT NULL,
  status TEXT NOT NULL CHECK(status IN ('in progress', 'complete', 'blocked')),
  description TEXT,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (teamId) REFERENCES Team(id),
  FOREIGN KEY (taskId) REFERENCES Task(id)
);
```

**설계 근거**:
- 작업당 여러 팀원 지원 — 작업 완료율을 계산할 수 있음 (예: "3/5명 완료")
- 팀원당 여러 작업 지원 — 팀원이 다양한 업무를 동시에 관리 가능
- `updatedAt` 타임스탐프로 7일 히스토리 필터링 가능
- v2 기능 확장 용이 (마감일, 우선순위, 예상시간 등)

### API Contracts

**GET /api/dashboard**
```
Response: { 
  tasks: Task[], 
  teams: Team[], 
  progress: TeamTask[], 
  summary: string 
}
```

**POST /api/progress**
```
Payload: { 
  teamId: number, 
  taskId: number, 
  status: string, 
  description: string 
}
Response: { 
  success: boolean, 
  updatedRecord: TeamTask 
}
```

**POST /api/teams**
```
Payload: { name: string }
Response: { success: boolean, team: Team }
```

**POST /api/tasks**
```
Payload: { title: string, description?: string }
Response: { success: boolean, task: Task }
```

**POST /api/ai-summary**
```
Payload: { 
  progress: TeamTask[], 
  teams: Team[], 
  tasks: Task[] 
}
Response: { summary: string }
```

### UI Components

- **InputForm** — 팀원이 진행상황을 제출하기 위한 간단한 폼 (상태 드롭다운 + 설명 텍스트 영역)
- **Dashboard** — 모든 팀원 × 모든 작업을 그리드/리스트 뷰로 표시 (색상 코드된 상태 카드)
- **StatusCard** — 한 팀원의 한 작업 상태를 나타내는 개별 셀 (색상, 타임스탬프, 호버 시 설명 표시)
- **Summary** — AI로 생성된 텍스트 요약 (대시보드 상단에 우타나게 표시)

### Integration Seams

**Primary Seam** — `/api/progress` 엔드포인트
- 팀원이 InputForm으로 진행상황 제출 → `/api/progress`로 POST → SQLite에 데이터 삽입 → `/api/dashboard`로 재조회 → Dashboard 재렌더링
- 이것이 핵심 경로이며, 다른 모든 기능이 이를 중심으로 구성됨

**Secondary Seams**:
- `/api/teams`와 `/api/tasks` — 팀원/작업 관리를 위한 관리자 엔드포인트 (나중에 CLI 또는 관리자 UI로 구현 가능)
- `/api/ai-summary` — 진행상황 업데이트 후 자동 호출되며, 결과는 캐시되어 대시보드 상태에서 제공됨

---

## Testing Decisions

### What makes a good test

- **Test external behavior** — 팀원이 진행상황을 제출하면 대시보드에 1초 내에 업데이트되어야 함. SQLite 쿼리를 독립적으로 테스트하지 말 것.
- **Avoid brittle implementation tests** — 내부 코드가 바뀌어도 외부 행동이 올바르면 테스트는 통과해야 함
- **Mock Claude API** — AI 요약 테스트는 실제 API 호출 대신 응답을 모의하여 요청 한계와 지연 시간 회피

### Modules to test

1. **InputForm Component** — 팀원의 진행상황 입력 폼
   - 폼 제출 시 유효한 페이로드를 제출해야 함
   - 요청 중 제출 버튼을 비활성화해야 함
   - 성공 시 확인 메시지를 표시해야 함
   - 실패 시 오류 메시지를 표시해야 함

2. **Dashboard Component** — 팀 진행상황 대시보드
   - 모든 팀원과 작업을 그리드에 렌더링해야 함
   - 상태에 따라 올바른 색상 CSS 클래스를 적용해야 함
   - 새로운 진행상황이 도착하면 재조회하고 재렌더링해야 함
   - 대시보드 상단에 AI 요약을 표시해야 함

3. **POST /api/progress Endpoint** — 진행상황 제출 API
   - 페이로드를 검증 (teamId, taskId 존재 확인; status이 허용된 값)
   - SQLite에 TeamTask 레코드를 삽입하거나 업데이트해야 함
   - 응답에 업데이트된 레코드를 포함해야 함

4. **GET /api/dashboard Endpoint** — 대시보드 데이터 조회 API
   - 모든 팀, 작업, 현재 진행상황 레코드를 반환해야 함
   - TeamTask 레코드를 지난 7일로만 필터링해야 함
   - AI 요약을 포함해야 함 (테스트 시 모의)

5. **AI Summary Generation** (`/api/ai-summary`) — AI 요약 생성
   - 진행상황 데이터를 프롬프트로 포맷해야 함
   - Claude API를 호출해야 함
   - 구조화된 요약 문자열을 반환해야 함
   - API 오류를 우아하게 처리해야 함

### Prior Art

- 유사한 "실시간 대시보드 업데이트" 테스트는 Next.js 튜토리얼과 오픈소스 대시보드에서 찾을 수 있음
- Component 테스트 패턴: InputForm과 Dashboard는 React Testing Library 사용
- API 라우트 테스트 패턴: Jest와 모의 데이터베이스 조합 사용

---

## Out of Scope

다음 기능들은 MVP 범위에서 명시적으로 제외되며, **v2 이후**에 추가될 예정입니다:

- User authentication and access control — 사용자 인증 및 접근 제어
- Notifications (email, Slack, push) — 알림 기능
- Deadline and due-date management — 마감일 관리
- Advanced reporting and analytics — 고급 리포팅 및 분석
- Team cost tracking — 팀 비용 추적
- Real-time chat or comments — 실시간 채팅/댓글
- Mobile app (web is responsive) — 모바일 앱 (웹은 반응형)
- Recurring task templates — 반복 작업 템플릿
- External tool integrations (Jira, Asana, etc.) — 외부 도구 통합

---

## Further Notes

### Success Criteria

MVP는 라이브 데모에서 다음 조건을 모두 충족하면 성공입니다:

1. 팀장이 10명 모든 팀원의 진행상황을 여러 작업에 걸쳐 **한 화면에서 파악** 가능
2. 팀원이 진행상황을 제출하면 대시보드에 **1초 이내에 반영**
3. 상태 색상이 **시각적으로 명확**해서 빠르게 스캔 가능
4. 팀장이 개별 항목을 읽지 않고도 **30초 안에 팀 상태 파악** 가능
5. AI 요약이 팀 상태를 **정확하게 반영** (예: "5명 진행중, 3명 완료, 2명 대기")하고 **실제 블로커를 강조**

### Sample Data (Day 20)

데모 임팩트를 위해 Day 20에 다양한 상태의 10명 샘플 팀원 데이터 준비:

- **5 in progress** (진행중) — "API auth module", "DB schema iteration", "Frontend components", "Data validation logic", "Test suite"
- **3 complete** (완료) — "Initial architecture", "UI mockups", "Requirements analysis"  
- **2 blocked** (대기) — "Waiting on code review", "Awaiting test data"

예상 AI 요약: *"Team has solid progress: 5 tasks actively in flight, 3 completed, 2 waiting for unblocks. Main blockers: code review bottleneck, test data availability. Estimated completion on track."*

### Key Risks & Mitigations

1. **Learning Curve** (위험도: 높음) 
   - 문제: Next.js/TypeScript를 처음 배우면서 동시에 개발하면 속도 저하 (예상 20-30% 추가 시간)
   - 완화: Claude Code 지원 개발 및 Day 1부터 실전 학습; 튜토리얼보다는 실제 코드 구축

2. **Environment Setup** (위험도: 중간)
   - 문제: Node.js, npm, Next.js, SQLite 설정 경험 부재 (예상 2-3시간 vs 실제 4-6시간)
   - 완화: Day 1 전에 Node.js 사전 설치; Claude Code 단계별 가이드

3. **Late-stage Bugs** (위험도: 높음)
   - 문제: Day 21의 2시간 최종 테스트로는 주요 버그 발견 불충분 가능성
   - 완화: Day 1부터 지속적 테스트; Day 7 이후 발견 버그 즉시 수정; 필수 기능부터 우선 검증

4. **Single-person Bottleneck** (위험도: 중간)
   - 문제: 기술적 문제 발생 시 해결 속도 저하, 혼자 결정해야 함
   - 완화: Claude Code로 신속한 문제 해결; 온라인 커뮤니티(Stack Overflow, Next.js Discord) 활용; 설계 단계부터 신중히

### Development Timeline

**Week 1 (Days 1-7)** — 환경 설정 + 입력 폼 완성 (14시간)
- Days 1-2 (4시간): Node.js, Next.js, SQLite 설정
- Days 3-5 (6시간): UI 디자인, 컴포넌트 아키텍처
- Days 6-7 (4시간): InputForm 컴포넌트 + 기본 API 스캐폴드
- **마일스톤**: 팀원이 진행상황을 입력할 수 있는 폼 완성

**Week 2 (Days 8-14)** — 대시보드 + 데이터 계층 (14시간)
- Days 8-11 (8시간): Dashboard UI, 색상 코딩, 실시간 업데이트
- Days 12-14 (6시간): SQLite 스키마, API 라우트, 데이터 지속성
- **마일스톤**: 더미 데이터로 10명 대시보드 표시 가능

**Week 3 (Days 15-21)** — API 통합 + AI + 배포 (14시간)
- Days 15-17 (6시간): 완전한 API 구현, 데이터베이스 연결
- Day 18 (2시간): 실시간 동기화, 7일 히스토리 필터링
- Day 19 (2시간): Claude API 통합으로 AI 요약 기능 구현
- Day 20 (2시간): 샘플 데이터 (10명 팀원) 준비, 종합 테스트
- Day 21 (2시간): 최종 테스트, Vercel 배포
- **마일스톤**: 팀원 입력 → 1초 내 반영 + AI 팀 현황 요약 + 배포 완료

---

**End of PRD**
