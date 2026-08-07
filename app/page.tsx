import Hero from "@/app/components/Hero";
import Services from "@/app/components/Services";
import Projects from "@/app/components/Projects";
import Testimonials from "@/app/components/Testimonials";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="bg-gray-900 py-12">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid grid-cols-2 gap-4 text-center md:grid-cols-4">
            <div>
              <p className="text-3xl font-bold text-amber-400">2016</p>
              <p className="text-sm text-gray-400">Established</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400">Level 1</p>
              <p className="text-sm text-gray-400">B-BBEE Contributor</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400">100%</p>
              <p className="text-sm text-gray-400">Black Ownership</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-400">✓</p>
              <p className="text-sm text-gray-400">Tax Compliant</p>
            </div>
          </div>
        </div>
      </section>
      <Services />
      <Projects />
      <Testimonials />
      <ContactSection />
    </>
  );
}
