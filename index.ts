export interface Serviciu {
  slug: string;
  categorie: string;
  nume: string;
  descriere: string;
  pretDeLa: number;
  durata: string;
  imagine: string;
}

export interface Testimonial {
  nume: string;
  rol: string;
  text: string;
  rating: number;
}

export interface ImagineGalerie {
  src: string;
  alt: string;
  categorie: "facial" | "unghii" | "coafura" | "machiaj" | "interior";
}

export interface ZiProgram {
  zi: string;
  interval: string;
}
