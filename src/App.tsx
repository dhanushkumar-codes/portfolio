import "./App.css";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="portfolio">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Experience />

      <Education />

      <Contact />

      <Footer />
    </main>
  );
}

export default App;
