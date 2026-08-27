import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import CrescentDivider from "@/components/ui/CrescentDivider";
import { LinkButton } from "@/components/ui/Button";
import { servicii } from "@/data/servicii";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: "Servicii",
  description:
    "Îngrijire facială, manichiură, coafură, masaj, sprâncene și machiaj profesional — toate serviciile salonului Luna Beauty, cu prețuri de la.",
};

const categorii = Array.from(new Set(servicii.map((s) => s.categorie)));

function slugCategorie(categorie: string) {
  return categorie
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ServiciiPage() {
  return (
    <>
      <section className="bg-night py-20 text-center text-ivory md:py-24">
        <Container>
          <SectionHeading
            eyebrow="Servicii"
            title="Tratamente pentru fiecare nevoie, fără compromisuri"
            align="center"
            tone="light"
          />
        </Container>
      </section>

      {categorii.map((categorie, idx) => {
        const serviciiCategorie = servicii.filter((s) => s.categorie === categorie);
        return (
          <section
            key={categorie}
            id={slugCategorie(categorie)}
            className={`py-20 md:py-24 ${idx % 2 === 1 ? "bg-blush/30" : "bg-ivory"}`}
          >
            <Container>
              <h2 className="font-display text-2xl text-ink md:text-3xl">{categorie}</h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {serviciiCategorie.map((s) => (
                  <div
                    key={s.slug}
                    className="flex items-start justify-between gap-6 border-b border-ink/10 pb-6"
                  >
                    <div>
                      <h3 className="font-display text-lg text-ink">{s.nume}</h3>
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                        {s.descriere}
                      </p>
                      <p className="mt-2 font-body text-xs uppercase tracking-widest2 text-ink/40">
                        {s.durata}
                      </p>
                    </div>
                    <p className="whitespace-nowrap font-display text-lg text-wine">
                      de la {s.pretDeLa} lei
                    </p>
                  </div>
                ))}
              </div>
            </Container>
          </section>
        );
      })}

      <section className="bg-night py-20 text-center text-ivory md:py-24">
        <Container>
          <CrescentDivider tone="light" />
          <h2 className="mx-auto mt-4 max-w-lg font-display text-2xl md:text-3xl">
            Nu știi exact ce ți se potrivește?
          </h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-ivory/65">
            Scrie-ne câteva cuvinte despre ce îți dorești și te ajutăm să alegi tratamentul potrivit.
          </p>
          <LinkButton href={site.bookingHref} variant="primary" className="mt-8">
            Programează-te
          </LinkButton>
        </Container>
      </section>
    </>
  );
}
