import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rdpinfo.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RDP Info — Product Engineering Studio | Live Streaming, HRMS, EdTech & Cloud",
    template: "%s | RDP Info",
  },
  description:
    "RDP Info is a senior product engineering studio. We build live streaming platforms, HRMS, EdTech test engines, mobile apps with deep linking, and AWS cloud infrastructure that scales to 60K+ concurrent users.",
  keywords: [
    "rdp info", "rdpinfo", "RDP Studio", "product engineering India",
    "live streaming platform development", "HRMS development", "EdTech platform",
    "mobile app deep linking", "Firebase Dynamic Links", "AWS cloud infrastructure",
    "Next.js development", "React Native", "Kubernetes EKS", "DevOps India",
    "software development agency India",
  ],
  authors: [{ name: "RDP Info", url: SITE_URL }],
  creator: "RDP Info",
  publisher: "RDP Info",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "RDP Info",
    title: "RDP Info — Product Engineering Studio",
    description:
      "Live streaming, HRMS, EdTech, mobile deep linking and AWS cloud infrastructure — shipped by a senior team in India.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "RDP Info — Product Engineering Studio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "RDP Info — Product Engineering Studio",
    description: "Live streaming, HRMS, EdTech, mobile apps & AWS cloud infrastructure.",
    images: ["/og-image.png"],
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
