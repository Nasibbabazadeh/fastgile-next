import { DoubleArrowRight, PlayArrow, RightArrowIcon } from '@/assets'
import CustomModal from '@/components/common/CustomModal'
import API from '@/http/api'
import { TExamData } from '../../type'
import Link from 'next/link'

export default async function SelectedQuestionsModal({ type }: { type: string }) {
    async function getData() {
        'use server'
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}${API.exam_questions}?level=${type}`, {
            next: {
                revalidate: 3600,
            },
        })
        const data = await response.json()
        return data
    }
    const questionsData: TExamData[] = await getData()
    return (
        <CustomModal
            buttonContent={
                <>
                    <span className="text-sm text-[#313131] font-medium">Bütün Suallar</span>
                    <DoubleArrowRight alt="double-arrow" />
                </>
            }
            variant="secondary"
            exitContent={
                <div className="flex items-center gap-1">
                    <span className="text-sm text-raging-leaf font-medium">Bağla</span>
                    <RightArrowIcon alt="arrow-right" />
                </div>
            }
            exitStyle=" absolute right-14"
            modalStyle="h-[600px] overflow-auto rounded-[20px] shadow-exam-card bg-white relative flex flex-col gap-8 mt-6 p-8"
        >
            <div className="flex justify-between">
                <h6 className="text-md font-medium ml-3">Naviqasiya etmək üçün suala klikləyin:</h6>
            </div>
            <hr className="w-full my-4" />
            {questionsData &&
                questionsData.map((question: TExamData, index: number) => {
                    return (
                        <Link
                            href={`./${index + 1}`}
                            key={question.id}
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
                                    {index + 1}. &nbsp;{question.description}
                                </p>
                                <RightArrowIcon alt="right-icon" />
                            </div>
                        </Link>
                    )
                })}
        </CustomModal>
    )
}
