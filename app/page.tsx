import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <main>
      <section className="secigger relative w-full h-screen">
        <Image
          className="brightness-53 object-cover"
          src="/SaminHome.jpg"
          alt="Samin"
          fill
          priority
        />
        <div className="judulContain absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <h1 className="judulHome text-5xl md:text-7xl">SEDULURGEN</h1>
          <h1 className="judulHome text-xl md:text-2xl kurunigger">(Sedulur Sikep For Z Generation)</h1>
          <h1 className="judulHome text-lg md:text-3xl mt-5">
            Website Edukasi Berbasis Nilai-Nilai Sedulur Sikep
          </h1>
          <h1 className="judulHome text-lg md:text-3xl kurunigger">
            sebagai Media Penguatan Karakter Generasi Z
          </h1>
          <a className="clickigger mt-5" href="/sejarah">
            ➤ MULAI BELAJAR
          </a>
        </div>
      </section>
    </main>
  );
}
