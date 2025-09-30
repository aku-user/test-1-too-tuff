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
        {/* ✅ Google Site Verification */}
        <meta
          name="google-site-verification"
          content="PjOtfFTTAPlffeNFi6YrSEP5DK49wwTBQfX8NQp4wH0"
        />
      </head>
      <body className="m-0 p-0">
        <Navbar />
        <main className="m-0 p-0">{children}</main>
        <Footer />

        {/* ✅ taruh popup di dalam body */}
        <WhatsAppPopup />
      </body>
    </html>
  );
}
