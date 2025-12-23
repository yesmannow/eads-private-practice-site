import { MetadataRoute } from "next";
import { site } from "@/config/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/start-here",
  "/services",
  "/approach",
  "/about",
  "/fees-faq",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${site.baseUrl}${route}`,
    lastModified,
  }));
}
