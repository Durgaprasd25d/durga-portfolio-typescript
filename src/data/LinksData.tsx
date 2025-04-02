import { ImGithub, ImLinkedin } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import cv from "../assets/DurgaprasadDalai.pdf";

interface LinksType {
  title: string;
  icon: any;
  link: string;
  handleDownload?: () => void;
}

export const LinksData: LinksType[] = [
  {
    title: "GitHub",
    icon: <ImGithub color="#000000dc" />,
    link: "https://github.com/Durgaprasd25d/",
  },
  {
    title: "LinkedIn",
    icon: <ImLinkedin color="#000000dc" />,
    link: "https://www.linkedin.com/in/durga-prasad-dalai-6a596723b/",
  },
  {
    title: "CV",
    icon: <CgProfile color="#000000dc" />,
    link: "",
    handleDownload: () => {
      const link = document.createElement("a");
      link.href = cv;
      link.setAttribute("download", "Durga_resume.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  },
];
