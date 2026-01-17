import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { getSiteSettings } from "@/config/site-server";

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

export async function generateMetadata(): Promise<Metadata> {
  const siteSettings = await getSiteSettings();
  const defaultTitle = `Therapy & Care Navigation in Bloomington, IN | ${siteSettings.name}`;
  const defaultDescription = siteSettings.tagline;

  return {
    metadataBase: new URL(siteSettings.baseUrl),
    title: {
      default: defaultTitle,
      template: `%s | ${siteSettings.name}`,
    },
    description: defaultDescription,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
    openGraph: {
      title: defaultTitle,
      description: defaultDescription,
      url: siteSettings.baseUrl,
      siteName: siteSettings.name,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: "/og.png",
          width: 1200,
          height: 630,
          alt: `${siteSettings.name} - Therapy in Bloomington, Indiana`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: defaultDescription,
      images: ["/og.png"],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased font-sans">
        <MotionProvider>
          <PageTransition>
            <PageShell>{children}</PageShell>
          </PageTransition>
        </MotionProvider>
      </body>
    </html>
  );
}
