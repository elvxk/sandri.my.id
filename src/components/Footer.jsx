import Logo from "../components/Logo";
const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden">
      <div className="bg_parallax bg-fixed h-full w-full absolute opacity-[40%] dark:opacity-[7%]"></div>
      <div className="flex flex-col py-4 container mx-auto justify-center items-center gap-2">
        <Logo className="fill-cdark z-10 dark:fill-cwhite hover:fill-cpink dark:hover:fill-ccyan transition-all" />
        <h1 className="font-squada z-10 text-sm lg:text-md text-cdark dark:text-cwhite flex flex-col justify-center items-center">
          MADE WITH LOVE ❤ 2024 BY ELVXK
          <p className="font-blinker text-cpink dark:text-ccyan">
            All Right Reserved
          </p>
        </h1>
      </div>
    </footer>
  );
};

export default Footer;
