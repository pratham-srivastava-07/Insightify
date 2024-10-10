"use client"

import { usePathname } from "next/navigation"
import { useState } from "react"

export default function useNavigation() {
    const pathName = usePathname()
    const [section, setSection] = useState<string>(pathName || "")
    const onSetSection = (page: string) => setSection(page);
    return {
        onSetSection,
        section
    }
}