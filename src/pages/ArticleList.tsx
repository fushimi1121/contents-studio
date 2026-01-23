import { Layout } from '../components/layout/Layout';
import { Link } from 'react-router-dom';

export function ArticleList() {
  // 仮のデータ（後でAPIから取得する想定）
  const mockArticles = [
    { id: '1', title: '最初の記事', status: 'published', createdAt: '2026-01-20' },
    { id: '2', title: '下書きの記事', status: 'draft', createdAt: '2026-01-21' },
  ];

  return (
    <Layout>
      <div>
        <h1>記事一覧</h1>
        
        <div style={{ marginTop: '1.5rem' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ backgroundColor: '#edf2f7', textAlign: 'left' }}>
                <th style={{ padding: '0.75rem' }}>タイトル</th>
                <th style={{ padding: '0.75rem' }}>ステータス</th>
                <th style={{ padding: '0.75rem' }}>作成日</th>
                <th style={{ padding: '0.75rem' }}>操作</th>
              </tr>
            </thead>
            <tbody>
              {mockArticles.map((article) => (
                <tr key={article.id} style={{ borderBottom: '1px solid #e2e8f0' }}>
                  <td style={{ padding: '0.75rem' }}>{article.title}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <span style={{
                      padding: '0.25rem 0.75rem',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      backgroundColor: article.status === 'published' ? '#c6f6d5' : '#fed7d7',
                      color: article.status === 'published' ? '#22543d' : '#742a2a',
                    }}>
                      {article.status === 'published' ? '公開' : '下書き'}
                    </span>
                  </td>
                  <td style={{ padding: '0.75rem' }}>{article.createdAt}</td>
                  <td style={{ padding: '0.75rem' }}>
                    <Link to={`/articles/${article.id}`} style={{ color: '#667eea', textDecoration: 'none' }}>
                      詳細
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
}