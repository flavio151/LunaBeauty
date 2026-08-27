"use client";

import { useState } from "react";
import Image from "next/image";
import { galerie, picsumUrl } from "@/data/galerie";
import { ImagineGalerie } from "@/types";

const filtre: { label: string; valoare: ImagineGalerie["categorie"] | "toate" }[] = [
  { label: "Toate", valoare: "toate" },
  { label: "Facial", valoare: "facial" },
  { label: "Unghii", valoare: "unghii" },
  { label: "Coafură", valoare: "coafura" },
  { label: "Machiaj", valoare: "machiaj" },
  { label: "Interior", valoare: "interior" },
];

export default function GalerieClient() {
  const [activ, setActiv] = useState<(typeof filtre)[number]["valoare"]>("toate");

  const imagini =
    activ === "toate" ? galerie : galerie.filter((img) => img.categorie === activ);

  return (
    <div>
      <div className="flex flex-wrap gap-3" role="group" aria-label="Filtrează galeria după categorie">
        {filtre.map((f) => {
          const selectat = activ === f.valoare;
          return (
            <button
              key={f.valoare}
              type="button"
              onClick={() => setActiv(f.valoare)}
              aria-pressed={selectat}
              className={`rounded-full border px-5 py-2 font-body text-xs uppercase tracking-widest2 transition-colors ${
                selectat
                  ? "border-wine bg-wine text-ivory"
                  : "border-ink/15 text-ink/60 hover:border-wine hover:text-wine"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
        {imagini.map((img) => (
          <div key={img.src} className="relative aspect-square overflow-hidden rounded-sm">
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
    </div>
  );
}
