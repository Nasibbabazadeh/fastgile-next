import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'danger'
type ButtonSize = 'small' | 'medium' | 'large'

interface CustomButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    variant: ButtonVariant
    size: ButtonSize
    children: React.ReactNode
    onClick: () => void
    disabled: boolean
    className: string
}

const getButtonClasses = (variant: ButtonVariant = 'primary', size: ButtonSize = 'small', disabled: boolean = false) => {
    const baseStyles = 'font-bold rounded-lg transition duration-300 ease-in-out'
    const variantStyles = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700',
        danger: '',
    }
    const sizeStyles = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    }
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'

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
        <button className={`${getButtonClasses(variant, size, disabled)} ${className}`} onClick={onClick} disabled={disabled} {...restProps}>
            {children}
        </button>
    )
}

export default CustomButton
