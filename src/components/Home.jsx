import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import hero from "../assets/parallax/hero.webp";
import metal from "../assets/parallax/metal.webp";
import doodle from "../assets/parallax/doodle.webp";

const Home = () => {
  const sceneEl = useRef(null);
  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current);
    parallaxInstance.enable();
    return () => parallaxInstance.disable();
  }, []);
  return (
    <section id="home" ref={sceneEl} className="h-screen overflow-hidden">
      <div data-depth="0.1" className="relative h-full w-full">
        <div className="bg_parallax absolute w-[150%] h-[110%] -top-20 -left-20" />
      </div>
      <div data-depth="-0.1" className="relative h-full w-full">
        <div className="doodle absolute w-[120%] h-[120%] -top-20 -left-20" />
      </div>
      <div data-depth="0.2" className="relative h-full w-full">
        <img
          src={metal}
          alt="PRS logo metal"
          className="h-[400px] aspect-square absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 lg:h-[720px]"
        />
      </div>
      <div data-depth="0.25" className="relative h-full w-full ">
        <h1 className="font-squada text-cpink absolute  top-10 text-4xl w-full text-center">
          PRADIPTA R. SANDRI
        </h1>
      </div>
      <div data-depth="0.5" className="relative h-full w-full ">
        <img
          src={hero}
          alt="HERO"
          className="absolute -bottom-20 left-1/2 -translate-x-1/2 aspect-auto h-[540px] lg:h-[720px]"
        />
      </div>
    </section>
  );
};

export default Home;
