import { useSession } from 'next-auth/client';

export default function MyPage() {
  const [session, loading] = useSession();

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (!session) {
    return <p>Você precisa fazer login para acessar esta página.</p>;
  }

  return <p>Conteúdo da página protegida!</p>;
}