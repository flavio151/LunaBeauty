import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimoniale } from "@/data/testimoniale";

function Stea() {
  return (
    <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.5 6 .7-4.5 4.1 1.2 6-5.3-3-5.3 3 1.2-6-4.5-4.1 6-.7L10 1.5z" />
    </svg>
  );
}

export default function Testimoniale() {
  return (
    <section className="bg-night py-24 text-ivory md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ce spun clientele"
          title="Încrederea lor e cea mai bună recomandare"
          align="center"
          tone="light"
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimoniale.map((t) => (
            <figure
              key={t.nume}
              className="rounded-sm border border-ivory/10 bg-ivory/[0.04] p-8"
            >
              <div className="flex gap-1 text-gold" aria-label={`${t.rating} din 5 stele`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Stea key={i} />
                ))}
              </div>
              <blockquote className="mt-5 font-body text-sm leading-relaxed text-ivory/80">
                „{t.text}”
              </blockquote>
              <figcaption className="mt-6 font-body text-sm">
                <span className="text-ivory">{t.nume}</span>
                <span className="text-ivory/50"> · {t.rol}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
