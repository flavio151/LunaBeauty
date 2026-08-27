"use client";

import { FormEvent, useState } from "react";
import Button from "@/components/ui/Button";

interface Erori {
  nume?: string;
  email?: string;
  telefon?: string;
  mesaj?: string;
}

const serviciiOptiuni = [
  "Îngrijire facială",
  "Manichiură & Pedichiură",
  "Coafură & Styling",
  "Masaj & Relaxare",
  "Sprâncene & Gene",
  "Machiaj profesional",
  "Nu sunt sigură încă",
];

export default function ContactForm() {
  const [erori, setErori] = useState<Erori>({});
  const [trimis, setTrimis] = useState(false);

  function valideaza(data: FormData): Erori {
    const noi: Erori = {};
    const nume = String(data.get("nume") || "").trim();
    const email = String(data.get("email") || "").trim();
    const telefon = String(data.get("telefon") || "").trim();
    const mesaj = String(data.get("mesaj") || "").trim();

    if (nume.length < 2) noi.nume = "Te rugăm să introduci numele tău.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      noi.email = "Adresa de email nu pare validă.";
    }
    if (telefon && !/^[0-9+()\s-]{7,}$/.test(telefon)) {
      noi.telefon = "Numărul de telefon nu pare valid.";
    }
    if (mesaj.length < 10) {
      noi.mesaj = "Spune-ne câteva cuvinte în plus despre ce ai nevoie.";
    }
    return noi;
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const noi = valideaza(data);
    setErori(noi);
    if (Object.keys(noi).length === 0) {
      // Aici se conectează un serviciu real de trimitere (ex: Resend, Formspree,
      // sau un API route Next.js propriu). Vezi README.md, secțiunea „Formular".
      setTrimis(true);
      e.currentTarget.reset();
    }
  }

  if (trimis) {
    return (
      <div className="rounded-sm border border-wine/20 bg-blush/40 p-8 text-center">
        <p className="font-display text-xl text-ink">Mesaj trimis</p>
        <p className="mt-3 font-body text-sm text-ink/65">
          Îți răspundem în cel mult o zi lucrătoare, ca să stabilim programarea.
        </p>
        <button
          type="button"
          onClick={() => setTrimis(false)}
          className="mt-5 font-body text-sm text-wine underline underline-offset-4"
        >
          Trimite un alt mesaj
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="nume" className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ink/60">
            Nume
          </label>
          <input
            id="nume"
            name="nume"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!erori.nume}
            aria-describedby={erori.nume ? "nume-eroare" : undefined}
            className="w-full rounded-sm border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-wine"
          />
          {erori.nume && (
            <p id="nume-eroare" className="mt-1.5 font-body text-xs text-wine">
              {erori.nume}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="telefon" className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ink/60">
            Telefon (opțional)
          </label>
          <input
            id="telefon"
            name="telefon"
            type="tel"
            autoComplete="tel"
            aria-invalid={!!erori.telefon}
            aria-describedby={erori.telefon ? "telefon-eroare" : undefined}
            className="w-full rounded-sm border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-wine"
          />
          {erori.telefon && (
            <p id="telefon-eroare" className="mt-1.5 font-body text-xs text-wine">
              {erori.telefon}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ink/60">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={!!erori.email}
          aria-describedby={erori.email ? "email-eroare" : undefined}
          className="w-full rounded-sm border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-wine"
        />
        {erori.email && (
          <p id="email-eroare" className="mt-1.5 font-body text-xs text-wine">
            {erori.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviciu" className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ink/60">
          Serviciu de interes
        </label>
        <select
          id="serviciu"
          name="serviciu"
          className="w-full rounded-sm border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-wine"
        >
          {serviciiOptiuni.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mesaj" className="mb-2 block font-body text-xs uppercase tracking-widest2 text-ink/60">
          Mesajul tău
        </label>
        <textarea
          id="mesaj"
          name="mesaj"
          rows={4}
          required
          aria-invalid={!!erori.mesaj}
          aria-describedby={erori.mesaj ? "mesaj-eroare" : undefined}
          className="w-full resize-none rounded-sm border border-ink/15 bg-ivory px-4 py-3 font-body text-sm text-ink outline-none transition-colors focus:border-wine"
        />
        {erori.mesaj && (
          <p id="mesaj-eroare" className="mt-1.5 font-body text-xs text-wine">
            {erori.mesaj}
          </p>
        )}
      </div>

      <Button type="submit" variant="primary" className="mt-2 w-full sm:w-auto">
        Trimite mesajul
      </Button>
    </form>
  );
}
