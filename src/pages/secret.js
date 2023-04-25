
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Secret() {
 const { data: session,loading } = useSession()
  const router = useRouter();

  useEffect(() => {
    if (!loading && !session) {
      router.replace('/login');
    } else if (session && session.user.groups.includes('usuarioPublico')) {
      router.replace('/public');
    } else if (session && session.user.groups.includes('usuarioPrivado')) {
      router.replace('/private');
    }
  }, [session, loading, router]);

  return <h1>Secret Page</h1>;
}