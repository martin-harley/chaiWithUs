import type { Metadata } from "next";
import { IM_Fell_DW_Pica } from "next/font/google";
import "./globals.css";

const imFell = IM_Fell_DW_Pica({
  weight: ["400"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-im-fell",
});

export const metadata: Metadata = {
  title: "Chai With Us | For the Community, By the Community",
  description: "Rooted in tradition, crafted for the modern palate. Experience the warmth of heritage in every aromatic sip.",
  openGraph: {
    images: [
      {
        url: "/cwu_logo%20_expanded.JPEG",
        width: 1200,
        height: 630,
        alt: "Chai With Us Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/cwu_logo%20_expanded.JPEG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`light ${imFell.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
        <div className="grainy-overlay"></div>
        {children}
      </body>
    </html>
  );
}
