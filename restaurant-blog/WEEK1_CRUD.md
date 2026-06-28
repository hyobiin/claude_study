# 1주차: 기본 CRUD & Route Handlers

## 완성된 기능

✅ Post 타입 정의 (TypeScript)
✅ 메모리 저장소 (임시 데이터)
✅ Route Handlers (CRUD API)

## 프로젝트 실행

```bash
npm run dev
# http://localhost:3000 에서 실행됨
```

## API 테스트 (curl 또는 Postman)

### 1️⃣ 모든 글 조회
```bash
curl http://localhost:3000/api/posts
```

### 2️⃣ 글 생성
```bash
curl -X POST http://localhost:3000/api/posts \
  -H "Content-Type: application/json" \
  -d '{
    "title": "강남 카페",
    "description": "분위기 좋은 카페",
    "rating": 4.5,
    "location": {
      "lat": 37.4979,
      "lng": 127.0276,
      "address": "서울 강남구"
    },
    "images": [],
    "author": "사용자3"
  }'
```

### 3️⃣ 특정 글 조회
```bash
curl http://localhost:3000/api/posts/1
```

### 4️⃣ 글 수정
```bash
curl -X PUT http://localhost:3000/api/posts/1 \
  -H "Content-Type: application/json" \
  -d '{
    "rating": 5,
    "description": "정말 좋은 음식!"
  }'
```

### 5️⃣ 글 삭제
```bash
curl -X DELETE http://localhost:3000/api/posts/1
```

## 프로젝트 구조

```
src/
├── app/
│   ├── api/
│   │   └── posts/
│   │       ├── route.ts          # GET (목록), POST (생성)
│   │       └── [id]/route.ts     # GET, PUT, DELETE
│   └── layout.tsx
├── lib/
│   └── postStore.ts              # 메모리 저장소 (CRUD 로직)
└── types/
    └── post.ts                   # TypeScript 타입
```

## 다음 단계 (2주차)

2주차에서는 다음을 구현합니다:
- PostForm 컴포넌트 (글 작성 UI)
- PostCard 컴포넌트 (글 카드)
- /posts 페이지 (글 목록)
- /posts/new 페이지 (글 작성)
- Zustand 상태관리

---

✨ 1주차 완료!
