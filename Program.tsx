import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { program, site } from "@/data/site";

export default function Program() {
  return (
    <section className="bg-blush/30 py-24 md:py-28">
      <Container className="grid items-center gap-14 md:grid-cols-2">
        <SectionHeading
          eyebrow="Program"
          title="Te așteptăm în majoritatea zilelor săptămânii"
          description="Programările se fac în avans, ca fiecare clientă să beneficieze de timpul cuvenit, fără grabă."
        />

        <div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {program.map((p) => (
              <li key={p.zi} className="flex items-center justify-between py-4 font-body text-sm">
                <span className="text-ink">{p.zi}</span>
                <span className="text-ink/60">{p.interval}</span>
              </li>
            ))}
          </ul>
          <LinkButton href={site.bookingHref} variant="primary" className="mt-8">
            Programează-te acum
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
