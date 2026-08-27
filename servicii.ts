import { Serviciu } from "@/types";

export const servicii: Serviciu[] = [
  {
    slug: "ingrijire-faciala-clasica",
    categorie: "Îngrijire facială",
    nume: "Tratament facial clasic",
    descriere:
      "Curățare profundă, exfoliere și mască personalizată tipului tău de piele, pentru un ten luminos și hidratat.",
    pretDeLa: 220,
    durata: "60 min",
    imagine: "facial-1",
  },
  {
    slug: "ingrijire-faciala-anti-aging",
    categorie: "Îngrijire facială",
    nume: "Tratament anti-aging cu radiofrecvență",
    descriere:
      "Tehnologie non-invazivă care stimulează producția de colagen și redă fermitatea pielii.",
    pretDeLa: 350,
    durata: "75 min",
    imagine: "facial-2",
  },
  {
    slug: "manichiura-clasica",
    categorie: "Manichiură & Pedichiură",
    nume: "Manichiură cu gel",
    descriere:
      "Manichiură completă cu ojă semipermanentă, rezistentă până la 3 săptămâni.",
    pretDeLa: 120,
    durata: "50 min",
    imagine: "unghii-1",
  },
  {
    slug: "pedichiura-spa",
    categorie: "Manichiură & Pedichiură",
    nume: "Pedichiură spa",
    descriere:
      "Ritual complet de îngrijire a picioarelor, cu exfoliere, masaj și hidratare intensă.",
    pretDeLa: 150,
    durata: "60 min",
    imagine: "unghii-2",
  },
  {
    slug: "coafura-styling",
    categorie: "Coafură & Styling",
    nume: "Tuns și styling profesional",
    descriere:
      "Consultanță de imagine, tuns adaptat formei feței și styling pentru orice ocazie.",
    pretDeLa: 180,
    durata: "70 min",
    imagine: "coafura-1",
  },
  {
    slug: "coafura-evenimente",
    categorie: "Coafură & Styling",
    nume: "Coafură pentru evenimente",
    descriere:
      "Coafuri elegante pentru nunți, botezuri sau evenimente speciale, cu fixare de lungă durată.",
    pretDeLa: 280,
    durata: "90 min",
    imagine: "coafura-2",
  },
  {
    slug: "masaj-relaxare",
    categorie: "Masaj & Relaxare",
    nume: "Masaj de relaxare corp întreg",
    descriere:
      "Masaj terapeutic cu uleiuri esențiale, pentru eliberarea tensiunii acumulate.",
    pretDeLa: 250,
    durata: "60 min",
    imagine: "masaj-1",
  },
  {
    slug: "sprancene-gene",
    categorie: "Sprâncene & Gene",
    nume: "Design sprâncene & laminare gene",
    descriere:
      "Conturare, vopsire și laminare pentru o privire definită, fără machiaj zilnic.",
    pretDeLa: 160,
    durata: "45 min",
    imagine: "sprancene-1",
  },
  {
    slug: "machiaj-profesional",
    categorie: "Machiaj profesional",
    nume: "Machiaj pentru evenimente",
    descriere:
      "Machiaj de zi sau de seară, adaptat trăsăturilor tale, cu produse rezistente la fotografiere.",
    pretDeLa: 200,
    durata: "50 min",
    imagine: "machiaj-1",
  },
];

export const categoriiPrincipale = [
  {
    nume: "Îngrijire facială",
    descriere: "Tenul tău, îngrijit cu tehnici moderne și produse premium.",
    imagine: "facial-1",
    href: "/servicii#ingrijire-faciala",
  },
  {
    nume: "Manichiură & Pedichiură",
    descriere: "Unghii impecabile, de la clasic la cele mai noi tendințe.",
    imagine: "unghii-1",
    href: "/servicii#manichiura",
  },
  {
    nume: "Coafură & Styling",
    descriere: "De la tuns la coafuri de eveniment, pe orice tip de păr.",
    imagine: "coafura-1",
    href: "/servicii#coafura",
  },
  {
    nume: "Machiaj profesional",
    descriere: "Priviri și tenuri desăvârșite, pentru orice ocazie.",
    imagine: "machiaj-1",
    href: "/servicii#machiaj",
  },
];
