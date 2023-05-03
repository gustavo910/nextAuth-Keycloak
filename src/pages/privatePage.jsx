import React from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const privatePage = () => {
  const { data: session } = useSession()
  return (
            <>
            Pagina para usuarios do grupo private
        Signed in as {session} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
  );
};

export default privatePage;