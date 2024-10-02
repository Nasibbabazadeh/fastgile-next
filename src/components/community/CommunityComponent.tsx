import convertTimeFormat, { calculateTimeAgo } from '@/utils/calculateTimeAgo'

interface TCommunityData {
    id: string
    firstName: string
    surname: string
    createdDate: number
    createdTime: number
    title: string
}

interface CommunityQuestionProps {
    question: TCommunityData
    index: number
}

const CommunityComponent = ({ question, index }: CommunityQuestionProps) => {
    return (
        <div
            key={question.id}
            className="w-full h-[179px] px-10 py-7 flex flex-col gap-4 rounded-md border-l-4 border-l-raging-leaf hover:bg-[#FFF4EE] hover:cursor-pointer transition-all ease-linear"
            style={{ boxShadow: '0px 2px 8px 0px #136A9B26' }}
        >
            <article className="flex justify-between">
                <h3 className="text-xl font-bold text-orange">{question.title}</h3>
                <span className="text-md text-text-gray font-medium">{convertTimeFormat(question.createdTime)}</span>
            </article>
            <div className="flex gap-3 items-center">
                <div
                    className={`w-[50px] h-[50px] border-[3px] border-[#ECB06F] bg-[#EF9F48] rounded-[50%] bg-contain bg-no-repeat ${
                        index % 2 === 0 ? 'bg-avatar-1' : 'bg-avatar-2'
                    }`}
                ></div>
                <article>
                    <h5 className="text-lg text-text-color font-bold">{`${question.firstName} ${question.surname}`}</h5>
                    <span className="text-base text-text-gray font-medium">{calculateTimeAgo(question.createdDate, question.createdTime)}</span>
                </article>
            </div>
        </div>
    )
}

export default CommunityComponent
