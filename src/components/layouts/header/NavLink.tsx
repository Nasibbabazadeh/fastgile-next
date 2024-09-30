'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavLinkComponent() {
    const pathname = usePathname()
    const routes = [
        { href: '/', label: 'Əsas səhifə' },
        { href: '/community/0', label: 'Community' },
        { href: '/resources/0', label: 'Resurslar' },
        { href: '/about', label: 'Haqqımızda' },
    ]

    return (
        <nav className="w-[841px] h-10 flex justify-between">
            <ul className="w-[510px] flex items-center justify-between">
                {routes.map(({ href, label }) => (
                    <li key={href}>
                        <Link
                            href={href}
                            className={`transition-all ease-linear text-md text-gray-30 ${
                                pathname === href ? 'border-b-2 border-b-orange' : 'hover:border-b-2 hover:border-b-orange-60'
                            }`}
                        >
                            {label}
                        </Link>
                    </li>
                ))}
            </ul>
            <ul className="flex items-center gap-2">
                <li>
                    <Link href="/login" className="rounded-sm py-[10px] px-[33px] bg-orange-60 text-white font-medium">
                        Qeydiyyat
                    </Link>
                </li>
                <li>
                    <Link href="/login" className="rounded-sm py-[10px] px-[33px] border-[1px] border-orange-60 text-orange-60 font-medium">
                        Daxil ol
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
