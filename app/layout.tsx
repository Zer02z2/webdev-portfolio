import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Aura } from "./_components/aura"
import { Footer } from "./_footer"
import { Header } from "./_header"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Zongze Chen",
  description:
    "hi, my name is Zongze. I love coding and making beautiful things on the web.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-9ZNY3953F4"
        ></Script>
        <Script id="google analytics">
          {" "}
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-9ZNY3953F4');`}
        </Script>
      </head>
      <body className={`${inter.className}`}>
        <div id="top-anchor" className="h-0"></div>
        <Aura />
        <Header />
        <div className="w-full px-4 sm:px-10 flex justify-center">
          <div className="max-w-[1620px] w-full">{children}</div>
        </div>
        <Footer />
      </body>
    </html>
  )
}
