import { InputHTMLAttributes } from "react"

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    error: any
    divProps: string
    labelStyle: string
    htmlId: string
}

export default function CustomAuthInput({ error, label, divProps, labelStyle, htmlId, ...restProps }: Partial<InputProps>) {
    return (
        <div className="flex relative">
            <input {...restProps} className="rounded-[15px] w-full border-[#DDDDDD] border-[1px] px-4 py-3 focus:outline-none" autoComplete="false" />
            {error && (
                <span className="text-[13px] text-[#b33939] tracking-[0.2px]   font-semibold absolute top-[94%] left-2 text-nowrap sm:hidden">
                    {error}
                </span>
            )}
            <label className="text-nowrap text-sm2   text-black-secondary ml-3" htmlFor={htmlId}>
                {label}
            </label>
        </div>
    )
}
