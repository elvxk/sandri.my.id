/* eslint-disable react/prop-types */
import { IoOpenOutline } from "react-icons/io5";
import iconMap from "../libs/iconMap";

const ProjectCard = ({ title, desc, img, stack, demo }) => {
  const stackArray = stack.split(",").map((stack) => stack.trim());

  const stackIcons = stackArray.map((stack) => ({
    name: stack,
    icon: iconMap[stack] || <span>?</span>, // Tampilkan '?' jika icon tidak ditemukan
  }));

  console.log(stackIcons);

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
        <div className="flex flex-col">
          <h1 className="font-blinker text-2xl font-bold text-cdark dark:text-cwhite items-center">
            {title}
          </h1>
          <p className="font-blinker text-justify text-cdark dark:text-cwhite">
            {desc}
          </p>
        </div>
        <div className="flex items-center my-2">
          {stackIcons.map((s, i) => {
            return (
              <span
                key={i}
                className="text-sm px-1 flex items-center text-cpink dark:text-ccyan"
              >
                {s.icon}
              </span>
            );
          })}
        </div>
        <a
          target="_blank"
          href={demo}
          className="group cursor-pointer relative overflow-hidden text-cwhite px-2 py-1 text-center flex justify-center items-center gap-2"
          rel="noreferrer"
        >
          Demo <IoOpenOutline />
          <span className="absolute h-full bg-ccyan dark:bg-cpink w-full -translate-x-[100%] group-hover:translate-x-0 transition-all -z-10" />
          <span className="absolute h-full bg-cpink dark:bg-ccyan w-full -z-20" />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
