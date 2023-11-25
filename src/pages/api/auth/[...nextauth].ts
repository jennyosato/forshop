import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github"
// import FacebookProvider from "next-auth/providers/facebook";
import GoogleProvider from "next-auth/providers/google";

if (process.env.GOOGLE_CLIENT_ID === undefined) {
  throw new Error("GOOGLE_CLIENT_ID not set in environmental variables");
}

if (process.env.GOOGLE_CLIENT_SECRET === undefined) {
  throw new Error("GOOGLE_CLIENT_SECRET not set in environmental variables");
}

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
