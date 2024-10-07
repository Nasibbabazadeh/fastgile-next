import Image from "next/image"
import Link from "next/link"

export interface TResourceData {
    id: string
    contentOfArticle: string
    imageUrl: string[]
    title: string
    description: string
}

const ResourceComponent = ({ resource, href }: { resource: TResourceData; href: string }) => {
    return (
        <Link
            href={href}
            key={resource.id}
            className="w-full px-12 py-6 flex justify-between items-center border-l-4 border-l-[#EC8F42] rounded-md sm:flex-col-reverse sm:justify-normal sm:gap-6"
            style={{ boxShadow: "0px 2px 8px 0px #136A9B26" }}
        >
            <article className="flex flex-col gap-2 sm:max-w-[267px]">
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
        </Link>
    )
}

export default ResourceComponent
