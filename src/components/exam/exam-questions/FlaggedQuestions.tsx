import { PlayArrow, RightArrowIcon } from '@/assets'
import { TExamData } from '../type'
import API from '@/http/api'
import Link from 'next/link'

export default async function AllFlaggedQuestions({ type }: { type: string }) {
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
        <div className="w-screen h-screen flex justify-center items-center">
            <div className="max-w-[700px]  mx-auto mt-6 flex flex-col gap-8 ">
                <div className="flex justify-between">
                    <h6 className="text-md font-medium ml-3">Naviqasiya etmək üçün suala klikləyin:</h6>
                    <Link className="flex items-center" href={`./1`}>
                        <span className="text-sm text-raging-leaf font-medium">Geri</span>
                        <RightArrowIcon alt="right-icon" />
                    </Link>
                </div>
                <div className="h-[560px] overflow-auto rounded-[20px] shadow-exam-card">
                    {questionsData &&
                        questionsData.map((question: TExamData) => {
                            return (
                                <div key={question.id} className="py-6 px-4 hover:bg-extra-light-orange transition-all-linear all_questions_card ">
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
    )
}
