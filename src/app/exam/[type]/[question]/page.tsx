import ExamComponent from '@/components/exam/exam-questions/ExamComponent'

export default function Page({ params }: { params: { question: string; type: string } }) {
    const questionNumber = parseInt(params.question) || 1
    const { type } = params

    return (
        <div>
            <ExamComponent questionNumber={questionNumber} type={type} />
        </div>
    )
}
