import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { picsumUrl } from "@/data/galerie";

const reperele = [
  { cifra: "9", eticheta: "ani de activitate" },
  { cifra: "6", eticheta: "specialiste dedicate" },
  { cifra: "2.400+", eticheta: "clienți mulțumite" },
];

export default function DespreSalon() {
  return (
    <section className="bg-blush/30 py-24 md:py-28">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
          <Image
            src={picsumUrl("luna-despre", 800, 1000)}
            alt="O specialistă Luna Beauty pregătind un tratament"
            fill
            sizes="(min-width: 768px) 45vw, 90vw"
            className="object-cover sepia-[0.15] saturate-[0.85]"
          />
        </div>

        <div>
          <SectionHeading
            eyebrow="Despre salon"
            title="Un salon mic, cu atenție mare la detalii"
            description="Luna Beauty a pornit din dorința de a oferi femeilor un loc unde își pot lua timp pentru ele, fără grabă și fără compromisuri pe calitate. Lucrăm doar cu produse profesionale și ne actualizăm constant tehnicile, ca fiecare vizită să merite."
          />

          <div className="mt-10 flex gap-10">
            {reperele.map((r) => (
              <div key={r.eticheta}>
                <p className="font-display text-3xl text-wine">{r.cifra}</p>
                <p className="mt-1 font-body text-xs text-ink/55">{r.eticheta}</p>
              </div>
            ))}
          </div>

          <LinkButton href="/despre-noi" variant="outline-dark" className="mt-10">
            Povestea salonului
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
