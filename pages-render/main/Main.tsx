import DashboardSnippet from "@/components/content/DashboardSnippet";
import CallToAction from "@/components/content/CallToAction";
import Pricing from "../pricing";
import TestimonialsSection from "@/components/sections/testimonials";
import FeaturesSection from "@/components/sections/features";

export default function Main() {
    return <div>
        <div className="cTa">
            <CallToAction />
            <DashboardSnippet />
        </div>
        <div className="pricing">
            <Pricing />
        </div>
        <div className="testimonials mt-10">
            <TestimonialsSection />
        </div>
        <div className="features mt-10">
            <FeaturesSection />
        </div>
    </div>
}