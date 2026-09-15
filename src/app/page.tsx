import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Results from "@/components/sections/Results";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import UGCGallery from "@/components/sections/UGCGallery";
import ValueProps from "@/components/ValueProps";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Hero />
      <UGCGallery />
      <Services />
      <Results />
      <Process />
      <Testimonials />
      <ValueProps />
      <Pricing />
      <FAQ />
      <Contact />
    </main>
  );
}
