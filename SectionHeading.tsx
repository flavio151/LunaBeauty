interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={`max-w-2xl ${isCenter ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`mb-4 block font-body text-xs uppercase tracking-widest2 ${
            isLight ? "text-gold-light" : "text-wine"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-3xl leading-tight md:text-4xl ${
          isLight ? "text-ivory" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 font-body text-base leading-relaxed ${
            isLight ? "text-ivory/70" : "text-ink/65"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
