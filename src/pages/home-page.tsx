import React from "react";
import Hero from "@/components/hero-section/hero-section";
import Skills from "@/components/skills/skills-section";
import ContactUs from "@/components/contactus/contact-section";
import Projects from "@/components/projects/project-section";

export default function HomePage() {
  return (
    <div className=" w-screen mx-auto">
      <Hero />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}
