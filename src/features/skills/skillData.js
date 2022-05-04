import { DiHtml5, DiCss3Full, DiJsBadge, DiReact, DiGit, DiGithubBadge, DiNpm, DiHeroku, DiLinux } from "react-icons/di";
import { SiRedux, SiExpress, SiMongodb, SiJest, SiFirebase, SiWebpack } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

export const frontendSkills = [
  { title: "HTML5", icon: <DiHtml5 />, id: 0 },
  { title: "CSS3", icon: <DiCss3Full />, id: 1 },
  { title: "JavaScript", icon: <DiJsBadge />, id: 2 },
  { title: "React", icon: <DiReact />, id: 3 },
  { title: "Redux", icon: <SiRedux />, id: 4 },
];
export const backendSkills = [
  { title: "NodeJS", icon: <FaNodeJs />, id: 0 },
  { title: "Express", icon: <SiExpress />, id: 1 },
  { title: "ejs", icon: "", id: 2 },
  { title: "MongoDB", icon: <SiMongodb />, id: 3 },
  { title: "Mongoose", icon: "", id: 4 },
];
export const otherSkills = [
  { title: "Git", icon: <DiGit />, id: 0 },
  { title: "GitHub", icon: <DiGithubBadge />, id: 1 },
  { title: "npm", icon: <DiNpm />, id: 2 },
  { title: "Jest", icon: <SiJest />, id: 3 },
  { title: "Firebase", icon: <SiFirebase />, id: 4 },
  { title: "Heroku", icon: <DiHeroku />, id: 5 },
  { title: "Webpack", icon: <SiWebpack />, id: 6 },
  { title: "Linux", icon: <DiLinux />, id: 7 },
];
