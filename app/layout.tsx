import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gym Trainer App",
  description: "App for gym trainers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
