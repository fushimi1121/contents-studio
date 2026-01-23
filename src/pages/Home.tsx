import { Layout } from '../components/layout/Layout';
import { useAuth } from '../contexts/AuthContext';

export function Home() {
  const { user } = useAuth();

  return (
    <Layout>
      <div>
        <h1>ホーム</h1>
        <p>ようこそ、{user?.name}さん</p>
        <div style={{ marginTop: '2rem' }}>
          <h2>ダッシュボード</h2>
          <p>ここに統計情報やお知らせなどを表示します。</p>
        </div>
      </div>
    </Layout>
  );
}