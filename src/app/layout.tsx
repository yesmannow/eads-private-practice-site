import type { Metadata } from "next";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { site } from "@/config/site";

const title = `${site.name} | ${site.locationShort}`;

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description: site.tagline,
  openGraph: {
    title,
    description: site.tagline,
    url: site.baseUrl,
    siteName: site.name,
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
