'use client'
import { DoubleArrowRight, FlagIcon, PlayArrow, RightArrowIcon } from '@/assets'
import { TExamData } from '../type'
import { useState } from 'react'
import CustomButton from '@/components/common/CustomButton'

export default function AllQuestionsCard({ questionsData }: { questionsData: TExamData[] }) {
    const [showDescriptions, setShowDescriptions] = useState<boolean>(false)
    const handleDescriptions = () => {
        setShowDescriptions((prev) => !prev)
    }
    return (
        <>
            <div className="flex justify-center">
                <CustomButton className="mr-[5px] px-4" variant="secondary">
                    <FlagIcon alt="flag-choosen-questions" />
                    <span className="text-sm text-raging-leaf font-medium">İşarələnmiş Suallar</span>
                </CustomButton>
                <CustomButton variant="secondary" className="ml-[5px] px-6" onClick={handleDescriptions}>
                    <span className="text-sm text-raging-leaf font-medium py-1">Bütün Suallar</span>
                    <DoubleArrowRight alt="all-questions-arrow" />
                </CustomButton>
            </div>
            {/* {MODAL!!!} */}
            <div
                className={`w-screen h-screen overflow-y-hidden absolute  bg-white ${
                    showDescriptions ? 'flex justify-center items-center' : 'hidden'
                }`}
            >
                <div className="max-w-[1072px] mx-auto mt-6 flex flex-col gap-8 ">
                    <div className="flex justify-between">
                        <h6 className="text-text1 font-medium ml-3">Naviqasiya etmək üçün suala klikləyin:</h6>
                        <button className="flex items-center">
                            <span className="text-sm text-raging-leaf font-medium" onClick={handleDescriptions}>
                                Geri
                            </span>
                            <RightArrowIcon alt="right-icon" />
                        </button>
                    </div>
                    <div className="h-[520px] overflow-auto rounded-[20px] shadow-all-questions">
                        {questionsData &&
                            questionsData.map((question: TExamData) => {
                                return (
                                    <div
                                        key={question.id}
                                        className="py-6 px-4 hover:bg-extra-light-orange transition-all-linear all_questions_card "
                                    >
                                        <div className="flex gap-4 items-center">
                                            <PlayArrow alt="play-icon" width={24} height={24} />
                                            <p className="text-start text-wrap max-w-[580px]">{question.description}</p>
                                            <RightArrowIcon alt="right-icon" />
                                        </div>
                                    </div>
                                )
                            })}
                    </div>
                </div>
            </div>
        </>
    )
}
