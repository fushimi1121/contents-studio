// src/App.tsx
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ログイン画面 */}
        <Route path="/login" element={<div>Login Page</div>} />
        
        {/* 認証後の画面 */}
        <Route path="/home" element={<div>Home Page</div>} />
        <Route path="/articles" element={<div>Article List Page</div>} />
        <Route path="/articles/create" element={<div>Article Create Page</div>} />
        <Route path="/articles/:id" element={<div>Article Detail Page</div>} />
        
        {/* デフォルトはログインページにリダイレクト */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;