import Image from "next/image";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Why_Choose from "@/components/Why_Choose";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Why_Choose />
    </main>
  );
}
