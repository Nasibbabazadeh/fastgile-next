"use client"
import React from "react"
import CustomButton, { TButtonSize, TButtonVariant } from "./CustomButton"

interface TCustomModal {
    buttonContent: string | React.ReactNode
    children: React.ReactNode
    exitContent: string | React.ReactNode
    exitStyle: string
    variant: TButtonVariant
    modalStyle: string
    buttonStyle: string
    buttonSize: TButtonSize
}

export default function CustomModal({
    buttonSize,
    variant,
    buttonContent,
    exitStyle,
    exitContent,
    modalStyle,
    buttonStyle,
    children,
}: Partial<TCustomModal>) {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <>
            <CustomButton onClick={() => setShowModal(true)} variant={variant} className={buttonStyle} size={buttonSize}>
                {buttonContent}
            </CustomButton>
            {showModal && (
                <>
                    <div className="opacity-65 fixed inset-0 z-30 bg-black transition-all ease-linear"></div>
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                        <div className={modalStyle}>
                            {children}
                            <button onClick={() => setShowModal(false)} className={exitStyle}>
                                {exitContent}
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
