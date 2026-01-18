// src/types/index.ts

// ユーザー情報の型
export interface User {
    id: string;
    email: string;
    name: string;
  }
  
  // 記事の型
  export interface Article {
    id: string;
    title: string;
    content: string;
    status: 'draft' | 'published';
    createdAt: string;
    updatedAt: string;
  }