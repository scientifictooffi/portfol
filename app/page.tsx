import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { HeroEditorial } from "@/components/sections/HeroEditorial";
// Variant B alternative — swap the import + usage below:
// import { HeroTerminal } from "@/components/sections/HeroTerminal";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      {/* Skip link — first focusable element (a11y) */}
      <a
        href="#main"
        className="sr-only rounded bg-accent px-4 py-2 text-accent-contrast focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
      >
        Перейти к содержимому
      </a>

      <Nav />

      <main id="main">
        <HeroEditorial />
        {/* <HeroTerminal /> */}
        <Projects />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
