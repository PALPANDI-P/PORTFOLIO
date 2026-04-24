import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Activities } from "@/sections/Activities";
import { Projects } from "@/sections/Projects";
import { GithubSection } from "@/sections/Github";
import { LinkedinSection } from "@/sections/LinkedIn";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-primary/30">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Activities />
      <Projects />
      <GithubSection />
      <LinkedinSection />
      <Contact />
      <Footer />
    </main>
  );
}
