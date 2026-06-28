import { NextRequest, NextResponse } from 'next/server';
import { getPostById, updatePost, deletePost } from '@/lib/postStore';
import { UpdatePostInput } from '@/types/post';

interface RouteParams {
  params: {
    id: string;
  };
}

/**
 * GET /api/posts/[id] - 특정 글 조회
 */
export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const post = getPostById(params.id);

    if (!post) {
      return NextResponse.json(
        { error: '글을 찾을 수 없습니다' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: '글 조회 실패' },
      { status: 500 }
    );
  }
}

/**
 * PUT /api/posts/[id] - 글 수정
 */
export async function PUT(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const body = await request.json() as UpdatePostInput;
    const post = updatePost(params.id, body);

    if (!post) {
      return NextResponse.json(
        { error: '글을 찾을 수 없습니다' },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(
      { error: '글 수정 실패' },
      { status: 500 }
    );
  }
}

/**
 * DELETE /api/posts/[id] - 글 삭제
 */
export async function DELETE(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const success = deletePost(params.id);

    if (!success) {
      return NextResponse.json(
        { error: '글을 찾을 수 없습니다' },
        { status: 404 }
      );
    }

    return NextResponse.json({ message: '글이 삭제되었습니다' });
  } catch (error) {
    return NextResponse.json(
      { error: '글 삭제 실패' },
      { status: 500 }
    );
  }
}
