import  {prismaClient} from "../../lib/db"
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs";

export const authOptions = {
    providers: [
      CredentialsProvider({
          name: 'Credentials',
          credentials: {
            email: { label: "Phone number", type: "text", placeholder: "1231231231", required: true },
            password: { label: "Password", type: "password", required: true }
          },
          // TODO: User credentials type from next-aut
          async authorize(credentials: any) {
            // Do zod validation, OTP validation here
            console.log(credentials);
            
            const hashedPassword = await bcrypt.hash(credentials.password, 10);
            const existingUser = await prismaClient.user.findFirst({
                where: {
                    email: credentials.phone
                }
            });
            if(!existingUser) {
                throw new Error("No user found pls sign up")
            }
            if(!existingUser.password) {
                throw new Error("No password received!")
            }
            if (existingUser) {
                const passwordValidation = await bcrypt.compare(credentials.password, existingUser.password);
                if (passwordValidation) {
                    return {
                        id: existingUser.id.toString(),
                        email: existingUser.email
                    }
                }
                return null;
            }

            try {
                const user = await prismaClient.user.create({
                    data: {
                        email: credentials.phone,
                        password: hashedPassword
                    }
                });
            
                return {
                    id: user.id.toString(),
                    name: user.name,
                    email: user.email
                }
            } catch(e) {
                console.error(e);
            }

            return null
          },
        })
    ],
    secret: process.env.JWT_SECRET || "secret",
    callbacks: {
        // TODO: can u fix the type here? Using any is bad
        async session({ token, session }: any) {
            session.user.id = token.sub

            return session
        }
    }
  }
  