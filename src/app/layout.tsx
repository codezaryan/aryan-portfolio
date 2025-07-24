import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Patel - Software Engineer Portfolio",
  description:"Full-Stack Developer specializing in building high-performance applications",
  keywords:
    "Aryan Patel, Software Engineer, Java Full Stack Developer, MERN Stack Developer, Native App Developer",
  authors: [{ name: "Aryan Patel" }],
  openGraph: {
    title: "Aryan Patel - Software Engineer Portfolio",
    description: "Full-Stack Developer specializing in building high-performance applications",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
