import { useState } from "react";
import DecorativeStar from "./DecorativeStar";

const ContactSection = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contact" className="relative px-6 py-24">
      <DecorativeStar className="absolute top-12 right-24 animate-sparkle" color="accent" size="md" />
      <DecorativeStar className="absolute bottom-8 left-16 animate-sparkle delay-200" color="primary" size="sm" />

      <div className="max-w-3xl mx-auto text-center animate-fade-up">
        <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4">
          Let's Connect
        </h2>
        <p className="font-body text-muted-foreground text-lg mb-12">
          Have a project in mind? I'd love to hear from you.
        </p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left">
          <input
            required
            type="text"
            placeholder="Your name"
            className="w-full bg-card border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <input
            required
            type="email"
            placeholder="Email"
            className="w-full bg-card border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <textarea
            required
            rows={4}
            placeholder="Your message"
            className="w-full bg-card border border-border rounded-xl px-5 py-3 font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 resize-none"
          />
          <button
            type="submit"
            className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity"
          >
            {sent ? "✓ Sent!" : "Send Message"}
          </button>
        </form>

        <div className="mt-16 flex justify-center gap-8 font-body text-sm text-muted-foreground">
          <span>📍 Indonesia</span>
          <span>📧 hello@designer.com</span>
          <span>🔗 LinkedIn</span>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
