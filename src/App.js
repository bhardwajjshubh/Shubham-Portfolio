import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Experience />
      <About />
      <Education />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
