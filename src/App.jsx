import { useEffect, useState } from "react";

import SideNav from "./components/SideNav";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    AOS.init();
    // fetch("http://localhost:3000/projects?limit=6", { method: "GET" })
    fetch("https://api.sandri.my.id/projects?limit=6", { method: "GET" })
      .then((res) => res.json())
      .then(({ data }) => {
        setProjects(data);
      });
  }, []);

  // eslint-disable-next-line no-unused-vars
  window.addEventListener("hashchange", (e) => {
    history.replaceState({}, "", location.href.replace(location.hash, ""));
  });
  return (
    <>
      <SideNav />
      <Navbar />
      <Home />
      <About />
      <Projects data={projects} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
