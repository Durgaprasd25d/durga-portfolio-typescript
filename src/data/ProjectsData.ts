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
    image:
      "https://raw.githubusercontent.com/erfjs/Todo-list/main/readme/example.png",
    GitHub: "https://github.com/erfjs/Todo-list",
    hosted: "https://todo-app.erfjs.com",
  },
  {
    title: "React weather checker",
    description: `A weather checker app powered by React, Vite, TailWind, Swr, PropType, Dark mode`,
    image:
      "https://raw.githubusercontent.com/erfjs/weather-checker/main/readme/example.png",
    GitHub: "https://github.com/erfjs/weather-checker",
    hosted: `https://weather-checker.erfjs.com`,
  },
];
