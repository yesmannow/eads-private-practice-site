import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { siteConfig } from "@/config/site";

const title = `${siteConfig.name} | ${siteConfig.location}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: {
    default: title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.tagline,
  openGraph: {
    title,
    description: siteConfig.tagline,
    url: siteConfig.baseUrl,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
