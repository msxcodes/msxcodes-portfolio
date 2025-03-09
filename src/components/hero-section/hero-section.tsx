import React from "react";
import HeroContent from "./hero-context";

const Hero = () => {
  return (
    <section
      className="relative py-16 md:py-0 flex flex-col min-h-screen w-full overflow-hidden"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute 
          top-[-150px] sm:top-[-150px] md:top-[-250px] lg:top-[-350px] xl:top-[-400px]
          opacity-40 h-[35%] md:w-full md:h-full object-cover z-50"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
