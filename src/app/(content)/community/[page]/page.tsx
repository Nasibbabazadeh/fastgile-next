import CommunityNav from '@/components/community/CommunityNav'
import { fetchCommunityQuestions, fetchCommunityCount } from '@/services/communityService'
import convertTimeFormat, { calculateTimeAgo } from '@/utils/calculateTimeAgo'

interface TCommunityData {
    id: string
    firstName: string
    surname: string
    createdDate: number
    createdTime: number
    title: string
}

export default async function CommunityPage({ params }: { params: { page: number } }) {
    const { page } = params
    const communityData: TCommunityData[] = await fetchCommunityQuestions(page)
    const totalCount = await fetchCommunityCount()
    const totalPages = Math.ceil(totalCount / 2)
    const isPrevDisabled = page <= 0
    const isNextDisabled = page >= totalPages - 1

    return (
        <section className="max-w-[1184px] w-full mx-auto gap-8 flex flex-col items-end ">
            {communityData &&
                communityData.map((question: TCommunityData, index: number) => {
                    return (
                        <div
                            key={question.id}
                            className="w-full h-[179px] px-10 py-7 flex flex-col gap-4 rounded-md border-l-4 border-l-orange hover:bg-[#FFF4EE] hover:cursor-pointer transition-all ease-linear"
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
                                    <span className="text-base text-text-gray font-medium">
                                        {calculateTimeAgo(question.createdDate, question.createdTime)}
                                    </span>
                                </article>
                            </div>
                        </div>
                    )
                })}
            <CommunityNav next={`./${page + 1}`} prev={`./${page - 1}`} isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} />
        </section>
    )
}
