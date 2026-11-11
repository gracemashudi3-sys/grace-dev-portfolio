import { About } from "../components/sections/About";
import { Contact } from "../components/sections/Contact";
import { Hero } from "../components/sections/Hero";
import { Process } from "../components/sections/Process";
import { Services } from "../components/sections/Services";
import { Skills } from "../components/sections/Skills";
import { Work } from "../components/sections/Work";

export function HomePage() {
  return (
    <main id="content">
      <Hero />
      <About />
      <Process />
      <Skills />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
