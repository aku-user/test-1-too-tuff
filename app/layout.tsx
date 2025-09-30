import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar";
import Footer from "./footer";
import WhatsAppPopup from "./WhatsAppPopup";

export const metadata: Metadata = {
  title: "Sedulur Gen",
  description: "Sedulur Gen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Sedulur Gen</title>
       {/* title gambar */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
        <link rel="icon" type="image/png" sizes="128x128" href="/favicon-128x128.png" />
        <link rel="icon" type="image/png" sizes="256x256" href="/favicon-256x256.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/favicon-512x512.png" />

        {/* SVG fallback */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        {/* Shortcut icon */}
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Apple / iOS  */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Manifest untuk PWA */}
        <link rel="manifest" href="/site.webmanifest" />

        {/* Windows tile */}
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
      </head>
      <body className="m-0 p-0">
        <Navbar />
        <main className="m-0 p-0">{children}</main>
        <Footer />
        <WhatsAppPopup />
      </body>
    </html>
  );
}
