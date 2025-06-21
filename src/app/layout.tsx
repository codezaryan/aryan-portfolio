import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Aryan Patel - Software Engineer Portfolio",
  description:
    "Computer Science Engineering Graduate (2020-2024) with CGPA 8.12 - Showcasing skills in JavaScript, Next.js, React, Node.js, and full-stack development",
  keywords:
    "Aryan Patel, software engineer, web developer, JavaScript, Next.js, React, Node.js, PostgreSQL, MongoDB, full-stack developer, CSE graduate",
  authors: [{ name: "Aryan Patel" }],
  openGraph: {
    title: "Aryan Patel - Software Engineer Portfolio",
    description: "CSE Graduate with expertise in full-stack web development",
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
