import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Providers } from "@/app/components/Providers";
import { ScrollTopButton } from "../components/ScrollTopButton";

export const metadata = {
  title: "HomeApp",
  description: "Simple usefull HomeApp",
};

export default function RecipeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Navbar />
      <main className="bg-white text-black dark:bg-gray-900 dark:selection:bg-gray-900 dark:text-white h-full selection:bg-gray-50 recipe-layout max-w-5xl mx-auto relative p-4 sm:p-8 lg:p-16 lg:pt-2 overflow-hidden">
        {children}
        <div className="absolute right-2 md:right-16 bottom-0 w-[60px]">
          <ScrollTopButton />
        </div>
      </main>
      <Footer />
    </Providers>
  );
}