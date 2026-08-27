import Hero from "@/components/sections/Hero";
import ServiciiPrincipale from "@/components/sections/ServiciiPrincipale";
import DespreSalon from "@/components/sections/DespreSalon";
import GalerieaPreview from "@/components/sections/GalerieaPreview";
import Testimoniale from "@/components/sections/Testimoniale";
import Program from "@/components/sections/Program";
import Locatie from "@/components/sections/Locatie";
import CTAFinal from "@/components/sections/CTAFinal";
import ContactForm from "@/components/forms/ContactForm";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { site } from "@/data/site";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServiciiPrincipale />
      <DespreSalon />
      <GalerieaPreview />
      <Testimoniale />
      <Program />
      <Locatie />

      <section id="contact" className="bg-blush/30 py-24 md:py-28">
        <Container className="grid gap-14 md:grid-cols-2">
          <SectionHeading
            eyebrow="Programează-te"
            title="Scrie-ne și stabilim împreună data potrivită"
            description={`Răspundem de obicei în aceeași zi. Pentru urgențe, sună direct la ${site.telefon}.`}
          />
          <ContactForm />
        </Container>
      </section>

      <CTAFinal />
    </>
  );
}
