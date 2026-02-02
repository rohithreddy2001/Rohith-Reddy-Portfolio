import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Home } from "./components/Home";
import { Resume } from "./components/Resume";
import { Certifications } from "./components/Certifications";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
      <Navbar />

      <section id="home-section" className="min-h-screen">
        <Home />
      </section>

      <section id="about-section" className="min-h-screen">
        <About />
      </section>

      <section id="resume-section" className="min-h-screen">
        <Resume />
      </section>

      <section id="projects-section" className="min-h-screen">
        <Projects />
      </section>

      <section id="certifications-section" className="min-h-screen">
        <Certifications />
      </section>

      <section id="contact-section" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}
