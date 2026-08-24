import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://rdpinfo.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mission JEET — Live Classes & Courses for JEE Main & Advanced",
    template: "%s | Mission JEET",
  },
  description:
    "Mission JEET offers daily live classes, expert mentorship, test series with All-India rank comparison, and curated study material for JEE Main & Advanced aspirants.",
  keywords: [
    // Brand
    "rdpinfo", "rdp info", "RDP Info studio", "RDP portfolio",

    // Live Streaming
    "live streaming platform development India",
    "OTT platform development company",
    "HLS DASH streaming development",
    "low latency live streaming solution",
    "EMQX live chat development",
    "video streaming app development India",
    "adaptive bitrate streaming developer",
    "live streaming software company India",
    "CDN live streaming development",

    // HRMS
    "HRMS development company India",
    "HR software development India",
    "human resource management system development",
    "attendance management software development",
    "payroll software development India",
    "HRMS SaaS platform development",
    "employee management system development",
    "HR tech development company",

    // EdTech / Test Series
    "test series platform development India",
    "online exam platform development",
    "EdTech platform development company India",
    "online test engine development",
    "adaptive test platform development",
    "exam preparation platform development",
    "e-learning platform development India",
    "education technology development company",

    // Mobile Apps
    "React Native app development India",
    "iOS Android app development company India",
    "Firebase Dynamic Links developer",
    "mobile deep linking development",
    "Universal Links App Links developer",
    "deferred deep linking mobile apps",
    "mobile app development India",
    "cross-platform app development India",

    // Cloud / DevOps / AWS
    "AWS DevOps company India",
    "Kubernetes EKS development India",
    "cloud infrastructure development India",
    "Terraform infrastructure as code India",
    "AWS cloud architecture India",
    "DevOps consulting India",
    "CloudFront CDN setup India",
    "Route53 DNS management",
    "ALB load balancer configuration",
    "CI/CD pipeline development India",
    "zero downtime deployment India",

    // Web / SEO
    "Next.js development company India",
    "NestJS backend development India",
    "website development India",
    "SEO website development India",
    "Core Web Vitals optimization",

    // Analytics
    "Grafana Prometheus monitoring setup",
    "product analytics dashboard development",

    // General
    "software development agency India",
    "product engineering company India",
    "full stack development company India",
    "startup product development India",
  ],
  authors: [{ name: "Mission JEET", url: SITE_URL }],
  creator: "Mission JEET",
  publisher: "Mission JEET",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: "Mission JEET",
    title: "Mission JEET — Live Classes & Courses for JEE Main & Advanced",
    description:
      "Daily live classes, expert mentorship, test series with All-India rank comparison, and curated study material for JEE aspirants.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mission JEET — Live Classes & Courses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mission JEET — Live Classes & Courses for JEE Main & Advanced",
    description:
      "Daily live classes, mentorship, test series and study material for JEE Main & Advanced aspirants.",
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
