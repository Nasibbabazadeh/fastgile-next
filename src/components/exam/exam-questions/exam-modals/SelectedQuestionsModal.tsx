'use client'
import { useState, useEffect } from 'react'
import { FlagIcon, PlayArrow, RightArrowIcon } from '@/assets'
import CustomModal from '@/components/common/CustomModal'
import { useSelectedQuestions } from '@/store/useSelectedQuestions'
import CustomButton from '@/components/common/CustomButton'
import Link from 'next/link'

interface TSelectedQuestions {
    index: number
    description: string
}

export default function SelectedQuestionsModal({ indexOfQuestion, questionDescription }: { indexOfQuestion: number; questionDescription: string }) {
    const { selectedQuestions, removeSelectedQuestion, addSelectedQuestion } = useSelectedQuestions()
    const [parsedSelectedQuestions, setParsedSelectedQuestions] = useState<TSelectedQuestions[]>([])

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const selectedQuestionsData = sessionStorage.getItem('selected-questions-storage')
            if (selectedQuestionsData) {
                const parsedData = JSON.parse(selectedQuestionsData).state.selectedQuestions
                setParsedSelectedQuestions(parsedData)
            }
        }
    }, [selectedQuestions])

    const handleSelectedQuestions = () => {
        const isAlreadySelected = selectedQuestions.find((question) => question.index === indexOfQuestion)

        if (isAlreadySelected) {
            removeSelectedQuestion(indexOfQuestion)
        } else {
            addSelectedQuestion(indexOfQuestion, questionDescription)
        }
    }

    return (
        <>
            <CustomButton onClick={handleSelectedQuestions} className="flex items-center gap-2 bg-none" variant="secondary">
                <FlagIcon alt="flag-icon" />
                <span className="text-md text-[#0094E8] font-medium text-nowrap">
                    {selectedQuestions.find((question) => question.index === indexOfQuestion) ? 'Sualı sil' : 'Sualı işarələ'}
                </span>
            </CustomButton>

            {/* Modal to show selected questions */}
            <CustomModal
                buttonContent={
                    <>
                        <FlagIcon alt="flag-icon" />
                        <span className="text-sm text-[#313131] font-medium">İşarələnmiş Suallar</span>
                    </>
                }
                variant="secondary"
                exitContent={
                    <div className="flex items-center gap-1">
                        <span className="text-sm text-raging-leaf font-medium">Bağla</span>
                        <RightArrowIcon alt="arrow-right" />
                    </div>
                }
                exitStyle="absolute right-14"
                modalStyle="h-[600px] overflow-auto rounded-[20px] shadow-exam-card bg-white relative flex flex-col gap-8 mt-6 p-8"
            >
                <div className="flex justify-between">
                    <h6 className="text-md font-medium ml-3">Naviqasiya etmək üçün suala klikləyin:</h6>
                </div>
                <hr className="w-full my-4" />
                {parsedSelectedQuestions.length > 0 ? (
                    parsedSelectedQuestions.map((question) => (
                        <Link
                            href={`./${question.index}`}
                            key={question.index}
                            className="hover:bg-[#FCF9EE] hover:cursor-pointer transition-all ease-linear py-6 border-b-[1px] border-gray-600 border-opacity-50 group"
                        >
                            <div className="flex gap-4 items-center justify-between">
                                <PlayArrow
                                    alt="play-icon"
                                    width={24}
                                    height={24}
                                    className="fill-none group-hover:fill-[#FFC727] transition-all ease-linear"
                                />
                                <p className="w-full text-start text-pretty max-w-[580px]">
                                    {question.index}. &nbsp;{question.description}
                                </p>
                                <RightArrowIcon alt="right-icon" />
                            </div>
                        </Link>
                    ))
                ) : (
                    <p className="text-sm text-gray-500">No selected questions yet.</p>
                )}
            </CustomModal>
        </>
    )
}
