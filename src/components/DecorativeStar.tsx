interface Props {
  className?: string;
  color?: "primary" | "accent" | "secondary";
  size?: "sm" | "md" | "lg";
}

const colors = {
  primary: "text-primary",
  accent: "text-accent",
  secondary: "text-secondary",
};
const sizes = { sm: "w-4 h-4", md: "w-6 h-6", lg: "w-8 h-8" };

const DecorativeStar = ({ className = "", color = "primary", size = "md" }: Props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={`${colors[color]} ${sizes[size]} ${className}`}>
    <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5Z" />
  </svg>
);

export default DecorativeStar;
