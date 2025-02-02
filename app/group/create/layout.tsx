"use client"
import BackdropGradient from "@/components/global/backdrop-gradient"
import GlassCard from "@/components/global/glass-card"
import GradientText from "@/components/global/gradient-text"
import { GROUP_CONSTANTS } from "@/constants"

type Props = {
  children: React.ReactNode
}

const CreateGroupLayout = ({ children }: Props) => {
  return (
    <div className="container h-screen grid grid-cols-1 lg:grid-cols-2 content-center left-0">
      <div className="flex items-center">
        <BackdropGradient className="w-8/12 h-2/6 opacity-50" container={""}>
          <h5 className="text-2xl font-bold text-themeTextWhite">Insightify.</h5>
          <GradientText element="H1" className="text-[35px]">
            Create Your Group
          </GradientText>
          <p className="text-themeTextGray">
            Free for 14 days, then $99/month. Cancel anytime.All features.
            Unlimited everything. No hidden fees.
          </p>
          <div className="flex flex-col gap-3 mt-16 pl-5">
            {GROUP_CONSTANTS.groupPlaceholder.map((placeholder) => (
              <div className="flex gap-3" key={placeholder.id}>
                {placeholder.icon}
                <p className="text-themeTextGray">{placeholder.label}</p>
              </div>
            ))}
          </div>
        </BackdropGradient>
      </div>
      <div>
        <BackdropGradient
          className="w-6/12 h-3/6 opacity-40"
          container="lg:items-center"
        >
          <GlassCard className="xs:w-full lg:w-10/12 xl:w-8/12 mt-16 py-7">
            {children}
          </GlassCard>
        </BackdropGradient>
      </div>
    </div>
  )
}

export default CreateGroupLayout