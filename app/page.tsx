import Hero from "@/components/Hero";
import About from "@/components/About";
import Project from "@/components/Project";

export default function Home() {
  return (
    <main className="px-3">
      <Hero/>
      <About/>
      <Project/>
    </main>
  )
}
