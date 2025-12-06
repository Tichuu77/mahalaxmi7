import type React from "react"
import type { Metadata } from "next"
import { Poppins, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-heading",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "Mahalaxmi  Infra",
  description: "Mahalaxmi  Infra - NMRDA & RL Residential Plotted Project",
  generator: "v0.app",
  icons: "/Mahalaxmi Infra new Logo.png",
  keywords: [
    "Residential plots for sale in Dighori Nagpur",
    "Dighori highway touch plots price",
    "Best real estate projects in Dighori Nagpur",
    "Dighori ring road plots for investment",
    "Commercial plots for sale in Dighori area",
    "Dighori Nagpur DTCP approved plots for sale",
    "Affordable plots near Dighori Square Nagpur",
    "New layout plots available in Dighori Nagpur",
    "Dighori road-facing plots for commercial use",
    "Ready-to-register plots in Dighori Nagpur",
    "Dighori Nagpur gated community plots",
      "Highway connectivity plots in Dighori area",
      "Property rates for plots in Dighori Nagpur",
      "Investment plots near Dighori to Umred Road",
      "Dighori residential real estate projects 2025",
  ]

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
