import "./globals.css"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "BHEEMA Institute of Technology & Science",
  description: "BHEEMA Institute of Technology & Science, Adoni",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
