import sohrabImg from "../assets/sohrab_c1.jpg";
import sahinImg from "../assets/sahin_c1.jpg";
import salabImg from "../assets/salab_c1.jpg";
import tasirImg from "../assets/tasir_c1.jpg";

import sohrab500 from "../assets/sohrab-500.jpg";
import sahin500 from "../assets/sahin-500.jpg";
import salab500 from "../assets/salab-500.jpg";
import tasir500 from "../assets/tasir-500.jpg";

import img1 from "../assets/sicoarenaAllService.png";
import img2 from "../assets/sicoarenaAllService.png";

import mongodbIcon from "../assets/mongodb.png"
import expressIcon from "../assets/express js.png"
import reactIcon from "../assets/react.png"
import nodejsIcon from "../assets/node js.png"

export const teamData = [
  {
    id: 1,
    name: "Sohrab Hossain",
    designation: "Full Stack Developer",
    image: sohrabImg,
    image500: sohrab500,
    github: "https://github.com/Sohrab806",
    linkedin: "https://www.linkedin.com/in/sohrab-hossain-04b7551a0/",
    facebook: "https://www.facebook.com/sohrab.hossain.3139",
    gmail: "sohrab.hossain@example.com",
    phone: "+880-1234-567890",
    about:
      "Passionate about creating user-friendly interfaces with React and Tailwind CSS.",
    projects: [
      {
        images: [img1, img2],
        title: "Gym Management System",
        status: "Completed",
        description:
          "A full-featured gym platform with membership management, trainer scheduling, and payment processing.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: "https://gym-app.vercel.app",
        githubLink: "https://github.com/username/gym-app",
      },
      {
        images: [img1],
        title: "E-Learning Platform",
        status: "In Progress",
        description:
          "An interactive platform for online courses with video streaming and user progress tracking.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: "https://elearning-app.vercel.app",
        githubLink: "https://github.com/username/elearning-app",
      },
    ],
    education: {
      degree: "B.Sc. in Computer Science",
      institution: "University of Dhaka",
      year: "2018",
    },
    skills: [
      {
        category: "Frontend",
        technologies: ["React", "Tailwind CSS", "JavaScript"],
      },
      { category: "Backend", technologies: ["Node.js", "Express"] },
      { category: "Tools", technologies: ["Git", "Webpack"] },
    ],
    experience: [
      {
        role: "Full Stack Developer",
        company: "Tech Innovations",
        duration: "2019 - Present",
        description:
          "Developed and maintained multiple web applications using React and Node.js.",
      },
      {
        role: "Junior Developer",
        company: "Web Solutions",
        duration: "2018 - 2019",
        description: "Assisted in building responsive front-end interfaces.",
      },
    ],
    awardsAndCertifications: [
      { title: "Certified React Developer", issuer: "Coursera", year: "2020" },
      {
        title: "Best Developer Award",
        issuer: "Tech Innovations",
        year: "2021",
      },
    ],
  },
  {
    id: 2,
    name: "Md Sahin Siraj",
    designation: "Backend Developer",
    image: sahinImg,
    image500: sahin500,
    github: "https://github.com/sahin-dev",
    linkedin: "https://www.linkedin.com/in/mdsahinsiraj/",
    facebook: "https://www.facebook.com/sahin.siraj.1122",
    gmail: "sahin.siraj@example.com",
    phone: "+880-1234-567891",
    about: "Expert in crafting intuitive and beautiful designs.",
    projects: [
      {
        images: [img1],
        title: "Gym Management System",
        status: "Completed",
        description:
          "Developed the backend for a gym platform, focusing on API design and database optimization.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: "https://gym-app.vercel.app",
        githubLink: "https://github.com/username/gym-app",
      },
    ],
    education: {
      degree: "B.Sc. in Software Engineering",
      institution: "Bangladesh University of Engineering and Technology",
      year: "2017",
    },
    skills: [
      { category: "Backend", technologies: ["Python", "Django", "Node.js"] },
      { category: "Database", technologies: ["MongoDB", "PostgreSQL"] },
      { category: "Tools", technologies: ["Docker", "Jenkins"] },
    ],
    experience: [
      {
        role: "Backend Developer",
        company: "Innovate Tech",
        duration: "2018 - Present",
        description:
          "Designed and optimized backend systems for scalable applications.",
      },
      {
        role: "Intern Developer",
        company: "CodeBase",
        duration: "2017 - 2018",
        description: "Supported API development and database management.",
      },
    ],
    awardsAndCertifications: [
      {
        title: "AWS Certified Developer",
        issuer: "Amazon Web Services",
        year: "2019",
      },
    ],
  },
  {
    id: 3,
    name: "Salab Ibne Awal Eam",
    designation: "Product Developer",
    image: salabImg,
    image500: salab500,
    github: "https://github.com/salabibne",
    linkedin: "https://www.linkedin.com/in/salab-ibne-awal-eam/",
    facebook: "https://www.facebook.com/salab.yam",
    gmail: "salab.eam@example.com",
    phone: "+880-1234-567892",
    about: `I am a Product Developer focused on solving customer pain points through tailored software solutions. Skilled in backend and frontend development, I ensure seamless user experiences and efficient API design. My expertise includes JavaScript, Python (familiar), NestJS, Node.js, MongoDB, MySQL, React (Vite), Tailwind CSS, and Ant Design. I have delivered custom solutions for unique business challenges and led small teams, guiding architecture, problem-solving, and timely feature delivery. With a strong technical foundation and problem-solving mindset, I build scalable, high-performance products that drive long-term success.`,
    projects: [
      {
        images: [img2],
        title: "E-commerce Platform",
        status: "Completed",
        description:
          "A high-performance online store with advanced product filtering and payment integration.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: "https://ecommerce-app.vercel.app",
        githubLink: "https://github.com/username/ecommerce-app",
      },
      {
        images: ["/assets/project4.jpg"],
        title: "Blog Site",
        status: "Completed",
        description:
          "A content management system for blogs with user authentication and rich text editing.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: "https://blog-app.vercel.app",
        githubLink: "https://github.com/username/blog-app",
      },
    ],
    education: {
      degree: "B.Sc. in Computer Science and Engineering",
      institution: "North South University",
      year: "2016",
    },
    skills: [
      {
        category: "Frontend",
        technologies: ["React", "Vite", "Tailwind CSS", "Ant Design"],
      },
      { category: "Backend", technologies: ["NestJS", "Node.js", "Python"] },
      { category: "Database", technologies: ["MongoDB", "MySQL"] },
      { category: "Tools", technologies: ["Git", "Docker", "CI/CD"] },
    ],
    experience: [
      {
        role: "Product Developer",
        company: "NextGen Solutions",
        duration: "2018 - Present",
        description:
          "Led development of full-stack applications with a focus on user-centric design.",
      },
      {
        role: "Software Engineer",
        company: "TechTrend Innovations",
        duration: "2016 - 2018",
        description:
          "Developed APIs and front-end interfaces for enterprise clients.",
      },
    ],
    awardsAndCertifications: [
      {
        title: "Certified Scrum Developer",
        issuer: "Scrum Alliance",
        year: "2020",
      },
      {
        title: "Innovator of the Year",
        issuer: "NextGen Solutions",
        year: "2022",
      },
    ],
  },
  {
    id: 4,
    name: "S.M Tasirul Hasan",
    designation: "Client & Marketing Manager",
    image: tasirImg,
    image500: tasir500,
    linkedin: "https://www.linkedin.com/in/s-m-tasirul-hasan-b2889b247/",
    facebook: "https://www.facebook.com/tasirul.hasan.656331",
    gmail: "tasirul.hasan@example.com",
    phone: "+880-1234-567893",
    about:
      "Bridges the gap between design and development, managing client relations and marketing efforts.",
    projects: [
      {
        images: [img1],
        title: "App Launch Campaign",
        status: "Completed",
        description:
          "Managed the marketing campaign for a successful mobile app launch, including social media and SEO strategies.",
        techStack: [
          { name: "MongoDB", icon: mongodbIcon },
          { name: "Express", icon: expressIcon },
          { name: "React", icon: reactIcon },
          { name: "Node.js", icon: nodejsIcon },
        ],
        liveLink: null,
        githubLink: null,
      },
    ],
    education: {
      degree: "BBA in Marketing",
      institution: "University of Chittagong",
      year: "2015",
    },
    skills: [
      {
        category: "Marketing",
        technologies: ["SEO", "Digital Marketing", "Content Strategy"],
      },
      { category: "Client Management", technologies: ["CRM", "Negotiation"] },
      { category: "Tools", technologies: ["Google Analytics", "HubSpot"] },
    ],
    experience: [
      {
        role: "Client & Marketing Manager",
        company: "GrowEasy Tech",
        duration: "2017 - Present",
        description:
          "Managed client relationships and led marketing campaigns for tech products.",
      },
      {
        role: "Marketing Coordinator",
        company: "BrandBoost",
        duration: "2015 - 2017",
        description:
          "Coordinated digital marketing strategies and client outreach.",
      },
    ],
    awardsAndCertifications: [
      {
        title: "Google Analytics Certification",
        issuer: "Google",
        year: "2018",
      },
      { title: "Top Client Manager", issuer: "GrowEasy Tech", year: "2020" },
    ],
  },
];
