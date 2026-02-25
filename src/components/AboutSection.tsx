import DecorativeStar from "./DecorativeStar";

const AboutSection = () => (
  <section id="about" className="relative px-6 py-24">
    <DecorativeStar className="absolute top-10 right-16 animate-sparkle" color="primary" size="md" />
    <DecorativeStar className="absolute bottom-16 left-10 animate-sparkle delay-300" color="accent" size="sm" />

    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="animate-fade-up">
        <h2 className="font-display text-6xl md:text-7xl font-black text-foreground mb-2">
          Hello!
        </h2>
        <div className="w-32 h-1 bg-accent rounded-full mb-6" />
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-4">
          I'm a <span className="font-semibold text-foreground">graphic designer</span> passionate
          about visual communication. I love challenging myself to{" "}
          <em className="text-primary font-medium">gain new knowledge</em> and{" "}
          <em className="text-primary font-medium">develop my creativity</em> in fun and meaningful ways.
        </p>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
          I consider myself hard-working, adaptable, and always eager to contribute to projects
          that push creative boundaries.
        </p>
        <div className="flex flex-wrap gap-3">
          {["Brand Design", "UI/UX", "Illustration", "Social Media"].map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full font-body text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="animate-fade-up delay-200">
        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Experience</h3>
          <div className="space-y-5">
            {[
              { period: "2022 — Now", role: "Freelancer & Designer", desc: "Brand design, social posts, UI/UX" },
              { period: "2022", role: "Freelance Designer", desc: "Café branding & visual identity" },
              { period: "2019", role: "Design Intern", desc: "IT Services — illustration & design" },
            ].map((item) => (
              <div key={item.period} className="border-l-2 border-primary pl-4">
                <p className="font-body text-xs text-muted-foreground italic">{item.period}</p>
                <p className="font-body font-semibold text-foreground">{item.role}</p>
                <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
