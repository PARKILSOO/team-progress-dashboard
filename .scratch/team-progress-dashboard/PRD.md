# 팀 진행상황 대시보드 - Product Requirements Document (PRD)

**Status**: ready-for-agent  
**작성일**: 2026-06-24  
**개발 기간**: 3주 (21일)

---

## Problem Statement

10명 이상의 팀원을 관리하는 팀장들이 현재 진행상황 파악에 어려움을 겪고 있습니다:

- **Manual Tracking**: 진행상황을 엑셀로 관리하며 지속적인 수동 업데이트 필요
- **Reactive Discovery**: 팀장이 각 팀원에게 일일이 물어봐야만 상황 파악 가능
- **Information Staleness**: 실시간 업데이트가 불가능해 정확도 저하
- **Admin Overhead**: 상태 업데이트에 전략적 업무 시간 소모
- **No Synthesis**: 원본 진행 데이터를 분석하거나 병목 현상 파악 어려움

결과적으로 팀장은 신속한 의사결정을 내릴 수 없고, 팀원들은 반복적인 상태 보고에서 오는 마찰을 경험합니다.

---

## Solution

팀장이 다음을 할 수 있도록 하는 Real-time Progress Dashboard 구축:

1. **Unified Team View** — 10명 팀원의 모든 작업 상태를 하나의 통합 화면에서 확인
2. **Sub-second Updates** — 팀원이 진행상황을 입력하면 1초 내에 대시보드에 반영
3. **Color-coded Status** — 색상 코드 (in progress=파란색, complete=초록색, blocked=회색)로 빠른 스캔 가능
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

- **Frontend**: Next.js App Router + TypeScript — 빠른 반복과 풀스택 JavaScript 개발 가능
- **State Management**: React hooks (useState, useEffect) — MVP 범위에 충분; 단순성 우선
- **Styling**: HTML/CSS only — 외부 UI 프레임워크 없음으로 설정 시간 최소화
- **Backend**: Next.js API Routes — 백엔드 로직을 프론트엔드와 함께 배치
- **Database**: SQLite — 파일 기반, 인프라 제로, 10명 팀원 + 7일 히스토리 관리에 충분
- **AI Integration**: Claude API — 진행상황 데이터를 인간이 읽을 수 있는 요약으로 종합
- **Deployment**: Vercel — Next.js 제로 설정 배포

### Data Model

세 개의 정규화된 테이블:

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
- 작업당 여러 팀원 지원 (작업 완료율: "3/5명 완료")
- 팀원당 여러 작업 지원 (팀원이 다양한 업무 관리)
- `updatedAt` 타임스탬프 필터링으로 7일 히스토리 유지
- v2 기능 확장 가능

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

- **InputForm** — 팀원이 진행상황을 제출하는 간단한 폼 (상태 드롭다운 + 설명 텍스트 영역)
- **Dashboard** — 모든 팀원 × 모든 작업의 그리드/리스트 뷰 (색상 코드 상태 카드)
- **StatusCard** — 한 팀원의 한 작업 상태 개별 셀 (색상, 타임스탬프, 호버 시 설명)
- **Summary** — AI 생성 텍스트 요약 (대시보드 상단에 표시)

### Integration Seams

**Primary Seam**: `/api/progress` endpoint
- 팀원이 InputForm으로 진행상황 제출 → POST to `/api/progress` → SQLite 삽입 → `GET /api/dashboard` 재조회 → Dashboard 재렌더링

**Secondary Seams**:
- `/api/teams` and `/api/tasks` — 팀원/작업 관리 관리자 엔드포인트
- `/api/ai-summary` — 진행상황 업데이트 후 자동 호출; 결과는 캐시되어 대시보드에서 제공

---

## Testing Decisions

### What makes a good test

- **Test external behavior**: 팀원이 진행상황 제출 → 대시보드 1초 내 업데이트
- **Avoid brittle implementation tests**: 내부 코드가 바뀌어도 행동이 올바르면 테스트는 통과해야 함
- **Mock Claude API**: AI 요약 테스트는 API 응답을 모의하여 요청 한계 회피

### Modules to test

