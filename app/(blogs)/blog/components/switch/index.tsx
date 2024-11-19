"use client"
import { Switch } from "@/components/ui/switch"

interface BlogSwitchTypes {
    checked: boolean,
    onClick: () => void
}

export default function BlogSwitch({checked, onClick}: BlogSwitchTypes) {
    return <div className="flex justify-center">
        <Switch checked = {checked} onClick={onClick} />
    </div>
}