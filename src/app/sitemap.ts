import type { MetadataRoute } from "next";

const BASE_URL = "https://pierre.hsweb.pics";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    {
      url: `${BASE_URL}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/rooms`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/rooms?type=a`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/rooms?type=b`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
