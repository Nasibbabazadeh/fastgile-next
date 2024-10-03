import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'small' | 'medium'

interface CustomButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: ButtonVariant
    size: ButtonSize
    children: React.ReactNode
    onClick: () => void
    disabled: boolean
    className: string
}

const getButtonClasses = (variant: ButtonVariant = 'primary', size: ButtonSize = 'small', disabled: boolean = false) => {
    const baseStyles = 'font-semibold rounded-sm transition duration-300 ease-in-out'
    const variantStyles = {
        primary: 'text-white bg-custom-gradient-button shadow-custom-button-shadow hover:bg-raging-leaf',
        secondary: 'border-x-[1px] border-b-4 border-t-[1px] border-[#313131] rounded-xs flex items-center gap-2',
        danger: '',
    }
    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-10 py-4 text-lg-2',
    }
    const disabledStyles = disabled && 'opacity-50 cursor-not-allowed'

    return `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyles}`
}

const CustomButton: React.FC<Partial<CustomButtonProps>> = ({
    variant = 'primary',
    size = 'medium',
    children,
    onClick,
    disabled = false,
    className = '',
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
            {children}
        </button>
    )
}

export default CustomButton
