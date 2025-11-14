import type React from "react"
import type { Metadata, Viewport } from "next"
import { Montserrat, Open_Sans, Roboto_Slab } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Tech Savvy Hub | Expert Tech Education & Automation Tutorials",
  description: "Master technology and automation with expert-led tutorials. Enhance your productivity and technical skills through comprehensive guides for tech enthusiasts and digital professionals.",
  generator: "v0.app",
  keywords: ["tech education", "automation tutorials", "productivity", "technical skills", "digital professionals", "tech enthusiasts", "programming", "software tutorials"],
  authors: [{ name: "Tech Savvy Hub" }],
  creator: "Tech Savvy Hub",
  publisher: "Tech Savvy Hub",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://techsavvyhub.com",
    siteName: "Tech Savvy Hub",
    title: "Tech Savvy Hub | Expert Tech Education & Automation Tutorials",
    description: "Master technology and automation with expert-led tutorials for tech enthusiasts and digital professionals.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tech Savvy Hub - Tech Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tech Savvy Hub | Expert Tech Education & Automation Tutorials",
    description: "Master technology and automation with expert-led tutorials for tech enthusiasts and digital professionals.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1A73E8" },
    { media: "(prefers-color-scheme: dark)", color: "#1A73E8" },
  ],
  width: "device-width",
  initialScale: 1,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable} ${robotoSlab.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              name: "Tech Savvy Hub",
              description: "Expert tech education and automation tutorials for digital professionals and tech enthusiasts.",
              url: "https://techsavvyhub.com",
              inLanguage: "en-US",
              publisher: {
                "@type": "Organization",
                name: "Tech Savvy Hub",
                logo: {
                  "@type": "ImageObject",
                  url: "https://techsavvyhub.com/logo.png",
                },
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}