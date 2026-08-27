import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MoonMark from "@/components/ui/MoonMark";
import { site } from "@/data/site";
import { picsumUrl } from "@/data/galerie";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />

      <Container className="relative grid items-center gap-14 py-20 md:grid-cols-2 md:py-28">
        <div>
          <div className="mb-6 flex items-center gap-2 text-gold-light">
            <MoonMark />
            <span className="font-body text-xs uppercase tracking-widest2">
              Salon de înfrumusețare · București
            </span>
          </div>

          <h1 className="font-display text-4xl leading-[1.1] text-ivory sm:text-5xl md:text-6xl">
            {site.tagline}
          </h1>

          <p className="mt-6 max-w-md font-body text-base leading-relaxed text-ivory/70 md:text-lg">
            De la îngrijire facială la coafură și machiaj — un salon gândit
            pentru femeile care vor rezultate vizibile, nu doar o oră de relaxare.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <LinkButton href={site.bookingHref} variant="primary">
              Programează-te acum
            </LinkButton>
            <LinkButton href="/servicii" variant="outline-light">
              Vezi serviciile
            </LinkButton>
          </div>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm md:aspect-[3/4]">
          <Image
            src={picsumUrl("luna-hero", 900, 1150)}
            alt="Interiorul elegant al salonului Luna Beauty"
            fill
            priority
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover sepia-[0.15] saturate-[0.85] contrast-[1.02]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/40 via-transparent to-transparent" />
        </div>
      </Container>
    </section>
  );
}
