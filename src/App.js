import logo from "./logo.svg";
import "./App.css";

import NavbarMenu from "./components";
import Hero from "./components/pages/hero";
import Skills from "./components/pages/skills";
import Project from "./components/pages/project";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import ParticlesComponent from "./components/pages/particle";

function App() {
  return (
    <div className="App">
      <NavbarMenu />
      {/* <ParticlesComponent /> */}
      <Hero />
      <Skills />
      <Project />
      <Contact />
      <About />
    </div>
  );
}

export default App;
