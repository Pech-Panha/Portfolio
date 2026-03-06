import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import DecorativeStar from "@/components/DecorativeStar";
import { useEffect } from "react";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);
  const currentIndex = projects.findIndex((p) => p.id === id);
  const otherProjects = projects.filter((p) => p.id !== id);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="font-display text-4xl font-black text-foreground mb-4">Project not found</h1>
          <Link to="/" className="font-body text-primary hover:underline">← Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <div className="bg-background min-h-screen antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
          >
            <span className="inline-block group-hover:-translate-x-1 transition-transform">←</span>
            <span>Portfolio</span>
          </Link>
          <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-primary bg-primary/10 px-4 py-1.5 rounded-full">
            {project.category}
          </span>
        </div>
      </nav>

      <main className="pt-28 pb-16">
        {/* Hero: Side-by-side on desktop */}
        <section className="max-w-5xl mx-auto px-6 mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div className="animate-fade-up">
              <div className="flex items-center gap-3 mb-6">
                <DecorativeStar className="animate-sparkle" color="primary" size="sm" />
                <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                  {project.category}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 leading-tight">
                {project.title}
              </h1>
              <p className="font-body text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                {project.shortDesc}
              </p>
              <div className="flex flex-wrap gap-3">
                {project.linkUrl && project.linkType && (
                  <a
                    href={project.linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-body text-sm font-semibold hover:opacity-90 transition-opacity"
                  >
                    Open {project.linkType} ↗
                  </a>
                )}
                <Link
                  to="/#projects"
                  className="inline-flex items-center gap-2 border-2 border-border text-foreground px-6 py-3 rounded-full font-body text-sm font-semibold hover:bg-muted transition-colors"
                >
                  All Projects
                </Link>
              </div>
            </div>

            {/* Right: Image */}
            <div className="animate-fade-up delay-100 flex justify-center">
              <div className="relative">
                <div className="absolute -inset-4 bg-primary/8 rounded-[2.5rem] rotate-2 animate-float" />
                <div className="absolute -inset-4 bg-accent/8 rounded-[2.5rem] -rotate-1 animate-float delay-200" />
                <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-card">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About the Project */}
        <section className="max-w-5xl mx-auto px-6 mb-20 animate-fade-up delay-200">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-border shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-1 bg-primary rounded-full" />
              <h2 className="font-display text-2xl font-bold text-foreground">About This Project</h2>
            </div>
            <div className="font-body text-foreground/75 text-base md:text-lg leading-relaxed whitespace-pre-wrap">
              {project.longDesc}
            </div>
          </div>
        </section>

        {/* Prev / Next Navigation */}
        <section className="max-w-5xl mx-auto px-6 mb-20 animate-fade-up delay-300">
          <div className="grid grid-cols-2 gap-4">
            {prevProject ? (
              <Link
                to={`/project/${prevProject.id}`}
                className="group bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center gap-4"
              >
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                  <img src={prevProject.image} alt={prevProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="min-w-0">
                  <span className="font-body text-xs text-muted-foreground">← Previous</span>
                  <p className="font-display text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {prevProject.title}
                  </p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextProject ? (
              <Link
                to={`/project/${nextProject.id}`}
                className="group bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all flex items-center gap-4 justify-end text-right"
              >
                <div className="min-w-0">
                  <span className="font-body text-xs text-muted-foreground">Next →</span>
                  <p className="font-display text-sm font-bold text-foreground truncate group-hover:text-primary transition-colors">
                    {nextProject.title}
                  </p>
                </div>
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 border border-border">
                  <img src={nextProject.image} alt={nextProject.title} className="w-full h-full object-cover" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </section>

        {/* Explore Other Works */}
        <section className="border-t border-border pt-16">
          <div className="max-w-5xl mx-auto px-6 mb-8">
            <h2 className="font-display text-3xl font-black text-foreground mb-2">Explore More</h2>
            <p className="font-body text-sm text-muted-foreground">
              Swipe to discover other projects
            </p>
          </div>

          <div
            className="flex overflow-x-auto gap-5 px-6 snap-x snap-mandatory pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {otherProjects.map((other) => (
              <Link
                to={`/project/${other.id}`}
                key={other.id}
                className="snap-start flex-none group w-48"
              >
                <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 border border-border">
                  <img src={other.image} alt={other.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-3 px-1">
                  <span className="font-body text-[10px] font-semibold uppercase tracking-widest text-primary">
                    {other.category}
                  </span>
                  <h4 className="font-display text-sm font-bold text-foreground group-hover:text-primary transition-colors leading-tight mt-0.5">
                    {other.title}
                  </h4>
                </div>
              </Link>
            ))}
            <div className="flex-none w-8" />
          </div>
        </section>
      </main>

      <footer className="py-10 text-center border-t border-border">
        <p className="font-body text-xs text-muted-foreground">
          © 2025 Portfolio • Crafted with care
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
