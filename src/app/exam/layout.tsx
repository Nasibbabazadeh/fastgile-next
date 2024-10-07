import type { Metadata } from "next"
import localFont from "next/font/local"
import "../globals.css"

const roboto = localFont({
    src: [
        {
            path: "../fonts/Roboto-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../fonts/Roboto-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "../fonts/Roboto-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "../fonts/Roboto-Black.ttf",
            weight: "900",
            style: "normal",
        },
    ],
    variable: "--font-roboto",
})
export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${roboto.variable}  antialiased font-roboto`}>
                <main>{children}</main>
            </body>
        </html>
    )
}
