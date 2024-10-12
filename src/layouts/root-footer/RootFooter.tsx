import { LinkedinIcon, LinkedinVector } from "@/assets"
import Image from "next/image"
import Link from "next/link"

export default function RootFooter() {
    return (
        <footer className="bg-[#2D2D2D] h-[150px] flex items-center mt-7">
            <div className="max-w-[1264px] w-full mx-auto flex justify-between text-white items-center md:mx-5 sm:justify-center">
                <Image
                    src="/static/fastgile-white-icon.svg"
                    alt="fastgile-icon"
                    width={88}
                    height={75}
                    className="w-auto h-auto sm:mr-4 sm:w-8 sm:h-8"
                />
                <div className="flex flex-col gap-12 items-center sm:ml-4">
                    <nav>
                        <ul className="flex items-center text-lg font-medium gap-5 md:text-md sm:text-xs">
                            <li>
                                <Link href="/about">Haqqımızda </Link>
                            </li>
                            <hr className="border-[1px] h-4 border-white" />
                            <li>
                                <Link href="resources/0">Resurslar </Link>
                            </li>
                            <hr className="border-[1px] h-4 border-white" />
                            <li>
                                <Link href="/">Əlaqə</Link>
                            </li>
                        </ul>
                    </nav>
                    <h6 className="text-sm text-nowrap md:text-md sm:text-xs">Copyright © {new Date().getFullYear()} Suleyman Jabrayilzade</h6>
                </div>
                <div className="flex items-center gap-2 relative top-9 sm:hidden">
                    <LinkedinVector fill="black" />
                    <a href="https://www.linkedin.com/company/fastgileorg/posts/?feedView=all" className="underline-offset-4 underline ">
                        Connect Fastgile on Linkedin
                    </a>
                </div>
            </div>
        </footer>
    )
}
