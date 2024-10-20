/* eslint-disable react/prop-types */
import { IoOpenOutline } from "react-icons/io5";
import content from "../components/project";
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative min-h-screen w-full overflow-hidden"
    >
      <div className="opacity-[20%]">
        <div data-aos="fade-down">
          <div className="absolute font-korean text-8xl right-24  px-6 lg:px-[20vh] py-20 scale-150 top-10 text-cpink dark:text-ccyan opacity-50">
            프<br />로<br />젝<br />트
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
          {content.map((data, i) => {
            return (
              <div key={i} className="py-2" data-aos="zoom-in">
                <Cards
                  title={data.title}
                  desc={data.desc}
                  img={data.img}
                  stack={data.stack}
                  demo={data.demo}
                  text={data.demotext}
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

const Cards = ({ title, desc, img, stack, demo, text }) => {
  return (
    <div className="relative hover:scale-95 transition-all w-full border-4 border-cdark dark:border-cwhite flex flex-col shadow-lg overflow-hidden">
      <div className="bg-cbrown dark:bg-cdark w-full h-full absolute -z-20"></div>
      <div className="w-full h-full overflow-hidden self-center group mb-4 border-8 border-cbrown dark:border-cdark">
        <img
          className="object-cover object-center h-full w-full transition-all group-hover:scale-[105%] duration-500"
          src={img}
        />
      </div>
      <div className="px-4 pb-4 gap-2 flex flex-col">
        <div className="flex gap-2 items-center ">
          {stack.map((s, i) => {
            const name = s.props;
            return (
              <span
                key={i}
                className="text-xs border-2 px-1 flex items-center gap-1 text-cpink dark:text-ccyan"
              >
                {s}
                {s.props && name.name}
              </span>
            );
          })}
        </div>
        <div className="flex flex-col my-2">
          <h1 className="font-blinker text-2xl font-bold text-cdark dark:text-cwhite items-center">
            {title}
          </h1>
          <p className="font-blinker text-justify text-cdark dark:text-cwhite">
            {desc}
          </p>
        </div>
        <a
          target="_blank"
          href={demo}
          className="group cursor-pointer relative overflow-hidden text-cwhite px-2 py-1 text-center flex justify-center items-center gap-2"
          rel="noreferrer"
        >
          {text} <IoOpenOutline />
          <span className="absolute h-full bg-ccyan dark:bg-cpink w-full -translate-x-[100%] group-hover:translate-x-0 transition-all -z-10" />
          <span className="absolute h-full bg-cpink dark:bg-ccyan w-full -z-20" />
        </a>
      </div>
    </div>
  );
};
export default Projects;
