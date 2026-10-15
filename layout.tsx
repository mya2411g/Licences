import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-bricolage", weight: ["700", "800"] });
const plex = IBM_Plex_Sans({ subsets: ["latin"], variable: "--font-plex", weight: ["400", "500", "600"] });

const titre = "Les logiciels que votre entreprise paie et que personne n'utilise";
const description = "Licences repère les comptes oubliés et les doublons dans vos abonnements. Audit sous 5 jours, satisfait ou remboursé 30 jours.";

export const metadata: Metadata = {
  title: titre,
  description,
  openGraph: { title: titre, description, locale: "fr_FR", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${bricolage.variable} ${plex.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
