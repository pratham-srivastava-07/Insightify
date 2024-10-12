import SignUpForm from "@/components/forms/signup";
import { Separator } from "@radix-ui/react-separator";
import Link from "next/link";

export default function SignUpPage() {
    return <>
        <h5 className="font-bold text-base text-themeTextWhite">Sign up</h5>
      <p className="text-themeTextGray leading-tight">
          Develop into the best version of yourself by making new friends, creating your own, watching classes, and connecting with people all around the world.
      </p>
      <SignUpForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      <div className="flex items-center justify-center">
        <p className="pt-10 ">Already a user? <Link className="text-blue-500 hover:underline" href={"/api/auth/signin"}>Sign in</Link></p>
      </div>
      
    </>
}