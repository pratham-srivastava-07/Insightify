import DashboardSnippet from "@/components/content/DashboardSnippet";
import CallToAction from "@/components/content/CallToAction";
import Pricing from "../pricing";

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