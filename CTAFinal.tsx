import Container from "@/components/ui/Container";
import CrescentDivider from "@/components/ui/CrescentDivider";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/data/site";

export default function CTAFinal() {
  return (
    <section className="bg-night py-24 text-center text-ivory md:py-28">
      <Container>
        <CrescentDivider tone="light" />
        <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl leading-tight md:text-4xl">
          Rezervă-ți timpul pentru tine
        </h2>
        <p className="mx-auto mt-4 max-w-md font-body text-sm text-ivory/65">
          Un mesaj sau un telefon e tot ce ai nevoie ca să-ți faci loc în agenda noastră.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <LinkButton href={site.bookingHref} variant="primary">
            Programează-te acum
          </LinkButton>
          <LinkButton href={site.telefonHref} variant="outline-light">
            Sună la {site.telefon}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
