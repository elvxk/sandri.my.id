import { useState } from "react";
import { RandomReveal } from "react-random-reveal";
import { Typewriter } from "react-simple-typewriter";
import { IoLocationOutline } from "react-icons/io5";
import profile from "../assets/profile.webp";
import stack from "../assets/stack/stack";
import cv from "../assets/cv.pdf";
import { IoDocumentTextOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const About = () => {
  const [play, setPlay] = useState(false);
  document.addEventListener("aos:in:super", () => {
    setPlay(true);
  });
  return (
    <section id="about" className="min-h-screen">
      <div className="container mx-auto">
        <div className="px-6 lg:px-[20vh] py-20 flex flex-col gap-4 overflow-hidden">
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
          <div className="flex flex-col lg:flex-row justify-between items-center gap-14 lg:gap-4 mt-20 right-0 w-full">
            <div className="w-full flex flex-col items-center lg:items-end max-w-screen-sm">
              <h1
                data-aos="fade-up"
                className="font-blinker font-bold text-2xl text-ccyan"
              >
                My Skill Are
                <Typewriter words="" cursor cursorStyle="/" />
              </h1>
              <p
                data-aos="fade-up"
                className="font-blinker text-cdark dark:text-cwhite lg:text-xl"
              >
                Here are some of the tech I use
              </p>
              <div className="flex flex-wrap gap-4 my-10 lg:my-6 items-center justify-center lg:justify-end">
                {stack.map((data, i) => {
                  return (
                    <div
                      key={i}
                      data-aos="zoom-in"
                      data-aos-delay={i * 100}
                      className="group"
                    >
                      <img
                        src={data}
                        alt={`stack ${i}`}
                        className="h-12 aspect-square group-hover:scale-[110%] group-hover:rotate-12 transition-all"
                      />
                    </div>
                  );
                })}
              </div>
              <div
                data-aos="fade-right"
                className="flex flex-col gap-2 justify-center items-center lg:flex-row lg:gap-4 mt-2"
              >
                <a
                  href={cv}
                  className="border-2 group relative items-center gap-1 font-blinker text-cwhite px-4 py-2 flex max-w-fit transition-all"
                >
                  <span className="group-hover:-translate-x-1 transition-all">
                    Download CV
                  </span>
                  <IoDocumentTextOutline className="group-hover:-rotate-12" />
                  <span className="bg-cpink dark:bg-ccyan h-full w-full start-0 absolute transition-all -z-20"></span>
                  <span className="bg-ccyan dark:bg-cpink h-full w-0 group-hover:w-full start-0 absolute transition-all -z-10"></span>
                </a>
                <a
                  href="https://www.linkedin.com/in/elvxk/"
                  target="_blank"
                  className="font-blinker text-cpink dark:text-ccyan text-lg flex gap-1 items-center justify-center lg:order-first hover:text-ccyan transition-all dark:hover:text-cpink"
                >
                  <FaLinkedin />
                  Linkedin
                </a>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-2 lg:order-first mx-6 cursor-default">
              <div className="relative items-center justify-center flex h-full max-w-[300px] group gap-2 flex-col">
                <div className="absolute -right-5 -top-6 lg:-left-3 text-5xl font-korean text-cpink/25 dark:text-ccyan/20 group-hover:-translate-y-2 transition-all">
                  <h1 data-aos="fade-up" data-aos-duration={1000}>
                    프<br />라<br />딥<br />타
                  </h1>
                </div>
                <div className="absolute -right-5 -top-5 lg:-left-5 text-4xl font-korean text-cdark dark:text-cwhite group-hover:translate-y-4 transition-all">
                  <h1 data-aos="fade-down">
                    프<br />라<br />딥<br />타
                  </h1>
                </div>
                <div className="rounded-xl aspect-square w-[200px] lg:w-full max-w-[600px] -z-10 group-hover:scale-105 group-hover:rotate-6 lg:group-hover:-rotate-6 transition-all">
                  <img
                    data-aos="fade-up"
                    src={profile}
                    alt="Profile"
                    className="rounded-xl"
                  />
                </div>
                <div className="lg:group-hover:translate-x-10 group-hover:-translate-x-10 transition-all">
                  <h1
                    data-aos="fade-up"
                    className="font-blinker font-bold text-xl lg:text-2xl lg:text-center text-ccyan"
                  >
                    Its me
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
