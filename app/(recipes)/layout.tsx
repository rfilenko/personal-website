import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import { Providers } from "@/app/components/Providers";

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
      <main className="recipe-layout max-w-5xl mx-auto relative p-4 sm:p-8 lg:p-16 lg:pt-2 overflow-hidden">
        {children}
      </main>
      <Footer />
    </Providers>
  );
}