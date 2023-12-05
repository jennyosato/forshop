import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
// import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";
const getGoogleCredentials = () => {
  const clientId = process.env.GOOGLE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET
  if(!clientId || clientId.length < 1){
    throw new Error("GOOGLE_CLIENT_ID not set in environmental variables");
  }
  if(!clientSecret || clientSecret.length < 1){
    throw new Error("GOOGLE_CLIENT_SECRET not set in environmental variables");
  }
  return {clientId, clientSecret}
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: getGoogleCredentials().clientId,
      clientSecret: getGoogleCredentials().clientSecret,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
