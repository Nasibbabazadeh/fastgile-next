import { LeftArrow, RightArrow } from '@/assets'
import API from '@/http/api'
import Link from 'next/link'
import { TExamData } from '../type'
import AllQuestionsModal from './exam-modals/AllQuestionsModal'
import RadioGroup from './RadioGroup'
import SelectedQuestionsModal from './exam-modals/SelectedQuestionsModal'

interface TestQuestionProps {
    questionNumber: number
    type: string
}

export default async function ExamComponent({ questionNumber, type }: TestQuestionProps): Promise<JSX.Element> {
    const question = questionNumber || 1
    const limit = 1
    const startIndex = (question - 1) * limit
    const endIndex = startIndex + limit

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

    const examData: TExamData[] = await getData()
    const paginatedData = examData.slice(startIndex, endIndex)

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <div className="max-w-[1072px] w-full px-12 py-8 mx-auto flex flex-col gap-8 border-l-4  border-l-orange-60 rounded-[20px] shadow-exam-card">
                {/* TIME AND LENGTH */}
                <div className="flex items-center w-[58%] justify-between">
                    <span className="text-lg text-[#252B42]">
                        {question}/{examData.length}
                    </span>
                    <span className="text-md text-[#0094E8] font-medium text-nowrap">Qalan Zaman :&nbsp; 29:59</span>
                </div>
                {/* Selected AND All Questions */}
                <div className="flex justify-around relative">
                    <SelectedQuestionsModal indexOfQuestion={questionNumber} questionDescription={paginatedData[0]?.description} />
                    <AllQuestionsModal type={type} />
                </div>
                <div className="flex flex-col gap-6">
                    {/* Returned Data */}
                    {paginatedData.length > 0 &&
                        paginatedData.map((question: TExamData) => {
                            return (
                                <div key={question.id}>
                                    <article className="flex items-center gap-2">
                                        <h6 className="text-md font-medium text-start sm:text-wrap">
                                            {questionNumber}.&nbsp;{question.description}
                                        </h6>
                                    </article>
                                    <RadioGroup answers={question.answers} questionId={question.id} />
                                </div>
                            )
                        })}

                    {/* Previous and Next Slide Section */}
                    <section className="flex justify-center items-center">
                        {question > 1 && (
                            <Link
                                href={`./${question - 1}`}
                                className="rounded-[10px] border-b-4 border-b-raging-leaf py-4 px-6 bg-orange-60 flex items-center gap-3 mr-2"
                            >
                                <LeftArrow />
                                <span className="text-[18px] leading-6 font-medium text-white">Əvvəlki</span>
                            </Link>
                        )}
                        {endIndex < examData.length ? (
                            <Link
                                href={`./${question + 1}`}
                                className="rounded-[10px] border-b-4 border-b-raging-leaf py-4 px-6 bg-orange-60 flex items-center gap-3 ml-2"
                            >
                                <span className="text-[18px] leading-6 font-medium text-white">Sonrakı</span>
                                <RightArrow />
                            </Link>
                        ) : (
                            <Link
                                href={`./`}
                                className="rounded-[10px] border-b-4 border-b-[#D00000] py-4 px-6 bg-[#FB1230] flex items-center gap-3 ml-2 hover:bg-red-dark transition-all ease-linear "
                            >
                                <span className="text-[18px] leading-6 font-medium text-white">İmtahanı bitir</span>
                            </Link>
                        )}
                    </section>
                </div>
            </div>
        </div>
    )
}
