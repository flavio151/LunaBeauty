import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { categoriiPrincipale } from "@/data/servicii";
import { picsumUrl } from "@/data/galerie";

export default function ServiciiPrincipale() {
  return (
    <section className="bg-ivory py-24 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Ce facem"
          title="Servicii gândite pentru rezultate, nu doar pentru moment"
          description="Fiecare tratament începe cu o discuție scurtă despre ce îți dorești, ca rezultatul să arate firesc pe tine."
        />

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categoriiPrincipale.map((cat) => (
            <Link
              key={cat.nume}
              href={cat.href}
              className="group block overflow-hidden rounded-sm bg-blush/40"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={picsumUrl(cat.imagine, 500, 620)}
                  alt={cat.nume}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                  className="object-cover sepia-[0.15] saturate-[0.85] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-ink">{cat.nume}</h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
                  {cat.descriere}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
