
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
};

export default Index;
