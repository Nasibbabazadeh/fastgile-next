import Link from "next/link"
import NavLinkComponent from "./NavLink"
import Image from "next/image"
import CustomModal from "@/components/common/CustomModal"

export default function CommonHeader() {
    return (
        <header className="max-w-[1385px] mx-auto flex justify-between items-center my-6 font-roboto md:mx-5 xl:mx-6 sm:mx-5">
            <Link href="/" className="flex gap-1 items-end text-nowrap">
                <Image src="/static/fastgile-icon.svg" alt="fastgile-icon" width={65} height={60} className="md:w-14 md:h-12" />
                <div className="flex flex-col gap-1 relative top-1">
                    <h3 className="text-[28px] leading-[20px] font-black md:text-[24px] md:leading-4">FASTGILE</h3>
                    <h6 className="text-[#5D5D5D] text-xs md:text-[12px]">BE AGILE AND FAST</h6>
                </div>
            </Link>
            <NavLinkComponent />
        </header>
    )
}
