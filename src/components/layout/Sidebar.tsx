import { NavLink } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import '../../styles/Sidebar.css';

export function Sidebar() {
  const { user, logout } = useAuth();

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>CMS管理</h2>
        <p className="user-info">{user?.name}</p>
      </div>

      <nav className="sidebar-nav">
        <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>🏠</span> ホーム
        </NavLink>
        <NavLink to="/articles" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>📝</span> 記事一覧
        </NavLink>
        <NavLink to="/articles/create" className={({ isActive }) => isActive ? 'active' : ''}>
          <span>➕</span> 記事作成
        </NavLink>
      </nav>

      <div className="sidebar-footer">
        <button onClick={logout} className="logout-button">
          ログアウト
        </button>
      </div>
    </aside>
  );
}