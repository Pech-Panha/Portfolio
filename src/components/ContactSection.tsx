import { icons } from "lucide-react";
import DecorativeStar from "./DecorativeStar";

const socials = [
  { name: "LinkedIn",   icon: "💼", url: "linkedin.com/in/pech-panha-b233293b3" },
  { name: "Github", icon: "🐈‍⬛", url: "https://github.com/Pech-Panha" },
  // { name: "Facebook", icon: "📰", url: "" },
  // { name: "Instagram", icon: "📸", url: "" },
  { name: "Email", icon: "📧", url: "pechp138@gmail.com" },
];

const ContactSection = () => (
  <section id="contact" className="relative px-6 py-24">
    <DecorativeStar className="absolute top-12 right-24 animate-sparkle" color="accent" size="md" />
    <DecorativeStar className="absolute bottom-8 left-16 animate-sparkle delay-200" color="primary" size="sm" />

    <div className="max-w-3xl mx-auto text-center animate-fade-up">
      <h2 className="font-display text-5xl md:text-6xl font-black text-foreground mb-4">
        Let's Connect
      </h2>
      <p className="font-body text-muted-foreground text-lg mb-12 max-w-md mx-auto">
        I'm always open to new opportunities, collaborations, and conversations about design.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-lg mx-auto">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="group bg-card border border-border rounded-2xl p-6 flex flex-col items-center gap-3 hover:border-primary/40 hover:shadow-lg transition-all"
          >
            <span className="text-3xl group-hover:scale-110 transition-transform">{social.icon}</span>
            <span className="font-body text-sm font-medium text-foreground">{social.name}</span>
          </a>
        ))}
      </div>

      <p className="mt-12 font-body text-muted-foreground text-sm">
        📍 Based in Indonesia · Open to remote opportunities
      </p>
    </div>
  </section>
);

export default ContactSection;
