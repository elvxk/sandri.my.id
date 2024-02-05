import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { useCallback, useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const [nav, setNav] = useState("home");
  const [isHide, setIsHide] = useState(false);
  const [y, setY] = useState(document.scrollingElement.scrollHeight);
  const handleNavigation = useCallback(
    (e) => {
      if (y > window.scrollY) {
        setIsHide(false);
      } else if (y < window.scrollY) {
        setIsHide(true);
      }
      setY(window.scrollY);
    },
    [y]
  );
  useEffect(() => {
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

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
        // className={`fixed right-0 left-0 z-30 transition-all rounded-b-2xl container mx-auto bg-cbrown dark:bg-cdark shadow-md`}
        className={`fixed right-0 left-0 z-30 ${
          isHide ? "-top-80" : "top-0"
        } transition-all`}
      >
        <div
          className="flex justify-between items-center text-cdark px-4 py-2 transition-all rounded-b-2xl container mx-auto bg-cwhite/50 dark:bg-cdark/50 "
          data-aos="fade-down"
          data-aos-delay="400"
        >
          <a href="#home" className="flex items-center justify-center">
            <Logo className="fill-cdark dark:fill-cwhite hover:-rotate-12 hover:scale-105 transition-all " />
          </a>
          <div className="flex items-center justify-between">
            <div className="hover:-rotate-12 hover:scale-105 transition-all justify-center items-center flex">
              <ThemeSwitcher className="text-cdark dark:text-cwhite" />
            </div>
            <div className="flex justify-center items-center scale-75 lg:hidden">
              <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" w-11 h-11 p-3 rounded-full hover:scale-105 transition-all"
              >
                <div
                  className={`bg-cdark dark:bg-cwhite h-1 w-full transition-all rounded-full ${
                    menuOpened ? "rotate-45 translate-y-0.5" : ""
                  }`}
                />
                <div
                  className={`bg-cdark dark:bg-cwhite my-1 h-1 w-full transition-all rounded-full ${
                    menuOpened ? "hidden" : ""
                  }`}
                />
                <div
                  className={`bg-cdark dark:bg-cwhite h-1 w-full transition-all rounded-full ${
                    menuOpened ? "-rotate-45 -translate-y-0.5" : ""
                  }`}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`doodlenav font-blinker font-bold text-cdark dark:text-cwhite text-xl gap-2 lg:hidden fixed flex flex-col h-screen w-full bg-cbrown dark:bg-cdark z-10 justify-center items-center transition-all
        ${menuOpened ? "right-0" : "-right-[100%]"}`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpened(!menuOpened)}
          className="scale-[180%] cursor-pointer hover:scale-[190%] hover:rotate-12  transition-all fill-cpink dark:fill-ccyan"
        >
          <Logo />
        </a>
        <a
          href="#home"
          onClick={() => setMenuOpened(!menuOpened)}
          className="mt-20 cursor-pointer hover:scale-110 transition-all hover:text-cpink dark:hover:text-ccyan"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink dark:hover:text-ccyan"
        >
          About
        </a>
        <a
          href="#projects"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink dark:hover:text-ccyan"
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink dark:hover:text-ccyan"
        >
          Contact
        </a>
        <div className="flex justify-between gap-4 mt-20 items-center text-xl text-cdark dark:text-cwhite">
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
        <a
          href="https://sandri.my.id"
          target="_blank"
          className=" text-cwhite bg-cpink dark:bg-ccyan px-2 font-blinker text-sm cursor-pointer transition-all hover:scale-95"
        >
          www.sandri.my.id
        </a>
      </div>
    </>
  );
};

export default Navbar;
