import { LinkedinIcon, LinkedinVector } from '@/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="bg-[#2D2D2D] h-[200px] flex items-center">
            <div className="max-w-[1264px] w-full mx-auto flex justify-between text-white items-center">
                <Image src="/static/fastgile-white-icon.svg" alt="fastgile-icon" width={88} height={75} />
                <div className="flex flex-col gap-12 items-center">
                    <nav>
                        <ul className="flex items-center text-lg font-medium gap-4">
                            <li>
                                <Link href="/about">Haqqımızda &nbsp;&nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;&nbsp; </Link>
                            </li>
                            <li>
                                <Link href="resources/0">Resurslar &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp; </Link>
                            </li>
                            <hr />
                            <li>
                                <Link href="/">Əlaqə</Link>
                            </li>
                        </ul>
                    </nav>
                    <h6 className="text-sm">Copyright © 2023 Suleyman Jabrayilzade</h6>
                </div>
                <div className="flex items-center gap-2">
                    <LinkedinVector fill="black" />
                    <a href="https://www.linkedin.com/company/fastgileorg/posts/?feedView=all" className="underline-offset-4 underline">
                        Connect Fastgile on Linkedin
                    </a>
                </div>
            </div>
        </footer>
    )
}
