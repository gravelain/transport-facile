import type { MetadataRoute } from "next";
import { BASE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BASE_URL;

  return [
    {
      url: `${base}/fr`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];
}
