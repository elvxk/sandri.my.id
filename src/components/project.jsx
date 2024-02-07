import {
  SiBootstrap,
  SiCodeigniter,
  SiHtml5,
  SiJquery,
  SiLaravel,
  SiMysql,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";
import dinotro from "../assets/project/dinotrostore.webp";
import stxrp from "../assets/project/stxrp.webp";
import portfoliov2 from "../assets/project/portfoliov2.webp";
import portfoliov1 from "../assets/project/portfoliov1.webp";
import portfoliov3 from "../assets/project/portfoliov3.webp";
import pesenstudiomlg from "../assets/project/pesenstudiomlg.webp";

const project = [
  {
    title: "Dinotro Store",
    desc: "Landing page and company profile page for Dinotrostore. Dinotro Store is a marketplace providing the #1 best game top-up service in Indonesia, with the lowest prices and super instant process. Get more promos and discounts by joining as a Premium member/customer.",
    stack: [<SiReact name="React" />, <SiTailwindcss name="Tailwind" />],
    img: dinotro,
    demotext: "Demo",
    demo: "https://dinotrostore.vercel.app/",
  },
  {
    title: "Pesen Studio MLG",
    desc: "A website for booking music studios in Malang City by implementing geolocation and payment gateway.",
    stack: [
      <SiCodeigniter name="CodeIgniter" />,
      <SiBootstrap name="Bootstrap" />,
      <SiMysql name="Mysql" />,
    ],
    img: pesenstudiomlg,
    demotext: "Demo",
    demo: "https://sandri.vercel.app/",
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
    title: "Portfolio Purple Theme",
    desc: "This is my first portfolio website that I created using only HTML and the help of Tailwind to make it easier to create an interface",
    stack: [<SiHtml5 name="Html" />, <SiTailwindcss name="Tailwind" />],
    img: portfoliov1,
    demotext: "Demo",
    demo: "https://elvxk-portfoliov1.vercel.app/",
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
