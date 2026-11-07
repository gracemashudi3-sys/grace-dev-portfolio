import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { SkipLink } from "./components/layout/SkipLink";
import { About } from "./components/sections/About";
import { Contact } from "./components/sections/Contact";
import { Hero } from "./components/sections/Hero";
import { Process } from "./components/sections/Process";
import { Services } from "./components/sections/Services";
import { Skills } from "./components/sections/Skills";
import { Work } from "./components/sections/Work";

export function App() {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="content">
        <Hero />
        <About />
        <Process />
        <Skills />
        <Services />
        <Work />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
