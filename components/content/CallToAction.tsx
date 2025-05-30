import GradientText from "@/components/global/gradient-text"
import { Button } from "@/components/ui/button"
import { BadgePlus } from "lucide-react"
import { getServerSession } from "next-auth"
import Link from "next/link"

type Props = {}
export const dynamic = 'force-dynamic'

const CallToAction = async (props: Props) => {
  const session = await getServerSession()
  return (
    <div className="flex flex-col items-start md:items-center gap-y-5 md:gap-y-0">
      <GradientText
        className="text-[35px] whitespace-nowrap md:text-[40px] lg:text-[55px] xl:text-[70px] 2xl:text-[80px] leading-tight font-semibold"
        element="H1"
      >
        Bringing Communities <br className="md:hidden" /> Together
      </GradientText>
      <p className="text-sm md:text-center text-left text-muted-foreground">
        Insightify lets you step into a vibrant network of creators, thinkers, and dreamers. 
        <br className="md:hidden" />
        Together, we empower each other to connect, <br className="hidden md:block" />  share, and cultivate a community
        <br className="md:hidden" />
        that’s driven by purpose 
      </p>
      <div className="flex md:flex-row flex-col md:justify-center gap-5 md:mt-5 w-full">
        <Button
          variant="outline"
          className="rounded-xl bg-transparent text-base"
        >
          Watch Demo
        </Button>
        <Link href={`${session ? "/dashboard" : "/signin"}`}>
          <Button className="rounded-xl text-base flex gap-2 w-full">
            <BadgePlus /> Get Started
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default CallToAction