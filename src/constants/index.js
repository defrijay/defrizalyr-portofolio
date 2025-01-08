import css from "../assets/tech/css.png";
import docker from "../assets/tech/docker.png";
import figma from "../assets/tech/figma.png";
import git from "../assets/tech/git.png";
import html from "../assets/tech/html.png";
import javascript from "../assets/tech/javascript.png";
import mongodb from "../assets/tech/mongodb.png";
import nodejs from "../assets/tech/nodejs.png";
import reactjs from "../assets/tech/reactjs.png";
import tailwind from "../assets/tech/tailwind.png";
import typescript from "../assets/tech/typescript.png";
import php from "../assets/tech/php.png";
import mysql from "../assets/tech/mysql.png";
import expressJS from "../assets/tech/expressJS.png";
import laravel from "../assets/tech/laravel.png";
import codeigniter from "../assets/tech/codeigniter.webp";
import flutter from "../assets/tech/flutter.webp";

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'CV',
    href: '#cv',
  },
  {
    id: 4,
    name: 'Portofolio',
    href: '#projects',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#about',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'Project Management App',
    desc: 'A website application to manage a list of projections in a team for work purposes and division of tasks for each person involved in the project.',
    subdesc:
      'Built as a unique Software-as-a-Service app with ReactJS, Tailwind CSS, Laravel, and MySQL.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    github: 'https://github.com/defrijay/project-management-app',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/tech/laravel.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/tech/mysql.png',
      },
    ],
  },
  {
    title: 'KEMAKOM FPMIPA UPI',
    desc: 'Website for introducing the organization called BEM KEMAKOM FPMIPA UPI and serving KEMAKOM residents with news and information about KEMAKOM.',
    subdesc:
      'Build with Bootsrtrap, Codeigniter, and MySQL',
    href: 'https://kemakom.org',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Bootsrap',
        path: '/assets/tech/bootstrap.png',
      },
      {
        id: 2,
        name: 'Codeigniter',
        path: 'assets/tech/codeigniter.webp',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/tech/mysql.png',
      },
    ],
  },
  {
    title: 'Dinamik-19',
    desc: 'An anniversary event for the Computer Science and Computer Science Education study programs at UPI.',
    subdesc:
      'Build with ReactJS, TailwindCSS, Laravel, and MySQL',
    href: 'https://dinamik.kemakom.org',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Laravel',
        path: '/assets/tech/laravel.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/tech/mysql.png',
      },
    ],
  },
  {
    title: 'Campside',
    desc: 'A website main page about promoting a mobile application, which attracts users to download the application by introducing the benefits and features available in this application.',
    subdesc:
      'Build with Typescript, NextJS, and TailwindCSS.',
    href: '',
    github:'https://github.com/defrijay/Campside',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'NextJS',
        path: '/assets/tech/nextJS.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      }
    ],
  },
  {
    title: 'Momo Store',
    desc: 'Momo Store is a modern e-commerce application that allows users to browse products, add them to cart, place orders, and review products. The application is built using Next.js to deliver a fast, responsive, and SEO-friendly user experience.',
    subdesc:
      'Bulid with VueJS, TailwindCSS, and ExpressJS',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    github: 'https://github.com/defrijay/momo-store',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Vue.js',
        path: '/assets/tech/vueJS.png',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/tech/expressJS.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/tech/mongodb.png',
      },
    ],
  },
  {
    title: 'Bara University',
    desc: 'A web application for registering prospective students on the Bara University website so they can become students.',
    subdesc:
      'Build with Bootstrap and PHP',
    href: '',
    github: 'https://github.com/defrijay/bara-university',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/tech/php.png',
      },
      {
        id: 2,
        name: 'Bootrstrap',
        path: 'assets/tech/bootstrap.png',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/tech/mysql.png',
      }
    ],
  },
  {
    title: 'Majestic Restaurant',
    desc: 'A responsive restaurant website homepage called majestic-restaurant which is used to introduce the restaurant in general. Starting from the initial introduction, menu, contact, and others.',
    subdesc:
      'Built with ReactJS and TailwindCSS',
    href: '',
    github: 'https://github.com/defrijay/majestic-restaurant',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/tech/css.png',
      },
      {
        id: 3,
        name: 'Javascript',
        path: '/assets/tech/javascript.png',
      },
    ],
  },
  {
    title: 'Digisehat',
    desc: 'A mobile application to help patients find the nearest help to avoid unwanted incidents.',
    subdesc:
      'Build with Flutter and Rust',
    href: '',
    github: 'https://github.com/sabilfaustaa/provis-frontend',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'Flutter',
        path: 'assets/tech/flutter.webp',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/assets/tech/rust.png',
      },
      {
        id: 3,
        name: 'Framer Motion',
        path: '/assets/tech/sqlite.png',
      },
    ],
  },
  {
    title: 'Litik Course',
    desc: 'A website for student learning C language programming.',
    subdesc:
      'Build with ReactJS, TailwindCSS, and ExpressJS',
    href: '',
    github: 'https://github.com/sabilfaustaa/provis-frontend',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'ExpressJS',
        path: '/assets/tech/expressJS.png',
      },
      {
        id: 4,
        name: 'MySQL',
        path: '/assets/tech/mysql.png',
      },
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "PHP",
    icon: php,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Codeigniter",
    icon: codeigniter,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'KEMAKOM FPMIPA UPI',
    pos: 'Head of Technology Bureau',
    duration: 'Februari 2024 - December 2024',
    icon: '/assets/tech/kemakom.svg',
    animation: 'victory',
    points: [
      'Designed and developed organizational websites using MySQL and CodeIgniter 4, increasing website traffic by 40%.',
      'Managed website updates, including news, organizational structure, and other content, improving information accessibility for members.',
      'Proposed and implemented new features, enhancing user experience and engagement.',
      'Led a team of 3 members, achieving a 100% completion rate for all technology-related projects within deadlines.'
    ],
  },
  {
    id: 2,
    name: 'Dinamik-19',
    pos: 'Front-End Developer',
    duration: 'August 2024 - October 2024',
    icon: '/assets/tech/dinamik.svg',
    animation: 'clapping',
    points: [
      "Developed and launched the official DINAMIK-19 website, attracting over 5,000 unique visitors during the event.",
      "Improved website responsiveness and performance, resulting in a 30% reduction in load time.",
      "Worked closely with the team to refine design and functionality, ensuring a seamless user experience."
    ],
  },
  {
    id: 3,
    name: 'Jakarta Smart City',
    pos: 'UI/UX Designer',
    duration: 'March 2024 - August 2024',
    icon: '/assets/tech/jsc.svg',
    animation: 'salute',
    points: [
      "Designed intuitive UI for Jakarta Smart City's internal website, reducing user navigation time by 25%.",
      "Enhanced usability and navigation through user-centered design principles, receiving positive feedback from stakeholders.",
      "Collaborated with cross-functional teams to optimize website features, contributing to a successful project launch on schedule."
    ],
  },
];
