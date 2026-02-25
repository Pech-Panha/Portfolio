import DecorativeStar from "./DecorativeStar";

const projects = [
  { title: "Mobile App Redesign", category: "UI Design", description: "Clean and modern mobile banking experience.", color: "bg-primary" },
  { title: "E-Commerce Dashboard", category: "UX Design", description: "Data-driven admin panel with intuitive navigation.", color: "bg-accent" },
  { title: "Travel App Concept", category: "Prototyping", description: "End-to-end travel booking flow with micro-interactions.", color: "bg-secondary" },
  { title: "Health & Fitness", category: "UI/UX", description: "Wellness tracking app with calming visual language.", color: "bg-primary" },
  { title: "Food Delivery UI", category: "UI Design", description: "Vibrant food ordering interface with smooth checkout.", color: "bg-accent" },
  { title: "Portfolio Website", category: "Web Design", description: "Creative personal site with bold typography.", color: "bg-secondary" },
];

const allProjects = [...projects, ...projects];

const ProjectsSection = () => (
  <section id="projects" className="relative py-24 overflow-hidden">
    <DecorativeStar className="absolute top-8 left-20 animate-sparkle delay-100" color="secondary" size="lg" />
    <DecorativeStar className="absolute bottom-12 right-16 animate-sparkle delay-400" color="primary" size="sm" />

    <div className="max-w-5xl mx-auto px-6 mb-12">
      <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4 animate-fade-up">
        Project Highlights
      </h2>
      <p className="font-body text-muted-foreground text-lg max-w-lg animate-fade-up delay-100">
        Selected works showcasing my approach to design and visual storytelling.
      </p>
    </div>

    <div className="relative">
      <div className="flex gap-6 pl-6 animate-marquee hover:[animation-play-state:paused] w-max">
        {allProjects.map((project, i) => (
          <div key={`${project.title}-${i}`} className="w-56 flex-shrink-0">
            <div
              className={`${project.color} rounded-2xl h-80 mb-4 flex items-end p-5 transition-transform hover:scale-[1.03] cursor-pointer`}
            >
              <span className="text-primary-foreground font-body text-xs uppercase tracking-widest opacity-80">
                {project.category}
              </span>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1">
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
