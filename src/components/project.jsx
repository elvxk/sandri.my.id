import {
  SiBootstrap,
  SiHtml5,
  SiJquery,
  SiLaravel,
  SiReact,
  SiSpotify,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import dinotro from "../assets/project/dinotrostore.webp";
import stxrp from "../assets/project/stxrp.webp";
import portfoliov2 from "../assets/project/portfoliov2.webp";
import portfoliov3 from "../assets/project/portfoliov3.webp";
import boardtify from "../assets/project/boardtify.webp";
import muminime from "../assets/project/muminime.webp";

const project = [
  {
    title: "Boardtify",
    desc: "Boardtify is an application using the spotify API to get top tracks",
    stack: [
      <SiReact name="React" />,
      <SiTailwindcss name="Tailwind" />,
      <SiSpotify name="Spotify API" />,
    ],
    img: boardtify,
    demotext: "Demo",
    demo: "https://boardtify.vercel.app/",
  },
  {
    title: "Muminime",
    desc: "a website to view some anime and manga information taken from the public API. Can add to the collection list on your profile",
    stack: [
      <SiNextdotjs name="NextJs" />,
      <SiPostgresql name="Postgresql" />,
      <SiReact name="React" />,
      <SiTailwindcss name="Tailwind" />,
    ],
    img: muminime,
    demotext: "Demo",
    demo: "https://my-muminime.vercel.app/",
  },
  {
    title: "Dinotro Store",
    desc: "Landing page and company profile page for Dinotrostore. Dinotro Store is a marketplace providing the #1 best game top-up service in Indonesia, with the lowest prices and super instant process. Get more promos and discounts by joining as a Premium member/customer.",
    stack: [<SiReact name="React" />, <SiTailwindcss name="Tailwind" />],
    img: dinotro,
    demotext: "Demo",
    demo: "https://dinotrostore.vercel.app/",
  },

  {
    title: "Current Portfolio",
    desc: "This is my portfolio website that I created using React and Tailwind. The one you are now visiting",
    stack: [<SiReact name="React" />, <SiTailwindcss name="Tailwind" />],
    img: portfoliov3,
    demotext: "Current Web",
    demo: "https://sandri.vercel.app/",
  },

  {
    title: "Portfolio RDR Theme",
    desc: "This is my portfolio website that I created using Laravel and React plus Tailwind with the RDR theme",
    stack: [
      <SiReact name="React" />,
      <SiTailwindcss name="Tailwind" />,
      <SiLaravel name="Laravel" />,
    ],
    img: portfoliov2,
    demotext: "Demo",
    demo: "https://elvxk-portfoliov2.vercel.app/",
  },
  {
    title: "Strikersix Roleplay",
    desc: "A GTA V roleplay server for FiveM. created using the QB-Core framework. and the website for the server, contains server information, donations, connect server etc.",
    stack: [
      <SiHtml5 name="Html" />,
      <SiBootstrap name="Bootstrap" />,
      <SiJquery name="Jquery" />,
    ],
    img: stxrp,
    demotext: "Demo",
    demo: "https://strikersix.vercel.app/",
  },
];

export default project;
