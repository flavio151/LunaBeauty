import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.lunabeauty.ro";
  const rute = ["", "/servicii", "/despre-noi", "/galerie", "/contact"];

  return rute.map((ruta) => ({
    url: `${baseUrl}${ruta}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: ruta === "" ? 1 : 0.7,
  }));
}
