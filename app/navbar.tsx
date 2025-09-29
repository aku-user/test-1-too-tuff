"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="wrapper flex justify-between items-center px-4 py-3 relative bg-[#f5f5dc] text-black">
      {/* Logo */}
      <a className="logo font-bold" href="/">SEDULURGEN</a>

      {/* Tombol hamburger */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menu navigasi */}
      <div
        className={`
          flex flex-col md:flex-row gap-4 md:gap-6 
          absolute md:static top-14 left-0 w-full md:w-auto 
          md:bg-transparent z-50
          transition-all duration-300
          ${menuOpen ? "bg-[#f5f5dc] p-4" : "hidden md:flex"}
        `}
      >
        <a className="shit" href="/sejarah">Sejarah</a>
        <a className="shit" href="/nilai">Nilai</a>
        <a className="shit" href="/quiz">Quiz</a>
        <a className="shit" href="/about">About Us</a>
      </div>
    </div>
  );
}
