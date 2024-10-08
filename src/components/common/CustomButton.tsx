import React from "react"

export type TButtonVariant = "primary" | "secondary" | "danger" | "exam"
export type TButtonSize = "small" | "medium" | "extra-small" | "xs"

interface CustomButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: TButtonVariant
    size: TButtonSize
    children: React.ReactNode
    onClick: any
    disabled: boolean
    className: string
}

const getButtonClasses = (variant: TButtonVariant = "primary", size: TButtonSize = "small", disabled: boolean = false) => {
    const baseStyles = "font-semibold rounded-sm transition duration-300 ease-in-out"
    const variantStyles = {
        primary: "text-white bg-custom-gradient-button shadow-custom-button-shadow hover:bg-raging-leaf",
        secondary: "border-x-[1px] border-b-4 border-t-[1px] border-[#313131] rounded-xs flex items-center gap-2",
        exam: "py-3 px-8  bg-raging-leaf text-white rounded-lg",
        danger: "rounded-[4px] border-b-4 border-b-[#D00000]  bg-[#FB1230] hover:bg-red-600 transition-all ease-linear font-semibold  text-white ",
    }
    const sizeStyles = {
        "extra-small": "px-4 py-[6px] text-xs",
        small: "px-4 py-2 text-sm",
        xs: "py-3 px-8",
        medium: "px-10 py-4 text-lg-2",
    }
    const disabledStyles = disabled && "opacity-50 cursor-not-allowed"

    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`
}

const CustomButton: React.FC<Partial<CustomButtonProps>> = ({
    variant = "primary",
    size = "medium",
    children,
    onClick,
    disabled = false,
    className = "",
    ...restProps
}) => {
    return (
        <button
            className={`${getButtonClasses(variant, size, disabled)} ${className}`}
            style={{}}
            onClick={onClick}
            disabled={disabled}
            {...restProps}
        >
            <p></p>
            {children}
        </button>
    )
}

export default CustomButton
