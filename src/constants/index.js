import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  next,
  php,
  laravel,
  codeigniter,
  postgre,
  bbn,
  pijarcamp,
  recipe,
  ankasa,
  peworld,
  threejs,
  discord,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Fullstack Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "next",
    icon: next,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "codeigniter",
    icon: codeigniter,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Postgre",
    icon: postgre,
  },
];

const experiences = [
  {
    title: "Fullstack Web Developer",
    company_name: "PT Bukit Baja Nusantara",
    icon: bbn,
    iconBg: "#fff",
    date: "Nov 2023 - Now",
    points: [
      "Developing and maintaining web company profile & customer portal using Codeigniter and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Build CMMS (Computerized Maintenance Management System) using Codeigniter and other related technologies",
      "Implementing responsive design and ensuring cross-browser compatibility",
    ],
  },
  {
    title: "Bootcamp Fullstack Web & Mobile Developer",
    company_name: "Pijar Camp",
    icon: pijarcamp,
    iconBg: "#fff",
    date: "July 2023 - October 2023",
    points: [
      "Develop Web applications using JavaScript and Node.js, Express.js, and React.js, and successfully built 4 projects in 3 months",
      "Built mobile applications using React Native and Android development methodologies",
      "Built databases using PostgreSQL, in order to guarantee the integrity and efficiency of data",
      "Maintain teamwork and collaboration skills to work effectively in a cross-functional environment",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Discord Clone",
    description:
      "Fullstack and real-time discord clone. With the feature servers, channels, video calls, audio calls, editing and deleting messages as well as member roles.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mysql",
        color:
          "bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent",
      },
      {
        name: "socket.io",
        color:
          "bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent",
      },
    ],
    image: discord,
    source_code_link: "https://github.com/AryaJulianda/discord-clone",
    demo_link: "https://my-discord-clone.up.railway.app/",
  },
  {
    name: "Mama Recipe",
    description:
      "A web-based platform that allows users to search, post, and save recipes with an attractive and responsive design.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgre",
        color: "pink-text-gradient",
      },
    ],
    image: recipe,
    source_code_link: "https://github.com/AryaJulianda/RECIPE-FE",
    demo_link: "https://mama-recipe.pages.dev/",
  },
  {
    name: "Peworld",
    description:
      "Peworld is an innovative web platform that allows the company to search for their best candidates.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgre",
        color: "pink-text-gradient",
      },
    ],
    image: peworld,
    source_code_link: "https://github.com/maulanazn/hirejob-fe",
    demo_link: "https://hirejob.pages.dev/",
  },
  {
    name: "Ankasa",
    description:
      "Ankasa is a website platform that enables users to effortlessly search and filter flight options to suit their preferences.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "postgre",
        color: "pink-text-gradient",
      },
    ],
    image: ankasa,
    source_code_link: "https://github.com/AryaJulianda/ANKASA-FE",
    demo_link: "https://ankasa-next-js.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
