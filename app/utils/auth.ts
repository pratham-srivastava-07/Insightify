import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import {prismaClient} from "../../lib/db"
import { compare } from "bcrypt";
export const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'Email',
            credentials: {
                username: { label: 'email', type: 'text', placeholder: '' },
                password: { label: 'password', type: 'password', placeholder: '' },
            },
            async authorize(credentials: any) {
               const {username, password} = credentials;

               const user = await prismaClient.user.findUnique({
                    where: {
                        email: username
                    }
               })

               if(!user) {
                    throw new Error("User not found!");
               }

               const validPassword = await compare(password, user.password || "")

               if(!validPassword) {
                    throw new Error("Wrong password!");
               }

               return {
                id: user.id,
                name: user.name,
                email: user.email,
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
                    }as any,
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
   
};
