import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Aura } from "./_components/aura"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Zongze Chen",
  description: "Front-end developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} px-8 flex justify-center`}>
        <Aura />
        <div className="max-w-[1620px] w-full">{children}</div>
      </body>
    </html>
  )
}
