"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MoonMark from "@/components/ui/MoonMark";
import { LinkButton } from "@/components/ui/Button";
import { site } from "@/data/site";

const linkuri = [
  { href: "/", label: "Acasă" },
  { href: "/servicii", label: "Servicii" },
  { href: "/despre-noi", label: "Despre noi" },
  { href: "/galerie", label: "Galerie" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [deschis, setDeschis] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-ivory/10 bg-night/95 backdrop-blur">
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="/"
          className="flex items-center gap-2 font-display text-xl tracking-wide text-ivory"
          onClick={() => setDeschis(false)}
        >
          <MoonMark className="text-gold" />
          {site.nume}
        </Link>

        <ul className="hidden items-center gap-9 md:flex">
          {linkuri.map((link) => {
            const activ = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`font-body text-sm tracking-wide transition-colors ${
                    activ ? "text-gold" : "text-ivory/80 hover:text-ivory"
                  }`}
                  aria-current={activ ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <LinkButton href={site.bookingHref} variant="primary" className="px-6 py-2.5">
            Programează-te
          </LinkButton>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 md:hidden"
          aria-label={deschis ? "Închide meniul" : "Deschide meniul"}
          aria-expanded={deschis}
          onClick={() => setDeschis((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ivory transition-transform ${
              deschis ? "translate-y-1.5 rotate-45" : ""
            }`}
          />
          <span className={`h-px w-6 bg-ivory transition-opacity ${deschis ? "opacity-0" : ""}`} />
          <span
            className={`h-px w-6 bg-ivory transition-transform ${
              deschis ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {deschis && (
        <div className="border-t border-ivory/10 px-6 pb-8 pt-4 md:hidden">
          <ul className="flex flex-col gap-5">
            {linkuri.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-base text-ivory/85"
                  onClick={() => setDeschis(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <LinkButton
            href={site.bookingHref}
            variant="primary"
            className="mt-6 w-full"
            onClick={() => setDeschis(false)}
          >
            Programează-te
          </LinkButton>
        </div>
      )}
    </header>
  );
}
