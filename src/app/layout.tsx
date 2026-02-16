import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/Sidebar";
import { Header } from "@/components/layout/Header";

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MBG Analytics",
  description: "Monitoring Dashboard for MBG Program",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={publicSans.variable}>
      <body className="flex h-screen overflow-hidden bg-background-light dark:bg-background-dark font-display antialiased">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0 overflow-hidden transition-all duration-300">
          <Header />
          <div className="flex-1 overflow-auto p-6 scroll-smooth">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
