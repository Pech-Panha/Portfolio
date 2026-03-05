import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import DecorativeStar from "@/components/DecorativeStar";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);
  const otherProjects = projects.filter((p) => p.id !== id);

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

  return (
    <div className="bg-background min-h-screen antialiased">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-border">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <Link
            to="/"
            className="font-body text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-all flex items-center gap-2"
          >
            <span>←</span> Back
          </Link>
          <div className="font-body text-[9px] font-black uppercase tracking-[0.3em] text-primary">
            {project.category}
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <header className="text-center mb-16 animate-fade-up">
            <DecorativeStar className="inline-block mb-4 animate-sparkle" color="primary" size="lg" />
            <h1 className="font-display text-5xl md:text-7xl italic font-black text-foreground mb-8 leading-tight tracking-tight">
              {project.title}
            </h1>
            <p className="max-w-xl mx-auto font-body text-sm text-muted-foreground leading-relaxed italic border-l-2 border-primary pl-4 text-left">
              {project.shortDesc}
            </p>
          </header>

          {/* Hero Image / Color Block */}
          <div className="flex justify-center mb-24 animate-fade-up delay-100">
            <div className="w-full max-w-sm aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl border-[12px] border-card">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Brief + Link */}
          <div className="grid md:grid-cols-3 gap-12 mb-32 border-t border-border pt-16 animate-fade-up delay-200">
            <div className="md:col-span-1">
              <h3 className="font-body text-[10px] font-bold uppercase text-muted-foreground mb-6 tracking-widest italic">
                The Brief
              </h3>
              {project.linkUrl && project.linkType && (
                <a
                  href={project.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-body text-[9px] font-bold uppercase tracking-widest hover:bg-primary transition-all"
                >
                  Open {project.linkType} ↗
                </a>
              )}
            </div>
            <div className="md:col-span-2">
              <div className="font-body text-lg leading-relaxed text-foreground/80 whitespace-pre-wrap font-medium">
                {project.longDesc}
              </div>
            </div>
          </div>
        </div>

        {/* Explore Other Works */}
        <section className="mt-20 border-t border-border pt-20 pb-20">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-end mb-10">
            <div>
              <h2 className="font-display text-4xl italic font-black text-foreground">Explore Works</h2>
              <p className="font-body text-[10px] font-bold uppercase text-muted-foreground tracking-widest mt-2">
                Swipe horizontally to see all projects
              </p>
            </div>
            <div className="flex gap-2">
              <div className="w-8 h-[2px] bg-primary" />
              <div className="w-4 h-[2px] bg-border" />
            </div>
          </div>

          <div className="flex overflow-x-auto gap-8 px-8 snap-x snap-mandatory" style={{ scrollbarWidth: "none" }}>
            {otherProjects.map((other) => (
              <Link
                to={`/project/${other.id}`}
                key={other.id}
                className="snap-start flex-none group w-[280px]"
              >
                <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-md group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500 border border-border">
                  <img src={other.image} alt={other.title} className="w-full h-full object-cover" />
                </div>
                <div className="mt-6 px-2">
                  <span className="font-body text-[9px] font-black uppercase tracking-[0.2em] text-primary block mb-1">
                    {other.category}
                  </span>
                  <h4 className="font-display text-xl italic font-black text-foreground group-hover:text-primary transition-colors">
                    {other.title}
                  </h4>
                </div>
              </Link>
            ))}
            <div className="flex-none w-20" />
          </div>
        </section>
      </main>

      <footer className="py-12 text-center border-t border-border">
        <p className="font-body text-[9px] font-bold text-muted-foreground uppercase tracking-[0.4em]">
          © 2026 Portfolio • Refined Edition
        </p>
      </footer>
    </div>
  );
};

export default ProjectDetail;
