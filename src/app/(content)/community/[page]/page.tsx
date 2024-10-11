import ContentNav from "@/components/common/ContentNavBar"
import FilterSection from "@/components/community/FilterSection"
import CommunityComponent from "@/components/community/CommunityComponent"
import { fetchCommunityCount, fetchCommunityQuestions } from "@/services/communityService"

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
        <div className="sm:mx-5 md:mx-8">
            <FilterSection />
            <section className="max-w-[1184px] w-full mx-auto gap-6 flex flex-col items-end sm:items-center">
                {communityData &&
                    communityData.map((question: TCommunityData, index: number) => (
                        <CommunityComponent key={question.id} question={question} index={index} />
                    ))}

                <ContentNav next={`./${page + 1}`} prev={`./${page - 1}`} isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} />
            </section>
        </div>
    )
}
