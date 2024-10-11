import { prismaClient } from "../../lib/db";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { pages } from "next/dist/build/templates/app-page";
import { signIn } from "next-auth/react";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "your-email@example.com", required: true },
        password: { label: "Password", type: "password", required: true },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required");
        }

        try {
          // Find existing user by email
          const existingUser = await prismaClient.user.findFirst({
            where: {
              email: credentials.email,
            },
          });

          if (!existingUser) {
            throw new Error("No user found. Please sign up.");
          }

          // Validate password
          const isPasswordValid = await bcrypt.compare(credentials.password, existingUser.password);
          if (!isPasswordValid) {
            throw new Error("Invalid password");
          }

          // Return user data
          return {
            id: existingUser.id,
            email: existingUser.email,
            name: existingUser.name,
          };
        } catch (error) {
          console.error("Error in authorize function:", error);
          throw new Error("Authorization failed");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET || "secret",
  callbacks: {
    async session({ token, session }: any) {
      if (token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin"
  }
};
