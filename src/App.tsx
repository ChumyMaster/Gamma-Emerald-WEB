import { useState } from "react";
import BootScreen from "./components/BootScreen";
import Navbar from "./components/Navbar";
import Hero, { Ticker } from "./components/Hero";
import Trailer from "./components/Trailer";
import Features from "./components/Features";
import Pokedex from "./components/Pokedex";
import Region from "./components/Region";
import Download from "./components/Download";
import Faq from "./components/Faq";
import Footer from "./components/Footer";

export default function App() {
  const [booted, setBooted] = useState(false);

  return (
    <div className="relative min-h-screen bg-pine-950 text-ink antialiased">
      {/* rejilla ambiental de fondo */}
      <div
        className="pointer-events-none fixed inset-0 z-0"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(rgba(93,255,143,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(93,255,143,0.04) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />

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
          <Trailer />
          <Features />
          <Pokedex />
          <Region />
          <Download />
          <Faq />
        </main>
        <Footer />
      </div>

      {/* capas CRT */}
      <div className="scanlines pointer-events-none fixed inset-0 z-[70]" aria-hidden />
      <div className="vignette pointer-events-none fixed inset-0 z-[71]" aria-hidden />
      <div className="noise-layer pointer-events-none fixed inset-0 z-[72] opacity-[0.05]" aria-hidden />
    </div>
  );
}
