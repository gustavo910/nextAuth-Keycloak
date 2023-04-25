import NextAuth from "next-auth"
import KeycloakProvider from "next-auth/providers/keycloak";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
KeycloakProvider({
  
  clientId: "myclient",
  clientSecret: "myclientsecret",
  issuer: "http://localhost:8080/realms/myrealm",
  scope: "openid",
  })
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)