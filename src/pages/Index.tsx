import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Roles from "@/components/Roles";
import Portfolio from "@/components/Portfolio";
import NWACompany from "@/components/NWACompany";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section id="home">
          <Hero />
        </section>
        <About />
        <Roles />
        <Portfolio />
        <NWACompany />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
