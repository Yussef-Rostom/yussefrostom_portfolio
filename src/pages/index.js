import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yussef Rostom | Software Engineer</title>
        <meta name="description" content="Portfolio of Yussef Rostom - Software Engineer specializing in C++, Python, and Competitive Programming" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Add a wrapper for the modern background effect */}
      <main className="min-h-screen relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </>
  );
}