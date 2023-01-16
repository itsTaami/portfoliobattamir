import logo from "./logo.svg";
import "./App.css";

import NavbarMenu from "./components";
import Hero from "./components/pages/hero";
import Skills from "./components/pages/skills";
import Project from "./components/pages/project";
import Contact from "./components/pages/contact";
import About from "./components/pages/about";
import ParticlesComponent from "./components/pages/particle";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <ParticlesComponent />
      <NavbarMenu />

      <Routes>
        <Route path="/home" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
