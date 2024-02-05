import { useEffect } from "react";

import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  window.addEventListener("hashchange", (e) => {
    history.replaceState({}, "", location.href.replace(location.hash, ""));
  });
  return (
    <>
      <SideNav />
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
