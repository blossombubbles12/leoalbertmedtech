import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0A192F",
    theme_color: "#0A192F",
    icons: [
      {
        src: "/logoicon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
