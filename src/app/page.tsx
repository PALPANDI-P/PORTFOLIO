import { Navbar } from "@/components/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Internship } from "@/sections/Internship";
import { Education } from "@/sections/Education";
import { Activities } from "@/sections/Activities";
import { Projects } from "@/sections/Projects";
import { GithubSection } from "@/sections/Github";
import { LinkedinSection } from "@/sections/LinkedIn";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[var(--background)] selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Internship />
      <Education />
      <Activities />
      <Projects />
      <GithubSection />
      <LinkedinSection />
      <Contact />
      <Footer />
    </main>
  );
}
