import Link from "next/link";
import MoonMark from "@/components/ui/MoonMark";
import { site, program } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-night text-ivory">
      <div className="mx-auto max-w-content px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 font-display text-xl">
              <MoonMark className="text-gold" />
              {site.nume}
            </Link>
            <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-ivory/60">
              {site.descriere}
            </p>
            <a
              href={site.instagramHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block font-body text-sm text-gold-light hover:text-gold"
            >
              {site.instagram} pe Instagram
            </a>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-ivory/50">
              Navigare
            </h3>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-ivory/75">
              <li><Link href="/servicii" className="hover:text-ivory">Servicii</Link></li>
              <li><Link href="/despre-noi" className="hover:text-ivory">Despre noi</Link></li>
              <li><Link href="/galerie" className="hover:text-ivory">Galerie</Link></li>
              <li><Link href="/contact" className="hover:text-ivory">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-body text-xs uppercase tracking-widest2 text-ivory/50">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-3 font-body text-sm text-ivory/75">
              <li>
                <a href={site.telefonHref} className="hover:text-ivory">{site.telefon}</a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-ivory">{site.email}</a>
              </li>
              <li className="text-ivory/60">{site.adresa}</li>
            </ul>
            <ul className="mt-5 flex flex-col gap-1 font-body text-xs text-ivory/50">
              {program.map((p) => (
                <li key={p.zi} className="flex justify-between gap-4">
                  <span>{p.zi}</span>
                  <span>{p.interval}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/45 md:flex-row">
          <p>© {new Date().getFullYear()} {site.nume}. Toate drepturile rezervate.</p>
          <p>Salon de înfrumusețare · București</p>
        </div>
      </div>
    </footer>
  );
}
