import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Footer from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#0f1c32] flex flex-col">
      <Navbar />
      
      <div className="flex-grow">
        <Hero />
      </div>

      <Footer />
    </main>
  );
}