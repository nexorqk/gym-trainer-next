"use client"

import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { useTheme } from "next-themes"
import * as React from "react"

export function ClerkThemeProvider({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const { theme, systemTheme } = useTheme()

  return (
    <ClerkProvider
      appearance={{
        baseTheme:
          theme === "dark"
            ? dark
            : theme === "light"
              ? undefined
              : systemTheme === "dark"
                ? dark
                : undefined,
      }}
    >
      {children}
    </ClerkProvider>
  )
}
