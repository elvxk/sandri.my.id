import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import { Typewriter } from "react-simple-typewriter";
import { IoLocationOutline } from "react-icons/io5";

const About = () => {
  const [play, setPlay] = useState(false);
  document.addEventListener("aos:in:super", () => {
    setPlay(true);
  });
  return (
    <section id="about" className="min-h-screen">
      <div className="container mx-auto ">
        <div className="px-6 lg:px-[20vh] mt-14 flex flex-col gap-4 overflow-x-hidden">
          <h1
            data-aos="fade-left"
            data-aos-id="super"
            className="font-blinker font-bold text-2xl lg:text-4xl text-ccyan"
          >
            <RandomReveal
              isPlaying={play}
              duration={1.5}
              characters={["H", "i", " ", "the", "re"]}
              characterSet={["안", "녕", "하", "세", "요"]}
            />
            <Typewriter words="" cursor cursorStyle="_" />
          </h1>
          <p
            data-aos="fade-left"
            className="font-blinker text-cdark dark:text-cwhite text-md lg:text-xl text-justify"
          >
            My name is{" "}
            <span className="text-cpink font-bold">Pradipta R. Sandri</span>,
            and my nickname is{" "}
            <span className="text-cpink font-bold">elvxk</span> on several
            social media. I am a fresh graduate with a{" "}
            <span className="text-cpink font-bold">bachelor's degree</span> in
            informatics engineering, able to work individually or collaborate in
            a team. I have several skills that can be relied on in this era,
            such as web development,{" "}
            <span className="text-cpink font-bold">frontend development</span>,
            music production and others. I am interested in the IT industry with
            my focus on{" "}
            <span className="text-cpink font-bold">web development</span> and
            frontend development.
          </p>
          <a
            data-aos="fade-left"
            href="https://maps.app.goo.gl/kH4QZmN6W9Kry2Ly5"
            target="_blank"
            className="group relative items-center gap-1 font-blinker text-cwhite px-2 flex max-w-fit transition-all"
          >
            <IoLocationOutline className="group-hover:-rotate-12" />{" "}
            <span className="group-hover:-translate-x-1 transition-all">
              Tulungagung, Indonesia
            </span>
            <span className="bg-cpink h-full w-full start-0 absolute transition-all -z-20"></span>
            <span className="bg-ccyan h-full w-0 group-hover:w-full start-0 absolute transition-all -z-10"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
