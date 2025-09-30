"use client";

import Image from "next/image";

export default function WhatsAppPopup() {
  return (
    <a
      href="https://chat.whatsapp.com/JQqLhR7Wx8e5cABlcMW8He?mode=ems_copy_t/" // ganti nomor WA kamu
      target="_blank"
      rel="noopener noreferrer"
      className="popup-wa"
    >
      <Image
        src="/waigger.svg" // pastikan kamu punya file logo WA di /public
        alt="WhatsApp"
        width={24}
        height={24}
      />
      <span>Komunitas</span>
    </a>
  );
}
