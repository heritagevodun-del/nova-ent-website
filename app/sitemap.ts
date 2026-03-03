import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Le nouveau domaine officiel souverain de l'agence
  const baseUrl = "https://nova-ent.agency";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0, // La vitrine principale, priorité absolue
    },
    {
      url: `${baseUrl}/a-propos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9, // Le storytelling pour rassurer les grands comptes
    },
    {
      url: `${baseUrl}/musee-virtuel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8, // L'entrée du métavers
    },
    {
      url: `${baseUrl}/musee-virtuel/masque-quantique`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7, // Démonstration technique 3D
    },
    {
      url: `${baseUrl}/musee-virtuel/artefact-1`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7, // Démonstration technique 3D
    },
  ];
}
