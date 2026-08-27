import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import Locatie from "@/components/sections/Locatie";
import { site, program } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Programează-te la Luna Beauty: telefon, email, adresă, program și formular de contact.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-ivory py-20 md:py-24">
        <Container className="grid gap-14 md:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Contact"
              title="Hai să stabilim programarea"
              description="Completează formularul sau scrie-ne direct — alegi tu ce ți-e mai la îndemână."
            />

            <ul className="mt-10 flex flex-col gap-5 font-body text-sm">
              <li className="flex justify-between border-b border-ink/10 pb-4">
                <span className="text-ink/50">Telefon</span>
                <a href={site.telefonHref} className="text-ink hover:text-wine">
                  {site.telefon}
                </a>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-4">
                <span className="text-ink/50">Email</span>
                <a href={`mailto:${site.email}`} className="text-ink hover:text-wine">
                  {site.email}
                </a>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-4">
                <span className="text-ink/50">Adresă</span>
                <span className="text-ink">{site.adresa}</span>
              </li>
              <li className="flex justify-between border-b border-ink/10 pb-4">
                <span className="text-ink/50">Instagram</span>
                <a
                  href={site.instagramHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-wine"
                >
                  {site.instagram}
                </a>
              </li>
              {program.map((p) => (
                <li key={p.zi} className="flex justify-between text-ink/60">
                  <span>{p.zi}</span>
                  <span>{p.interval}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm bg-blush/30 p-8">
            <ContactForm />
          </div>
        </Container>
      </section>

      <Locatie />
    </>
  );
}
