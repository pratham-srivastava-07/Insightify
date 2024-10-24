import Navbar from "@/components/layouts/Navbar";

export default function layoutDashboard({children}: {children: React.ReactNode}) {
    return <div>
        <div className="">
            <Navbar />
        </div>
        {children}
    </div>
}