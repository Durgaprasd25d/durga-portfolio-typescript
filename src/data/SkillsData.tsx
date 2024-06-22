import { FaReact, FaNodeJs, FaHtml5, FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import {
  SiRedux,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiPostman,
  SiBootstrap,
  // SiMaterialUi ,
  SiPwa,
  SiElectron,
} from "react-icons/si";
import { AiFillAndroid } from "react-icons/ai";
import { ImGit } from "react-icons/im";

interface SkillsType {
  name: string;
  icon: any;
  link: string;
}

export const SkillsData: SkillsType[] = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#000000dc" />,
    link: "https://www.w3schools.com/html/",
  },
  {
    name: "CSS",
    icon: <SiCss3 color="#000000dc" />,
    link: "https://www.w3schools.com/css/",
  },
  {
    name: "SASS",
    icon: <FaSass color="#000000dc" />,
    link: "https://sass-lang.com/",
  },
  {
    name: "Tailwind",
    icon: <SiTailwindcss color="#000000dc" />,
    link: "https://tailwindcss.com/",
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript color="#000000dc" />,
    link: "https://www.javascript.com/",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript color="#000000dc" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "React",
    icon: <FaReact color="#000000dc" />,
    link: "https://reactjs.org/",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs color="#000000dc" />,
    link: "https://nextjs.org/",
  },
  {
    name: "Redux",
    icon: <SiRedux color="#000000dc" />,
    link: "https://redux.js.org/",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs color="#000000dc" />,
    link: "https://nodejs.org/",
  },
  {
    name: "GraphQL",
    icon: <GrGraphQl color="#000000dc" />,
    link: "https://graphql.org/",
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#000000dc" />,
    link: "https://expressjs.com/",
  },
  {
    name: "Mongodb",
    icon: <SiMongodb color="#000000dc" />,
    link: "https://www.mongodb.com/",
  },
  {
    name: "Git",
    icon: <ImGit color="#000000dc" />,
    link: "https://git-scm.com/",
  },
  {
    name: "Postman",
    icon: <SiPostman color="#000000dc" />,
    link: "https://www.postman.com/",
  },
];
