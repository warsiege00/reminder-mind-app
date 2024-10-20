import React, { useContext, createContext, PropsWithChildren, useEffect } from 'react';
import { signInWithEmailAndPassword, signOut as firebaseSignOut, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
import { useStorageState } from '../hooks/useStorageState';

interface AuthContextType {
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  session: string | null;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useSession() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSession must be used within an AuthProvider');
  }
  return context;
}

export const SessionProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [[isLoading, session], setSession] = useStorageState('session');

  const signIn = async (email: string, password: string) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSession(userCredential.user.uid); // Armazenando o ID do usuário como sessão
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);
      setSession(null); // Limpar sessão
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user) {
        setSession(user.uid); // Armazenar ID do usuário na sessão
      } else {
        setSession(null); // Limpar sessão se não houver usuário
      }
    });

    return () => unsubscribe(); // Limpar listener ao desmontar
  }, []);

  return (
    <AuthContext.Provider value={{ signIn, signOut, session, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};