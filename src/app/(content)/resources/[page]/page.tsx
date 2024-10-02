import ResourceComponent from '@/components/resources/ResourceComponent'
import ContentNav from '@/components/common/ContentNavBar'
import { fetchResourcesCount, fetchResourcesQuestions } from '@/services/resourcesServise'
import { TResourceData } from '@/components/resources/ResourceComponent'

export default async function ResoursePage({ params }: { params: { page: number } }) {
    const { page } = params
    const resourceData: TResourceData[] = await fetchResourcesQuestions(page)
    const totalCount = await fetchResourcesCount()
    const totalPages = Math.ceil(totalCount / 2)
    const isPrevDisabled = page <= 0
    const isNextDisabled = page >= totalPages - 1

    return (
        <section className="max-w-[1184px] mx-auto flex flex-col gap-8 items-end">
            <article className="w-full relative left-12 top-4">
                <h3 className="text-xl-3 text-raging-leaf font-medium">Ən Son Məqalələr</h3>
            </article>

            {resourceData &&
                resourceData.map((resource: TResourceData) => (
                    <ResourceComponent key={resource.id} resource={resource} href={`./${page}/${resource.id}`} />
                ))}

            <ContentNav next={`./${page + 1}`} prev={`./${page - 1}`} isPrevDisabled={isPrevDisabled} isNextDisabled={isNextDisabled} />
        </section>
    )
}
