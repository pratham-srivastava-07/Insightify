import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {prismaClient} from "../../lib/db"
import bcrypt from "bcryptjs";
export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          name: { label: "name", type: "text", placeholder: "jsmith" },
          email: {label: "Email", type: "email", placeholder: "email"},
          password: { label: "Password", type: "password", placeholder: "password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials?.password) {
            throw new Error("Missing email or password");
          }

         
          const existingUser = await prismaClient.user.findFirst({
            where: {
              email: credentials.email,
            },
          });
          if(!existingUser?.password) {
              throw new Error("no password detected!")
          }
          if (existingUser) {
            const isValidPassword = await bcrypt.compare(
              credentials.password,
              existingUser.password
            );

            if (isValidPassword) {
              return {
                id: existingUser.id.toString(),
                name: existingUser.name,
                email: existingUser.email,
              };
            } else {
              throw new Error("Invalid password");
            }
          }

         
          try {
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const newUser = await prismaClient.user.create({
              data: {
                email: credentials.email,
                name: credentials.name, 
                password: hashedPassword,
              },
            });

            return {
              id: newUser.id.toString(),
              name: newUser.name,
              email: newUser.email,
            };
          } catch (e) {
            console.error("Error creating user:", e);
            throw new Error("User creation failed");
          }
        }
      }),
      GithubProvider({
        clientId: process.env.GITHUB_ID ?? "",
        clientSecret: process.env.GITHUB_SECRET ?? "",
        async profile(profile) {
          const user = await prismaClient.user.upsert({
            where: { email: profile.email ?? '' },
            update: {},
            create: {
              email: profile.email ?? '',
              name: profile.name ?? '',
              image: profile.avatar_url ?? '',
              accounts: {
                create: {
                  provider: "github",
                  providerAccountId: String(profile.id),
                  access_token: profile.access_token ? String(profile.access_token) : null,
                  refresh_token: profile.refresh_token ? String(profile.refresh_token) : null,
                  expires_at: profile.expires_at ? Number(profile.expires_at) : null,
                } as any,
              },
            },
          });
          return {
            id: user.id,
            name: user.name,
            email: user.email,
            image: user.image,
          };
        },
      }),
          GoogleProvider({
            clientId: process.env.GOOGLE_ID ?? "",
            clientSecret: process.env.GOOGLE_SECRET ?? "",
            async profile(profile) {
              const user = await prismaClient.user.upsert({
                where: { email: profile.email ?? '' },
                update: {},
                create: {
                  email: profile.email ?? '',
                  name: profile.name ?? '',
                  image: profile.picture ?? '',
                  accounts: {
                    create: {
                      provider: "google",
                      providerAccountId: String(profile.sub),
                      access_token: profile.access_token ? String(profile.access_token) : null,
                      refresh_token: profile.refresh_token ? String(profile.refresh_token) : null,
                      expires_at: profile.expires_at ? Number(profile.expires_at) : null,
                    } as any,
                  },
                },
              });
              return {
                id: user.id,
                name: user.name,
                email: user.email,
                image: user.image,
              };
            },
          }),
        ],      
    
    secret: process.env.NEXTAUTH_SECRET ?? '',
    callbacks: {
      async session({ token, session }: any) {
        if (session?.user) {
          session.user.id = token.sub;
        }
        return session;
      },
    }  
};
