import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => (
  <div className="bg-background min-h-screen">
    {/* Nav */}
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        <span className="font-display text-xl font-bold text-foreground">Portfolio</span>
        <div className="flex gap-6 font-body text-sm text-muted-foreground">
          {["About", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>

    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />

    <footer className="text-center py-8 font-body text-sm text-muted-foreground border-t border-border">
      © 2025 Portfolio. Crafted with care.
    </footer>
  </div>
);

export default Index;
