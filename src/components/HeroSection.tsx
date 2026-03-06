import DecorativeStar from "./DecorativeStar";
import profileImg from "@/assets/profile.png";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
    {/* Decorative elements */}
    <DecorativeStar className="absolute top-16 left-12 animate-sparkle" color="accent" size="sm" />
    <DecorativeStar className="absolute top-24 right-20 animate-sparkle delay-300" color="primary" size="lg" />
    <DecorativeStar className="absolute bottom-32 left-1/4 animate-sparkle delay-200" color="secondary" size="md" />
    <DecorativeStar className="absolute top-1/3 right-12 animate-sparkle delay-100" color="accent" size="sm" />
    <DecorativeStar className="absolute bottom-20 right-1/3 animate-sparkle delay-400" color="primary" size="sm" />

    {/* Floating shapes */}
    <div className="absolute top-20 right-1/4 w-24 h-24 bg-secondary rounded-full opacity-50 animate-float" />
    <div className="absolute bottom-40 left-16 w-14 h-14 bg-accent/20 rounded-full animate-float delay-200" />
    <div className="absolute top-1/2 left-8 w-10 h-10 bg-primary/10 rounded-full animate-float delay-300" />

    {/* Wavy line decoration */}
    <svg className="absolute bottom-24 left-1/2 -translate-x-1/2 w-64 opacity-30" viewBox="0 0 200 20" fill="none">
      <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" stroke="hsl(var(--accent))" strokeWidth="3" fill="none" />
    </svg>

    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <div className="text-left">
        <p className="font-body text-muted-foreground text-sm mb-3 tracking-[0.3em] uppercase animate-fade-up">
          UI/UX Design Student
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black leading-[0.85] mb-6 animate-fade-up delay-100">
          <span className="text-primary">Port</span>
          <br />
          <span className="text-foreground">fol</span>
          <span className="text-primary">io</span>
        </h1>
        <div className="flex items-center gap-3 mb-6 animate-fade-up delay-200">
          <div className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full font-body font-semibold text-sm tracking-wide">
            UI/UX Designer
          </div>
          <div className="inline-block bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-body font-medium text-xs">
            2025 Edition
          </div>
        </div>
        <p className="font-body text-muted-foreground max-w-sm text-base leading-relaxed mb-8 animate-fade-up delay-300">
          A passionate design student exploring the intersection of user experience, interface design, and creative problem-solving.
        </p>
        <div className="flex gap-4 animate-fade-up delay-400">
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-7 py-3 rounded-full font-body font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            View Projects ↓
          </a>
          <a
            href="#contact"
            className="border-2 border-foreground/20 text-foreground px-7 py-3 rounded-full font-body font-semibold text-sm hover:bg-foreground/5 transition-colors"
          >
            Say Hello
          </a>
        </div>
      </div>

      <div className="relative flex justify-center animate-fade-up delay-200">
        {/* Blob background */}
        <div className="absolute -inset-4 bg-primary/10 rounded-[3rem] rotate-3 animate-float" />
        <div className="absolute -inset-4 bg-secondary/20 rounded-[3rem] -rotate-2 animate-float delay-200" />
        <div className="relative bg-card rounded-[2rem] p-3 shadow-xl border border-border">
          <div className="w-64 h-72 md:w-72 md:h-80 bg-muted rounded-[1.5rem] overflow-hidden">
            <img src={profileImg} alt="Design Student" className="w-full h-full object-cover" />
          </div>
          <div className="mt-3 px-2 pb-1">
            <p className="font-display font-bold text-foreground text-sm">Design Student</p>
            <p className="font-body text-xs text-muted-foreground">📍 Aspiring UI/UX Designer</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
