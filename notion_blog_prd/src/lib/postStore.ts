import { Post, CreatePostInput, UpdatePostInput } from '@/types/post';

// 메모리 저장소 - 임시 데이터 저장 (브라우저 새로고침하면 초기화)
let posts: Post[] = [
  {
    id: '1',
    title: '홍대 핫플 피자집',
    description: '신선한 재료로 만든 최고의 피자! 강력 추천합니다.',
    rating: 5,
    location: {
      lat: 37.5515,
      lng: 126.9239,
      address: '서울 마포구 홍대입구역 근처'
    },
    images: [],
    author: '사용자1',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: '강남 국밥 맛집',
    description: '진짜 맛있는 국밥! 가성비 최고',
    rating: 4.5,
    location: {
      lat: 37.4979,
      lng: 127.0276,
      address: '서울 강남구 강남역 근처'
    },
    images: [],
    author: '사용자2',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-10')
  }
];

/**
 * 모든 글 조회
 */
export function getAllPosts(): Post[] {
  return posts.sort((a, b) =>
    new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

/**
 * 글 ID로 조회
 */
export function getPostById(id: string): Post | undefined {
  return posts.find(post => post.id === id);
}

/**
 * 글 생성
 */
export function createPost(input: CreatePostInput): Post {
  const id = Math.random().toString(36).substr(2, 9);
  const now = new Date();

  const newPost: Post = {
    ...input,
    id,
    createdAt: now,
    updatedAt: now
  };

  posts.push(newPost);
  return newPost;
}

/**
 * 글 수정
 */
export function updatePost(id: string, input: UpdatePostInput): Post | undefined {
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return undefined;

  posts[index] = {
    ...posts[index],
    ...input,
    id: posts[index].id,
    createdAt: posts[index].createdAt,
    updatedAt: new Date()
  };

  return posts[index];
}

/**
 * 글 삭제
 */
export function deletePost(id: string): boolean {
  const index = posts.findIndex(post => post.id === id);
  if (index === -1) return false;

  posts.splice(index, 1);
  return true;
}
