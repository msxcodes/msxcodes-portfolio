import React from "react";
import HeroContent from "./hero-context";

const Hero = () => {
  return (
    <section className="relative flex flex-col min-h-screen w-full overflow-hidden" id="about-me">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-[#120E16] z-10" />
        <video
          autoPlay
          muted
          loop
          className="rotate-180 w-full h-full object-cover scale-110"
        >
          <source src="/blackhole.webm" type="video/webm" />
        </video>
      </div>
      <HeroContent />
    </section>
  );
};

export default Hero;
