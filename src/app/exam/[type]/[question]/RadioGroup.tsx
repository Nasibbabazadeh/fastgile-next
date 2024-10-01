'use client'
import { useEffect } from 'react'
import CustomInput from '@/components/common/CustomInput'
import { TAnswer } from './type'
import useUserAnswersStore from '@/store/useUserAnswers'

type RadioGroupProps = {
    answers: TAnswer[]
    questionId: string
}

const RadioGroup = ({ answers, questionId }: RadioGroupProps) => {
    const { userAnswers, setUserAnswer } = useUserAnswersStore()

    const handleAnswers = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(questionId, e.target.value)
    }

    // Log the userAnswers to see the updates after every re-render
    useEffect(() => {
        console.log('Updated userAnswers:', userAnswers)
    }, [userAnswers])

    return (
        <article>
            {answers.map((answer: TAnswer) => (
                <div
                    key={answer.id}
                    className="flex-col px-4 py-4 border-2 rounded-[20px] flex gap-4 my-4 transition-all ease-linear border-white-border"
                >
                    <CustomInput
                        type="radio"
                        name={questionId}
                        id={answer.id}
                        label={answer.description}
                        handleChange={handleAnswers}
                        value={answer.id}
                        checked={userAnswers[questionId] === answer.id}
                        labelStyle="text-text2 text-nowrap sm:text-wrap text-start flex gap-3 items-center hover:cursor-pointer"
                        className="hover:cursor-pointer transition-all-linear checked:border-orange-light checked:border-2 accent-orange-light checked:bg-orange-light"
                    />
                </div>
            ))}
        </article>
    )
}

export default RadioGroup
