import { ReactNode } from "react"

export default function Button({
    label,
    onClick,
    children,
    className,
    title
}: {
    label?: string
    onClick: () => void
    children?: ReactNode
    className?: string
    title?: string
}) {
    return (
        <button
            onClick={onClick}
            className={`bg-slate-400 p-3 rounded-xl hover:bg-slate-500 active:bg-green-400 ${
                className ?? ""
            }`}
            title={title}
        >
            {label ?? ""}
            {children ?? ""}
        </button>
    )
}
