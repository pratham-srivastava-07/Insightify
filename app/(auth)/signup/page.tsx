"use client"
import SignUpPage from "@/pages/signup/Signup";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";


export default function() {
    const {data: session} = useSession()

    if(session) {redirect("/dashboard")}
    return (
        <div>
            <SignUpPage />
        </div>
    )
}