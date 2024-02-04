import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Works from "./components/Works";
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
      <Navbar />
      <Home />
      <About />
      <Works />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
