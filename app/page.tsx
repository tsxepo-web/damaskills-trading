import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <Testimonials />
      <ContactSection />
    </>
  );
}
