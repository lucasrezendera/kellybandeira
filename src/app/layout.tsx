import type { Metadata } from "next";
import { Lato, Playfair_Display, Alex_Brush } from "next/font/google"; // Import Google Fonts
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SchemaOrg from "@/components/seo/SchemaOrg";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"], // ital is handled automatically or can be specified
  style: ['normal', 'italic'],
});

const alexBrush = Alex_Brush({
  variable: "--font-signature",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: {
    default: "Kelly Bandeira | Podóloga e Massoterapeuta em Campinas - SP",
    template: "%s | Kelly Bandeira - Campinas"
  },
  description: "Podóloga e Massoterapeuta especializada em Campinas. Tratamentos para unha encravada, pé diabético, massagem relaxante e terapêutica. Atendimento exclusivo no Cambuí. Agende sua consulta!",
  keywords: [
    "podóloga Campinas",
    "podologia Campinas",
    "massoterapeuta Campinas",
    "massoterapia Campinas",
    "unha encravada Campinas",
    "tratamento unha encravada",
    "pé diabético Campinas",
    "massagem relaxante Campinas",
    "massagem terapêutica Campinas",
    "drenagem linfática Campinas",
    "reflexologia podal Campinas",
    "podóloga Cambuí",
    "massoterapeuta Cambuí",
    "Kelly Bandeira podóloga",
    "cuidados com os pés Campinas"
  ],
  authors: [{ name: "Kelly Bandeira" }],
  creator: "Kelly Bandeira",
  publisher: "Kelly Bandeira - Podologia e Massoterapia",
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
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://kellybandeira.com.br",
    siteName: "Kelly Bandeira - Podologia e Massoterapia",
    title: "Kelly Bandeira | Podóloga e Massoterapeuta em Campinas",
    description: "Podóloga e Massoterapeuta especializada em Campinas. Tratamentos para unha encravada, pé diabético, massagem relaxante e terapêutica. Atendimento exclusivo no Cambuí.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kelly Bandeira - Podologia e Massoterapia em Campinas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kelly Bandeira | Podóloga e Massoterapeuta em Campinas",
    description: "Podóloga e Massoterapeuta especializada em Campinas. Tratamentos para unha encravada, pé diabético, massagem relaxante e terapêutica.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://kellybandeira.com.br",
  },
  category: "Saúde e Bem-estar",
  other: {
    "geo.region": "BR-SP",
    "geo.placename": "Campinas",
    "geo.position": "-22.9009;-47.0573",
    "ICBM": "-22.9009, -47.0573",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${lato.variable} ${playfair.variable} ${alexBrush.variable} antialiased`}
      >
        <SchemaOrg />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
