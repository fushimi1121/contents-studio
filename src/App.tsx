import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import { Home } from './pages/Home';
import { ArticleList } from './pages/ArticleList';
import { ArticleCreate } from './pages/ArticleCreate';
import { ArticleDetail } from './pages/ArticleDetail';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ログイン画面 */}
          <Route path="/login" element={<Login />} />

          {/* 認証後の画面 */}
          <Route path="/home" element={<Home />} />
          <Route path="/articles" element={<ArticleList />} />
          <Route path="/articles/create" element={<ArticleCreate />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />

          {/* デフォルトはログインページにリダイレクト */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;