import AllQuestionsCard from '@/components/exam/exam-questions/AllQuestionsCard'

export default function AllFlaggedQuestionsPage({ params }: { params: { type: string } }) {
    const type = params.type
    return <AllQuestionsCard type={type} />
}
