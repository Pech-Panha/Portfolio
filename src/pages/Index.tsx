import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import { useEffect, useState } from "react";

const sections = ["hero", "about", "projects", "contact"];

const Index = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-background min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
          <a href="#hero" className="font-display text-xl font-bold text-foreground">
            Portfolio
          </a>
          <div className="flex gap-6 font-body text-sm">
            {["About", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`transition-colors ${
                  active === item.toLowerCase()
                    ? "text-primary font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div id="hero">
        <HeroSection />
      </div>
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      <footer className="text-center py-8 font-body text-sm text-muted-foreground border-t border-border">
        © 2025 Portfolio. Crafted with care.
      </footer>
    </div>
  );
};

export default Index;
