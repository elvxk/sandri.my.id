import {
  IoHomeOutline,
  IoNewspaperOutline,
  IoCodeWorkingOutline,
  IoMailOutline,
} from "react-icons/io5";
import ThemeSwitcher from "./ThemeSwitcher";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav className="fixed right-0 left-0 z-30 bg-cbrown dark:bg-cdark transition-all">
      <div className="container mx-auto">
        <div className="flex justify-between items-center text-cdark px-4 py-2">
          <Logo className="fill-cdark dark:fill-cwhite" />
          {/* <a
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
          </a> */}

          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
