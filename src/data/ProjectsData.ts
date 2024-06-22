import todoListImage from "../images/todoList.png";
import weatherCheckerImage from "../images/weather.png";
import paddhoAdmin from "../images/PaddhoAdmin.png";
import paddhoTeacher from "../images/PaddhoTeacher.png";
import paddhoStudent from "../images/PaddhoStudent.png";
import grtcAdmin from "../images/grtc-admin-2.png";
import jobApp from '../images/frontend1.png'

interface ProjectsType {
  title: string;
  description: string;
  image: string;
  GitHub: string;
  hosted: string;
}

export const ProjectsData: ProjectsType[] = [
  {
    title: "React Todo List",
    description: `A simple to-do list app powered by React, Chakra UI, React icons. Save in Local Storage`,
    image: todoListImage,
    GitHub: "https://github.com/Durgaprasd25d/react-todo",
    hosted: "https://task-tamer.netlify.app/",
  },
  {
    title: "React weather checker",
    description: `A weather checker app powered by React, Vite, TailWind, Swr, PropType, Dark mode`,
    image: weatherCheckerImage,
    GitHub: "https://github.com/Durgaprasd25d/weather-checker",
    hosted: `https://waether-checker-app.netlify.app/`,
  },
  {
    title: "Paddho Admin",
    description: `A comprehensive admin tool developed for managing educational operations.`,
    image: paddhoAdmin,
    GitHub: "https://gitlab.com/spattnaik/mint-student",
    hosted: `https://paddhoadmin.neverthought.in/`,
  },
  {
    title: "Paddho Teachers",
    description: `A web application for teachers to closely engage with students, fostering seamless communication and facilitating interaction.`,
    image: paddhoTeacher,
    GitHub: "https://gitlab.com/spattnaik/mint-student",
    hosted: `https://panel.paddho.com/dashboard`,
  },
  {
    title: "Paddho Students",
    description: `A platform for students to access courses, attend online exams, and view their scores.`,
    image: paddhoStudent,
    GitHub: "https://gitlab.com/spattnaik/mint-student",
    hosted: `https://app.paddho.com/courses`,
  },
  {
    title: "Gurukrupa | Admin",
    description: `An admin tool for managing students with features for CRUD operations, image uploading, and exam management. It includes exam creation, publishing, and adding questions. Security features include a one-hour timer for exams and login with registration number and password. The student portal allows students to access exams, receive instant scores, and have exams auto-submit after one hour.`,
    image: grtcAdmin,
    GitHub: "https://github.com/Durgaprasd25d/gurukrupa-admin",
    hosted: `https://gurukrupa-admin.netlify.app/`,
  },
  {
    title: "Job | Board",
    description: `This React-based frontend application serves as the interface for a job marketplace platform. Users can register, login, manage profiles, create job listings, apply for jobs, receive notifications, and manage roles through an admin panel. The application provides a seamless user experience with modern design and animations.`,
    image: jobApp,
    GitHub: "https://github.com/Durgaprasd25d/job-finding-app.git",
    hosted: `https://job-pulse.netlify.app`,
  },
];
