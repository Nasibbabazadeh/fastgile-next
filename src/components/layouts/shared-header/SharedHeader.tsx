import { LeftArrow, LeftArrowHead } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export default function SharedHeader() {
    return (
        <header className="max-w-[1385px] mx-auto flex justify-between items-center my-6 font-roboto md:mx-5 xl:mx-6 sm:mx-5 text-nowrap ">
            <Link href="/" className="flex gap-2 items-center sm:gap-1">
                <LeftArrowHead />
                <span className="text-xl-3 font-semibold text-raging-leaf sm:text-base mb-1">Ana səhifəyə qayıt</span>
            </Link>
            <Link href="/" className="flex gap-1 items-end">
                <Image src="/static/fastgile-icon.svg" alt="fastgile-icon" width={65} height={60} className="sm:w-10 sm:h-12" />
                <div className="flex flex-col gap-1 relative top-1 sm:gap-0 sm:top-0">
                    <h3 className="text-[28px] leading-[20px] font-black  sm:text-[20px] sm:leading-4">FASTGILE</h3>
                    <h6 className="text-[#5D5D5D] text-xs sm:text-[8px]">BE AGILE AND FAST</h6>
                </div>
            </Link>
        </header>
    )
}
