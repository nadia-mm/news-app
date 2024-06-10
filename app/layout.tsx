import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavigationMenu from "./navbar/NavigationMenu";
import Footer from "./footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Fashion, Style, Grooming, Fitness, Entertainment, Lifestyle, News & Politics | Condé Nast",
  description:
    "Condé Nast is a global media company, home to iconic brands including Vogue, GQ, The New Yorker, Vanity Fair, Glamour and Wired.",
  openGraph: {
    title:
      "Fashion, Style, Grooming, Fitness, Entertainment, Lifestyle, News & Politics | Condé Nast",
    description:
      "Condé Nast is a global media company, home to iconic brands including Vogue, GQ, The New Yorker, Vanity Fair, Glamour and Wired.",
    url: "https://www.condenast.com/",
    type: "website",
    siteName: "Condé Nast Website",
    locale: "de_DE",
    images: [
      {
        url: "https://www.condenast.com/apple-touch-icon-114x114.png",
        secureUrl: "https://www.condenast.com/apple-touch-icon-114x114.png",
        width: 1200,
        height: 630,
        alt: "Condé Nast Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@condenast",
    title: "Condé Nast",
    description:
      "Condé Nast is a global media company, home to iconic brands including Vogue, GQ, The New Yorker, Vanity Fair, Glamour and Wired.",
    creator: "@condenast",
    images: {
      url: "https://x.com/CondeNast/photo",
      alt: "Condé Nast Logo",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <NavigationMenu />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
