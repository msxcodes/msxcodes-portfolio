import React from "react";
import HeroContent from "./hero-context";

const Hero = () => {
  return (
    <section className="relative flex flex-col h-full w-full " id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-170px] md:top-[-340px] opacity-60  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </section>
  );
};

export default Hero;
