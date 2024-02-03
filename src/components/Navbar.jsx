import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoCodeWorkingOutline,
  IoMailOutline,
} from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 bottom-0 z-20">
      <div className="container mx-auto">
        <div className="flex justify-between items-center bg-cbrown text-cdark rounded-xl m-4 p-3 shadow-lg px-10 lg:hidden border-cwhite border-2">
          <a
            href="#home"
            className="flex justify-center items-center flex-col gap-1 hover:scale-105 transition-all hover:text-cpink"
          >
            <IoHomeOutline className="text-xl" />
            <span className="text-xs">HOME</span>
          </a>
          <a
            href="#about"
            className="flex justify-center items-center flex-col gap-1 hover:scale-105 transition-all hover:text-cpink"
          >
            <IoNewspaperOutline className="text-xl" />
            <span className="text-xs">ABOUT</span>
          </a>
          <a
            href="#works"
            className="flex justify-center items-center flex-col gap-1 hover:scale-105 transition-all hover:text-cpink"
          >
            <IoCodeWorkingOutline className="text-xl" />
            <span className="text-xs">WORKS</span>
          </a>
          <a
            href="#contact"
            className="flex justify-center items-center flex-col gap-1 hover:scale-105 transition-all hover:text-cpink"
          >
            <IoMailOutline className="text-xl" />
            <span className="text-xs">CONTACT</span>
          </a>

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
