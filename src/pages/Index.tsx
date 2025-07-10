import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Results from "@/components/Results";
import Team from "@/components/Team";
import Investors from "@/components/Investors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Problem />
        <Solution />
        <Results />
        <Team />
        <Investors />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
