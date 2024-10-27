import React, { useContext, createContext, PropsWithChildren, useEffect, useState, Dispatch, SetStateAction } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut as firebaseSignOut, User } from 'firebase/auth';
import { auth } from '../lib/firebase';
// import { useStorageState } from '../hooks/useStorageState';

interface AuthContextType {
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  session: string | null;
  error:any;
  // isLoading: boolean;
  // isFirstAccess: boolean;
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
  // const [session, setSession] = useStorageState('session');
  const [session, setSession] = useState<string | null>('OoLGqnf8N4c0UBnM2y46R0KRlln2');
  const [error, setError] = useState<string | null>(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isFirstAccess, setIsFirstAccess] = useState(false);

  // Função de login
  const signIn = async (email: string, password: string) => {
    setSession(null); // Limpa a sessão antes de iniciar o carregamento
    // setIsLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      setSession(userCredential.user.uid); // Armazenando o ID do usuário como sessão
      
    } catch (error) {
      console.error('Error signing in:', error);
    }
    finally{
      // setIsLoading(false);
    }
  };

  // Função de registro (sign-up)
  const signUp = async (email: string, password: string) => {
    setSession(null); // Limpa a sessão antes de iniciar o carregamento
    // setIsLoading(true);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      setSession(userCredential.user.uid); // Armazenando o ID do usuário após o registro
    } catch (error) {
      console.error('Error signing up:', error);
    }
    finally {
      // setIsLoading(false);
    }
  };

  // Função de logout
  const signOut = async () => {
    setSession(null); // Limpa a sessão antes de iniciar o carregamento
    try {
      await firebaseSignOut(auth);
      setSession(null); // Limpar sessão
    } catch (error) {
      console.error('Error signing out:', error);

      setError(error as any);
    }
    finally {
      // setIsLoading(false);
    }
  };

  // Listener para monitorar o estado de autenticação do Firebase
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      if (user && session !== user.uid) {
        setSession(user.uid); // Armazenar ID do usuário na sessão apenas se diferente
      } else if (!user && session !== null) {
        setSession(null); // Limpar sessão apenas se já não for null
      }
    });

    return () => unsubscribe(); // Limpar listener ao desmontar
  }, [session]);

  return (
    <AuthContext.Provider value={{ signIn, signUp, signOut, session, error}}>
      {children}
    </AuthContext.Provider>
  );
};