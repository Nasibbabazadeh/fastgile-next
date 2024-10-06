'use client'
import CustomInput from '@/components/common/CustomInput'
import { RadioGroupProps, TAnswer } from '../type'
import useUserAnswersStore from '@/store/useUserAnswers'

const RadioGroup = ({ answers, questionId }: RadioGroupProps) => {
    const { userAnswers, setUserAnswer } = useUserAnswersStore()

    const handleAnswers = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserAnswer(questionId, e.target.value)
    }
    return (
        <article>
            {answers.map((answer: TAnswer) => (
                <div
                    key={answer.id}
                    className="flex-col px-4 py-4 border-2 rounded-[20px] flex gap-4 my-4 transition-all ease-linear border-[#D0D0E3]"
                >
                    <CustomInput
                        type="radio"
                        name={questionId}
                        id={answer.id}
                        label={answer.description}
                        handleChange={handleAnswers}
                        value={answer.id}
                        checked={userAnswers[questionId] === answer.id}
                        labelStyle="text-sm text-nowrap sm:text-wrap text-start flex gap-3 items-center hover:cursor-pointer"
                        className="hover:cursor-pointer transition-all-linear checked:border-orange-60 checked:border-2 accent-orange-60 checked:bg-orange-60"
                    />
                </div>
            ))}
        </article>
    )
}

export default RadioGroup
