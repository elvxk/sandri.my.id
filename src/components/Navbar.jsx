import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";
import { useState } from "react";

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      <nav
        data-aos="fade-down"
        className={`fixed right-0 left-0 z-30 transition-all dark:bg-cdark rounded-b-2xl container mx-auto bg-cbrown shadow-md`}
      >
        <div className="flex justify-between items-center text-cdark px-4 py-2">
          <div className="flex justify-center items-center gap-10">
            <a href="#home" className="flex items-center justify-center">
              <Logo className="fill-cdark dark:fill-cwhite hover:-rotate-12 hover:scale-105 transition-all " />
              <h1 className="font-squada text-cdark dark:text-cwhite text-xl hover:scale-105 transition-all">
                PRADIPTA R. SANDRI
              </h1>
            </a>
            <div className="hidden lg:flex text-lg justify-center items-center gap-4 font-blinker text-cdark dark:text-cwhite">
              <a
                href="#home"
                onClick={() => setMenuOpened(!menuOpened)}
                className="cursor-pointer hover:scale-110 transition-all px-2 hover:text-cwhite hover:bg-cpink"
              >
                Home
              </a>
              <a
                href="#about"
                onClick={() => setMenuOpened(!menuOpened)}
                className="cursor-pointer hover:scale-110 transition-all px-2 hover:text-cwhite hover:bg-cpink"
              >
                About
              </a>
              <a
                href="#works"
                onClick={() => setMenuOpened(!menuOpened)}
                className="cursor-pointer hover:scale-110 transition-all px-2 hover:text-cwhite hover:bg-cpink"
              >
                Works
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpened(!menuOpened)}
                className="cursor-pointer hover:scale-110 transition-all px-2 hover:text-cwhite hover:bg-cpink"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="hover:-rotate-12 hover:scale-105 transition-all">
              <ThemeSwitcher />
            </div>
            <div className="flex justify-center items-center scale-75 lg:hidden">
              <button
                onClick={() => setMenuOpened(!menuOpened)}
                className=" w-11 h-11 p-3 rounded-full hover:scale-105 hover:rotate-12 transition-all hover:bg-cpink"
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
        className={`doodlenav font-squada text-cdark dark:text-cwhite text-4xl gap-2 lg:hidden fixed flex flex-col h-screen w-full bg-cbrown dark:bg-cdark z-10 justify-center items-center transition-all
        ${menuOpened ? "right-0" : "-right-[100%]"}`}
      >
        <a
          href="#home"
          onClick={() => setMenuOpened(!menuOpened)}
          className="scale-[200%] cursor-pointer hover:scale-[220%] hover:rotate-12  transition-all fill-cpink "
        >
          <Logo />
        </a>
        <a
          href="#home"
          onClick={() => setMenuOpened(!menuOpened)}
          className="mt-20 cursor-pointer hover:scale-110 transition-all hover:text-cpink"
        >
          HOME
        </a>
        <a
          href="#about"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink"
        >
          ABOUT
        </a>
        <a
          href="#works"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink"
        >
          WORKS
        </a>
        <a
          href="#contact"
          onClick={() => setMenuOpened(!menuOpened)}
          className="cursor-pointer hover:scale-110 transition-all hover:text-cpink"
        >
          CONTACT
        </a>

        <a
          href="#contact"
          onClick={() => setMenuOpened(!menuOpened)}
          className="mt-20 text-cpink font-blinker text-sm font-bold cursor-pointer transition-all hover:scale-95"
        >
          www.sandri.my.id
        </a>
      </div>
    </>
  );
};

export default Navbar;
