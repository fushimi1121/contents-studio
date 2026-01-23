import { useParams, useNavigate } from 'react-router-dom';
import { Layout } from '../components/layout/Layout';

export function ArticleDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // 仮のデータ（後でAPIから取得）
  const mockArticle = {
    id: id,
    title: '記事のタイトル',
    content: 'ここに記事の本文が表示されます。\n\n複数段落のテキストも表示できます。',
    status: 'published',
    createdAt: '2026-01-20',
    updatedAt: '2026-01-21',
  };

  return (
    <Layout>
      <div>
        <button
          onClick={() => navigate('/articles')}
          style={{
            marginBottom: '1rem',
            padding: '0.5rem 1rem',
            backgroundColor: '#e2e8f0',
            border: 'none',
            borderRadius: '6px',
            cursor: 'pointer',
          }}
        >
          ← 一覧に戻る
        </button>

        <h1>{mockArticle.title}</h1>
        
        <div style={{ marginTop: '1rem', color: '#718096', fontSize: '0.9rem' }}>
          <p>ID: {mockArticle.id}</p>
          <p>ステータス: {mockArticle.status === 'published' ? '公開' : '下書き'}</p>
          <p>作成日: {mockArticle.createdAt}</p>
          <p>更新日: {mockArticle.updatedAt}</p>
        </div>

        <div style={{ marginTop: '2rem', whiteSpace: 'pre-wrap' }}>
          <h2>本文</h2>
          <p>{mockArticle.content}</p>
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem' }}>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            編集
          </button>
          <button
            style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: '#f56565',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
            }}
          >
            削除
          </button>
        </div>
      </div>
    </Layout>
  );
}