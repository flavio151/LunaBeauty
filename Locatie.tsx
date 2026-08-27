import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function Locatie() {
  return (
    <section className="bg-ivory py-24 md:py-28">
      <Container className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Locație"
            title="Ne găsești ușor, în centrul orașului"
            description={site.adresa}
          />
          <p className="mt-6 font-body text-sm text-ink/60">
            Parcare disponibilă în apropiere. Pentru indicații detaliate, sună-ne
            la {site.telefon}.
          </p>
        </div>

        <div className="aspect-[4/3] w-full overflow-hidden rounded-sm border border-ink/10">
          <iframe
            src={site.mapsEmbedSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Locația salonului ${site.nume} pe hartă`}
          />
        </div>
      </Container>
    </section>
  );
}
