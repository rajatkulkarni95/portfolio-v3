import React from "react";
import {
  FaReact,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiStyledComponents, SiFlask, SiJavascript } from "react-icons/si";

export const techSkills = [
  {
    id: 1,
    name: "React",
    icon: <FaReact />,
  },
  {
    id: 2,
    name: "Javascript (ES6+)",
    icon: <SiJavascript />,
  },
  {
    id: 3,
    name: "Python",
    icon: <FaPython />,
  },
  {
    id: 4,
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    id: 5,
    name: "CSS3",
    icon: <FaCss3Alt />,
  },
  {
    id: 6,
    name: "Flask",
    icon: <SiFlask />,
  },
  {
    id: 7,
    name: "Git",
    icon: <FaGitAlt />,
  },
  {
    id: 8,
    name: "Styled Components",
    icon: <SiStyledComponents />,
  },
];
