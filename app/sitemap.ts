import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // On utilise ton URL Vercel par défaut pour l'instant
  const baseUrl = "https://nova-ent-website.vercel.app/";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1, // Page la plus importante
    },
    {
      url: `${baseUrl}/musee-virtuel`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8, // Page très importante
    },
    // On ajoutera ici les futures pages (ex: /musee-virtuel/artefact-1)
  ];
}
