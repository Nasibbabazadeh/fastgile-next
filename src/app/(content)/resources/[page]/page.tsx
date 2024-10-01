import ContentNav from '@/components/common/ContentNavBar'
import { fetchResourcesCount, fetchResourcesQuestions } from '@/services/resourcesServise'
import Image from 'next/image'

interface TResourceData {
    id: string
    contentOfArticle: string
    imageUrl: string[]
    title: string
    description: string
}

export default async function ResoursePage({ params }: { params: { page: number } }) {
    const { page } = params
    const resourceData: TResourceData[] = await fetchResourcesQuestions(page)
    const totalCount = await fetchResourcesCount()
    const totalPages = Math.ceil(totalCount / 2)
    const isPrevDisabled = page <= 0
    const isNextDisabled = page >= totalPages - 1
    console.log(resourceData)
    console.log(totalCount)
    return (
        <section className="max-w-[1184px] mx-auto flex flex-col gap-8 items-end ">
            <article className="w-full relative left-12 top-4">
                <h3 className="text-xl-3 text-orange font-medium ">Ən Son Məqalələr</h3>
            </article>
            {resourceData &&
                resourceData.map((resource: TResourceData) => {
                    return (
                        <div
                            key={resource.id}
                            className="w-full px-12 py-6 flex justify-between items-center border-l-4 border-l-[#EC8F42] rounded-md"
                            style={{ boxShadow: '0px 2px 8px 0px #136A9B26' }}
                        >
                            <article className="flex flex-col gap-2">
                                <h3 className="text-lg-2 font-bold">{resource.title}</h3>
                                <p className="text-sm text-gray-30">{resource.contentOfArticle}</p>
                            </article>
                            <div className="max-w-[267px] h-[160px]">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_BASE_URL}image/${resource.id}/${resource.imageUrl}`}
                                    alt="image"
                                    width={267}
                                    height={160}
                                    className="rounded-[10px] w-full h-full object-fill"
                                />
                            </div>
                        </div>
                    )
                })}
            <ContentNav next={`./${page + 1}`} prev={`./${page - 1}`} isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} />
        </section>
    )
}
