import DecorativeStar from "./DecorativeStar";
import studentPhoto from "@/assets/student-photo.png";

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
          I'm a <span className="font-semibold text-foreground">UI/UX design student</span> passionate
          about creating intuitive and beautiful digital experiences. I love{" "}
          <em className="text-primary font-medium">learning new design principles</em> and{" "}
          <em className="text-primary font-medium">solving real user problems</em> through thoughtful interfaces.
        </p>
        <p className="font-body text-muted-foreground text-lg leading-relaxed mb-8">
          Currently studying and building my portfolio — eager to grow, collaborate, and bring fresh ideas to the design world.
        </p>
        <div className="flex flex-wrap gap-3">
          {["UI Design", "UX Research", "Wireframing", "Prototyping", "Figma"].map((skill) => (
            <span
              key={skill}
              className="bg-secondary text-secondary-foreground px-4 py-1.5 rounded-full font-body text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <div className="animate-fade-up delay-200 flex justify-center">
        <div className="relative">
          {/* Decorative background blobs */}
          <div className="absolute -inset-6 bg-primary/10 rounded-[2.5rem] rotate-3" />
          <div className="absolute -inset-6 bg-accent/10 rounded-[2.5rem] -rotate-2" />
          <img
            src={studentPhoto}
            alt="Design student"
            className="relative w-72 h-80 object-cover rounded-2xl shadow-lg border-4 border-card"
          />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
