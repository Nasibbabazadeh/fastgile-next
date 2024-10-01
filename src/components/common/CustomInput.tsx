import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    labelStyle: string
    inputStyle: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function CustomInput({ label, handleChange, labelStyle, inputStyle, ...restProps }: Partial<InputProps>) {
    return (
        <label className={labelStyle}>
            <input onChange={handleChange} {...restProps} className={inputStyle} />
            {label}
        </label>
    )
}
