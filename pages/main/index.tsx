import DashboardSnippet from "@/components/content/DashboardSnippet";
import CallToAction from "../../components/content/CallToAction";
import dynamic from "next/dynamic"
const Pricing = dynamic(
    () =>
      import("../pricing").then(
        (component) => component.Pricing,
      ),
    { ssr: true },
  )

export default function Main() {
    return <div>
        <div className="cTa">
            <CallToAction />
            <DashboardSnippet />
        </div>
        <div className="pricing">
            <Pricing />
        </div>
    </div>
}