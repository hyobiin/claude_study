# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 프로젝트 개요

**claude_study** 저장소는 HTML/CSS/JavaScript 학습 프로젝트입니다.
다양한 CSS 프레임워크와 패턴을 실험하고 학습하는 목적의 독립적인 웹 애플리케이션들로 구성되어 있습니다.

## 프로젝트 구조

```
claude-code-mastery/
├── counter-app.html        # 카운터 앱 (Tailwind CSS 예제)
├── todo-list.html          # 할일 관리 앱 (Vanilla CSS 예제)
├── index.html              # 프로필 웹사이트 (Bootstrap 5 예제)
└── CLAUDE.md               # 이 파일
```

## 기술 스택

프로젝트는 순수 HTML/CSS/JavaScript로 구성된 정적 웹 애플리케이션들입니다. 백엔드나 빌드 프로세스는 없습니다.

### 사용된 CSS 프레임워크

1. **counter-app.html** → Tailwind CSS (CDN)
   - 유틸리티-퍼스트 CSS 프레임워크 학습
   - 실시간 스타일링

2. **todo-list.html** → Vanilla CSS
   - 순수 CSS로 스타일링 구현
   - CSS 기초 학습

3. **index.html** → Bootstrap 5 (CDN)
   - 컴포넌트 기반 CSS 프레임워크 학습
   - 그리드 시스템, 반응형 디자인

## 개발 가이드

### 브라우저에서 실행하기

모든 파일은 정적 HTML이므로 브라우저에서 직접 열 수 있습니다:
- 파일 탐색기에서 HTML 파일 더블클릭
- 또는 `file://` URL로 브라우저에 드래그&드롭

### 라이브 서버 사용 (선택사항)

개발 중 변경사항을 즉시 반영하려면:
```bash
# Node.js가 설치되어 있다면:
npx http-server
# 또는 VS Code Live Server 확장 사용
```

### 파일 수정 시 주의사항

#### counter-app.html & todo-list.html
- 한글 주석을 포함하고 있음 (UTF-8 인코딩 유지)
- 간단한 함수형 JavaScript (별도의 번들링 불필요)

#### index.html
- Bootstrap 5.3 CDN 사용 (인터넷 필요)
- Bootstrap Icons 아이콘 포함
- TODO 주석으로 표시된 개인정보 수정 영역:
  - 프로필 이름, 직함, 소개
  - SNS 링크 (GitHub, LinkedIn, Email)
  - 기술 스택 목록
  - 프로젝트 정보

## 스타일 가이드라인

### 마크업
- HTML5 시맨틱 마크업 사용
- `lang="ko"` 속성 포함 (한글 문서)
- 적절한 meta 태그 설정 (charset, viewport)

### CSS/스타일
- 각 프로젝트는 독립적인 CSS 스트래티지 학습
- 과도한 주석 없이 명확한 클래스명 사용
- 모바일 반응형 고려 (viewport 메타 태그 필수)

### JavaScript
- 순수 Vanilla JavaScript 사용
- 필요한 경우에만 DOM 조작
- 명확한 함수명과 최소한의 주석

## Git 워크플로우

- **main 브랜치**: 안정된 버전
- 새 앱 추가 시: 단일 HTML 파일로 제작 후 커밋
- 커밋 메시지: 한글로 작성 (예: "카운터 앱 추가: Tailwind CSS 예제")

## 향후 확장 계획

현재 프로젝트들의 개선:
- 더 많은 CSS 프레임워크 예제 추가 (Material UI, DaisyUI 등)
- JavaScript 상태 관리 패턴 학습 (간단한 패턴)
- 접근성(a11y) 개선
