/* eslint-disable react/jsx-key */
import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
  SiBootstrap,
  SiHtml5,
} from "react-icons/si";
import dinotro from "../assets/project/dinotrostore.webp";
import portfoliov2 from "../assets/project/portfoliov2.webp";
import muminime from "../assets/project/muminime.webp";
import pesenstudiomlg from "../assets/project/pesenstudiomlg.webp";
import lytgadget from "../assets/project/lytgadget.webp";
import strikersix from "../assets/project/stxrp.webp";

const project = [
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
    title: "LYT Gadget",
    desc: "website for LYT Gadget to check ready stock with internal API for connect database",
    stack: [
      <SiNextdotjs name="NextJs" />,
      <SiPostgresql name="Postgresql" />,
      <SiReact name="React" />,
      <SiTailwindcss name="Tailwind" />,
    ],
    img: lytgadget,
    demotext: "Demo",
    demo: "https://lytgadget.vercel.app/",
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
    title: "Striker Six Roleplay",
    desc: "Landing page for Striker Six Roleplay. Striker Six Roleplay is a multiplayer roleplaying game that allows you to play as a player or as a spectator in a multiplayer roleplaying game.",
    stack: [<SiHtml5 name="HTML" />, <SiBootstrap name="Bootstrap" />],
    img: strikersix,
    demotext: "Demo",
    demo: "https://strikersix.vercel.app/",
  },
  {
    title: "Pesen Studio MLG",
    desc: "Website platform for booking Music Studio in Malang.",
    stack: [<SiBootstrap name="Bootstrap" />, <SiLaravel name="Laravel" />],
    img: pesenstudiomlg,
    demotext: "Demo",
    demo: "https://pesenstudio.sandri.my.id/",
  },
];

export default project;
