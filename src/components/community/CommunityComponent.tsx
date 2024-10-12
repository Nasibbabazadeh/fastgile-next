"use client"
import { useFilterStore } from "@/store/useFilteredQuestiosStore"
import convertTimeFormat, { calculateTimeAgo } from "@/utils/calculateTimeAgo"
import Link from "next/link"

export interface TCommunityData {
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
        <Link
            href={`/community/${question.id}/${question.title}`}
            key={question.id}
            className="w-full h-[179px] px-10 pt-7 flex flex-col gap-4 rounded-md border-l-4 border-l-raging-leaf hover:bg-[#FFF4EE] hover:cursor-pointer transition-all ease-linear sm:px-2 "
            style={{ boxShadow: "0px 2px 8px 0px #136A9B26" }}
        >
            <article className="flex justify-between text-nowrap items-center">
                <h3 className="text-xl font-bold text-raging-leaf sm:text-md">{question.title}</h3>
                <span className="text-md text-text-gray font-medium sm:text-base">{convertTimeFormat(question.createdTime)}</span>
            </article>
            <div className="flex gap-3 items-center">
                <div
                    className={`w-[50px] h-[50px] border-[3px] border-[#ECB06F] bg-[#EF9F48] rounded-[50%] bg-contain bg-no-repeat ${
                        index % 2 === 0 ? "bg-avatar-1" : "bg-avatar-2"
                    }`}
                ></div>
                <article>
                    <h5 className="text-lg text-text-color font-bold sm:text-base text-nowrap">{`${question.firstName} ${question.surname}`}</h5>
                    <span className="text-base text-text-gray font-medium sm:text-xs">
                        {calculateTimeAgo(question.createdDate, question.createdTime)}
                    </span>
                </article>
            </div>
        </Link>
    )
}

export default CommunityComponent
