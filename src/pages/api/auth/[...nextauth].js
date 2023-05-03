
import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";
import jwt_decode from 'jwt-decode';


export const authOptions = {
  // Configure one or more authentication providers
  providers: [
KeycloakProvider({
  
  clientId: "myclient",
  clientSecret: "OYGsx1KyeoSX0aDitngv0JFCWdAmuzo1",
  issuer: "http://localhost:8080/realms/myrealm",
   scope: "openid email profile roles",
   
   
profile(profile, tokens) {
    const newToken = tokens.access_token;
    const decodedToken = jwt_decode(newToken);
    console.log(decodedToken.realm_access.roles)

   // const roles = tokens.access_token ;
  //console.log(profile, roles);
  //console.log(tokens.access_token.roles)
  return {
    id: profile.sub,
    name: profile.name || profile.preferred_username,
    email: profile.email,
    image: null,
    role:decodedToken.realm_access.roles,
    //roles: tokens.access_token.roles  || [],
    //roles: tokens.realm_access.roles || [],  
    };
},
  })
  ],
  callbacks: {
    jwt({ token, user }) {
      if(user) token.role = user.role
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    }
  }
}

export default NextAuth(authOptions)