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