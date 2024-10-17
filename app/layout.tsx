import type { Metadata } from "next";
import "./globals.css";

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
        className={` antialiased`}
      >
        <main className="text-black">
        <p>Root Layout</p>
           {children}
        </main>
      </body>
    </html>
  );
}
