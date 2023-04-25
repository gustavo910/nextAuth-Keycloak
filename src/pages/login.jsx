import { useSession, signIn, signOut,  } from "next-auth/react"
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Component() {
  const { data: session, loading} = useSession()
  const router = useRouter();

  useEffect(() => {
    if (session && session.user && session.user.groups && session.user.groups.includes('usuarioPublico')) {
      //router.replace('/public');
      console.log('usuarioPublico')
    } else if (session && session.user && session.user.groups && session.user.groups.includes('usuarioPrivado')) {
      //router.replace('/private');
      console.log('usuarioPrivado')
    }
  }, [session, loading, router]);
  if (session) {
    return (
      <>
        {session.user && session.user.groups && (
          (session.user.groups.includes('usuarioPublico')) ?
            <h2>Usuário Público</h2>
            : (session.user.groups.includes('usuarioPrivado')) ?
              <h2>Usuário Privado</h2>
              : null
        )}
        {console.log(session)}
      
      
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}