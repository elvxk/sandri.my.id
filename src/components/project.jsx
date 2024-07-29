/* eslint-disable react/jsx-key */
import {
  SiLaravel,
  SiReact,
  SiTailwindcss,
  SiNextdotjs,
  SiPostgresql,
} from "react-icons/si";
import dinotro from "../assets/project/dinotrostore.webp";
import portfoliov2 from "../assets/project/portfoliov2.webp";
import muminime from "../assets/project/muminime.webp";

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
];

export default project;
