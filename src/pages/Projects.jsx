/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    fetch("https://api.sandri.my.id/projects", { method: "POST" })
      .then((res) => res.json())
      .then(({ data }) => setProjects(data));
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="opacity-[20%]">
        <div data-aos="fade-down">
          <div className="absolute font-korean text-8xl right-24  px-6 lg:px-[20vh] py-20 scale-150 top-10 text-cpink dark:text-ccyan opacity-50">
            key 프<br />로<br />젝<br />트
          </div>
        </div>
        <div data-aos="fade-up">
          <div className="absolute font-korean text-8xl right-20  px-6 lg:px-[20vh] py-20 text-cdark dark:text-cwhite">
            프<br />로<br />젝<br />트
          </div>
        </div>
        <div className="absolute font-korean text-8xl left-20  px-6 lg:px-[20vh] py-20 scale-150 bottom-10 text-cpink dark:text-ccyan opacity-50">
          웹<br />사<br />이<br />트
        </div>
        <div className="absolute font-korean text-8xl left-32 bottom-0  px-6 lg:px-[20vh] py-20 text-cdark dark:text-cwhite">
          웹<br />사<br />이<br />트
        </div>
      </div>
      <div className="bg_parallax bg-fixed h-full w-full absolute opacity-[40%] dark:opacity-[7%]"></div>
      <div className="container mx-auto  px-6 lg:px-[20vh] py-20 flex flex-col items-center overflow-hidden">
        <h1
          data-aos="fade-up"
          className="z-[7] mb-5 text-4xl font-bold font-blinker text-ccyan"
        >
          Web Dev Projects
        </h1>
        <div className="columns-1 md:columns-2  xl:columns-3 overflow-hidden">
          {projects &&
            projects.map((data, i) => {
              return (
                <div key={i} className="py-2" data-aos="zoom-in">
                  <ProjectCard
                    title={data.title}
                    desc={data.desc}
                    img={data.image}
                    stack={data.stack}
                    demo={data.demo}
                  />
                </div>
              );
            })}
        </div>
        <a
          href="https://github.com/elvxk"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          className="z-[7] mt-10 text-md font-bold font-blinker text-ccyan"
        >
          See more projects on GitHub {">"}
        </a>
        <h1
          data-aos="fade-up"
          className="z-[7] mb-5 mt-20 text-4xl font-bold font-blinker text-ccyan"
        >
          Music Prod Projects
        </h1>
        <iframe
          className="z-[7]"
          width="95%"
          height="400"
          scrolling="no"
          frameBorder="no"
          data-aos="fade-up"
          allow="autoplay"
          src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1546494838&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ></iframe>
        <a
          href="https://soundcloud.com/elvxk"
          target="_blank"
          rel="noreferrer"
          data-aos="fade-up"
          className="z-[7] mt-10 text-md font-bold font-blinker text-ccyan"
        >
          See more projects on Soundcloud {">"}
        </a>
      </div>
    </section>
  );
};

export default Projects;
