import echowearTrade from "@/assets/echowear-trade.png";
import echowearKhmer from "@/assets/echowear-khmer.png";
import ghiblihood from "@/assets/ghiblihood.png";
import phsarkhBackend from "@/assets/phsarkh-backend.png";
import pjumbenPoster from "@/assets/pjumben-poster.jpg";
import phsarkhmer from "@/assets/phsarkhmer.png";
import jumnusApp from "@/assets/jumnus-app.png";
import eatzykh from "@/assets/eatzykh.png";
import lomnouApp from "@/assets/lomnou-app.png";
import aiJobTest from "@/assets/ai-job-test.png";
import salalink from "@/assets/salalink.png";
import ahago from "@/assets/ahago.png";
import codeblockGame from "@/assets/codeblock-game.png";

export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  color: string;
  image: string;
  linkType?: "Figma" | "GitHub" | "Poster" | "Live Demo";
  linkUrl?: string;
}

export const projects: Project[] = [
  {
    id: "echowear-trade",
    title: "EchoWear – Trade It",
    category: "Poster Design",
    shortDesc: "Don't throw it, trade it. Sustainable fashion campaign.",
    longDesc: "A poster design for EchoWear's sustainable fashion initiative promoting clothing exchange. The campaign encourages refreshing your style without creating waste by trading garments forward.\n\nThe design features bold typography, layered photo compositions, and a vintage editorial aesthetic that resonates with eco-conscious fashion enthusiasts.",
    color: "bg-primary",
    image: echowearTrade,
    linkType: "Poster",
    linkUrl: "#",
  },
  {
    id: "echowear-khmer",
    title: "EchoWear – Khmer Edition",
    category: "Poster Design",
    shortDesc: "Eco-friendly fashion with Cambodian cultural identity.",
    longDesc: "A Khmer-language poster for EchoWear highlighting environmental sustainability through fashion. The design blends natural landscapes with product photography to communicate the brand's commitment to reducing textile waste.\n\nCultural elements and Khmer typography create a localized message that connects with the Cambodian audience.",
    color: "bg-accent",
    image: echowearKhmer,
    linkType: "Poster",
    linkUrl: "#",
  },
  {
    id: "ghiblihood",
    title: "GhibliHood",
    category: "Graphic Design",
    shortDesc: "Studio Ghibli fan art and community branding.",
    longDesc: "A brand identity and poster design for GhibliHood — a community celebrating Studio Ghibli's iconic animated films. The artwork features beloved characters from Spirited Away, Princess Mononoke, My Neighbor Totoro, and more.\n\nThe design captures the whimsical and enchanting spirit of Ghibli films through detailed illustration and bold typographic treatment.",
    color: "bg-secondary",
    image: ghiblihood,
    linkType: "Poster",
    linkUrl: "#",
  },
  {
    id: "phsarkh-backend",
    title: "PhsarKH – Backend",
    category: "Web Development",
    shortDesc: "Full-stack e-commerce admin panel with category management.",
    longDesc: "The backend administration panel for PhsarKH, a Cambodian e-commerce platform. Built with a comprehensive dashboard featuring product management, category CRUD operations, promotion tools, and sales reporting.\n\nThe system includes order tracking, inventory management, and data visualization for business intelligence — all presented in a clean, intuitive interface.",
    color: "bg-primary",
    image: phsarkhBackend,
    linkType: "GitHub",
    linkUrl: "https://github.com",
  },
  {
    id: "pjumben-poster",
    title: "Pjumben Festival",
    category: "Poster Design",
    shortDesc: "Cambodian Pchum Ben festival celebration poster.",
    longDesc: "A vibrant poster celebrating Pchum Ben — one of Cambodia's most important traditional festivals. The design incorporates iconic cultural symbols including lotus flowers, the Royal Palace, traditional food containers, and festive bunting.\n\nKhmer typography and a bright, joyful color palette capture the spirit of this ancestor-honoring celebration.",
    color: "bg-accent",
    image: pjumbenPoster,
    linkType: "Poster",
    linkUrl: "#",
  },
  {
    id: "phsarkhmer",
    title: "PhsarKhmer",
    category: "Web Design",
    shortDesc: "E-commerce platform showcasing authentic Cambodian products.",
    longDesc: "A complete e-commerce web application for PhsarKhmer — a marketplace for authentic Cambodian products including fresh produce, traditional snacks, spices, and handcrafted items.\n\nThe platform features product categorization, featured items, customer reviews, and a clean shopping experience that highlights the quality and heritage of Cambodian goods.",
    color: "bg-secondary",
    image: phsarkhmer,
    linkType: "Live Demo",
    linkUrl: "#",
  },
  {
    id: "jumnus-app",
    title: "JumNus App",
    category: "UI/UX Design",
    shortDesc: "Online booking services app — easy, fast, affordable.",
    longDesc: "A mobile application design for JumNus — an online booking and delivery services platform. The UI features a playful mascot character, clean card-based layouts, and intuitive navigation for ordering various services.\n\nThe design includes highlight reels, partner shop integrations, and a streamlined booking flow designed for the Cambodian market.",
    color: "bg-primary",
    image: jumnusApp,
    linkType: "Figma",
    linkUrl: "https://figma.com",
  },
  {
    id: "eatzykh",
    title: "EatzyKH",
    category: "UI/UX Design",
    shortDesc: "Food delivery web application with playful branding.",
    longDesc: "EatzyKH is a food delivery platform featuring a distinctive, fun brand identity with a cat mascot. The design showcases delivery and self pick-up flows, restaurant browsing, and a vibrant visual language.\n\nThe poster uses bold, manga-inspired typography and creative photo compositions to convey the brand's energetic personality — 'Work hard! Eat hard!'",
    color: "bg-accent",
    image: eatzykh,
    linkType: "Figma",
    linkUrl: "https://figma.com",
  },
  {
    id: "lomnou-app",
    title: "Lomnou App",
    category: "UI/UX Design",
    shortDesc: "Accommodation booking app for hotels, resorts & more.",
    longDesc: "Lomnou is a mobile accommodation application offering booking for hotels, resorts, apartments, camping, and shared rooms. The design features a modern, gradient-rich aesthetic with floating UI elements.\n\nThe app includes location-based search, category filtering, and a clean booking flow — all wrapped in a fresh purple-to-lime visual identity.",
    color: "bg-secondary",
    image: lomnouApp,
    linkType: "Figma",
    linkUrl: "https://figma.com",
  },
  {
    id: "ai-job-test",
    title: "AI Job Recommendation",
    category: "Python / AI",
    shortDesc: "AI-powered career recommendation test for students.",
    longDesc: "An AI-driven job recommendation system that helps students discover career paths matching their personality and skills through a 50-question survey. Built with Python using PyQt6, Matplotlib, Pandas, and SQLite.\n\nThe system analyzes responses to suggest suitable career paths like Data Scientist, providing detailed descriptions of each recommended profession.",
    color: "bg-primary",
    image: aiJobTest,
    linkType: "GitHub",
    linkUrl: "https://github.com",
  },
];
