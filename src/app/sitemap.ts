import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/medical-technologies",
    "/solutions",
    "/products",
    "/research",
    "/resources",
    "/contact",
    "/privacy",
    "/terms",
  ];

  const currentDate = new Date();

  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: currentDate,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route === "/products" || route === "/medical-technologies" ? 0.9 : 0.8,
  }));
}
