import { useEffect, useState } from 'react';
import { SessionProvider } from '@/contexts/AuthCtx';
import { Slot } from './util/Slot';



export default function Root() {
  const [isMounted, setIsMounted] = useState(false);
  ; // Aqui você pode obter o valor real da sessão, se necessário

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Renderiza um componente vazio ou uma tela de carregamento temporária
    return null;
  }

  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}