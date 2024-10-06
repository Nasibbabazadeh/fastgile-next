export type TAnswer = {
    id: string
    description: string
}
export type TExamData = {
    id: string
    description: string
    answers: TAnswer[]
    limit: number
    type: string
}

export type RadioGroupProps = {
    answers: TAnswer[]
    questionId: string
}

export type TestQuestionProps =  {
    questionNumber: number
    type: string
}
