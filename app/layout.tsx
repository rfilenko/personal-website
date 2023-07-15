import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className} bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50`}
      >
        <Providers>
          <main className="relative flex flex-col items-center justify-center w-full h-full overflow-hidden bg-gradient-to-r from-gray-850 to-gray-900 ">
            {/* <main className="max-w-5xl mx-auto relative p-4 sm:p-8 lg:p-16 lg:pt-2 overflow-hidden"> */}
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}