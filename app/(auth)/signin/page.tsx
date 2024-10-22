
import SignInPage from "@/pages/signin/Signin"
import { getServerSession } from "next-auth"

import { redirect } from "next/navigation"

export default async function SigninPage() {

    const session = await getServerSession()

    if(session) {redirect("/dashboard")}
    return(
        <div>
            <SignInPage />
        </div>
    )
}