import { useState } from "react";
import { IMG } from "./lib/data";
import BootScreen from "./components/BootScreen";
import Navbar from "./components/Navbar";
import Hero, { Ticker } from "./components/Hero";
import Particles from "./components/Particles";
import StatsBar from "./components/Stats";
import Cinematic from "./components/Cinematic";
import CursorFx from "./components/CursorFx";
import MusicPlayer from "./components/MusicPlayer";
import Trailer from "./components/Trailer";
import Features from "./components/Features";
import Starters from "./components/Starters";
import Region from "./components/Region";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-pine-950 text-ink antialiased">
      {/* fondo ambiental por capas */}
      <div className="bg-wash pointer-events-none fixed inset-0 z-0" aria-hidden />
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(52,211,153,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(52,211,153,0.045) 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
      />

      <Particles />

      {!booted && <BootScreen onDone={() => setBooted(true)} />}

      <div
        className={`relative z-10 transition-opacity duration-700 ${
          booted ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />
        <main>
          <Hero live={booted} />
          <Ticker />
          <StatsBar />
          <Trailer />
          <Features />
          <Starters />
          <Region />
          <Cinematic
            img={IMG.eaShot2}
            alt="Captura real del Early Access de Gamma Emerald"
            kicker="PRIMER TERCIO DE HOENN"
            title="¿LISTO PARA TU PRIMERA MEDALLA?"
          />
          <Download />
          <Faq />
        </main>
        <Footer />
      </div>

      {/* capas ambientales sutiles */}
      <div className="vignette pointer-events-none fixed inset-0 z-[71]" aria-hidden />
      <div className="noise-layer pointer-events-none fixed inset-0 z-[72] opacity-[0.04]" aria-hidden />

      <CursorFx />
      <MusicPlayer />
    </div>
  );
}
