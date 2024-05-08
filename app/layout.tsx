import type { Metadata } from "next";
import { Familjen_Grotesk } from "next/font/google";
import "./globals.css";

const familjen = Familjen_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Prise Un - Photos et vidéos pour entreprises",
  description:
    "Agence de production photo et vidéo pour entreprises de tous genres",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={familjen.className}>{children}</body>
    </html>
  );
}
