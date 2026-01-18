import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { Login } from './pages/Login';
import './App.css';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ログイン画面 */}
          <Route path="/login" element={<Login />} />

          {/* 認証後の画面 */}
          <Route path="/home" element={<div>Home Page</div>} />
          <Route path="/articles" element={<div>Article List Page</div>} />
          <Route path="/articles/create" element={<div>Article Create Page</div>} />
          <Route path="/articles/:id" element={<div>Article Detail Page</div>} />

          {/* デフォルトはログインページにリダイレクト */}
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;