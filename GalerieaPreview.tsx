import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { galerie, picsumUrl } from "@/data/galerie";

export default function GalerieaPreview() {
  const preview = galerie.slice(0, 6);

  return (
    <section className="bg-ivory py-24 md:py-28">
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow="Galerie" title="Din interiorul salonului" />
          <LinkButton href="/galerie" variant="outline-dark">
            Vezi toată galeria
          </LinkButton>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-3">
          {preview.map((img, i) => (
            <div
              key={img.src}
              className={`relative overflow-hidden rounded-sm ${
                i === 0 ? "col-span-2 aspect-[16/10] md:aspect-[16/9]" : "aspect-square"
              }`}
            >
              <Image
                src={picsumUrl(img.src, 700, 700)}
                alt={img.alt}
                fill
                sizes="(min-width: 768px) 33vw, 50vw"
                className="object-cover sepia-[0.15] saturate-[0.85]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
