
import SignUpPage from "@/pages/signup/Signup";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function SignupPage() {
   const session = await getServerSession()

    if(session) {redirect("/dashboard")}
    return (
        <div>
            <SignUpPage />
        </div>
    )
}