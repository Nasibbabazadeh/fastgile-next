"use client"
import { CancelButton, TruthyIcon } from "@/assets"
import CustomButton from "@/components/common/CustomButton"
import CustomInput from "@/components/common/CustomInput"
import { useEffect, useState } from "react"
import CommentModal from "./CommentModal"
import RestartExamModal from "./RestartExamModal"

export default function ExamResultData() {
    const [resultData, setResultData] = useState<any[]>([])
    const [filteredQuestions, setFilteredQuestions] = useState<any[]>([])
    const [correctAnswers, setCorrectAnswers] = useState<any[]>([])
    const [falseAnswers, setFalseAnswers] = useState<any[]>([])
    const [unselectedAnswers, setUnselectedAnswers] = useState<any[]>([])
    const [activeFilter, setActiveFilter] = useState<string>("all")

    const parseExamData = (data: any[]) => {
        const trueQuestions = data.filter((item: any) => item.correctAnswers[0] === item.userAnswers[0])
        const falsyQuestions = data.filter((item: any) => item.userAnswers[0] !== "" && item.correctAnswers[0] !== item.userAnswers[0])
        const unselectedQuestions = data.filter((item: any) => item.userAnswers[0] === "")

        setResultData(data)
        setCorrectAnswers(trueQuestions)
        setFalseAnswers(falsyQuestions)
        setUnselectedAnswers(unselectedQuestions)
        setFilteredQuestions(data)
    }

    useEffect(() => {
        const storedData = localStorage.getItem("exam-result-data")
        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData)
                parseExamData(parsedData)
            } catch (error) {
                console.error("Error parsing exam result data:", error)
            }
        }
    }, [])

    const handleFilterChange = (filter: string) => {
        setActiveFilter(filter)
        switch (filter) {
            case "correct":
                setFilteredQuestions(correctAnswers)
                break
            case "incorrect":
                setFilteredQuestions(falseAnswers)
                break
            case "unselected":
                setFilteredQuestions(unselectedAnswers)
                break
            default:
                setFilteredQuestions(resultData)
        }
    }

    const renderIcon = (isCorrect: boolean) =>
        isCorrect ? <TruthyIcon className="text-green-500 ml-2" /> : <CancelButton className="text-red-500 ml-2" />

    return (
        <div className="max-w-[1200px] mx-auto py-12">
            {/* Exam Result Header */}
            <section className="mx-auto shadow-exam-card bg-[#F9F9F9] rounded-xs flex flex-col gap-10 p-10">
                <h3 className="text-orange-60 text-[30px] leading-9 text-center">Peşəkar Scrum Master I (PSM I) sınaq imtahanı (başlanğıc)</h3>
                <div className="flex justify-between items-center">
                    <div className="w-[45%] h-[72px] flex flex-col justify-around items-center rounded-lg border-[1px] border-[#ccc]">
                        <span className="text-[#555] text-sm">Faiz</span>
                        <span className="text-md font-bold">100%</span>
                    </div>
                    <div className="w-[45%] h-[72px] flex flex-col justify-around items-center rounded-lg border-[1px] border-[#ccc]">
                        <span className="text-[#555] text-sm">Müddət</span>
                        <span className="text-md font-bold">00:12:45</span>
                    </div>
                </div>
                <article className="h-[170px] w-full shadow-exam-card border-l-8 border-l-[#ff7849] rounded-xs bg-white flex flex-col justify-center items-center">
                    <h6 className="text-xl-3 font-bold mb-2">Feedback</h6>
                    <p className="text-center text-pretty text-base font-medium mt-2">
                        Sizin real imtahana daxil olmamışdan öncə bir neçə dəfə “Scrum Guide 2020” oxumağınız, həmçinin sınaq testləri etməyiniz
                        tövsiyə olunur.
                    </p>
                </article>
                <div className="flex justify-evenly">
                    <CommentModal />
                    <RestartExamModal />
                </div>
            </section>

            {/* Filter Buttons */}
            <article className="flex items-center justify-evenly mt-10">
                <CustomButton size="xs" variant="exam" onClick={() => handleFilterChange("all")}>
                    Bütün suallar &nbsp; ({resultData.length})
                </CustomButton>
                <CustomButton variant="exam" size="xs" onClick={() => handleFilterChange("correct")}>
                    Doğru cavablar &nbsp; ({correctAnswers.length})
                </CustomButton>
                <CustomButton variant="exam" size="xs" onClick={() => handleFilterChange("incorrect")}>
                    Yanlış cavablar &nbsp; ({falseAnswers.length})
                </CustomButton>
                <CustomButton variant="exam" size="xs" onClick={() => handleFilterChange("unselected")}>
                    İşarələnməmiş suallar &nbsp; ({unselectedAnswers.length})
                </CustomButton>
            </article>

            {/* Questions Display */}
            <section>
                {filteredQuestions.map((question, index) => (
                    <div
                        key={question.questionId}
                        className="border-2 mx-auto mt-6 flex flex-col border-l-4 border-l-orange-60 rounded-md shadow-exam-card relative px-6 py-6"
                    >
                        <h6 className="text-md font-medium text-start sm:text-wrap">
                            {index + 1}. &nbsp;{question.question}
                        </h6>
                        {question.questionAnswers.answer.map((item: string, i: number) => {
                            const userAnswer = question.userAnswers[0]
                            const correctAnswer = question.correctAnswers[0]
                            const isSelected = userAnswer === question.questionAnswers.id[i]
                            const isCorrect = question.questionAnswers.id[i] === correctAnswer

                            return (
                                <div
                                    key={item}
                                    className={`px-4 py-4 border-2 rounded-[20px] flex justify-between my-4 transition-all ease-linear ${
                                        isCorrect ? "border-green-500" : isSelected ? "border-red-500" : "border-[#D0D0E3]"
                                    }`}
                                >
                                    <CustomInput
                                        key={item}
                                        label={item}
                                        type="radio"
                                        labelStyle="text-sm text-nowrap sm:text-wrap text-start flex gap-3 items-center hover:cursor-pointer"
                                        checked={isSelected}
                                        disabled
                                    />
                                    {isSelected && renderIcon(isCorrect)}
                                    {!isSelected && isCorrect && <TruthyIcon className="text-green-500 ml-2" />}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </section>
        </div>
    )
}
