import DecorativeStar from "./DecorativeStar";

const HeroSection = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
    {/* Decorative elements */}
    <DecorativeStar className="absolute top-16 left-12 animate-sparkle" color="accent" size="sm" />
    <DecorativeStar className="absolute top-24 right-20 animate-sparkle delay-300" color="primary" size="lg" />
    <DecorativeStar className="absolute bottom-32 left-1/4 animate-sparkle delay-200" color="secondary" size="md" />
    <DecorativeStar className="absolute top-1/3 right-12 animate-sparkle delay-100" color="accent" size="sm" />
    <DecorativeStar className="absolute bottom-20 right-1/3 animate-sparkle delay-400" color="primary" size="sm" />

    {/* Floating shapes */}
    <div className="absolute top-20 right-1/4 w-20 h-20 bg-secondary rounded-full opacity-60 animate-float" />
    <div className="absolute bottom-40 left-16 w-12 h-12 bg-accent/30 rounded-full animate-float delay-200" />

    <div className="max-w-5xl mx-auto text-center">
      <p className="font-body text-muted-foreground text-lg mb-4 tracking-widest uppercase animate-fade-up">
        Creative Portfolio
      </p>
      <h1 className="font-display text-7xl md:text-9xl font-black text-primary leading-none mb-6 animate-fade-up delay-100">
        Port
        <br />
        <span className="text-foreground">fol</span>
        <span className="text-primary">io</span>
      </h1>
      <div className="inline-block bg-accent text-accent-foreground px-6 py-2 rounded-full font-body font-semibold text-sm tracking-wide mb-8 animate-fade-up delay-200">
        Graphic Designer
      </div>
      <p className="font-body text-muted-foreground max-w-md mx-auto text-lg animate-fade-up delay-300">
        Crafting visual stories through design, illustration & creative direction.
      </p>
      <a
        href="#about"
        className="inline-block mt-10 bg-primary text-primary-foreground px-8 py-3 rounded-full font-body font-semibold hover:opacity-90 transition-opacity animate-fade-up delay-400"
      >
        Explore My Work ↓
      </a>
    </div>
  </section>
);

export default HeroSection;
