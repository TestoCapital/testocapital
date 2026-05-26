import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://testocapital.es",
      lastModified: new Date(),
    },

    {
      url: "https://testocapital.es/login",
      lastModified: new Date(),
    },

    {
      url: "https://testocapital.es/register",
      lastModified: new Date(),
    },
  ];
}