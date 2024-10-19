"use client"
import SignInPage from "@/pages/signin/Signin"
import { useSession } from "next-auth/react"
import { redirect } from "next/navigation"

export default function() {
    const {data: session} = useSession()

    if(session) {redirect("/dashboard")}
    return(
        <div>
            <SignInPage />
        </div>
    )
}