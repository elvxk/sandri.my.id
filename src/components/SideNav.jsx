import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const SideNav = () => {
  const [nav, setNav] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    window.onscroll = () => {
      var current = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 60) {
          current = section.getAttribute("id");
          setNav(current);
        }
      });
      nav === current
        ? document.getElementById("nav" + nav).classList.add("active")
        : document.getElementById("nav" + nav).classList.remove("active");
    };
  });
  return (
    <>
      <nav
        className={`overfolw-x-hidden fixed left-12 top-14 bottom-14 hidden lg:flex flex-col gap-10 justify-between items-center z-30 transition-all`}
      >
        <div
          data-aos="fade-right"
          data-aos-delay="400"
          className="flex flex-col justify-between items-center gap-8"
        >
          <a href="#home">
            <Logo className="fill-cdark dark:fill-cwhite hover:-rotate-12 hover:scale-[175%] hover:fill-cpink dark:hover:fill-ccyan transition-all scale-[170%]" />
          </a>
          <div className="font-bold text-lg text-cdark dark:text-cwhite flex justify-center items-center gap-2 [writing-mode:vertical-lr] font-blinker">
            <a
              id="navhome"
              href="#home"
              className="rotate-180 group overflow-hidden relative transition-all py-4 hover:text-cwhite [&.active]:text-cwhite [&.active]:hover:translate-x-2 active"
            >
              Home
              <span
                className={`absolute group-hover:h-full w-full bg-cpink dark:bg-ccyan start-0 -z-10 transition-all ${
                  nav === "home" ? "h-full" : " h-0"
                }`}
              />
            </a>
            <a
              id="navabout"
              href="#about"
              className="rotate-180 group overflow-hidden relative transition-all py-4 hover:text-cwhite [&.active]:text-cwhite [&.active]:hover:translate-x-2"
            >
              About
              <span
                className={`absolute group-hover:h-full w-full bg-cpink dark:bg-ccyan start-0 -z-10 transition-all ${
                  nav === "about" ? "h-full" : " h-0"
                }`}
              />
            </a>
            <a
              id="navprojects"
              href="#projects"
              className="rotate-180 group overflow-hidden relative transition-all py-4 hover:text-cwhite [&.active]:text-cwhite [&.active]:hover:translate-x-2"
            >
              Projects
              <span
                className={`absolute group-hover:h-full w-full bg-cpink dark:bg-ccyan start-0 -z-10 transition-all ${
                  nav === "projects" ? "h-full" : " h-0"
                }`}
              />
            </a>
            <a
              id="navcontact"
              href="#contact"
              className="rotate-180 group overflow-hidden relative transition-all py-4 hover:text-cwhite [&.active]:text-cwhite [&.active]:hover:translate-x-2"
            >
              Contact
              <span
                className={`absolute group-hover:h-full w-full bg-cpink dark:bg-ccyan start-0 -z-10 transition-all ${
                  nav === "contact" ? "h-full" : " h-0"
                }`}
              />
            </a>
          </div>
        </div>
        <div
          data-aos="fade-right"
          className="flex flex-col justify-between gap-6 items-center text-xl text-cdark dark:text-cwhite"
        >
          <a
            href="https://instagram.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/elvxk"
            target="_blank"
            className="hover:text-cpink transition-all dark:hover:text-ccyan"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </nav>
      <nav
        className={`fixed right-12 top-14 bottom-14 hidden lg:flex flex-col gap-10 justify-between items-center z-30 transition-all`}
      >
        <div data-aos="fade-left" data-aos-delay="400">
          <ThemeSwitcher className="scale-150 hover:rotate-[20deg] transition-all text-cdark dark:text-cwhite hover:text-cpink dark:hover:text-ccyan" />
        </div>
      </nav>
    </>
  );
};

export default SideNav;
