import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#FAF7F2",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ishamiaccents.rw"),
  title: "Ishami Accents | Curated Retail Home Decor & Lifestyle Accents (Kigali, Rwanda)",
  description:
    "Tactile, warm modern home decor, smart storage, and lifestyle accessories in Kigali, Rwanda. Delivered in 4 operating days (Mon, Tue, Fri, Sat). Sister brand to Ishami Interior Design & Decor Ltd.",
  keywords: [
    "Ishami Accents",
    "Home Decor Kigali",
    "Rwanda Home Accents",
    "Macrame Wall Hanging Kigali",
    "Storage Ottoman Kigali",
    "Table Runners Rwanda",
    "Kigali Interior Decor",
    "Ishami Design",
  ],
  authors: [{ name: "Ishami Accents" }],
  openGraph: {
    title: "Ishami Accents — Curated Home Decor & Lifestyle Boutique",
    description:
      "Thoughtfully curated accents for everyday spaces in Kigali. Instant WhatsApp ordering & fast 4-operating-day dispatch.",
    url: "https://ishamiaccents.rw",
    siteName: "Ishami Accents",
    images: [
      {
        url: "/images/products/macrame-wall-hanging-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Ishami Accents Home Decor Collection",
      },
    ],
    locale: "en_RW",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#FAF7F2] text-[#1E1B18] font-sans antialiased selection:bg-[#C86D51]/20 selection:text-[#1E1B18]">
        {children}
      </body>
    </html>
  );
}
