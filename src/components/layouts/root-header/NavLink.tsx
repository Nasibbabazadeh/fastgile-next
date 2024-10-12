"use client"
import { LinkedinVector } from "@/assets"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function NavLinkComponent() {
    const pathname = usePathname()
    const routes = [
        { href: "/", label: "Əsas səhifə" },
        { href: "/community/0", label: "Community" },
        { href: "/resources/0", label: "Resurslar" },
        { href: "/about", label: "Haqqımızda" },
    ]
    const [mobileNavlink, setMobileNavLink] = useState<boolean>(false)
    const handleMobileNavbar = () => {
        setMobileNavLink((prev) => !prev)
    }

    return (
        <>
            <div className=" justify-end pr-4 absolute right-5 z-40 hidden sm:flex">
                <button className="flex flex-col justify-between w-10 h-7 relative" onClick={handleMobileNavbar}>
                    <span
                        className={`block w-full h-[3px] bg-black rounded transition-transform duration-400 ease-linear ${
                            mobileNavlink ? "translate-y-[12.5px] rotate-[45deg] scale-x-[0.8]" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-full h-[3px] bg-black rounded transition-transform duration-400 ease-linear ${
                            mobileNavlink ? "scale-x-0" : ""
                        }`}
                    ></span>
                    <span
                        className={`block w-full h-[3px] bg-black rounded transition-transform duration-400 ease-linear ${
                            mobileNavlink ? "-translate-y-[12.5px] rotate-[-45deg] scale-x-[0.8]" : ""
                        }`}
                    ></span>
                </button>
            </div>
            <nav
                className={`w-[72%] h-10 flex justify-between text-nowrap sm:flex-col sm:w-[259px] sm:h-[532px] sm:absolute sm:right-0 sm:z-30 sm:shadow-exam-card sm:bg-white sm:top-0 sm:rounded-sm sm:gap-14 sm:justify-normal sm:pt-28 transition-transform duration-300 sm:px-5 ${
                    mobileNavlink ? "sm:translate-x-0" : "sm:hidden"
                }`}
            >
                <ul className="w-[61%] flex items-center justify-between md:w-[72%] xl:w-[65%] sm:flex-col  sm:items-start sm:h-[160px]">
                    {routes.map(({ href, label }) => (
                        <li key={href}>
                            <Link
                                href={href}
                                className={`transition-all ease-linear text-md md:text-sm text-gray-30 ${
                                    pathname === href ? "border-b-2 border-b-raging-leaf" : "hover:border-b-2 hover:border-b-orange-60"
                                }`}
                            >
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <ul className="flex items-center gap-2 text-nowrap sm:flex-col sm:h-[80px] sm:justify-between ">
                    <li>
                        <Link href="/login" className="rounded-sm py-[10px] px-[33px]  bg-orange-60 text-white font-medium md:px-5 xl:px-6">
                            Qeydiyyat
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/login"
                            className="rounded-sm py-[10px] px-[33px] border-[1px] border-orange-60 text-orange-60 font-medium md:hidden xl:px-6"
                        >
                            Daxil ol
                        </Link>
                    </li>
                </ul>
                <ul className="sm:flex justify-between items-center max-w-[180px] mx-auto hidden">
                    <li className="w-10 h-10 rounded-md shadow-exam-card flex items-center justify-center">
                        <a href="">
                            <LinkedinVector fill="blue" />
                        </a>
                    </li>
                    <li className="w-10 h-10 rounded-md shadow-exam-card flex items-center justify-center">
                        <a href="">
                            <LinkedinVector fill="blue" />
                        </a>
                    </li>
                    <li className="w-10 h-10 rounded-md shadow-exam-card flex items-center justify-center">
                        <a href="">
                            <LinkedinVector fill="blue" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
