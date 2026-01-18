import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User } from '../types';

// Contextの型定義
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

// Contextの作成
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Providerコンポーネント
export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // ログイン処理（仮）
  const login = async (email: string, password: string): Promise<boolean> => {
    // API実装後に変更
    if (email === 'admin@example.com' && password === 'password') {
      const mockUser: User = {
        id: '1',
        email: email,
        name: 'Admin User',
      };
      setUser(mockUser);
      return true;
    }
    return false;
  };

  // ログアウト処理
  const logout = () => {
    setUser(null);
  };

  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// カスタムフック（他のコンポーネントから簡単に使えるように）
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}