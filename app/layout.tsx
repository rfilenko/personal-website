import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Providers } from "./components/Providers";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "HomeApp",
  description: "Simple usefull HomeApp",
};

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
          <Navbar />
          <main className="relative max-w-5xl mx-auto p-4 sm:p-8 lg:p-16">
            {children}
          </main>
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}