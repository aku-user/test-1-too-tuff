import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./navbar"; 
import Footer from "./footer"; 
import WhatsAppPopup from "./WhatsAppPopup";

export const metadata: Metadata = {
  title: "WE THE BEST DEVELOPER",
  description: "67",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
