import { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface User {
  id: string;
  avatarUrl: string;
  name: string;
  email: string;
}
interface AuthState {
  token: string;
  user: User;
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(Credentials: SignInCredentials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@SemNome:token');
    const user = localStorage.getItem('@SemNome:user');
    if (token && user) {
      api.defaults.headers.common.authorization = `Bearer ${token}`;
      return {
        token,
        user: JSON.parse(user),
      };
    }
    return {} as AuthState;
  });
  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { user, token } = response.data;

    localStorage.setItem('@SemNome:token', token);
    localStorage.setItem('@SemNome:user', JSON.stringify(user));

    api.defaults.headers.common.authorization = `Bearer ${token}`;
    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@SemNome:token');
    localStorage.removeItem('@SemNome:user');
    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    (user: User) => {
      setData({
        token: data.token,
        user,
      });

      localStorage.setItem('@SemNome:token', data.token);
      localStorage.setItem('@SemNome:user', JSON.stringify(user));
    },
    [setData, data.token]
  );
  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
