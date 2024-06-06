import { ImGithub, ImLinkedin } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";

interface LinksType {
  title: string;
  icon: any;
  link: string;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color='#000000dc' />,
    link: "https://github.com/Durgaprasd25d/",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color='#000000dc' />,
    link: "https://www.linkedin.com/in/durga-prasad-dalai-6a596723b/",
  }
  // {
  //   title: "Twitter",
  //   icon: <FaTwitter color='#000000dc' />,
  //   link: "",
  // },
  // {
  //   title: "Instagram",
  //   icon: <SiInstagram color='#000000dc' />,
  //   link: "",
  // },
];
