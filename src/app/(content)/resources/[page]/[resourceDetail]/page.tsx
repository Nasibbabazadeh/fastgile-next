import { LeftArrow, RightArrowIcon } from "@/assets"
import { TResourceData } from "@/components/resources/ResourceComponent"
import { fetchResourcesQuestions } from "@/services/resourcesServise"
import Image from "next/image"
import Link from "next/link"

interface TParams {
    page: string
    resourceDetail: string
}

export default async function ResourceDetailsPage({ params }: { params: TParams }) {
    const resourceDetail = params.resourceDetail
    const page = params.page
    async function getDetailData() {
        const resourceData: TResourceData[] = await fetchResourcesQuestions(+page)
        return resourceData.filter((item: TResourceData) => item.id === resourceDetail)
    }
    const detailedData: TResourceData | undefined = (await getDetailData())[0]
    if (!detailedData) {
        return <h1> Not Page! </h1>
    }
    const descriptionData = detailedData.description.split("\n").filter((item: string) => item !== "")
    return (
        <div
            className="flex flex-col  my-14 items-start max-w-[996px] mx-auto sm:gap-7 
        "
        >
            <Link href="./" className=" flex items-center gap-2 relative  sm:left-5">
                <LeftArrow fill="" />
                <span className="text-lg text-orange-60 font-bold ">Geri</span>
            </Link>
            <div className="flex flex-col gap-14">
                <article className="max-w-[650px] mx-auto flex flex-col gap-10">
                    <h3 className="text-[36px] leading-[43px] font-bold text-center text-pretty">{detailedData.title}</h3>
                    <Image
                        src={`${process.env.NEXT_PUBLIC_BASE_URL}image/${detailedData.id}/${detailedData.imageUrl}`}
                        alt="image"
                        width={267}
                        height={160}
                        className="rounded-[10px] w-full h-full object-fill sm:w-[90%] mx-auto"
                    />
                </article>
                <section className="max-w-[996px] mx-auto px-20 pt-20 pb-16 shadow-resource-card border-l-2 border-[#EC8F42] rounded-md sm:mx-5 sm:px-5 sm:py-8">
                    <div>
                        {descriptionData &&
                            descriptionData.map((item: string, index) => {
                                return (
                                    <article
                                        className={`mb-4 ${
                                            item[1] === "."
                                                ? "text-raging-leaf text-lg font-bold sm:text-md"
                                                : "text-gray-30 text-[20px] leading-[30px] sm:text-[16px] sm:leading-7"
                                        }`}
                                        key={index}
                                    >
                                        {item}
                                    </article>
                                )
                            })}
                    </div>
                </section>
            </div>
        </div>
    )
}
