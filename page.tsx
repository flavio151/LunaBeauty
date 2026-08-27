import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import GalerieClient from "./GalerieClient";

export const metadata: Metadata = {
  title: "Galerie",
  description: "Imagini din interiorul salonului Luna Beauty și din tratamentele oferite.",
};

export default function GaleriePage() {
  return (
    <section className="bg-ivory py-20 md:py-24">
      <Container>
        <SectionHeading
          eyebrow="Galerie"
          title="O privire în interiorul salonului"
          description="Imaginile de mai jos sunt din spațiul nostru și de la câteva dintre tratamentele oferite."
        />
        <div className="mt-12">
          <GalerieClient />
        </div>
      </Container>
    </section>
  );
}
