import { ZiProgram } from "@/types";

export const site = {
  nume: "Luna Beauty",
  tagline: "Frumusețea ta, în ritmul tău",
  descriere:
    "Salon de înfrumusețare în București, specializat în îngrijire facială, unghii, coafură și machiaj profesional.",
  telefon: "+40 721 234 567",
  telefonHref: "tel:+40721234567",
  email: "contact@lunabeauty.ro",
  adresa: "Str. Primăverii nr. 22, Sector 1, București",
  instagram: "@lunabeauty.ro",
  instagramHref: "https://instagram.com/lunabeauty.ro",
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.995!2d26.0850!3d44.4600!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI3JzM2LjAiTiAyNsKwMDUnMDYuMCJF!5e0!3m2!1sro!2sro!4v1700000000000",
  bookingHref: "/#contact",
};

export const program: ZiProgram[] = [
  { zi: "Luni – Vineri", interval: "09:00 – 20:00" },
  { zi: "Sâmbătă", interval: "10:00 – 16:00" },
  { zi: "Duminică", interval: "Închis" },
];
