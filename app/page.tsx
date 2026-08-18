import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import Solution from "@/src/components/Solution";
import Faq from "@/src/components/Faq";
import Footer from "@/src/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-neutral-900 selection:bg-[#FF5C22] selection:text-white">
      <Navbar />
      <main className="flex-1 flex flex-col gap-16 md:gap-24 lg:gap-[104px]">
        <Hero />
        <Problem />
        <Solution />
        <Faq />
        <Footer />
      </main>
    </div>
  );
}

