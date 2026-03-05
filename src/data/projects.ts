export interface Project {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  longDesc: string;
  color: string;
  linkType?: "Figma" | "GitHub" | "Poster" | "Live Demo";
  linkUrl?: string;
}

export const projects: Project[] = [
  {
    id: "mobile-app-redesign",
    title: "Mobile App Redesign",
    category: "UI Design",
    shortDesc: "Clean and modern mobile banking experience.",
    longDesc: "A comprehensive redesign of a mobile banking application focused on simplifying complex financial workflows. The project involved extensive user research, competitive analysis, and iterative prototyping to create an interface that feels both trustworthy and approachable.\n\nKey design decisions included a simplified navigation structure, contextual help tooltips, and a cohesive visual language that reduces cognitive load during critical transactions.",
    color: "bg-primary",
    linkType: "Figma",
    linkUrl: "https://figma.com",
  },
  {
    id: "ecommerce-dashboard",
    title: "E-Commerce Dashboard",
    category: "UX Design",
    shortDesc: "Data-driven admin panel with intuitive navigation.",
    longDesc: "An admin dashboard designed for e-commerce store owners to manage inventory, track orders, and analyze sales performance. The challenge was presenting dense data in an accessible, scannable format.\n\nI conducted card sorting exercises with real store owners to determine the optimal information architecture, resulting in a dashboard that surfaces the most critical metrics while keeping detailed views just a click away.",
    color: "bg-accent",
    linkType: "GitHub",
    linkUrl: "https://github.com",
  },
  {
    id: "travel-app-concept",
    title: "Travel App Concept",
    category: "Prototyping",
    shortDesc: "End-to-end travel booking flow with micro-interactions.",
    longDesc: "A conceptual travel booking app that reimagines how users discover and plan trips. The design emphasizes visual storytelling through immersive destination imagery and smooth micro-interactions that guide users through the booking funnel.\n\nThe prototype features gesture-based navigation, parallax scrolling effects, and a smart itinerary builder that adapts recommendations based on user preferences and past behavior.",
    color: "bg-secondary",
    linkType: "Figma",
    linkUrl: "https://figma.com",
  },
  {
    id: "health-fitness",
    title: "Health & Fitness",
    category: "UI/UX",
    shortDesc: "Wellness tracking app with calming visual language.",
    longDesc: "A wellness and fitness tracking application designed with mental health in mind. Unlike typical fitness apps that use aggressive, high-energy aesthetics, this design adopts a calming, organic visual language to encourage sustainable healthy habits.\n\nThe app includes mood tracking, guided meditation integration, and gentle progress visualizations that celebrate consistency over intensity.",
    color: "bg-primary",
    linkType: "Poster",
    linkUrl: "#",
  },
  {
    id: "food-delivery-ui",
    title: "Food Delivery UI",
    category: "UI Design",
    shortDesc: "Vibrant food ordering interface with smooth checkout.",
    longDesc: "A food delivery app interface that prioritizes visual appetite appeal and frictionless ordering. The design uses warm, appetizing color palettes and high-quality food photography to drive conversions.\n\nSpecial attention was given to the cart and checkout experience, reducing the steps from browse-to-order to just three taps. The design also includes accessibility features for dietary restrictions and allergen filtering.",
    color: "bg-accent",
    linkType: "Live Demo",
    linkUrl: "#",
  },
  {
    id: "portfolio-website",
    title: "Portfolio Website",
    category: "Web Design",
    shortDesc: "Creative personal site with bold typography.",
    longDesc: "A designer portfolio website built with bold typographic choices and unconventional layout patterns. The site serves as both a showcase of work and a demonstration of design philosophy.\n\nThe design features an auto-scrolling project marquee, layered decorative elements, and smooth scroll-linked animations that create a memorable browsing experience.",
    color: "bg-secondary",
    linkType: "GitHub",
    linkUrl: "https://github.com",
  },
];
