import { div } from "three/tsl";


const navLinks = [
  {
    name: "Projects",
    link: "#Projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Download Resume",
    link: "/Akshat-CV.pdf", 
    download: true,          
  },
];


const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Automation", imgPath: "/images/automation.png" },
  { text: "AI Models", imgPath: "/images/deep-learning.png" },
  { text: "Web Development", imgPath: "/images/coding.png" },
  { text: "Frontend Development", imgPath: "/images/front.png" },
  { text: "Full-Stack Development", imgPath: "/images/fs.png" },
  { text: "Backend Systems", imgPath: "/images/computer.png" },
  { text: "Machine Learning", imgPath: "/images/deep-learningg.png" } 
];

const counterItems = [
  { label: "Dedicated Student of Software Engineering", showValue: false },
  { label: "Continuously Developing Skills", showValue: false },
  { value: 8, suffix: "+", label: "8 Personal Projects", showValue: true },
  { label: "Committed to Delivering Quality Work", showValue: false },
];


const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: " Leadership",
    desc: "Driving successful outcomes through effective team management and collaboration.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Strong Communication",
    desc: "Ensuring clear and effective communication with clients and team members.",
  },
  {
    imgPath: "/images/time.png",
    title: "Strategic Outreach",
    desc: "Building and maintaining relationships with clients and stakeholders.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Git & Github",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Data Structure & Algorithms",
    modelPath: "/models/dsa.glb",
    scale: 2.5,
    rotation: [0, 0, 0],
  },
  {
    name: "Git & Github",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Akshat's dedication, passion, and hard work have been instrumental in making our club a thriving community for AI enthusiasts.",
    imgPath: "/images/logo1.png",
    logoPath: "/images/logo1.png",
    title: "PR and Outreach",
    date: "November 2023 - Present",
    responsibilities: [
      "Spearheaded strategic outreach campaigns, increasing AIC's visibility across academic and tech communities.",
      "Built and maintained media relations, securing coverage in key platforms to amplify organizational impact.",
      "Led public relations initiatives, fostering partnerships and boosting engagement with stakeholders and startups.",
    ],
  },
  {
    review:
      "Akshat has been the backbone of our backend, integrating complex systems with precision through smart automation. His reliability has been invaluable to the team. \n ---- Sejal Mishra [Lead of the USDC]",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Backend Developer",
    date: "January 2025 - Present",
    responsibilities: [
      "Built web scraping pipelines with BeautifulSoup to extract and structure content from external sources.",
      "Designed and managed Supabase database schemas for storing and retrieving real-time data efficiently.",
      "Ensured secure and scalable API architecture to support seamless frontend interactions and future growth.",
    ],
  },
  {
    review:
    "Akshat's best work comes out when you are in real pressure situations , he is a true all-rounder- dilevers when matters \n ---- HCCA",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Fast Bowling All-Rounder (but make it Code)",
    date: "September 2024 - Present",
    responsibilities: [
      "Bowled blazing-fast scrapers using BeautifulSoup — extracting data with pace and precision.",
      "Balanced attack and defense by structuring a solid Supabase backend for reliable data handling.",
      "Delivered full-stack yorkers with secure, scalable APIs — clean dismissals for any frontend challenge.",
    ],
  }
  
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Tony Stark",
    mentions: "@ironman3000",
    review:
      "Akshat built our site faster than I built the Mark I in a cave. Clean, functional, and stylish — just like my suits. 10/10 would deploy again.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Cam Green",
    mentions: "@Camgr",
    review:
      "When I'm not smashing sixes, I'm smashing that refresh button on our revamped website. Akshat made it so slick, it's like the web dev version of a cover drive. Absolute all-rounder.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Wade Wilson",
    mentions: "@deadpool",
    review:
      "Akshat’s so good, I didn’t even break the fourth wall to fix bugs. Dead serious. He codes like a ninja and debugs like a wizard. Hire him before I do.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvel",
    mentions: "@stanlee",
    review:
      "Excelsior! Akshat took our old-school site and gave it a superhero origin story. Now it’s faster, cooler, and has a story arc I’m proud of. Web-tastic work!",
    imgPath: "/images/client5.png",
  },
  {
    name: "Miles Morales",
    mentions: "@Imspideypt2",
    review:
      "My site used to be stuck in the Spider-Verse. Akshat pulled it into the multiverse of mobile-friendly greatness. Web dev wizard. Straight-up hero.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Einstein",
    mentions: "@thegreatmind",
    review:
      "Akshat’s work proves E=MC²: Excellent = (Modern Code × Clean Design)². Logic, elegance, and a touch of genius. Highly relative to perfection.",
    imgPath: "/images/client6.png",
  },
];


const socialImgs = [
    {
      name: "insta",
      href: "https://www.instagram.com/itsakshatsinghh",
      imgPath: "/images/insta.png",
      alt: "Instagram"
    },
  
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/itsakshatsinghh/",
    imgPath: "/images/linkedin.png",
    alt: "LinkedIn"
  },
  {
    name: "x",
    url: "https://www.x.com/",
    href:"https://github.com/itsakshatsinghh",
    imgPath: "/images/x.png",
  },

];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
export default div;