import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Poppins } from "next/font/google"
import { ThemeProvider } from "next-themes"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
import { ThemeToggle } from "../components/ThemeToggle"
import { ScrollProgress } from "../components/ScrollProgress"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins"
})

export const metadata: Metadata = {
  title: "Aryan Patel - Full-Stack Developer",
  description: "Full-Stack Developer specializing in building scalable web systems using React, Next.js, and Node.js. Expert in modern web technologies and cloud solutions.",
  keywords: [
    "Aryan Patel",
    "Full-Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "Spring Boot",
    "MERN Stack",
    "Web Development",
    "Software Engineer"
  ],
  authors: [{ name: "Aryan Patel" }],
  creator: "Aryan Patel",
  publisher: "Aryan Patel",
  openGraph: {
    title: "Aryan Patel - Full-Stack Developer",
    description: "Full-Stack Developer specializing in building scalable web systems using React, Next.js, and Node.js.",
    url: "https://codezaryan.netlify.app",
    siteName: "Aryan Patel Portfolio",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Aryan Patel - Full-Stack Developer"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Aryan Patel - Full-Stack Developer",
    description: "Full-Stack Developer specializing in building scalable web systems using React, Next.js, and Node.js.",
    images: ["/og-image.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Aryan Patel",
              "jobTitle": "Full-Stack Developer",
              "url": "https://codezaryan.netlify.app",
              "sameAs": [
                "https://github.com/aryanpatel7987",
                "https://linkedin.com/in/aryanpatel7987"
              ],
              "knowsAbout": [
                "React",
                "Next.js",
                "Node.js",
                "Java",
                "Spring Boot",
                "Full-Stack Development"
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <ScrollProgress />
          <ThemeToggle />
          <Navigation />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
