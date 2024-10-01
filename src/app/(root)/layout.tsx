import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../globals.css'
import CommonHeader from '@/components/layouts/header/CommonHeader'
import Footer from '@/components/layouts/footer/Footer'

const roboto = localFont({
    src: [
        {
            path: '../fonts/Roboto-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/Roboto-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../fonts/Roboto-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../fonts/Roboto-Black.ttf',
            weight: '900',
            style: 'normal',
        },
    ],
    variable: '--font-roboto',
})

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable}  antialiased font-roboto`}>
                <CommonHeader />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
