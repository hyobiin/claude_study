/**
 * 맛집 글 데이터 타입
 */
export interface Post {
  id: string;
  title: string;
  description: string;
  rating: number;
  location: {
    lat: number;
    lng: number;
    address: string;
  };
  images: string[];
  author: string;
  createdAt: Date;
  updatedAt: Date;
}

export type CreatePostInput = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdatePostInput = Partial<Omit<Post, 'id' | 'createdAt' | 'updatedAt'>>;
