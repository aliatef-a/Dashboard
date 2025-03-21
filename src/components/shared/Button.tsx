import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    isLoading?: boolean
    children: React.ReactNode
}

function Button({ type, className, isLoading, children, ...props }: ButtonProps) {
    return (
        <button
            type={type}
            className={`"px-4 py-2 text-white font-medium cursor-pointer bg-primary-125 text-base rounded-[20px] flex items-center justify-center hover:bg-primary-150 gap-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ",
                ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="animate-spin w-5 h-5" />}
            {children}
        </button>
    )
}

export default Button
