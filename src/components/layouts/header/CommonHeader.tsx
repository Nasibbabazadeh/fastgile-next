import Link from 'next/link'
import NavLinkComponent from './NavLink'
import Image from 'next/image'

export default function CommonHeader() {
    return (
        <header className="max-w-[1385px] mx-auto flex justify-between items-center my-10">
            <Link href="/" className="flex gap-1 items-end text-nowrap">
                <Image src="/static/fastgile-icon.svg" alt="fastgile-icon" width={65} height={60} />
                <div className="flex flex-col gap-1">
                    <h3 className="text-[28px] leading-[20px] font-extrabold tracking-[0.2px]">FASTGILE</h3>
                    <h6 className="text-secondary-header text-sm">BE AGILE AND FAST</h6>
                </div>
            </Link>
            <NavLinkComponent />
        </header>
    )
}
