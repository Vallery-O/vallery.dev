export interface Project {
  id: string;
  emoji: string;
  image: string;
  name: string;
  description: string;
  tags: string[];
  neutralTags: string[];
  githubUrl: string;
}

export const projects: Project[] = [
  {
    id:"api",
    emoji: "🛰️",
    image: "/images/api.png",
    name: "Python Orders App",
    description: "A backend service built with Flask, providing a REST API for managing customers and orders. It includes google OpenID Connect authentication, unit tests with coverage, Docker support, and a GitLab CI/CD pipeline",
    tags: ["Python", "Flask", "Docker", "GitLab CI"],
    neutralTags: ["API"],
    githubUrl: "https://github.com/Vallery-O/Python-Orders-App",
  },
  {
    id: "vall",
    emoji: "🧠",
    image: "/images/vite.png",
    name: "Simple React app",
    description: "A responsive web application build using React and Vite for fast development and optimized builds.",
    tags: ["React", "Vite"],
    neutralTags: ["Frontend"],
    githubUrl: "https://github.com/Vallery-O/Vallery-App",
  },
  {
    id: "node",
    emoji: "⚡",
    image: "/images/projects/orbit.jpg",
    name: "Node + PostgreSQL ",
    description: "",
    tags: ["Docker", "PostgreSQL"],
    neutralTags: ["Containers"],
    githubUrl: "https://github.com/Vallery-O/Docker-Node-APP/",
  },
  
];
