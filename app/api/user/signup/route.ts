import {z} from "zod"
import {prismaClient} from "../../../../lib/db"
import { NextRequest, NextResponse } from "next/server"
import jwt from "jsonwebtoken"

const signupBody = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string()
})
export async function POST(req: NextRequest) {
    type SignupBodyType = z.infer<typeof signupBody>;

    // Parse the request body
    const body: SignupBodyType = await req.json();
    const parsedBody = signupBody.safeParse(body)

    if(!parsedBody.success) {
        return NextResponse.json({message: "Invalid inputs"}, {status: 403});
    }

    const existingUser = await prismaClient.user.findFirst({
        where: {
            email: body.email
        }
    })

    if(existingUser) {
        return NextResponse.json({message: "User already exists"}, {status: 411});
    }

    const newUser = await prismaClient.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: body.password,
    },
})
    
    const userId = newUser.id

    const jwtSecret = process.env.NEXTAUTH_JWT_SECRET;
    if (!jwtSecret) {
        return NextResponse.json({ message: "JWT Secret is not configured" }, { status: 500 });
    }

    const token = jwt.sign(
        { userId },
        jwtSecret
    );
    return NextResponse.json({message: "User created successfully", token: token}, {status: 201})

}