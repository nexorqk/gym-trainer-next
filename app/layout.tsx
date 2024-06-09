import { ClerkThemeProvider } from "@/components/clerk-theme"
import { Header } from "@/components/header"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import * as React from "react"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"

export const metadata: Metadata = {
  title: "Gym Trainer App",
  description: "App for gym trainers",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkThemeProvider>
            <Header />
            <main>{children}</main>
            <Toaster />
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
