import { Footer } from "@/components/Footer";
import { Intro } from "@/components/sections/Intro";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-bg focus:px-3 focus:py-2"
      >
        Перейти к содержимому
      </a>
      <main id="main" className="mx-auto w-full max-w-page px-5 sm:px-8">
        <Intro />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
