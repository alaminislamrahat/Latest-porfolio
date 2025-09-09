// index.js
export const servicesData = [
  {
    title: "FullStack Web Development",
    description:
      "I build modern, responsive, and high-performance web applications with clean architecture and seamless user experience.",
    items: [
      {
        title: "Backend Development",
        description: "(Node.js, Express.js, MongoDB, REST APIs, Authentication)",
      },
      {
        title: "Frontend Development",
        description: "(React.js, Next.js, TypeScript, Tailwind CSS, DaisyUI, Responsive Design)",
      },
      {
        title: "Database Management",
        description: "(MongoDB, Mongoose, Data Modeling, Optimized Queries)",
      },
    ],
  },
  {
    title: "Web Animations & Interactivity",
    description:
      "I create engaging and interactive web experiences using advanced animations and smooth UI effects.",
    items: [
      {
        title: "GSAP Animations",
        description: "(ScrollTrigger, ScrollSmoother, Timelines, Interactive UI Effects)",
      },
      {
        title: "Framer Motion",
        description: "(Component Animations, Page Transitions, Hover Effects)",
      },
      {
        title: "UX Enhancements",
        description: "(Smooth Scrolling, Sticky Elements, Parallax Effects, Responsive Interactions)",
      },
    ],
  },
  {
    title: "CMS & Website Builders",
    description:
      "I build and customize websites using popular CMS platforms for clients who need fast and manageable solutions.",
    items: [
      {
        title: "Squarespace",
        description: "(Custom Templates, Responsive Design, SEO Setup)",
      },
      {
        title: "Webflow",
        description: "(Custom Interactions, CMS Collections, Hosting Setup)",
      },
      {
        title: "Other Web Builders",
        description: "(Wix, Elementor, Tailored CMS Solutions)",
      },
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Study Zone | Online Learning Platform",
    description:
      "Developed a full-stack online study platform (Study Zone) using React.js, Tailwind CSS, Firebase, Node.js, Express.js, and MongoDB. Implemented live session management where teachers can post sessions and admins can approve or reject them. Enabled flexible learning by allowing students to purchase paid classes or access free sessions. Built a role-based admin dashboard for managing users (assign roles, update, or delete sessions). Admin Access → Email: admin@gmail.com | Password: Rahat,132@",
    href: "",
    image: "/assets/projects/screencapture-collaborative-study-plat-ad204-web-app-2025-09-09-21_01_28.png",
    bgImage: "/assets/backgrounds/blanket.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "ExpressJs" },
      { id: 3, name: "Node.js" },
      { id: 4, name: "MongoDB" },
      { id: 5, name: "Tailwind CSS" },
      { id: 6, name: "Firebase" },
    ],
    links: [
      { id: 1, name: "client", url: "https://github.com/alaminislamrahat/collaborative-study-client" },
      { id: 2, name: "server", url: "https://github.com/alaminislamrahat/collaborative-study-server" },
      { id: 3, name: "live", url: "https://collaborative-study-plat-ad204.web.app/" },
    ]
  },
  {
    id: 2,
    name: "SoloSphere | Job Finding Platform",
    description:
      "Solo Sphere is an online freelancing platform built with Express.js, Node.js, MongoDB, React.js, and Firebase, designed to connect freelancers with clients through seamless project management, secure payments, and integrated communication, empowering professionals to showcase their skills and collaborate effectively in a digital workspace.",
    href: "",
    image: "/assets/projects/soloSphare project.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "React" },
      { id: 2, name: "ExpressJs" },
      { id: 3, name: "NodeJs" },
      { id: 4, name: "Tailwind CSS" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Firebase" },
    ],
    links: [
      { id: 1, name: "client", url: "https://github.com/alaminislamrahat/solo-sphare/tree/master/client" },
      { id: 2, name: "server", url: "https://github.com/alaminislamrahat/solo-sphare/tree/master/server" },
      { id: 3, name: "live", url: "https://solosphare-31a9f.web.app/" },
    ]
  },
  {
    id: 3,
    name: "Spylt | Animated Website",
    description:
      "A animated website. Using gsap make it fansy",
    href: "",
    image: "public/assets/projects/Spylt.png",
    bgImage: "/assets/backgrounds/map.jpg",
    frameworks: [
      { id: 1, name: "ReactJs" },
      { id: 2, name: "Gsap" },
      { id: 3, name: "TailwindCss" },

    ],
    links: [
      { id: 1, name: "Client", url: "https://github.com/alaminislamrahat/Spylt-Gsap" },
      { id: 2, name: "live", url: "https://spylt-gsap-pi.vercel.app/" },
    ]
  },
  {
    id: 4,
    name: "Clill Gamer | Game Review Website",
    description:
      "Developed a game review platform using React.js, Node.js, Express.js, and MongoDB with features for creating, updating, and deleting reviews (restricted to the posting user), a personalized watchlist for saving or removing reviews, and a secure user-specific interface for seamless review management.",
    href: "",
    image: "/assets/projects/chlill Gamer.png",
    bgImage: "/assets/backgrounds/poster.jpg",
    frameworks: [
      { id: 1, name: "ReactJs" },
      { id: 2, name: "Tailwind Css" },
      { id: 3, name: "NodeJs" },
      { id: 4, name: "ExpressJs" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Firebase" },
    ],
    links: [
      { id: 1, name: "client", url: "https://github.com/alaminislamrahat/chill-gamer-client" },
      { id: 2, name: "server", url: "https://github.com/alaminislamrahat/chill-gamer-server" },
      { id: 3, name: "live", url: "https://chill-gamer-ce1a2.web.app" },
    ]
  },
  {
    id: 5,
    name: "Volunteer Management",
    description:
      "A full-stack web application built with React.js, Node.js, Express, and MongoDB to streamline volunteer management for events, enabling organizers to handle registrations, track participation, and communicate with volunteers through a secure, scalable, and user-friendly platform.",
    href: "",
    image: "/assets/projects/volunteer management.png",
    bgImage: "/assets/backgrounds/table.jpg",
    frameworks: [
      { id: 1, name: "ReactJs" },
      { id: 2, name: "Tailwind Css" },
      { id: 3, name: "NodeJs" },
      { id: 4, name: "ExpressJs" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Firebase" },
    ],
    links: [
      { id: 1, name: "client", url: "https://github.com/alaminislamrahat/volunteer-client" },
      { id: 2, name: "server", url: "https://github.com/alaminislamrahat/volunteer-server" },
      { id: 3, name: "live", url: "https://volunteer-management-3413a.web.app/" },
    ]
  },
  {
    id: 6,
    name: "Brand Shop",
    description:
      "A gaming platform featuring discounted titles, top sellers, and genre-based browsing.",
    href: "",
    image: "/assets/projects/Brand.png",
    bgImage: "/assets/backgrounds/curtains.jpg",
    frameworks: [
      { id: 1, name: "ReactJs" },
      { id: 2, name: "Tailwind Css" },
      { id: 3, name: "NodeJs" },
      { id: 4, name: "ExpressJs" },
      { id: 5, name: "MongoDB" },
      { id: 6, name: "Spline" },
      
    ],
    links: [
      { id: 1, name: "client", url: "https://github.com/alaminislamrahat/brand-shop-client" },
      { id: 2, name: "server", url: "https://github.com/alaminislamrahat/brand-shop-server" },
      { id: 3, name: "live", url: "https://brand-shop-22074.web.app/" },
       
    ]
  },
];
export const socials = [
  { name: "Instagram", href: "https://www.instagram.com/al_amin_islam_rahat/" },
  {
    name: "Facebook",
    href: "https://www.facebook.com/alaminislamrahat132",
  },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/al-amin-islam-rahat/" },
  { name: "GitHub", href: "https://github.com/alaminislamrahat" },
];
