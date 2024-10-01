'use client'
import React from 'react'
import CustomButton from './CustomButton'

interface TCustomModal {
    buttonContent: string
    children: React.ReactNode
}

export default function CustomModal({ buttonContent, children }: TCustomModal) {
    const [showModal, setShowModal] = React.useState(false)

    return (
        <>
            <CustomButton onClick={() => setShowModal(true)}>{buttonContent}</CustomButton>
            {showModal && (
                <>
                    <div className="opacity-65 fixed inset-0 z-30 bg-black transition-all ease-linear"></div>
                    <div className="fixed inset-0 z-40 flex items-center justify-center">
                        <div className="bg-white p-10 rounded-md z-50 relative transition-all ease-linear">
                            {children}
                            <button onClick={() => setShowModal(false)} className="absolute top-0 right-5 text-[36px] text-red-900">
                                x
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}
