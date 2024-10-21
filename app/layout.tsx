import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import ThemeProvider from "@/providers/ThemeProvider";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HR dashboard",
  description: "Human resourse management system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="">
      <body
        className={`${dmsans.className} antialiased`}
      >
        <ThemeProvider>
          <div className="text-black dark:text-white">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
