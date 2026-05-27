import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Featured from "@/components/Featured";
import Promo from "@/components/Promo";
import Footer from "@/components/Footer";
import ParticlesBackground from "@/components/ParticlesBackground";

const Index = () => {
  return (
    <main className="min-h-screen relative" style={{ background: "linear-gradient(135deg, #0d0520 0%, #0a0d2e 40%, #0f0520 70%, #080d25 100%)" }}>
      <ParticlesBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <Featured />
        <Promo />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
