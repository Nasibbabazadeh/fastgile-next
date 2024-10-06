'use client'
import CustomButton from '@/components/common/CustomButton'
import API from '@/http/api'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'
import CustomModal from '@/components/common/CustomModal'

export default function CommentModal() {
    const sendFeedback = async (comment: string): Promise<any | undefined> => {
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API['result-feedback']}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ description: comment }),
            })

            if (!response.ok) {
                throw new Error('Error happened while sending feedback')
            } else {
                toast.success('Rəyiniz uğurla göndərildi')
            }
            return response.json()
        } catch (error) {
            toast.error('Rəy göndərilmədi, xəta baş verdi')
        }
    }

    const [descriptionValue, setDescriptionValue] = useState<string>('')
    const handleSendFeedback = (e: any) => {
        e.preventDefault()
        sendFeedback(descriptionValue)
    }
    return (
        <CustomModal
            modalStyle="w-full max-w-[700px] p-12  mx-auto flex flex-col justify-between items-center shadow-exam-card bg-[#FFF4EF]   rounded-md  relative"
            buttonContent="Rəy bildir"
            buttonStyle="bg-orange"
            exitContent="X"
            exitStyle="text-[26px] absolute right-5 top-2"
            variant="exam"
        >
            <div className="w-full flex flex-col gap-7">
                <textarea
                    className="w-full   h-[300px] py-7 px-[50px]  bg-[#FFF4EF] flex border-[1px] border-gray-30 rounded-md placeholder:text-copyright placeholder:text-gray-30 focus:outline-none"
                    placeholder="Rəyinizi yazın..."
                    onChange={(e) => setDescriptionValue(e.target.value)}
                    value={descriptionValue}
                />
                <CustomButton onClick={handleSendFeedback} disabled={descriptionValue.length === 0} variant="exam">
                    Göndər
                </CustomButton>
            </div>
            <ToastContainer />
        </CustomModal>
    )
}
