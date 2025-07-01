import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className=" h-screen overflow-y-auto snap-y snap-proximity transition-all duration-1000" dir="ltr">
      <div className="div">
        <Hero /></div>
      <div className="div">
        <About />
      </div>
      <div className="div">
        <Projects />
      </div>
      <div className="div">
        <Contact />
      </div>
      <div className="div">
        <Footer />
      </div>
    </div>
  );
}
