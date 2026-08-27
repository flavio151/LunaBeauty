import { ImagineGalerie } from "@/types";

// Imagini placeholder (Picsum, generate din seed-uri fixe pentru consistență).
// Înlocuiește cu fotografii reale din salon înainte de lansare —
// vezi README.md, secțiunea „Imagini".
export const galerie: ImagineGalerie[] = [
  { src: "luna-facial-1", alt: "Tratament facial în cabina de tratamente", categorie: "facial" },
  { src: "luna-unghii-1", alt: "Manichiură cu ojă semipermanentă", categorie: "unghii" },
  { src: "luna-coafura-1", alt: "Styling profesional de păr", categorie: "coafura" },
  { src: "luna-interior-1", alt: "Recepția salonului Luna Beauty", categorie: "interior" },
  { src: "luna-machiaj-1", alt: "Machiaj profesional pentru eveniment", categorie: "machiaj" },
  { src: "luna-unghii-2", alt: "Pedichiură spa", categorie: "unghii" },
  { src: "luna-facial-2", alt: "Ritual de îngrijire a tenului", categorie: "facial" },
  { src: "luna-interior-2", alt: "Zona de relaxare din salon", categorie: "interior" },
];

export function picsumUrl(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}