1. **InputForm Component**
   - Submits valid payload on form submit
   - Disables submit button during request
   - Shows confirmation on success
   - Displays error message on failure

2. **Dashboard Component**
   - Renders all team members and tasks in a grid
   - Applies correct color CSS classes based on status
   - Refetches and re-renders when new progress arrives
   - Displays AI summary at top of page

3. **POST /api/progress Endpoint**
   - Validates payload (teamId, taskId exist; status in allowed set)
   - Inserts/updates TeamTask record in SQLite
   - Returns updated record within response

4. **GET /api/dashboard Endpoint**
   - Returns all teams, tasks, current progress records
   - Filters TeamTask records to past 7 days only
   - Includes AI summary (mocked for testing)

5. **AI Summary Generation** (`/api/ai-summary`)
   - Formats progress data as prompt
   - Calls Claude API
   - Returns structured summary string
   - Handles API errors gracefully

### Prior Art

- Similar "realtime dashboard update" tests exist in Next.js tutorials and open-source dashboards
- Component testing pattern: React Testing Library for InputForm, Dashboard
- API route testing pattern: Jest with mocked database

---

## Out of Scope

다음 기능들은 명시적으로 **v2 이후**로 미룹니다:

- User authentication and access control
- Notifications (email, Slack, push)
- Deadline and due-date management
- Advanced reporting and analytics
- Team cost tracking
- Real-time chat or comments
- Mobile app (web is responsive)
- Recurring task templates
- External tool integrations (Jira, Asana, etc.)

---

## Further Notes

### Success Criteria

MVP는 라이브 데모에서 다음이 가능하면 성공입니다:

1. Team leader can see all 10 team members' progress on multiple tasks **in a single view**
2. When a team member submits progress, it appears on the dashboard **within 1 second**
3. Status colors are **visually distinct** and easy to scan
4. Team leader can **understand team health in 30 seconds** without reading individual entries
5. AI summary **accurately reflects** team state (e.g., "5 in progress, 3 complete, 2 blocked") and **highlights real blockers**

### Sample Data (Day 20)

데모용으로 Day 20에 다양한 상태의 10명 샘플 팀원 데이터 준비:

- **5 in progress**: "API auth module", "DB schema iteration", "Frontend components", "Data validation logic", "Test suite"
- **3 complete**: "Initial architecture", "UI mockups", "Requirements analysis"
- **2 blocked**: "Waiting on code review", "Awaiting test data"

AI 요약: *"Team has solid progress: 5 tasks actively in flight, 3 completed, 2 waiting for unblocks. Main blockers: code review bottleneck, test data availability. Estimated completion on track."*

### Key Risks & Mitigations

1. **Learning Curve (높음)** — Next.js/TypeScript를 처음 배우며 동시 개발. 완화: Claude Code 지원 개발 및 Day 1부터 실전 학습

2. **Environment Setup (중간)** — Node.js, npm, Next.js, SQLite 설정 경험 부재. 완화: Day 1 전에 Node.js 사전 설치; Claude Code 단계별 가이드

3. **Late-stage Bugs (높음)** — Day 21의 2시간 최종 테스트가 불충분할 수 있음. 완화: Day 1부터 지속적 테스트; 발견 버그 즉시 수정

4. **Single-person Bottleneck (중간)** — 기술 문제 시 해결 속도 저하. 완화: Claude Code로 신속한 문제 해결

### Development Timeline

**Week 1 (Days 1-7)**: Environment Setup + Input Form (14 hours)
- Days 1-2: Node.js, Next.js, SQLite setup
- Days 3-5: UI design, component architecture
- Days 6-7: InputForm component + basic API scaffold

**Week 2 (Days 8-14)**: Dashboard + Data Layer (14 hours)
- Days 8-11: Dashboard UI, color-coding, real-time updates
- Days 12-14: SQLite schema, API routes, data persistence

**Week 3 (Days 15-21)**: API Integration + AI + Deploy (14 hours)
- Days 15-17: Full API implementation, database wiring
- Day 18: Real-time sync, 7-day history filtering
- Day 19: Claude API integration for AI summaries
- Day 20: Sample data (10 team members), end-to-end testing
- Day 21: Final testing, Vercel deployment

---

**End of PRD**
