import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import DecorativeStar from "./DecorativeStar";
import { projects } from "@/data/projects";

const allProjects = [...projects, ...projects, ...projects];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>();
  const scrollPos = useRef(0);
  const isPaused = useRef(false);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollStart = useRef(0);
  const dragDistance = useRef(0);
  const dragThreshold = 5;

  const speed = 0.25; // slower — gentle drift

  useEffect(() => {
    const animate = () => {
      const el = containerRef.current;
      if (el && !isPaused.current && !isDragging.current) {
        scrollPos.current += speed;
        const third = el.scrollWidth / 3;
        if (scrollPos.current >= third) scrollPos.current -= third;
        if (scrollPos.current < 0) scrollPos.current += third;
        el.scrollLeft = scrollPos.current;
      }
      animRef.current = requestAnimationFrame(animate);
    };
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  const onPointerDown = (clientX: number) => {
    isDragging.current = true;
    dragDistance.current = 0;
    const el = containerRef.current;
    if (!el) return;
    startX.current = clientX;
    scrollStart.current = el.scrollLeft;
    el.style.cursor = "grabbing";
  };

  const onPointerMove = (clientX: number) => {
    if (!isDragging.current || !containerRef.current) return;
    const walk = clientX - startX.current;
    dragDistance.current = Math.abs(walk);
    const newScroll = scrollStart.current - walk;
    containerRef.current.scrollLeft = newScroll;
    scrollPos.current = newScroll;
  };

  const onPointerUp = () => {
    isDragging.current = false;
    if (containerRef.current) {
      containerRef.current.style.cursor = "grab";
      // sync position after drag
      scrollPos.current = containerRef.current.scrollLeft;
    }
  };

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <DecorativeStar className="absolute top-8 left-20 animate-sparkle delay-100" color="secondary" size="lg" />
      <DecorativeStar className="absolute bottom-12 right-16 animate-sparkle delay-400" color="primary" size="sm" />

      <div className="max-w-5xl mx-auto px-6 mb-12">
        <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4 animate-fade-up">
          Project Highlights
        </h2>
        <p className="font-body text-muted-foreground text-lg max-w-lg animate-fade-up delay-100">
          Selected works showcasing my approach to design and visual storytelling.{" "}
          <span className="text-xs opacity-50 uppercase tracking-widest">(Drag to scroll)</span>
        </p>
      </div>

      <div
        ref={containerRef}
        className="overflow-x-auto px-6 cursor-grab select-none"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={(e) => { e.preventDefault(); onPointerDown(e.clientX); }}
        onMouseMove={(e) => { e.preventDefault(); onPointerMove(e.clientX); }}
        onMouseUp={onPointerUp}
        onMouseLeave={() => { onPointerUp(); isPaused.current = false; }}
        onMouseEnter={() => { isPaused.current = true; }}
        onTouchStart={(e) => onPointerDown(e.touches[0].clientX)}
        onTouchMove={(e) => onPointerMove(e.touches[0].clientX)}
        onTouchEnd={onPointerUp}
      >
        <div className="flex gap-6 w-max">
          {allProjects.map((project, i) => (
            <Link
              to={`/project/${project.id}`}
              key={`${project.id}-${i}`}
              className="w-64 flex-shrink-0 group"
              onClick={(e) => dragDistance.current > dragThreshold && e.preventDefault()}
              draggable={false}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/5 rounded-2xl scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl" />
                <div className="rounded-2xl aspect-[3/4] mb-4 transition-all group-hover:shadow-xl group-hover:-translate-y-1 relative z-10 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-5">
                    <span className="text-white font-body text-xs uppercase tracking-widest opacity-90">
                      {project.category}
                    </span>
                  </div>
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
};

export default ProjectsSection;
