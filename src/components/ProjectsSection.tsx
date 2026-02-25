import DecorativeStar from "./DecorativeStar";

const projects = [
  {
    title: "Brand Identity",
    category: "Branding",
    description: "Complete visual identity system for a modern café brand.",
    color: "bg-primary",
  },
  {
    title: "Social Media Kit",
    category: "Digital Design",
    description: "Instagram templates and story designs for lifestyle brand.",
    color: "bg-accent",
  },
  {
    title: "Poster Series",
    category: "Print Design",
    description: "Event poster collection with bold typographic treatments.",
    color: "bg-secondary",
  },
];

const ProjectsSection = () => (
  <section id="projects" className="relative px-6 py-24">
    <DecorativeStar className="absolute top-8 left-20 animate-sparkle delay-100" color="secondary" size="lg" />
    <DecorativeStar className="absolute bottom-12 right-16 animate-sparkle delay-400" color="primary" size="sm" />

    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4 animate-fade-up">
        Project Highlights
      </h2>
      <p className="font-body text-muted-foreground text-lg mb-12 max-w-lg animate-fade-up delay-100">
        Selected works showcasing my approach to design and visual storytelling.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={`group animate-fade-up delay-${(i + 2) * 100}`}
          >
            <div
              className={`${project.color} rounded-2xl h-56 mb-4 flex items-end p-6 transition-transform group-hover:scale-[1.02]`}
            >
              <span className="text-primary-foreground font-body text-xs uppercase tracking-widest opacity-80">
                {project.category}
              </span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-1">
              {project.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
