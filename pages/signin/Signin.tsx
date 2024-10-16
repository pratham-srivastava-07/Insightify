"use client"
import SignInForm from "@/components/forms/signin"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { BsGoogle } from "react-icons/bs"
import { SiGithub, SiGoogleauthenticator } from "react-icons/si"

const SignInPage = () => {
  // const {data: session } = useSession()

  

  const handleAuthWithGoogle = async () => {
        await signIn("google", {callbackUrl: '/dashboard', redirect: false});
  }
  const handleAuthWithGithub = async () => {
      await signIn("github", {callbackUrl: "/dashboard", redirect: false})
  }
  return (
    <>
      <h5 className="font-bold text-base text-themeTextWhite">Login</h5>
      <p className="text-themeTextGray leading-tight">
          Develop into the best version of yourself by making new friends, creating your own, watching classes, and connecting with people all around the world.
      </p>
      <SignInForm />
      <div className="my-10 w-full relative">
        <div className="bg-black p-3 absolute text-themeTextGray text-xs top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          OR CONTINUE WITH
        </div>
        <Separator orientation="horizontal" className="bg-themeGray" />
      </div>
      {/* <GoogleAuthButton method="signin" /> */}
      <div className="flex justify-center items-center">
          <Button 
          className="flex items-center justify-center gap-3 w-full rounded-full"
          onClick={handleAuthWithGoogle}
          >
              Google
              <BsGoogle />
          </Button>
      </div>
      <div className="flex justify-center items-center pt-5">
          <Button 
          className="flex items-center justify-center gap-3 w-full rounded-full"
          onClick={handleAuthWithGithub}
          >
              Github
              <SiGithub />
          </Button>
      </div>
      <div className="flex items-center justify-center">
        <p className="pt-10 ">New to Insightify? <Link className="text-blue-500 hover:underline" href={"/signup"}>Sign up</Link></p>
      </div>
    </>
  )
}

export default SignInPage