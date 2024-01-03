import { ReactNode } from "react"

export default function Button({
    label,
    onClick,
    children,
}: {
    label?: string
    onClick: () => void
    children?: ReactNode
}) {
    return (
        <button
            onClick={onClick}
            className="bg-slate-400 p-3 rounded-xl hover:bg-slate-500 active:bg-green-400"
        >
            {label ?? ""}
            {children ?? ""}
        </button>
    )
}
