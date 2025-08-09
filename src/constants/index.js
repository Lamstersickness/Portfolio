
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  Health,
  Ad_Management,
  GenAI,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'




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
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer (React/Tailwind)",
    icon: mobile,
  },
  {
    title: "Backend Developer (Spring Boot • FastAPI)",
    icon: backend,
  },
  {
    title: "GenAI/LLM Developer",
    icon: creator,
  },
  {
    title: "API & Microservices",
    icon: backend
  },
  {
    title: "Data & ML (scikit-learn • PyTorch • Excel)",
    icon: creator
  },
  {
    title: "SQL & Databases (MySQL)",
    icon: web
  },
  {
    title: "NLP & LLMs (LangChain • Llama 3)",
    icon: creator,
  },
];

const technologies = [
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Material Ui",
    icon: mui,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];


const testimonials = [
  {
  testimonial:
  "Archit's AI Doctor Assistant turned symptom notes into clear, explainable suggestions. The OCR intake and SHAP explanations made the app trustworthy and easy for non‑technical users—perfect for our workshops and demos.",
  name: "Club Lead",
  designation: "AI & ML Club",
  company: "VIT",
  image: firstTestimonial,
  },
  {
  testimonial:
  "He shipped a Spring Boot + React ad platform with reliable APIs and fast keyword search. It was production‑ready, mobile‑friendly, and delivered on a tight timeline.",
  name: "Product Manager",
  designation: "Campus Marketplace",
  company: "Student Initiative",
  image: secondTestimonial,
  },
  {
  testimonial:
  "The GenAI Multi‑Modal Assistant saved our team hours by summarizing PDFs and long videos and answering questions directly. Clean, well‑documented code and smooth demos throughout.",
  name: "Research Mentor",
  designation: "School of CSE",
  company: "VIT",
  image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "AI Doctor Assistant",
    description:
      "It allows the user to type your symptoms (or upload a note/image), and the app suggests likely conditions along with easy‑to‑understand reasons and tips. It also creates a downloadable health report that the user can save or share. Helps the user to organize symptoms, get a first look at possible issues, and have a clearer conversation with a doctor.",
    tags: [
      {
      name: "python",
      color: "blue-text-gradient",
      },
      {
      name: "fastapi",
      color: "green-text-gradient",
      },
      {
      name: "machine-learning",
      color: "pink-text-gradient",
      },
      {
      name: "nlp",
      color: "orange-text-gradient",
      },
 
    ],
    image: Health,
    source_code_link: "https://github.com/Lamstersickness/AI-Powered-Health-Prediction-Web-App",
  },
  {
    name: "AdTargetPro",
    description:
      "A simple site to post ads and find relevant ads quickly. The user can create, edit, and delete your listings, and search using keywords to reach the right audience. Makes it easy for users to list something and for others to discover it fast on any device.",
    tags: [
        {
        name: "java",
        color: "blue-text-gradient",
        },
        {
        name: "spring-boot",
        color: "green-text-gradient",
        },
        {
        name: "react",
        color: "pink-text-gradient",
        },
        {
        name: "mysql",
        color: "orange-text-gradient",
      },
    ],
    image: Ad_Management,
    source_code_link: "https://github.com/Lamstersickness/AdTargetPro",
  },
  {
    name: "GenAI Multi‑Modal Assistant",
    description:
      "Paste a link or upload files (PDFs, docs, videos) and ask questions in plain English. The assistant summarizes the content, answers questions, and can even generate images/captions or short audio/video outputs. Saves time when studying articles, reviewing reports, or extracting key points from long videos.",
    tags: [
      {
      name: "python",
      color: "blue-text-gradient",
      },
      {
      name: "langchain",
      color: "green-text-gradient",
      },
      {
      name: "llama-3-api",
      color: "pink-text-gradient",
      },
      {
      name: "transformers",
      color: "orange-text-gradient",
      },
      ],
    image: GenAI,
    source_code_link: "https://github.com/Lamstersickness/AI-Multi-Modal-App",
  },
];

export { services, technologies, testimonials, projects };
