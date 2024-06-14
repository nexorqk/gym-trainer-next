import { ClerkThemeProvider } from "@/components/clerk-theme";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Trainer App",
  description: "SaaS app for clients and trainers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
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
          </ClerkThemeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
