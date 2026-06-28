import { NextRequest, NextResponse } from 'next/server';
import { getAllPosts, createPost } from '@/lib/postStore';
import { CreatePostInput } from '@/types/post';

/**
 * GET /api/posts - 모든 글 조회
 */
export async function GET() {
  try {
    const posts = getAllPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(
      { error: '글 목록 조회 실패' },
      { status: 500 }
    );
  }
}

/**
 * POST /api/posts - 글 생성
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as CreatePostInput;

    // 필수 필드 검증
    if (!body.title || !body.description || !body.author) {
      return NextResponse.json(
        { error: '필수 필드가 누락되었습니다' },
        { status: 400 }
      );
    }

    if (body.rating < 0 || body.rating > 5) {
      return NextResponse.json(
        { error: '별점은 0~5 사이여야 합니다' },
        { status: 400 }
      );
    }

    const newPost = createPost(body);
    return NextResponse.json(newPost, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: '글 생성 실패' },
      { status: 500 }
    );
  }
}
