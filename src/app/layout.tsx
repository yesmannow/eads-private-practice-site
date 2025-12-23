import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-libre-baskerville",
  display: "swap",
});

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
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased font-sans">
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
