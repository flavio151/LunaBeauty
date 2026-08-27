import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { picsumUrl } from "@/data/galerie";

export const metadata: Metadata = {
  title: "Despre noi",
  description:
    "Povestea salonului Luna Beauty, echipa de specialiste și valorile care ne ghidează în fiecare tratament.",
};

const echipa = [
  {
    nume: "Diana Rusu",
    rol: "Fondatoare & specialist îngrijire facială",
    bio: "Cu peste 12 ani de experiență, Diana a pus bazele Luna Beauty pornind de la o singură cabină de tratamente.",
    imagine: "echipa-1",
  },
  {
    nume: "Larisa Ionescu",
    rol: "Specialist unghii",
    bio: "Certificată în tehnici avansate de manichiură, Larisa e cunoscută pentru finețea lucrului în detaliu.",
    imagine: "echipa-2",
  },
  {
    nume: "Mihaela Toma",
    rol: "Coafor & stilist",
    bio: "A lucrat în echipe de imagine pentru evenimente și aduce aceeași atenție la fiecare programare.",
    imagine: "echipa-3",
  },
];

const valori = [
  {
    titlu: "Produse profesionale",
    text: "Folosim exclusiv linii de produse testate dermatologic, potrivite pentru piele sensibilă.",
  },
  {
    titlu: "Igienă riguroasă",
    text: "Sterilizăm toate instrumentele conform standardelor sanitare, la fiecare programare.",
  },
  {
    titlu: "Timp fără grabă",
    text: "Programăm suficient timp pentru fiecare tratament, ca rezultatul să nu fie compromis.",
  },
];

export default function DespreNoiPage() {
  return (
    <>
      <section className="bg-night py-20 text-ivory md:py-24">
        <Container className="grid items-center gap-14 md:grid-cols-2">
          <SectionHeading
            eyebrow="Despre noi"
            title="Am pornit de la o idee simplă: femeile merită timp doar pentru ele"
            description="Luna Beauty a apărut în 2016, dintr-o cabină mică de tratamente faciale. Astăzi suntem o echipă de șase specialiste, dar am păstrat același principiu: fiecare clientă e ascultată înainte de a fi tratată."
            tone="light"
          />
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src={picsumUrl("luna-despre-noi", 800, 1000)}
              alt="Interiorul salonului Luna Beauty"
              fill
              sizes="(min-width: 768px) 45vw, 90vw"
              className="object-cover sepia-[0.15] saturate-[0.85]"
            />
          </div>
        </Container>
      </section>

      <section className="bg-ivory py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Valori" title="Ce ne ghidează în fiecare zi" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {valori.map((v) => (
              <div key={v.titlu} className="border-t border-ink/15 pt-5">
                <h3 className="font-display text-lg text-ink">{v.titlu}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{v.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-blush/30 py-20 md:py-24">
        <Container>
          <SectionHeading eyebrow="Echipa" title="Specialistele care au grijă de tine" />
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {echipa.map((m) => (
              <div key={m.nume}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
                  <Image
                    src={picsumUrl(m.imagine, 500, 620)}
                    alt={m.nume}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover grayscale-[0.2] sepia-[0.12]"
                  />
                </div>
                <h3 className="mt-5 font-display text-lg text-ink">{m.nume}</h3>
                <p className="font-body text-xs uppercase tracking-widest2 text-wine">{m.rol}</p>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">{m.bio}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
