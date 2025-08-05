import ProjectCard from "./ProjectsCard";
import img1 from '/src/assets/sicoarenaAllService.png';
import img2 from '/src/assets/test.png';

const projects = [
  {
    images: [img1, img2],
    title: "Gym Management System",
    status: "Completed",
    description:
      `A full-featured gym platform with membership, trainer scheduling and payments.
      "A full-featured gym platform with membership, trainer scheduling and payments.",
      "A full-featured gym platform with membership, trainer scheduling and payments.",
      "A full-featured gym platform with membership, trainer scheduling and payments.",

      `,
    techStack: [
      { name: "MongoDB", icon: "/src/assets/mongodb.png" },
      { name: "Express", icon: "/src/assets/express js.png" },
      { name: "React", icon: "/src/assets/react.png" },
      { name: "Node.js", icon: "/src/assets/node js.png" },
    ],
    liveLink: "https://gym-app.vercel.app",
    githubLink: "https://github.com/username/gym-app",
  },
  {
    image: "/assets/project1.jpg",
    title: "Gym Management System",
    status: "Completed",
    description:
      "A full-featured gym platform with membership, trainer scheduling and payments.",
    techStack: [
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Express", icon: "/assets/icons/express.svg" },
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
    ],
    liveLink: "https://gym-app.vercel.app",
    githubLink: "https://github.com/username/gym-app",
  },
  {
    image: "/assets/project1.jpg",
    title: "Gym Management System",
    status: "Completed",
    description:
      "A full-featured gym platform with membership, trainer scheduling and payments.",
    techStack: [
      { name: "MongoDB", icon: "/assets/icons/mongodb.svg" },
      { name: "Express", icon: "/assets/icons/express.svg" },
      { name: "React", icon: "/assets/icons/react.svg" },
      { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
    ],
    liveLink: "https://gym-app.vercel.app",
    githubLink: "https://github.com/username/gym-app",
  },
  // Add more projects here
];

const ProjectsGrid = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsGrid;
