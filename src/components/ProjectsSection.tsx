import { Link } from "react-router-dom";
import { useRef, useState, useEffect, useCallback } from "react";
import DecorativeStar from "./DecorativeStar";
import { projects } from "@/data/projects";

const allProjects = [...projects, ...projects, ...projects];

const ProjectsSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const animRef = useRef<number>();
  const scrollPos = useRef(0);

  const speed = 0.5; // px per frame
  const dragThreshold = 5;
  const dragDistance = useRef(0);

  const animate = useCallback(() => {
    if (!containerRef.current) {
      animRef.current = requestAnimationFrame(animate);
      return;
    }
    if (!isPaused && !isDragging) {
      scrollPos.current += speed;
      const third = containerRef.current.scrollWidth / 3;
      if (scrollPos.current >= third) scrollPos.current -= third;
      containerRef.current.scrollLeft = scrollPos.current;
    }
    animRef.current = requestAnimationFrame(animate);
  }, [isPaused, isDragging]);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [animate]);

  const onMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragDistance.current = 0;
    setStartX(e.pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !containerRef.current) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    dragDistance.current = Math.abs(walk);
    const newScroll = scrollLeft - walk;
    containerRef.current.scrollLeft = newScroll;
    scrollPos.current = newScroll;
  };

  const onEnd = () => setIsDragging(false);

  const onTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    dragDistance.current = 0;
    setStartX(e.touches[0].pageX - (containerRef.current?.offsetLeft || 0));
    setScrollLeft(containerRef.current?.scrollLeft || 0);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !containerRef.current) return;
    const x = e.touches[0].pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    dragDistance.current = Math.abs(walk);
    const newScroll = scrollLeft - walk;
    containerRef.current.scrollLeft = newScroll;
    scrollPos.current = newScroll;
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
        className={`overflow-x-auto px-6 ${isDragging ? "cursor-grabbing" : "cursor-grab"} select-none`}
        style={{ scrollbarWidth: "none", msOverflowStyle: "none", WebkitOverflowScrolling: "touch" }}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onEnd}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onEnd}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => { onEnd(); setIsPaused(false); }}
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
                <div
                  className="rounded-2xl aspect-[3/4] mb-4 transition-all group-hover:shadow-xl group-hover:-translate-y-1 relative z-10 overflow-hidden"
                >
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
