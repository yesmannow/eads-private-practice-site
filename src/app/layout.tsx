import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PageShell } from "@/components/PageShell";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { PageTransition } from "@/components/motion/PageTransition";
import { site } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const defaultTitle = `Therapy & Care Navigation in Bloomington, IN | ${site.name}`;
const defaultDescription = "Evidence-informed therapy and care navigation services in Bloomington, Indiana. Licensed Social Worker (MA, LSW) providing telehealth across Indiana.";

export const metadata: Metadata = {
  metadataBase: new URL(site.baseUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
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
    url: site.baseUrl,
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${site.name} - Therapy in Bloomington, Indiana`,
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
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
