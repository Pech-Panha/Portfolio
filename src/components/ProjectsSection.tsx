import { Link } from "react-router-dom";
import DecorativeStar from "./DecorativeStar";
import { projects } from "@/data/projects";

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
        Selected works showcasing my approach to design and visual storytelling. <span className="text-xs opacity-50 uppercase tracking-widest">(Drag to scroll)</span>
      </p>
    </div>

    <div className="relative">
      <div className="flex gap-6 pl-6 animate-marquee hover:[animation-play-state:paused] w-max">
        {allProjects.map((project, i) => (
          <Link to={`/project/${project.id}`} key={`${project.id}-${i}`} className="w-64 flex-shrink-0 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl" />
              <div
                className={`${project.color} rounded-2xl aspect-[3/4] mb-4 flex items-end p-5 transition-all group-hover:shadow-xl group-hover:-translate-y-1 cursor-pointer relative z-10 overflow-hidden`}
              >
                <span className="text-primary-foreground font-body text-xs uppercase tracking-widest opacity-80">
                  {project.category}
                </span>
              </div>
            </div>
            <h3 className="font-display text-lg font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="font-body text-muted-foreground text-sm">{project.shortDesc}</p>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
