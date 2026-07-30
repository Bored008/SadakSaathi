import Navbar from "@/src/components/Navbar";
import Hero from "@/src/components/Hero";
import Problem from "@/src/components/Problem";
import Solution from "@/src/components/Solution";
import Features from "@/src/components/Features";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-neutral-900 selection:bg-[#FF5C22] selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Problem />
        <Solution />
        <Features />
      </main>
    </div>
  );
}

