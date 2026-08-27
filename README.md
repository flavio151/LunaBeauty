# Luna Beauty — website

Site pentru un salon de înfrumusețare fictiv, construit cu Next.js (App Router),
React, TypeScript și Tailwind CSS.

## Cum pornești proiectul

Ai nevoie de [Node.js](https://nodejs.org) (versiunea 18 sau mai nouă) instalat pe calculator.

```bash
npm install
npm run dev
```

Site-ul pornește la `http://localhost:3000`.

Pentru versiunea de producție:

```bash
npm run build
npm run start
```

## Structura proiectului

- `src/app/` — paginile (Home, Servicii, Despre noi, Galerie, Contact), fiecare într-un folder cu propriul `page.tsx`
- `src/components/layout/` — Navbar și Footer, comune tuturor paginilor
- `src/components/ui/` — piese mici reutilizabile (Button, Container, SectionHeading, CrescentDivider)
- `src/components/sections/` — blocurile mari de pe Home (Hero, Servicii, Despre, Galerie, Testimoniale, Program, Locație, CTA)
- `src/components/forms/` — formularul de contact, cu validare
- `src/data/` — tot conținutul editabil (servicii, prețuri, testimoniale, date de contact, program) — **aici modifici textele**, nu în componente
- `src/types/` — tipurile TypeScript folosite în tot proiectul

## Ce trebuie înlocuit înainte de lansare

1. **Imagini** — toate imaginile din site sunt placeholder-e generate (Picsum),
   cu un filtru de culoare aplicat ca să se potrivească cu paleta site-ului.
   Înlocuiește-le cu fotografii reale din salon:
   - caută `picsumUrl(` în `src/components/sections/` și `src/app/` pentru fiecare loc unde apare o imagine
   - cel mai simplu: pune fotografiile reale în `public/imagini/` și înlocuiește
     `src={picsumUrl("nume-seed", lățime, înălțime)}` cu `src="/imagini/numele-fotografiei.jpg"`

2. **Datele de contact** — în `src/data/site.ts`: telefon, email, adresă, Instagram, program.

3. **Harta Google Maps** — în `src/data/site.ts`, câmpul `mapsEmbedSrc`. Ca să
   generezi link-ul corect: caută adresa reală pe Google Maps → Share → Embed a map → copiază codul din `src="..."`.

4. **Prețuri și servicii** — în `src/data/servicii.ts`.

5. **Formularul de contact** — în acest moment, formularul validează datele
   dar nu le trimite nicăieri (doar arată un mesaj de confirmare). Ca să
   primești mesajele pe email, cea mai simplă soluție e un serviciu ca
   [Formspree](https://formspree.io) sau [Resend](https://resend.com) — sau
   un API route Next.js propriu (`src/app/api/contact/route.ts`), care
   trimite emailul prin serviciul ales. Locul exact de conectat e marcat cu
   un comentariu în `src/components/forms/ContactForm.tsx`.

6. **Domeniul din metadate** — în `src/app/layout.tsx`, `src/app/sitemap.ts`
   și `src/app/robots.ts` apare `https://www.lunabeauty.ro` — schimbă-l cu
   domeniul real, dacă diferă.

## Publicare

Cel mai simplu: [Vercel](https://vercel.com) (creat de aceeași echipă ca Next.js,
zero configurare) sau Netlify. Conectezi repository-ul GitHub și fiecare
modificare trimisă pe GitHub se publică automat.
